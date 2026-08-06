import useReveal from '../../hooks/useReveal'
import { principles, profile } from '../../data/portfolioData'

const About = () => {
  const sectionRef = useReveal([
    { selector: '.section-shell', y: 72, scale: 0.99, blur: 3, duration: 1.05, start: 'top 91%' },
    { selector: '.about-label', x: -40, duration: 0.7 },
    { selector: '.about-heading', y: 45, rotateX: 16, scale: 0.96, duration: 1 },
    { selector: '.about-copy > *', x: 48, y: 0, stagger: 0.12, duration: 0.82 },
    { selector: '.principle-card', y: 30, scale: 0.93, duration: 0.78, start: 'top 88%', each: true },
  ])

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="section-shell">
        <div className="section-topline about-label">
          <p>Profile</p><i />
        </div>

        <div className="about-grid">
          <h2 className="about-heading">
            I turn messy operations into <span>clear, usable products.</span>
          </h2>
          <div className="about-copy">
            <p>{profile.intro}</p>
            <p>
              My strongest work sits at the intersection of engineering and operations: systems teams use every day, designed for clarity, reliability and measurable outcomes.
            </p>
          </div>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.value}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
