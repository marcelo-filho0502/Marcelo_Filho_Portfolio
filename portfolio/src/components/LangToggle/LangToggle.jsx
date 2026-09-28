import { useLang } from '../../i18n/LanguageContext'
import './LangToggle.css'

export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" data-lang={lang} role="group" aria-label="Idioma / Language">
      {['pt', 'en'].map((l) => (
        <button key={l} type="button" className={lang === l ? 'active' : ''} aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
