import { useLang } from '../../i18n/LanguageContext'
import LangToggle from '../LangToggle/LangToggle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about',    label: 'navAbout' },
  { href: '#skills',   label: 'navSkills' },
  { href: '#projects', label: 'navProjects' },
  { href: '#contact',  label: 'navContact' },
]

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          MF<span className="logo-dot">.</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>{t[l.label]}</a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              className="btn btn-outline nav-cta"
              target="_blank"
              rel="noreferrer"
            >
              {t.navCv}
            </a>
          </li>
          <li><LangToggle /></li>
          <li><ThemeToggle /></li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}