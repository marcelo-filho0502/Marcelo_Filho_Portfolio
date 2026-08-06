import './Projects.css'

// ── EDITE OS SEUS PROJETOS AQUI ──
const PROJECTS = [
  {
    number: '01',
    title: 'Projeto Destaque',
    desc: 'Descrição do seu projeto principal. Explique o problema que resolve, as tecnologias usadas e o impacto gerado.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    number: '02',
    title: 'Segundo Projeto',
    desc: 'Breve descrição deste projeto. Foque no que você construiu e aprendeu.',
    tags: ['React', 'TypeScript', 'API REST'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    number: '03',
    title: 'Terceiro Projeto',
    desc: 'Descrição do terceiro projeto. Quais foram os desafios técnicos e como você os superou?',
    tags: ['Next.js', 'Tailwind', 'Prisma'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    number: '04',
    title: 'Quarto Projeto',
    desc: 'Mais um projeto do seu portfólio. Substitua pelo que você realmente construiu.',
    tags: ['JavaScript', 'CSS', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
  },
]

function ProjectCard({ project, delay }) {
  return (
    <article className={`project-card reveal delay-${delay} ${project.featured ? 'featured' : ''}`}>
      <div className="card-number">{project.number}</div>

      <div className="card-content">
        {project.featured && (
          <span className="featured-badge">⭐ Destaque</span>
        )}
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.desc}</p>

        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="card-links">
        <a href={project.liveUrl} className="card-link" target="_blank" rel="noreferrer">
          Demo ao vivo ↗
        </a>
        <a href={project.repoUrl} className="card-link card-link-secondary" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label reveal">Portfólio</p>
        <h2 className="section-title reveal delay-1">Projetos selecionados</h2>
        <p className="section-desc reveal delay-2">
          Uma seleção dos meus trabalhos mais relevantes. Cada projeto representa
          um desafio diferente e uma oportunidade de crescimento.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.number} project={p} delay={(i % 3) + 1} />
          ))}
        </div>

        <div className="projects-cta reveal">
          <a
            href="https://github.com/seu-usuario"
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            Ver todos no GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}