import { experience, getExperienceYears, stackGroups } from '../../data/portfolioData'
import Icon from '../ui/Icon'
import useReveal from '../../hooks/useReveal'

const Experience = () => {
  const sectionRef = useReveal([
    { selector: '.section-shell', y: 72, scale: 0.99, blur: 3, duration: 1.05, start: 'top 91%' },
    { selector: '.experience-title .section-topline', x: -50, y: 0, duration: 0.72 },
    { selector: '.experience-title h2', y: 55, rotateX: 12, duration: 1 },
    { selector: '.timeline-item', x: -72, y: 0, duration: 0.9, start: 'top 88%', each: true },
    { selector: '.experience-side > *', x: 58, y: 0, scale: 0.94, stagger: 0.16, start: 'top 82%' },
    { selector: '.stack-panel-heading > *', x: -38, y: 0, stagger: 0.1, start: 'top 86%' },
    { selector: '.stack-group', y: 38, rotateX: -10, duration: 0.82, start: 'top 90%', each: true },
  ])

  return (
    <section className="section experience-section" id="experience" ref={sectionRef}>
      <div className="section-shell">
        <div className="experience-title">
          <div className="section-topline light"><p>Experience</p><i /></div>
          <h2>Built through delivery,<br /><span>not certificates.</span></h2>
        </div>

        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{item.period}</span><i>{item.company}</i></div>
                  <h3>{item.role}</h3>
                  <p>{item.summary}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}><Icon name="check" size={16} />{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <aside className="experience-side">
            <div className="experience-stat">
              <strong>{getExperienceYears()}</strong>
              <span>years working across product, engineering and deployment</span>
            </div>
            <div className="experience-quote">
              <span>Working rule</span>
              <p>“A feature is not finished when it works on my machine. It is finished when the user can rely on it.”</p>
            </div>
          </aside>
        </div>

        <div className="stack-panel">
          <div className="stack-panel-heading">
            <span>Technical stack</span>
            <p>Tools change. Solid engineering judgment does not.</p>
          </div>
          <div className="stack-groups">
            {stackGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
