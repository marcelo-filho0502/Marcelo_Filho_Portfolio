import { useLang } from '../../i18n/LanguageContext'
import './Projects.css'

const PROJECTS = [
  {
    number: '01',
    title: 'Dish at Home',
    period: 'p1t',
    desc: 'p1d',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Python', 'FastAPI', 'Prompt Engineering', 'LLM'],
    liveUrl: '#',
    repoUrl: 'https://github.com/marcelo-filho0502/Dish_at_home',
    featured: true,
  },
  {
    number: '02',
    title: 'Fila Nami',
    period: 'Jun. 2025 – Jan. 2026',
    desc: 'p2d',
    tags: ['React', 'JavaScript', 'Vite', 'React Hooks'],
    liveUrl: '#',
    repoUrl: 'https://github.com/marcelo-filho0502/FilaNami',
  },
  {
    number: '03',
    title: 'Plan Together',
    period: 'Jan. 2026 – Mar. 2026',
    desc: 'p3d',
    tags: ['React', 'UX/UI', 'Metodologias Ágeis', 'Gamificação'],
    liveUrl: '#',
    repoUrl: 'https://github.com/marcelomrfilho',
  },
]

function ProjectCard({ project, delay }) {
  const { t } = useLang()
  return (
    <article className={`project-card reveal delay-${delay} ${project.featured ? 'featured' : ''}`}>
      <div className="card-header-row">
        <div className="card-number">{project.number}</div>
        <span className="card-period">{t[project.period] || project.period}</span>
      </div>
      <div className="card-content">
        {project.featured && <span className="featured-badge">{t.projFeat}</span>}
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{t[project.desc]}</p>
        <div className="card-tags">
          {project.tags.map((tag) => (<span key={tag} className="card-tag">{t[tag] || tag}</span>))}
        </div>
      </div>
      <div className="card-links">
        <a href={project.liveUrl} className="card-link" target="_blank" rel="noreferrer">{t.projLive}</a>
        <a href={project.repoUrl} className="card-link card-link-secondary" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label reveal">{t.projLabel}</p>
        <h2 className="section-title reveal delay-1">{t.projTitle}</h2>
        <p className="section-desc reveal delay-2">
          {t.projDesc}
        </p>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (<ProjectCard key={p.number} project={p} delay={(i % 3) + 1} />))}
        </div>
        <div className="projects-cta reveal">
          <a href="https://github.com/marcelo-filho0502" className="btn btn-outline" target="_blank" rel="noreferrer">
            {t.projAll}
          </a>
        </div>
      </div>
    </section>
  )
}