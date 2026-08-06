# Chayan — Modern Developer Portfolio

A React + Vite portfolio with a stable animation system and a secure server-side contact form.

## What is included

- GSAP opening animation retained
- Animated hero with fixed layout height, so role changes do not move the page
- Native browser scrolling instead of Lenis/GSAP smooth-scroll coupling
- Stable fixed navigation without absolute-to-fixed position switching
- About, expertise, selected work, experience, stack, process and contact sections
- Responsive mobile navigation
- Contact form using Express + Nodemailer + Gmail SMTP
- Rate limiting, validation and a spam honeypot
- Production `dist` build

## Install

```bash
npm install
```

## Configure email safely

Run the secure setup command:

```bash
npm run setup:email
```

It asks for a fresh Gmail App Password without displaying it and creates a private `.env` file with restricted permissions.

The app password is deliberately not included in this project. Putting it in React code or a public ZIP would expose the Gmail account.

The server always sends from the authenticated Gmail account. The visitor's email is assigned to `Reply-To`, which is the correct way to make replies go directly to the visitor without spoofing their address.

## Run frontend and email server together

```bash
npm run dev:full
```

Frontend normally opens at:

```text
http://localhost:5173
```

The contact API runs at:

```text
http://localhost:4173
```

## Production

```bash
npm run build
npm start
```

The Node server serves both the production frontend and `/api/contact` from port `4173`.

## Edit portfolio content

```text
src/data/portfolioData.js
```
