import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../layout/Navbar'
import Icon from '../ui/Icon'
import { profile, roles } from '../../data/portfolioData'

const MotionDiv = motion.div

const heroCode = {
  web: {
    workspace: 'Web product system',
    file: 'platform.ts',
    variable: 'platform',
    values: [
      ['interface', 'responsive'],
      ['api', 'reliable'],
      ['release', 'production'],
    ],
    action: 'deploy(platform)',
  },
  mobile: {
    workspace: 'Mobile product system',
    file: 'mobile-app.ts',
    variable: 'mobileApp',
    values: [
      ['platform', 'cross-platform'],
      ['flows', 'native'],
      ['release', 'store-ready'],
    ],
    action: 'ship(mobileApp)',
  },
  automation: {
    workspace: 'Automation system',
    file: 'workflow-engine.ts',
    variable: 'workflow',
    values: [
      ['trigger', 'operational'],
      ['control', 'human'],
      ['outcome', 'repeatable'],
    ],
    action: 'run(workflow)',
  },
}

const HeroVisual = ({ activeRole }) => {
  const code = heroCode[activeRole.id]

  return (
  <div className="hero-visual" aria-hidden="true">
    <MotionDiv
      className="code-window-shell"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
    >
      <div className="code-window">
        <div className="code-window-top">
          <span>{code.workspace}</span>
          <span>{code.file}</span>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <MotionDiv
            className="code-lines"
            key={activeRole.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
          >
            <span><b>const</b> {code.variable} = {'{'}</span>
            {code.values.map(([key, value], index) => (
              <span key={key}>&nbsp;&nbsp;{key}: <em>'{value}'{index < code.values.length - 1 ? ',' : ''}</em></span>
            ))}
            <span>{'}'}</span>
            <span className="code-run">{code.action}<span className="code-cursor" /></span>
          </MotionDiv>
        </AnimatePresence>
      </div>
    </MotionDiv>

  </div>
  )
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRole = roles[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % roles.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero-section" id="top">
      <Navbar />
      <div className="hero-grain" />

      <div className="hero-inner">
        <div className="hero-copy">
          <MotionDiv
            className="availability-pill"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {profile.availability}
          </MotionDiv>

          <div className="hero-role-stage">
            <div className="hero-role-measure" aria-hidden="true">
              {roles.map((role) => (
                <div className="hero-role-sizer" key={`measure-${role.id}`}>
                  <p className="hero-eyebrow">{role.eyebrow}</p>
                  <h1>{role.title[0]}<br /><span>{role.title[1]}</span></h1>
                  <p className="hero-description">{role.body}</p>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <MotionDiv
                className="hero-role-content"
                key={activeRole.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.38 }}
              >
                <p className="hero-eyebrow">{activeRole.eyebrow}</p>
                <h1>{activeRole.title[0]}<br /><span>{activeRole.title[1]}</span></h1>
                <p className="hero-description">{activeRole.body}</p>
              </MotionDiv>
            </AnimatePresence>
          </div>

          <div className="hero-actions">
            <a className="button button-light" href="#work">
              View selected work
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button-dark" href="#contact">
              Discuss a project
              <Icon name="arrowUp" size={17} />
            </a>
          </div>

          <div className="role-switcher" aria-label="Portfolio focus">
            {roles.map((role, index) => (
              <button
                type="button"
                key={role.id}
                className={index === activeIndex ? 'is-active' : ''}
                onClick={() => setActiveIndex(index)}
              >
                <span>{role.short}</span>
                <i />
              </button>
            ))}
          </div>
        </div>

        <HeroVisual activeRole={activeRole} />
      </div>

      <div className="hero-meta">
        <div><Icon name="location" size={17} /><span>{profile.location}</span></div>
        <div><Icon name="briefcase" size={17} /><span>{profile.experience} experience</span></div>
        <div className="hero-scroll"><span>Scroll to inspect</span><i /></div>
      </div>

      <svg className="hero-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 72C180 26 320 95 520 58c215-40 315-47 510-4 188 41 286 11 410-24v80H0Z" fill="var(--cream)" />
      </svg>
    </section>
  )
}

export default Hero
