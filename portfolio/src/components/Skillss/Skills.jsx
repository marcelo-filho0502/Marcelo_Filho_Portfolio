import { useEffect, useRef } from 'react'
import './Skills.css'

const SKILLS = [
  { name: 'React / Vite / TypeScript', level: 90, color: '#61DAFB' },
  { name: 'JavaScript',                level: 88, color: '#F7DF1E' },
  { name: 'Python / FastAPI',          level: 82, color: '#3776AB' },
  { name: 'HTML & CSS / Tailwind',     level: 90, color: '#E34F26' },
  { name: 'Git / GitHub / Docker',     level: 78, color: '#F05032' },
  { name: 'SQL / NoSQL / Power BI',    level: 70, color: '#A259FF' },
]

const TECHS = [
  'React', 'TypeScript', 'Vite', 'TailwindCSS', 'JavaScript',
  'Python', 'FastAPI', 'Docker', 'Java', 'REST APIs',
  'Git', 'SQL', 'NoSQL', 'Power BI', 'Prompt Engineering',
  'S.O.L.I.D', 'Metodologias Ágeis', 'UX/UI', 'Excel', 'DBeaver',
]

export default function Skills() {
  const barsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate') }) },
      { threshold: 0.3 }
    )
    barsRef.current.forEach((bar) => bar && observer.observe(bar))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <p className="section-label reveal">Habilidades</p>
          <h2 className="section-title reveal delay-1">Tecnologias que eu uso</h2>
          <p className="section-desc reveal delay-2">
            Stack completo — do frontend responsivo com React até APIs assíncronas com Python, passando por análise de dados e engenharia de prompts com LLMs.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-bars reveal delay-2">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    ref={(el) => (barsRef.current[i] = el)}
                    className="skill-bar-fill"
                    style={{ '--target': `${skill.level}%`, '--color': skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="tech-tags reveal delay-3">
            <h3 className="tech-tags-title">Ferramentas & Tecnologias</h3>
            <div className="tags-wrap">
              {TECHS.map((tech) => (<span key={tech} className="tech-tag">{tech}</span>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}