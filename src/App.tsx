import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Hero } from './components/Hero'
import { HeroIndustrial } from './components/HeroIndustrial'
import { QuemSomos } from './components/QuemSomos'
import { OndeAtuamos } from './components/OndeAtuamos'
import { TresGestoes } from './components/TresGestoes'
import { Metodologia } from './components/Metodologia'
import { Plataforma } from './components/Plataforma'
import { Parceiros } from './components/Parceiros'
import { ContextoAtivo } from './components/ContextoAtivo'
import { Inspecao } from './components/Inspecao'
import { Diagnostico } from './components/Diagnostico'
import { Prognostico } from './components/Prognostico'
import { MetodologiaReabilitacao } from './components/MetodologiaReabilitacao'
import { Aplicacoes } from './components/Aplicacoes'
import { Desdobramento } from './components/Desdobramento'
import { Governanca } from './components/Governanca'
import { NiveisGovernanca } from './components/NiveisGovernanca'
import { Contato } from './components/Contato'

type SiteMode = 'industrial' | 'institucional'

function App() {
  const [siteMode, setSiteMode] = useState<SiteMode>('institucional')
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [siteMode])

  const handleModeChange = (mode: SiteMode) => {
    if (mode !== siteMode) setSiteMode(mode)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header siteMode={siteMode} onSiteModeChange={handleModeChange} />
      <main className="relative">
        <div key={siteMode} className="site-content-enter">
          {siteMode === 'industrial' ? (
            <>
              <HeroIndustrial />
              <ContextoAtivo />
              <Inspecao />
              <Diagnostico />
              <Prognostico />
              <MetodologiaReabilitacao />
              <Aplicacoes />
              <Desdobramento />
              <Governanca />
              <NiveisGovernanca />
              <Contato />
            </>
          ) : (
            <>
              <Hero />
              <QuemSomos />
              <OndeAtuamos />
              <TresGestoes />
              <Metodologia />
              <Plataforma />
              <Parceiros />
              <Contato />
            </>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
