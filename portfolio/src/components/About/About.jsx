import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        <div className="about-image-col reveal">
          <div className="about-img-wrapper">
            {/* Troque o src pela sua foto */}
            <div className="about-img-placeholder">
              <span>Sua foto aqui</span>
            </div>
            <div className="about-img-deco" />
          </div>
        </div>

        <div className="about-content">
          <p className="section-label reveal">Sobre mim</p>
          <h2 className="section-title reveal delay-1">
            Desenvolvedor apaixonado por criar coisas bonitas e funcionais
          </h2>

          <p className="about-text reveal delay-2">
            Sou Marcelo, desenvolvedor frontend baseado no Ceará, Brasil. Tenho
            experiência construindo aplicações web modernas com foco em
            performance, acessibilidade e experiência do usuário.
          </p>

          <p className="about-text reveal delay-2">
            Quando não estou codando, estou estudando novas tecnologias,
            contribuindo para projetos open source ou explorando design de
            interfaces. Acredito que bom código e bom design andam lado a lado.
          </p>

          <div className="about-details reveal delay-3">
            <div className="detail-item">
              <span className="detail-label">Localização</span>
              <span className="detail-value">Ceará, Brasil 🇧🇷</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Disponibilidade</span>
              <span className="detail-value available">Disponível ✓</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Foco atual</span>
              <span className="detail-value">React & Node.js</span>
            </div>
          </div>

          <div className="reveal delay-4">
            <a href="#contact" className="btn btn-primary">
              Vamos conversar →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}