import { useLang } from '../../i18n/LanguageContext'
import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const { t, lang } = useLang()
  const ROLES = t.roles
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => { setDisplayed(''); setDeleting(false); setRoleIndex(0) }, [lang])

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex, ROLES])

  return (
    <section id="hero" className="hero">
      <div className="blob hero-blob-1" />
      <div className="blob hero-blob-2" />
      <div className="container hero-inner">
        <div className="hero-badge reveal">
          <span className="badge-dot" /> {t.heroBadge}
        </div>
        <h1 className="hero-name reveal delay-1">
          {t.heroHi}<br />
          <span className="name-accent">Marcelo Filho</span>
        </h1>
        <p className="hero-role reveal delay-2">
          <span className="role-text">{displayed}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </p>
        <p className="hero-desc reveal delay-3">
          {t.heroDesc}
        </p>
        <div className="hero-actions reveal delay-4">
          <a href="#projects" className="btn btn-primary">{t.heroProjects}</a>
          <a href="#contact" className="btn btn-outline">{t.heroTalk}</a>
        </div>
        <div className="hero-stats reveal delay-4">
          <div className="stat"><span className="stat-num">{t.heroSemNum}</span><span className="stat-label">{t.heroSem}</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">3</span><span className="stat-label">{t.heroDelivered}</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">{t.heroAdv}</span><span className="stat-label">{t.heroEn}</span></div>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}