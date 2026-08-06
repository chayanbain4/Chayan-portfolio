import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = Number(process.env.PORT || 4173)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, '../dist')

app.disable('x-powered-by')
app.use(express.json({ limit: '50kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Too many messages from this connection. Please try again later.' },
})

const cleanText = (value, maxLength) => String(value || '').trim().slice(0, maxLength)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const escapeHtml = (value) =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;',
  })[character])

app.post('/api/contact', contactLimiter, async (request, response) => {
  const name = cleanText(request.body?.name, 80)
  const email = cleanText(request.body?.email, 160).toLowerCase()
  const projectType = cleanText(request.body?.projectType, 80)
  const message = cleanText(request.body?.message, 3000)
  const honeypot = cleanText(request.body?.company, 100)

  if (honeypot) {
    return response.status(200).json({ ok: true })
  }

  if (name.length < 2 || !emailPattern.test(email) || message.length < 20) {
    return response.status(400).json({ message: 'Enter a valid name, email and project description.' })
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const recipient = process.env.CONTACT_TO || smtpUser

  if (!smtpUser || !smtpPass || !recipient) {
    return response.status(503).json({
      message: 'Email delivery is not configured on the server yet. Use the direct email link instead.',
    })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeProjectType = escapeHtml(projectType || 'Not specified')
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

  try {
    await transporter.sendMail({
      from: `"Chayan Portfolio" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio enquiry: ${projectType || 'New project'} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || 'Not specified'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#18261c">
          <div style="background:#15803d;color:white;padding:24px 28px;border-radius:18px 18px 0 0">
            <div style="font-size:12px;letter-spacing:1.6px;opacity:.75">CHAYAN PORTFOLIO</div>
            <h1 style="font-size:26px;margin:8px 0 0">New project enquiry</h1>
          </div>
          <div style="border:1px solid #dfead9;border-top:0;padding:28px;border-radius:0 0 18px 18px">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Project type:</strong> ${safeProjectType}</p>
            <div style="height:1px;background:#dfead9;margin:24px 0"></div>
            <p style="line-height:1.7">${safeMessage}</p>
          </div>
        </div>
      `,
    })

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email failed:', error instanceof Error ? error.message : error)
    return response.status(500).json({ message: 'Email delivery failed. Please use the direct email link.' })
  }
})

app.use(express.static(distPath))
app.get('*', (_request, response) => {
  response.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`)
})
