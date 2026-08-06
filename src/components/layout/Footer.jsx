import { navItems, profile } from '../../data/portfolioData'
import useReveal from '../../hooks/useReveal'

const Footer = () => {
  const footerRef = useReveal([
    { selector: '.footer-brand', x: -40, y: 0, start: 'top 96%', duration: 0.72 },
    { selector: '.footer-links', y: 28, scale: 0.94, start: 'top 96%', duration: 0.72 },
    { selector: '.footer-inner > p', x: 40, y: 0, start: 'top 96%', duration: 0.72 },
  ])

  return (
    <footer className="footer" ref={footerRef}>
      <div className="section-shell footer-inner">
        <a className="footer-brand" href="#top">{profile.name}</a>
        <div className="footer-links">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
