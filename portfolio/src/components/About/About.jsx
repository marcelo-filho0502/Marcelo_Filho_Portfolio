import { useLang } from '../../i18n/LanguageContext'
import './About.css'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        <div className="about-image-col reveal">
          <div className="about-img-wrapper">
            <div className="about-img-placeholder">
              <span>{t.aboutPhoto}</span>
            </div>
            <div className="about-img-deco" />
          </div>
        </div>

        <div className="about-content">
          <p className="section-label reveal">{t.aboutLabel}</p>
          <h2 className="section-title reveal delay-1">
            {t.aboutTitle}
          </h2>

          <p className="about-text reveal delay-2">
            {t.aboutP1}
          </p>

          <p className="about-text reveal delay-2">
            {t.aboutP2}
          </p>

          <div className="about-details reveal delay-3">
            <div className="detail-item">
              <span className="detail-label">{t.aboutLoc}</span>
              <span className="detail-value">Fortaleza, CE 🇧🇷</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">{t.aboutAvail}</span>
              <span className="detail-value available">{t.aboutAvailVal}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">{t.aboutDegree}</span>
              <span className="detail-value">{t.aboutDegreeVal}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">{t.aboutLang}</span>
              <span className="detail-value">{t.aboutLangVal}</span>
            </div>
          </div>

          <div className="reveal delay-4">
            <a href="#contact" className="btn btn-primary">{t.aboutCta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}