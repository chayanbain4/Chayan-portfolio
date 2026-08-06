import useReveal from '../../hooks/useReveal'
import { capabilities } from '../../data/portfolioData'

const Expertise = () => {
  const sectionRef = useReveal([
    { selector: '.section-shell', y: 72, scale: 0.99, blur: 3, duration: 1.05, start: 'top 91%' },
    { selector: '.expertise-header > *', y: 45, stagger: 0.1 },
    { selector: '.capability-card:nth-child(odd)', x: -70, y: 0, rotateY: -7, duration: 0.9, start: 'top 88%', each: true },
    { selector: '.capability-card:nth-child(even)', x: 70, y: 0, rotateY: 7, duration: 0.9, start: 'top 88%', each: true },
  ])
  return (
    <section className="section expertise-section" id="expertise" ref={sectionRef}>
      <div className="section-shell">
        <div className="expertise-header">
          <div className="section-topline light"><p>Expertise</p><i /></div>
          <h2>One developer.<br /><span>Multiple layers owned.</span></h2>
          <p>Good software breaks when responsibility is fragmented. I work across the stack so the product behaves like one system.</p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <div className="capability-top">
                <strong>{capability.symbol}</strong>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <div className="capability-stack">
                {capability.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
