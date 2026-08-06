const experienceBaseline = {
  year: 2026,
  month: 7,
  value: 1.5,
}

export const getExperienceYears = (date = new Date()) => {
  const elapsedMonths = Math.max(
    0,
    (date.getFullYear() - experienceBaseline.year) * 12 + date.getMonth() - experienceBaseline.month,
  )

  return `${(experienceBaseline.value + elapsedMonths * 0.1).toFixed(1)}+`
}

export const profile = {
  name: 'Chayan',
  role: 'Software Developer',
  location: 'Kolkata, India',
  experience: `${getExperienceYears()} years`,
  availability: 'Available for serious product work',
  email: 'chayanbain8@gmail.com',
  intro:
    'I build dependable web platforms, mobile apps and automation systems for real operational workflows.',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const roles = [
  {
    id: 'web',
    short: 'WEB',
    eyebrow: 'Full-stack engineering',
    title: ['Modern web products,', 'built end to end.'],
    body: 'React and Next.js interfaces backed by production APIs, databases, authentication, payments, dashboards and deployment infrastructure.',
    accent: '#fbbf24',
  },
  {
    id: 'mobile',
    short: 'APP',
    eyebrow: 'Mobile development',
    title: ['Fast mobile apps,', 'without fragile shortcuts.'],
    body: 'Cross-platform Android experiences using React Native and Expo, designed around real user flows and reliable API integration.',
    accent: '#fb923c',
  },
  {
    id: 'automation',
    short: 'AUTO',
    eyebrow: 'AI and automation',
    title: ['Automated workflows,', 'with human control.'],
    body: 'AI integrations, browser automation, workflow engines and operational tooling using Python, Playwright, Selenium and modern LLM APIs.',
    accent: '#fde68a',
  },
]

export const tickerItems = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'React Native',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AI Integrations',
  'Automation',
]

export const principles = [
  {
    value: '01',
    title: 'Product thinking',
    text: 'I begin with the business outcome, user journey and failure cases, then shape the right interface and system.',
  },
  {
    value: '02',
    title: 'Full ownership',
    text: 'Frontend, backend, database, deployment and debugging are treated as one connected system.',
  },
  {
    value: '03',
    title: 'Useful automation',
    text: 'Automation should remove repetitive work without hiding risk or taking control away from people.',
  },
]

export const capabilities = [
  {
    number: '01',
    title: 'Web Platforms',
    text: 'Responsive interfaces, admin systems, SaaS dashboards, APIs, authentication and real-time workflows.',
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    symbol: '</>',
  },
  {
    number: '02',
    title: 'Mobile Apps',
    text: 'Android-first and cross-platform applications with clean navigation, API integration and scalable state.',
    stack: ['React Native', 'Expo', 'Android', 'REST APIs'],
    symbol: 'APP',
  },
  {
    number: '03',
    title: 'AI Systems',
    text: 'LLM-powered assistants, qualification flows, knowledge workflows and practical AI product features.',
    stack: ['LLM APIs', 'RAG', 'Prompt Systems', 'Agents'],
    symbol: 'AI',
  },
  {
    number: '04',
    title: 'Automation & DevOps',
    text: 'Browser automation, background jobs, Docker deployments, Nginx routing and production issue resolution.',
    stack: ['Python', 'Playwright', 'Docker', 'Linux'],
    symbol: 'OPS',
  },
]

