import { useState } from 'react'
import { profile } from '../../data/portfolioData'
import Icon from '../ui/Icon'
import useReveal from '../../hooks/useReveal'

const initialForm = {
  name: '',
  email: '',
  projectType: 'Web platform',
  message: '',
  company: '',
}

const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim()
  || 'https://email-backend-254.vercel.app/api/contact'

const Contact = () => {
  const sectionRef = useReveal([
    { selector: '.section-shell', y: 72, scale: 0.99, blur: 3, duration: 1.05, start: 'top 91%' },
    { selector: '.contact-copy > *', x: -55, y: 0, stagger: 0.11, duration: 0.9 },
    { selector: '.contact-panel-top', scale: 0.9, y: 0, start: 'top 88%', duration: 0.72 },
    { selector: '.contact-form-grid > label:not(.contact-honeypot)', x: 52, y: 0, stagger: 0.1, start: 'top 88%' },
    { selector: '.contact-submit, .contact-status', y: 34, scale: 0.94, stagger: 0.09, start: 'top 92%' },
  ])
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitForm = async (event) => {
    event.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 20) {
      setStatus({ type: 'error', message: 'Please enter your name, a valid email and at least 20 characters about the project.' })
      return
    }

    setStatus({ type: 'sending', message: 'Sending your message…' })

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'The message could not be sent.')
      }

      setForm(initialForm)
      setStatus({ type: 'success', message: 'Message sent. I will reply to the email you entered.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'The message could not be sent.',
      })
    }
  }

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <span className="contact-kicker">Contact</span>
          <h2>Have a real problem<br /><em>worth solving?</em></h2>
          <p>
            Share the workflow, constraints and business goal. I will help shape them into a focused, buildable product with clear technical decisions.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Email me directly
              <Icon name="arrowUp" size={18} />
            </a>
            <div className="contact-direct">
              <span>Direct email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </div>

        <form className="contact-panel contact-form" onSubmit={submitForm} noValidate>
          <div className="contact-panel-top">
            <span>PROJECT ENQUIRY</span>
          </div>

          <div className="contact-form-grid">
            <label>
              <span>Your name</span>
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                autoComplete="name"
                minLength="2"
                maxLength="80"
                required
                placeholder="Enter your name"
              />
            </label>

            <label>
              <span>Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                autoComplete="email"
                maxLength="160"
                required
                placeholder="you@example.com"
              />
            </label>

            <label className="contact-form-full">
              <span>Project type</span>
              <select name="projectType" value={form.projectType} onChange={updateField}>
                <option>Web platform</option>
                <option>Mobile app</option>
                <option>AI workflow</option>
                <option>Automation system</option>
                <option>Other</option>
              </select>
            </label>

            <label className="contact-form-full">
              <span>What are you building?</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                minLength="20"
                maxLength="3000"
                required
                rows="6"
                placeholder="Describe the problem, users, deadline and current blockers."
              />
            </label>

            <label className="contact-honeypot" aria-hidden="true">
              Company
              <input name="company" value={form.company} onChange={updateField} tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <button className="contact-submit" type="submit" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Sending…' : 'Send project enquiry'}
            <Icon name="arrowUp" size={18} />
          </button>

          <p className={`contact-status is-${status.type}`} role="status" aria-live="polite">
            {status.message || 'I usually respond within two business days.'}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
