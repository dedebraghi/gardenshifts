import React, { useState } from "react"
import GlassFolder from "@/components/ui/glass-folder-cards"
import { ArrowRight, ShieldCheck, Clock, Users, Zap, CheckCircle2 } from "lucide-react"

export default function App() {
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null)
  const [calcStaff, setCalcStaff] = useState(25)

  const hoursSaved = Math.round(calcStaff * 10.4)
  const eurSaved = Math.round(hoursSaved * 30)

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-emerald/30 selection:text-white">
      {/* Subheader ticker */}
      <div className="hairline-b bg-surface-1/60 text-[11px] font-mono text-ink-subtle px-6 py-2 tracking-wider uppercase flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
          <span className="text-ink-muted">GARDENSHIFT // 21ST DESIGN SYSTEM & 3D INTERACTIVE CARDS</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span>SERRA CALDA</span>
          <span>•</span>
          <span>VIVAIO ESTERNO</span>
          <span>•</span>
          <span>CASSE</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="hairline-b sticky top-0 z-50 bg-canvas/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-surface-2 hairline-border flex items-center justify-center text-emerald">
              🌿
            </div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-base font-semibold tracking-tight text-ink">GardenShift</span>
              <span className="text-[10px] font-mono text-emerald uppercase px-1.5 py-0.5 rounded bg-emerald/10 border border-emerald/20">B2B</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium text-ink-muted">
            <a href="#folders" className="hover:text-ink transition">I Reparti 3D</a>
            <a href="#architettura" className="hover:text-ink transition">Bento Specifiche</a>
            <a href="#calcolatore" className="hover:text-ink transition">Calcolatore ROI</a>
          </nav>

          <a href="#demo" className="px-4 py-2 rounded-lg bg-emerald hover:bg-emerald-mint text-canvas text-xs font-semibold tracking-tight transition">
            Richiedi Accesso
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-6 hairline-b relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-wider text-emerald uppercase bg-emerald/10 border border-emerald/20 px-3 py-1 rounded-full">
            <span>Specializzato Floricoltura & Garden Center</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.08]">
            I turni del tuo vivaio, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald via-emerald-mint to-emerald">
              architettati senza attriti.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Elimina i fogli Excel stropicciati e le emergenze domenicali. Mappa i reparti di floricoltura con il rigore dei migliori software gestionali moderni.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#demo" className="px-6 py-3 rounded-lg bg-emerald hover:bg-emerald-mint text-canvas text-xs font-semibold tracking-tight transition flex items-center space-x-2">
              <span>Prenota Demo Guidata</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#folders" className="px-5 py-3 rounded-lg bg-surface-1 hover:bg-surface-2 hairline-border text-xs font-medium text-ink transition">
              Apri i Reparti Interattivi ↓
            </a>
          </div>
        </div>
      </section>

      {/* 21st.dev Glass Folder Section */}
      <section id="folders" className="py-24 px-6 hairline-b bg-surface-1/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald">21st Component Showcase</div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Cartelle Reparto in Vetro Liquido 3D
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Passa il mouse per inclinare il vetro, clicca per estrarre le schede turni dello staff o premi <strong>+</strong> per assegnare un nuovo turno.
            </p>
          </div>

          {/* Interactive Folders Grid */}
          <div className="relative flex flex-wrap items-end justify-center gap-14 py-8">
            {/* Folder 1: Serra Calda */}
            <GlassFolder
              label="Serra Calda & Piante"
              meta="Domenica · 8 addetti"
              tone="dark"
              art="verdant"
              seed={5}
              action="add"
              labelPlacement="bottom-left"
              files={[
                { name: "Marco Rossi · 08:00 - 16:30", meta: "Fitoiatra Caporeparto", art: "verdant" },
                { name: "Alessia Conti · 08:30 - 17:00", meta: "Serre Tropicali", art: "dusk" },
                { name: "Luca Moretti · 09:00 - 18:00", meta: "Irrigazione & Cura", art: "ember" },
                { name: "Patentino DPR 290 · Certificato", meta: "Conforme 100%" }
              ]}
              onFileSelect={(file) => setSelectedStaff(`${file.name} (${file.meta})`)}
            />

            {/* Folder 2: Vivaio Esterno */}
            <GlassFolder
              label="Vivaio Esterno"
              meta="Domenica · 11 addetti"
              tone="dark"
              art="aurora"
              seed={18}
              action="more"
              labelPlacement="top-left"
              files={[
                { name: "Giulia Bianchi · 07:30 - 16:00", meta: "Agronomo Alberature", art: "aurora" },
                { name: "Davide Ferri · 08:00 - 17:00", meta: "Carrellista Patentato", art: "glacier" },
                { name: "Matteo Villa · 09:00 - 18:00", meta: "Piante da Frutto", art: "dusk" },
                { name: "Controllo Carico Scarico", meta: "Completato ore 07:15" }
              ]}
              menu={[
                { label: "Esporta PDF Turni" },
                { label: "Notifica SMS / WhatsApp" },
                { label: "Blocca Modifiche", danger: true }
              ]}
              onFileSelect={(file) => setSelectedStaff(`${file.name} (${file.meta})`)}
            />

            {/* Folder 3: Casse & Front */}
            <GlassFolder
              label="Casse & Accoglienza"
              meta="Domenica · 7 addetti"
              tone="dark"
              art="ember"
              seed={23}
              action="add"
              labelPlacement="bottom-left"
              files={[
                { name: "Sofia Neri · 09:30 - 19:30", meta: "Responsabile Chiusure Cassa", art: "ember" },
                { name: "Elena Colombo · 10:00 - 19:00", meta: "Cassa Rapida 02", art: "dusk" },
                { name: "Chiara Fontana · 14:00 - 20:00", meta: "Front Desk & Pacchi", art: "aurora" }
              ]}
              onFileSelect={(file) => setSelectedStaff(`${file.name} (${file.meta})`)}
            />
          </div>

          {selectedStaff && (
            <div className="max-w-md mx-auto p-4 rounded-xl bg-surface-2 hairline-border text-center font-mono text-xs text-emerald animate-fade-in">
              <span className="text-ink-muted">Scheda Turno Selezionata:</span> <br />
              <strong>{selectedStaff}</strong>
            </div>
          )}
        </div>
      </section>

      {/* Bento Grid Architecture */}
      <section id="architettura" className="py-24 px-6 hairline-b">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Architettura a reticolo da 1px.
            </h2>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              Mappatura precisa per le competenze floricole legali, apertura continuata domenicale e gestione bozze senza telefonate di panico allo store manager.
            </p>
          </div>

          <div className="hairline-grid rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 bg-surface-1 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-emerald uppercase tracking-wider mb-2">01 · MATRICE COMPETENZE</div>
                <h3 className="text-2xl font-bold text-ink tracking-tight mb-3">Impossibile assegnare la persona sbagliata.</h3>
                <p className="text-sm text-ink-muted leading-relaxed max-w-lg mb-8">
                  Patenti fitosanitarie, abilitazioni muletto e ruoli cassa: il sistema blocca automaticamente le scoperture legali prima che la settimana inizi.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-2 hairline-border font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-ink">
                  <span className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span>
                    <span>Patentino Fitosanitario (DPR 290)</span>
                  </span>
                  <span className="text-emerald font-semibold">2 Addetti in servizio</span>
                </div>
                <div className="flex items-center justify-between text-ink">
                  <span className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span>
                    <span>Responsabile Cassa & Chiusure</span>
                  </span>
                  <span className="text-emerald font-semibold">1 Addetto in servizio</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-surface-1 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider mb-2">02 · VELOCITÀ OPERATIVA</div>
                <h3 className="text-2xl font-bold text-ink tracking-tight mb-3">Da 6 ore a 20 minuti a settimana.</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Generazione automatica turni con rispetto del CCNL Florovivaismo e riposi compensativi.
                </p>
              </div>
              <div className="pt-8">
                <div className="text-5xl font-mono font-bold text-ink tracking-tight">-72%</div>
                <div className="text-xs text-ink-subtle mt-1 font-mono">Tempo risparmiato dallo store manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calcolatore" className="py-24 px-6 hairline-b bg-surface-1/40">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Calcolatore Efficienza Garden Center
            </h2>
            <p className="text-sm text-ink-muted max-w-xl mx-auto">
              Trascina il cursore sul numero di addetti per stimare il tempo e i costi recuperati.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-xl hairline-border bg-surface-1 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-ink">Dipendenti e collaboratori:</span>
                <span className="text-emerald font-mono font-bold text-lg">{calcStaff} addetti</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={calcStaff}
                step="5"
                className="w-full accent-emerald bg-surface-3 h-2 rounded-lg cursor-pointer"
                onChange={(e) => setCalcStaff(parseInt(e.target.value))}
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-hairline font-mono text-center">
              <div className="p-4 rounded-lg bg-surface-2 hairline-border">
                <div className="text-2xl font-bold text-emerald">{hoursSaved} h</div>
                <div className="text-[11px] text-ink-subtle mt-1 font-sans">Ore manageriali annue recuperate</div>
              </div>
              <div className="p-4 rounded-lg bg-surface-2 hairline-border">
                <div className="text-2xl font-bold text-ink">€ {eurSaved.toLocaleString("it-IT")}</div>
                <div className="text-[11px] text-ink-subtle mt-1 font-sans">Valore di produttività</div>
              </div>
              <div className="p-4 rounded-lg bg-surface-2 hairline-border">
                <div className="text-2xl font-bold text-terracotta">0 Multe</div>
                <div className="text-[11px] text-ink-subtle mt-1 font-sans">Conformità CCNL garantita</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hairline-t bg-canvas py-12 px-6 text-xs text-ink-subtle">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-ink">GardenShift</span>
            <span>•</span>
            <span>Piattaforma B2B Florovivaistica</span>
          </div>
          <div className="flex items-center space-x-6 font-mono text-[11px]">
            <span>Conforme CCNL Florovivaismo</span>
            <span>21st.dev Component Powered</span>
            <span>© 2026 GardenShift</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