export const projects = [
  {
    number: '01',
    name: 'Enterprise AI Intelligence Platform & Proprietary LLM',
    category: 'Enterprise AI / LLM',
    description:
      'ASWAM OS is an enterprise intelligence platform with DeepSeek-powered reasoning APIs, a 40+ engine analytics layer and a proprietary transformer model trained from scratch.',
    contribution:
      'Built reasoning API endpoints, integrated the LLM provider, developed the analytics architecture and trained a transformer model with about 5.3M parameters and loss near 0.197.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'DeepSeek', 'Next.js'],
    tone: 'gold',
  },
  {
    number: '02',
    name: 'Encrypted Chat App',
    category: 'Real-Time Communication',
    description:
      'A real-time messaging application with end-to-end 256-bit encryption so messages remain readable only by the sender and recipient.',
    contribution:
      'Implemented Socket.IO live chat, JWT authentication, encrypted message handling, message history and online presence indicators.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    tone: 'green',
    link: 'https://github.com/chayanbain4/Encrypted-Chat',
  },
  {
    number: '03',
    name: 'Task Management System',
    category: 'Web + Mobile Productivity',
    description:
      'A full-stack task management platform with Kanban boards, role-based access, task assignment, deadline tracking and real-time progress updates.',
    contribution:
      'Built the Flutter mobile app, Next.js web application, secure JWT refresh-token flow and PostgreSQL data layer using Prisma ORM.',
    stack: ['Flutter', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT'],
    tone: 'rust',
    link: 'https://github.com/chayanbain4/task-management-system',
  },
  {
    number: '04',
    name: 'Social Media Scheduler',
    category: 'Content Automation',
    description:
      'A Buffer-style social media management tool for planning, scheduling and publishing posts across multiple platforms from one dashboard.',
    contribution:
      'Created the content calendar, post preview workflow, scheduling queue and engagement tracking dashboard with a complete MERN architecture.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    tone: 'dark',
  },
  {
    number: '05',
    name: 'Email Validator Desktop App',
    category: 'Desktop Verification Tool',
    description:
      'A desktop application that determines whether email addresses are valid using multiple verification layers rather than relying on syntax alone.',
    contribution:
      'Built the PyQt interface and FastAPI backend with syntax validation, DNS and MX checks, WHOIS lookup and SMTP handshake testing.',
    stack: ['Python', 'PyQt', 'FastAPI', 'MX Records', 'WHOIS', 'SMTP'],
    tone: 'green',
  },
  {
    number: '06',
    name: 'CRM Android App',
    category: 'Mobile Business Software',
    description:
      'A custom Android CRM inspired by Zoho CRM, covering leads, contacts, products, invoices, sales pipelines and business reporting.',
    contribution:
      'Developed the React Native Android application and integrated it with Node.js, Express and MongoDB backend services.',
    stack: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Android'],
    tone: 'rust',
  },
  {
    number: '07',
    name: 'eSign Website',
    category: 'Digital Document Platform',
    description:
      'A secure digital-signature platform where users can upload or create documents and complete legally binding multi-party signing workflows.',
    contribution:
      'Built document creation and upload flows, digital signature placement, multi-party signing, document management and secure storage.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Digital Signature'],
    tone: 'gold',
  },
]

export const experience = [
  {
    period: 'Current',
    role: 'Software Developer',
    company: 'Product and client projects',
    summary:
      'Building and maintaining production web, mobile, CRM, automation and AI-enabled products for real business operations.',
    points: [
      'Own features across UI, APIs, databases and deployment.',
      'Debug live systems on Linux, Docker, PM2 and Nginx.',
      'Translate business workflows into usable software.',
    ],
  },
  {
    period: 'Foundation',
    role: 'Independent Product Builds',
    company: 'Web, mobile and automation projects',
    summary:
      'Developed practical applications while strengthening full-stack engineering, mobile development and Python automation skills.',
    points: [
      'Built React, MERN and React Native projects.',
      'Integrated APIs, authentication and databases.',
      'Moved from isolated coding tasks to complete product delivery.',
    ],
  },
]

export const stackGroups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Framer Motion'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', 'FastAPI', 'REST APIs', 'Prisma'],
  },
  {
    label: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Nginx', 'PM2', 'Linux'],
  },
  {
    label: 'Mobile & Automation',
    items: ['React Native', 'Expo', 'Android', 'Python', 'Playwright', 'Selenium', 'AI APIs'],
  },
]

export const process = [
  {
    number: '01',
    title: 'Cut through the noise',
    text: 'Define the real business outcome, constraints, users and failure points before writing code.',
  },
  {
    number: '02',
    title: 'Build the smallest solid system',
    text: 'Ship a focused vertical slice with an architecture that can grow with the product and its users.',
  },
  {
    number: '03',
    title: 'Test it under pressure',
    text: 'Validate edge cases, deployment behaviour, permissions and operational recovery before calling it done.',
  },
]
