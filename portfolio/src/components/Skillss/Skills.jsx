import { useEffect, useRef } from 'react'
import './Skills.css'

const SKILLS = [
  { name: 'React / Next.js',  level: 90, color: '#61DAFB' },
  { name: 'JavaScript / TS',  level: 85, color: '#F7DF1E' },
  { name: 'HTML & CSS',       level: 92, color: '#E34F26' },
  { name: 'Node.js',          level: 72, color: '#68A063' },
  { name: 'Git & GitHub',     level: 80, color: '#F05032' },
  { name: 'Figma / UI Design',level: 68, color: '#A259FF' },
]

const TECHS = [
  'React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind', 'Node.js',
  'Git', 'REST APIs', 'Figma', 'Styled Components', 'Zustand', 'Jest',
]

export default function Skills() {
  const barsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
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
          <h2 className="section-title reveal delay-1">
            Tecnologias que eu uso
          </h2>
          <p className="section-desc reveal delay-2">
            Conjunto de ferramentas e linguagens que utilizo no meu dia a dia
            para construir produtos digitais de qualidade.
          </p>
        </div>

        <div className="skills-grid">
          {/* Skill bars */}
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

          {/* Tech tags */}
          <div className="tech-tags reveal delay-3">
            <h3 className="tech-tags-title">Ferramentas & Libs</h3>
            <div className="tags-wrap">
              {TECHS.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}