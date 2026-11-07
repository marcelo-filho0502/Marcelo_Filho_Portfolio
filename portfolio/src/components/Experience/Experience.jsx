import { useLang } from '../../i18n/LanguageContext'
import './Experience.css'

const EXPERIENCES = [
  { id: 'e1', company: 'Via Musical',   tags: ['Python', 'FastAPI', 'PHP', 'Docker'] },
  { id: 'e2', company: 'RedTag Mobile', tags: ['React', 'Base44', 'Cloud', 'UX/UI'] },
]

function ExperienceItem({ exp, delay }) {
  const { t } = useLang()
  return (
    <div className="exp-item">
      <article className={`exp-card reveal delay-${delay}`}>
        <div className="exp-header">
          <h3 className="exp-company">{exp.company}</h3>
          <span className="exp-period">{t[`${exp.id}Period`]}</span>
        </div>
        <div className="exp-meta">
          <span className="exp-role">{t[`${exp.id}Role`]}</span>
          <span className="exp-loc">{t[`${exp.id}Loc`]}</span>
        </div>
        <ul className="exp-bullets">
          {t[`${exp.id}Bullets`].map((item) => (<li key={item}>{item}</li>))}
        </ul>
        <div className="exp-tags">
          {exp.tags.map((tag) => (<span key={tag} className="exp-tag">{t[tag] || tag}</span>))}
        </div>
      </article>
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label reveal">{t.expLabel}</p>
        <h2 className="section-title reveal delay-1">{t.expTitle}</h2>
        <p className="section-desc reveal delay-2">
          {t.expDesc}
        </p>
        <div className="exp-list">
          {EXPERIENCES.map((exp, i) => (<ExperienceItem key={exp.id} exp={exp} delay={(i % 3) + 1} />))}
        </div>
      </div>
    </section>
  )
}