import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const Ctx = createContext(null)

function initial() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch { /* storage unavailable */ }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initial)
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = t.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.pageDesc)
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang, t])

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
