import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ContextoAtivo } from './components/ContextoAtivo'
import { CicloAtuacao } from './components/CicloAtuacao'
import { Aplicacoes } from './components/Aplicacoes'
import { Governanca } from './components/Governanca'
import { Contato } from './components/Contato'

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main>
        <Hero />
        <ContextoAtivo />
        <CicloAtuacao />
        <Aplicacoes />
        <Governanca />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App
