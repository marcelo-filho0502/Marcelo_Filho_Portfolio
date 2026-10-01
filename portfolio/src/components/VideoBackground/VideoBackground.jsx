import { useEffect, useRef } from 'react'
import './VideoBackground.css'

// Vídeo fixo no fundo: o tempo do vídeo acompanha o progresso do scroll da página.
export default function VideoBackground({ src = '/bg.mp4', poster = '/bg-poster.jpg' }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    let raf = 0
    let current = null

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      return max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0
    }

    const tick = () => {
      if (v.duration) {
        const target = progress() * (v.duration - 0.05)
        if (current === null) current = target
        current += (target - current) * 0.15 // suaviza o movimento
        if (Math.abs(current - v.currentTime) > 0.01) v.currentTime = current
      }
      raf = requestAnimationFrame(tick)
    }

    // iOS só libera o seek depois de um play/pause
    const unlock = () => { v.play().then(() => v.pause()).catch(() => {}) }
    v.addEventListener('loadedmetadata', unlock, { once: true })
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="video-bg" aria-hidden="true">
      <video ref={ref} src={src} poster={poster} muted playsInline preload="auto" tabIndex={-1} />
      <div className="video-bg-scrim" />
    </div>
  )
}
