import './Contact.css'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/seu-usuario',     icon: '⬡' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil',  icon: '◆' },
  { label: 'Email',    href: 'mailto:seu@email.com',                icon: '✉' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-blob" />
      <div className="container contact-inner">

        <div className="contact-text">
          <p className="section-label reveal">Contato</p>
          <h2 className="section-title reveal delay-1">
            Vamos construir algo<br />
            <span className="contact-accent">juntos?</span>
          </h2>
          <p className="contact-desc reveal delay-2">
            Estou aberto a novas oportunidades — seja um emprego full-time,
            freelance ou uma colaboração em projeto. Se tiver uma ideia,
            me conta!
          </p>

          <div className="social-links reveal delay-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-item"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="contact-card reveal delay-2">
          <h3 className="contact-card-title">Manda uma mensagem</h3>
          <p className="contact-card-sub">Responderei em até 24 horas.</p>

          <div className="contact-form">
            <div className="field-group">
              <label>Nome</label>
              <input type="text" placeholder="Seu nome" />
            </div>
            <div className="field-group">
              <label>Email</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
            <div className="field-group">
              <label>Mensagem</label>
              <textarea rows="5" placeholder="Me conta seu projeto ou ideia..." />
            </div>
            <button
              className="btn btn-primary contact-send"
              type="button"
              onClick={() => {
                // Integre com EmailJS, Formspree ou similar
                alert('Formulário pronto! Integre com EmailJS ou Formspree.')
              }}
            >
              Enviar mensagem →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}