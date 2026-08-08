import './Projects.css'

const PROJECTS = [
  {
    number: '01',
    title: 'Dish at Home',
    period: 'Jul. 2026 – Presente',
    desc: 'Ecossistema de microsserviços para sugestão de receitas com IA. O usuário informa os ingredientes disponíveis e um Agente Inteligente adapta receitas e sugere substituições em tempo real via LLMs.',
    tags: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Python', 'FastAPI', 'Prompt Engineering', 'LLM'],
    liveUrl: '#',
    repoUrl: 'https://github.com/marcelo-filho0502/Dish_at_home',
    featured: true,
  },
  {
    number: '02',
    title: 'Fila Nami',
    period: 'Jun. 2025 – Jan. 2026',
    desc: 'Aplicação web para gerenciamento reativo de filas de atendimento no NAMI. Desenvolvida após levantamento direto de requisitos com o gestor, com foco em otimizar o tempo de espera dos pacientes.',
    tags: ['React', 'JavaScript', 'Vite', 'React Hooks'],
    liveUrl: '#',
    repoUrl: 'https://github.com/marcelo-filho0502/FilaNami',
  },
  {
    number: '03',
    title: 'Plan Together',
    period: 'Jan. 2026 – Mar. 2026',
    desc: 'Sistema gamificado de gestão de hábitos e produtividade coletiva, desenvolvido em equipe multidisciplinar com metodologias ágeis. Foco em UX/UI interativo e entrega de alto valor.',
    tags: ['React', 'UX/UI', 'Metodologias Ágeis', 'Gamificação'],
    liveUrl: '#',
    repoUrl: 'https://github.com/marcelomrfilho',
  },
]

function ProjectCard({ project, delay }) {
  return (
    <article className={`project-card reveal delay-${delay} ${project.featured ? 'featured' : ''}`}>
      <div className="card-header-row">
        <div className="card-number">{project.number}</div>
        <span className="card-period">{project.period}</span>
      </div>
      <div className="card-content">
        {project.featured && <span className="featured-badge">⭐ Destaque</span>}
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.desc}</p>
        <div className="card-tags">
          {project.tags.map((tag) => (<span key={tag} className="card-tag">{tag}</span>))}
        </div>
      </div>
      <div className="card-links">
        <a href={project.liveUrl} className="card-link" target="_blank" rel="noreferrer">Demo ao vivo ↗</a>
        <a href={project.repoUrl} className="card-link card-link-secondary" target="_blank" rel="noreferrer">GitHub</a>
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
          Projetos reais com impacto direto — de sistemas com IA até aplicações de gestão hospitalar e produtividade em equipe.
        </p>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (<ProjectCard key={p.number} project={p} delay={(i % 3) + 1} />))}
        </div>
        <div className="projects-cta reveal">
          <a href="https://github.com/marcelomrfilho" className="btn btn-outline" target="_blank" rel="noreferrer">
            Ver todos no GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}