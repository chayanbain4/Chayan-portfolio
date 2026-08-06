import { process } from '../../data/portfolioData'
import useReveal from '../../hooks/useReveal'

const Process = () => {
  const sectionRef = useReveal([
    { selector: '.section-shell', y: 72, scale: 0.99, blur: 3, duration: 1.05, start: 'top 91%' },
    { selector: '.process-heading .section-topline', x: -55, y: 0, duration: 0.72 },
    { selector: '.process-heading h2', x: 60, y: 0, duration: 0.95 },
    { selector: '.process-card:nth-child(1)', x: -65, y: 0, rotateY: -8, duration: 0.88, start: 'top 88%', each: true },
    { selector: '.process-card:nth-child(2)', y: 70, scale: 0.92, duration: 0.88, start: 'top 88%', each: true },
    { selector: '.process-card:nth-child(3)', x: 65, y: 0, rotateY: 8, duration: 0.88, start: 'top 88%', each: true },
  ])

  return (
    <section className="section process-section" ref={sectionRef}>
      <div className="section-shell">
        <div className="process-heading">
          <div className="section-topline"><p>How I build</p><i /></div>
          <h2>Less theatre.<br /><span>More useful output.</span></h2>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article className="process-card" key={item.number}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
