import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        <div className="about-image-col reveal">
          <div className="about-img-wrapper">
            <div className="about-img-placeholder">
              <span>Sua foto aqui</span>
            </div>
            <div className="about-img-deco" />
          </div>
        </div>

        <div className="about-content">
          <p className="section-label reveal">Sobre mim</p>
          <h2 className="section-title reveal delay-1">
            Transformando dados em decisões inteligentes
          </h2>

          <p className="about-text reveal delay-2">
            Sou Marcelo, estudante de Ciência da Computação na Universidade de Fortaleza (UNIFOR), atualmente no 6° semestre. Sou apaixonado por tecnologia e acredito que o futuro da inovação está na forma como transformamos dados em soluções concretas.
          </p>

          <p className="about-text reveal delay-2">
            Meu foco é construir produtos digitais completos — desde interfaces modernas e responsivas com React até APIs assíncronas de alta performance com Python e FastAPI. Valorizo o aprendizado contínuo, o trabalho em equipe e a entrega de valor real.
          </p>

          <div className="about-details reveal delay-3">
            <div className="detail-item">
              <span className="detail-label">Localização</span>
              <span className="detail-value">Fortaleza, CE 🇧🇷</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Disponibilidade</span>
              <span className="detail-value available">Disponível ✓</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Graduação</span>
              <span className="detail-value">UNIFOR — Ciência da Computação</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Idiomas</span>
              <span className="detail-value">PT Nativo · EN Avançado</span>
            </div>
          </div>

          <div className="reveal delay-4">
            <a href="#contact" className="btn btn-primary">Vamos conversar →</a>
          </div>
        </div>
      </div>
    </section>
  )
}