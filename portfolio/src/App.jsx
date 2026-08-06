import { useEffect } from 'react'
import Navbar   from './components/Navbar/Navbar'
import Hero     from './components/Hero/Hero'
import About    from './components/About/About'
import Skills   from './components/Skillss/Skills'
import Projects from './components/Projec/Projects'
import Contact  from './components/Contact/Contact'
import './styles/global.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2025 Marcelo Filho · Feito com React + Vite</p>
      </footer>
    </div>
  )
}

export default App