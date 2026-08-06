import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../../data/portfolioData'
import Icon from '../ui/Icon'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const frame = useRef(null)

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0)
      const distance = currentScrollY - lastScrollY.current

      setScrolled(currentScrollY > 24)

      if (open || currentScrollY < 80) {
        setHidden(false)
        lastScrollY.current = currentScrollY
      } else if (distance > 14) {
        setHidden(true)
        lastScrollY.current = currentScrollY
      } else if (distance < -14) {
        setHidden(false)
        lastScrollY.current = currentScrollY
      }

      frame.current = null
    }

    const onScroll = () => {
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(updateHeader)
      }
    }

    lastScrollY.current = window.scrollY
    updateHeader()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame.current !== null) window.cancelAnimationFrame(frame.current)
    }
  }, [open])

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
      <a className="brand-mark" href="#top" aria-label={`${profile.name} home`}>
        <span>{profile.name}</span>
      </a>

      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Start a project
          <Icon name="arrowUp" size={16} />
        </a>
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? 'close' : 'menu'} size={22} />
      </button>

      <svg className="nav-wave" viewBox="0 0 1440 34" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0h1440v9c-152 25-280-6-446 8-181 15-314 19-490 2C326 2 174 28 0 13Z" />
      </svg>
    </header>
  )
}

export default Navbar
