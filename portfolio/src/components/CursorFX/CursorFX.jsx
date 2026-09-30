import { useEffect, useRef } from 'react'
import './CursorFX.css'

const MAGNETIC = '.btn, .social-item, .nav-logo'
const TILT = '.project-card, .contact-card'
const HOT = 'a, button, input, textarea, .project-card, .tech-tag'
const vw = () => window.innerWidth
const vh = () => window.innerHeight

export default function CursorFX() {
  const cv = useRef(null)
  const dot = useRef(null)
  const ring = useRef(null)
  const spot = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const ctx = cv.current.getContext('2d')
    const blobs = [...document.querySelectorAll('.hero-blob-1, .hero-blob-2')]
    const tags = document.getElementsByClassName('tech-tag')
    const mouse = { x: vw() / 2, y: vh() / 2 }
    const eased = { ...mouse }
    const par = { x: 0, y: 0 }
    const mags = new Map()
    let parts = [], last = { ...mouse }, tilted = null, hot = false, moved = false, raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      cv.current.width = vw() * dpr
      cv.current.height = vh() * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const burst = (x, y, n, v) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, s = (0.3 + Math.random()) * v
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, r: 1.5 + Math.random() * 2.5, hue: root.dataset.theme === 'light' ? 15 + Math.random() * 30 : 240 + Math.random() * 60 })
      }
      if (parts.length > 220) parts = parts.slice(-220)
    }
    const setTilt = (el, rx, ry, lift) => {
      el.style.setProperty('--rx', rx + 'deg')
      el.style.setProperty('--ry', ry + 'deg')
      el.style.setProperty('--lift', lift + 'px')
    }

    const onMove = (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY; moved = true
      root.classList.add('fx-on')
      const d = Math.hypot(mouse.x - last.x, mouse.y - last.y)
      if (d > 8) { burst(mouse.x, mouse.y, d > 40 ? 2 : 1, 0.8); last = { ...mouse } }

      const el = e.target.closest ? e.target : null
      const h = !!el?.closest(HOT)
      if (h !== hot) { hot = h; ring.current.classList.toggle('hot', h) }

      const mag = el?.closest(MAGNETIC)
      mags.forEach((m, k) => { if (k !== mag) { m.tx = 0; m.ty = 0 } })
      if (mag) {
        const b = mag.getBoundingClientRect()
        const m = mags.get(mag) || { x: 0, y: 0 }
        m.tx = (mouse.x - b.left - b.width / 2) * 0.3
        m.ty = (mouse.y - b.top - b.height / 2) * 0.4
        mags.set(mag, m)
      }

      const card = el?.closest(TILT)
      if (tilted && tilted !== card) { setTilt(tilted, 0, 0, 0); tilted = null }
      if (card && card.classList.contains('visible')) {
        const b = card.getBoundingClientRect()
        const nx = (mouse.x - b.left) / b.width, ny = (mouse.y - b.top) / b.height
        card.classList.add('fx-tilt')
        setTilt(card, ((0.5 - ny) * 8).toFixed(2), ((nx - 0.5) * 10).toFixed(2), -4)
        card.style.setProperty('--gx', (nx * 100).toFixed(1) + '%')
        card.style.setProperty('--gy', (ny * 100).toFixed(1) + '%')
        tilted = card
      }
    }
    const onLeave = () => {
      root.classList.remove('fx-on')
      if (tilted) setTilt(tilted, 0, 0, 0)
      tilted = null
      mags.forEach((m) => { m.tx = 0; m.ty = 0 })
    }
    const onDown = (e) => { ring.current.classList.add('down'); burst(e.clientX, e.clientY, 18, 4) }
    const onUp = () => ring.current.classList.remove('down')
    const onScroll = () => { moved = true }

    const frame = () => {
      eased.x += (mouse.x - eased.x) * 0.16
      eased.y += (mouse.y - eased.y) * 0.16
      dot.current.style.transform = `translate3d(${mouse.x}px,${mouse.y}px,0)`
      ring.current.style.transform = `translate3d(${eased.x}px,${eased.y}px,0)`
      spot.current.style.setProperty('--sx', eased.x + 'px')
      spot.current.style.setProperty('--sy', eased.y + 'px')

      par.x += (mouse.x / vw() - 0.5 - par.x) * 0.06
      par.y += (mouse.y / vh() - 0.5 - par.y) * 0.06
      blobs.forEach((b, i) => { const f = i ? 70 : -90; b.style.translate = `${par.x * f}px ${par.y * f}px` })

      mags.forEach((m, el) => {
        m.x += (m.tx - m.x) * 0.2; m.y += (m.ty - m.y) * 0.2
        el.style.translate = `${m.x.toFixed(2)}px ${m.y.toFixed(2)}px`
        if (!m.tx && !m.ty && Math.abs(m.x) < 0.05 && Math.abs(m.y) < 0.05) { el.style.translate = ''; mags.delete(el) }
      })

      if (moved) {
        moved = false
        for (const t of tags) {
          const b = t.getBoundingClientRect()
          const d = Math.hypot(mouse.x - (b.left + b.width / 2), mouse.y - (b.top + b.height / 2))
          t.style.setProperty('--near', Math.max(0, 1 - d / 150).toFixed(2))
        }
      }

      ctx.clearRect(0, 0, vw(), vh())
      const light = root.dataset.theme === 'light'
      ctx.globalCompositeOperation = light ? 'source-over' : 'lighter'
      parts = parts.filter((p) => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.02; p.vx *= 0.985; p.life -= 0.02
        if (p.life <= 0) return false
        ctx.globalAlpha = p.life * 0.9
        ctx.fillStyle = `hsl(${p.hue}, 90%, ${light ? 52 : 65}%)`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2); ctx.fill()
        return true
      })
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('scroll', onScroll, { passive: true })
    root.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('scroll', onScroll)
      root.removeEventListener('mouseleave', onLeave)
      root.classList.remove('fx-on')
      blobs.forEach((b) => { b.style.translate = '' })
    }
  }, [])

  return (
    <>
      <div ref={spot} className="fx-spot" aria-hidden="true" />
      <canvas ref={cv} className="fx-canvas" aria-hidden="true" />
      <div ref={ring} className="fx-ring" aria-hidden="true" />
      <div ref={dot} className="fx-dot" aria-hidden="true" />
    </>
  )
}
