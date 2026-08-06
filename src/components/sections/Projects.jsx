import { projects } from '../../data/portfolioData'
import Icon from '../ui/Icon'
import useReveal from '../../hooks/useReveal'

const ProjectGraphic = ({ project }) => (
  <div className={`project-graphic tone-${project.tone}`}>
    <div className="project-grid-lines" />
    <div className="project-system-mark">
      <span>{project.name.slice(0, 2).toUpperCase()}</span>
      <i /><i /><i />
    </div>
  </div>
)

const Projects = () => {
  const sectionRef = useReveal([
    { selector: '.section-shell', y: 72, scale: 0.99, blur: 3, duration: 1.05, start: 'top 91%' },
    { selector: '.work-header .section-topline', x: -55, y: 0, duration: 0.75 },
    { selector: '.work-heading-row > *', y: 55, rotateX: 9, stagger: 0.13, duration: 0.95 },
    { selector: '.project-card:nth-child(odd)', x: -90, y: 0, duration: 1, start: 'top 88%', each: true },
    { selector: '.project-card:nth-child(even)', x: 90, y: 0, duration: 1, start: 'top 88%', each: true },
  ])

  return (
    <section className="section work-section" id="work" ref={sectionRef}>
      <div className="section-shell">
        <div className="work-header">
          <div className="section-topline"><p>Selected work</p><i /></div>
          <div className="work-heading-row">
            <h2>Production systems,<br /><span>built for real work.</span></h2>
            <p>These projects represent the kind of work I do: operationally complex, technically connected and expected to keep working after launch.</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectGraphic project={project} />
              <div className="project-content">
                <div className="project-label"><span>{project.category}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-contribution">
                  <strong>What I owned</strong>
                  <span>{project.contribution}</span>
                </div>
                <div className="project-footer">
                  <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} repository`}
                      title="View project repository"
                    >
                      <span>View repository</span>
                      <Icon name="arrowUp" size={18} />
                    </a>
                  ) : (
                    <span className="project-status">Private project</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
