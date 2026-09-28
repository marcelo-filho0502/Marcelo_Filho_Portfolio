import { useLang } from '../../i18n/LanguageContext'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/marcelo-filho0502',                          icon: '⬡' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-de-magalh%C3%A3es-rodrigues-filho-b8751a305/',                     icon: '◆' },
  { label: 'Email',    href: 'mailto:marcelomrfilho@gmail.com',                            icon: '✉' },
  { label: 'WhatsApp', href: 'https://wa.me/5585991378206',                                icon: '✆' },
]

export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="contact">
      <div className="contact-blob" />
      <div className="container contact-inner">

        <div className="contact-text">
          <p className="section-label reveal">{t.contactLabel}</p>
          <h2 className="section-title reveal delay-1">
            {t.contactT1}<br />
            <span className="contact-accent">{t.contactT2}</span>
          </h2>
          <p className="contact-desc reveal delay-2">
            {t.contactDesc}
          </p>

          <div className="social-links reveal delay-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="social-item" target="_blank" rel="noreferrer">
                <span className="social-icon">{s.icon}</span>{s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-card reveal delay-2">
          <h3 className="contact-card-title">{t.cardTitle}</h3>
          <p className="contact-card-sub">{t.cardSub}</p>

          <div className="contact-form">
            <div className="field-group">
              <label>{t.fName}</label>
              <input type="text" placeholder={t.phName} />
            </div>
            <div className="field-group">
              <label>Email</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
            <div className="field-group">
              <label>{t.fMsg}</label>
              <textarea rows="5" placeholder={t.phMsg} />
            </div>
            <button
              className="btn btn-primary contact-send"
              type="button"
              onClick={() => window.open('mailto:marcelomrfilho@gmail.com')}
            >
              {t.send}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}