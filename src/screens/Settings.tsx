import { useRef, useState } from 'react'
import { asrSupported, speakDutch, ttsSupported, useDutchVoices } from '../lib/speech'
import { exportProgress, importProgress } from '../lib/storage'
import { isoDay } from '../lib/date'
import type { ProgressApi } from '../lib/useProgress'
import { Section } from '../components/ui'

export function SettingsScreen({ api }: { api: ProgressApi }) {
  const { progress, setSettings } = api
  const s = progress.settings
  const voices = useDutchVoices()
  const [message, setMessage] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const download = () => {
    const blob = new Blob([exportProgress(progress)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nederlands-progression-${isoDay()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="stack">
      <Section eyebrow="Voix" title="Lecture du néerlandais">
        {!ttsSupported && <div className="banner">Ce navigateur ne gère pas la synthèse vocale.</div>}
        {ttsSupported && voices.length === 0 && (
          <div className="banner">
            Aucune voix néerlandaise détectée. Sur iPhone : Réglages → Accessibilité → Contenu énoncé →
            Voix → Néerlandais. Sur Android : Paramètres → Synthèse vocale → installer la voix
            « Nederlands ». Sur ordinateur, ajoute la langue néerlandaise au système.
          </div>
        )}
        <div className="field" style={{ marginTop: 12 }}>
          <label htmlFor="voice">Voix</label>
          <select
            id="voice"
            value={s.voiceURI ?? ''}
            onChange={(e) => setSettings({ voiceURI: e.target.value || null })}
          >
            <option value="">Automatique</option>
            {voices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </div>
        <div className="field" style={{ marginTop: 14 }}>
          <label htmlFor="rate">Vitesse de lecture — {s.rate.toFixed(2)}×</label>
          <input
            id="rate"
            type="range"
            min={0.5}
            max={1.2}
            step={0.05}
            value={s.rate}
            onChange={(e) => setSettings({ rate: Number(e.target.value) })}
          />
          <p className="tiny">
            Commence à 0,80× pendant les deux premières semaines, puis remonte vers 1,00× :
            c’est la vitesse réelle des gens dans la rue.
          </p>
        </div>
        <button
          className="btn btn-ghost btn-block"
          style={{ marginTop: 10 }}
          onClick={() =>
            speakDutch('Goedemorgen, ik leer Nederlands. Hoe gaat het met je?', {
              rate: s.rate,
              voiceURI: s.voiceURI,
            })
          }
        >
          ▶ Tester la voix
        </button>
      </Section>

      <Section eyebrow="Micro" title="Reconnaissance vocale">
        <p className="faint">
          {asrSupported
            ? 'Disponible sur cet appareil. Les défis oraux écoutent ta phrase en néerlandais et la comparent au modèle.'
            : 'Non disponible sur ce navigateur (Firefox notamment). Les défis oraux basculent automatiquement en auto-évaluation — l’exercice reste utile, c’est toi qui notes.'}
        </p>
      </Section>

      <Section eyebrow="Affichage" title="Préférences">
        <div className="switch">
          <span className="grow">
            <strong>Aides à la prononciation</strong>
            <span className="tiny" style={{ display: 'block' }}>Affiche la transcription approximative sous les mots</span>
          </span>
          <input
            type="checkbox"
            checked={s.showPhonetics}
            onChange={(e) => setSettings({ showPhonetics: e.target.checked })}
          />
        </div>
        <div className="divider" />
        <div className="switch">
          <span className="grow">
            <strong>Lecture automatique</strong>
            <span className="tiny" style={{ display: 'block' }}>Joue le son dès l’affichage d’une question</span>
          </span>
          <input
            type="checkbox"
            checked={s.autoPlay}
            onChange={(e) => setSettings({ autoPlay: e.target.checked })}
          />
        </div>
        <div className="divider" />
        <div className="field" style={{ marginTop: 6 }}>
          <label htmlFor="batch">Cartes par session de révision — {s.reviewBatch}</label>
          <input
            id="batch"
            type="range"
            min={10}
            max={60}
            step={5}
            value={s.reviewBatch}
            onChange={(e) => setSettings({ reviewBatch: Number(e.target.value) })}
          />
        </div>
      </Section>

      <Section eyebrow="Planning" title="Date de départ">
        <div className="field">
          <label htmlFor="start">Jour 1 du programme</label>
          <input
            id="start"
            type="date"
            value={progress.startDate}
            max={isoDay()}
            onChange={(e) => e.target.value && api.setStartDate(e.target.value)}
          />
          <p className="tiny">
            Change cette date si tu as commencé plus tôt, ou pour recaler le planning après une pause.
            Cela ne touche ni tes leçons faites ni tes révisions.
          </p>
        </div>
      </Section>

      <Section eyebrow="Données" title="Sauvegarde">
        <p className="faint" style={{ marginBottom: 12 }}>
          Toute ta progression est stockée dans ce navigateur uniquement — rien n’est envoyé nulle part.
          Vider les données du site l’effacerait : exporte de temps en temps.
        </p>
        <div className="stack-sm">
          <button className="btn btn-ghost btn-block" onClick={download}>
            ⤓ Exporter ma progression
          </button>
          <button className="btn btn-ghost btn-block" onClick={() => fileRef.current?.click()}>
            ⤒ Importer un fichier
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            hidden
            onChange={async (e) => {
              const file = e.target.files?.[0]
              if (!file) return
              const parsed = importProgress(await file.text())
              setMessage(parsed ? 'Progression restaurée.' : 'Fichier illisible.')
              if (parsed) api.replaceAll(parsed)
              e.target.value = ''
            }}
          />
          <button
            className="btn btn-ghost btn-block"
            style={{ color: 'var(--bad)', borderColor: 'var(--bad)' }}
            onClick={() => {
              if (confirm('Effacer toute la progression ? Cette action est définitive.')) {
                api.resetAll()
                setMessage('Progression remise à zéro.')
              }
            }}
          >
            Tout réinitialiser
          </button>
        </div>
        {message && <div className="banner" style={{ marginTop: 12 }}>{message}</div>}
      </Section>

      <Section eyebrow="À propos">
        <p className="faint">
          Spreek Nederlands — programme intensif de six semaines pour francophones, orienté production
          orale. Fonctionne hors connexion une fois installé sur l’écran d’accueil.
        </p>
      </Section>
    </div>
  )
}
