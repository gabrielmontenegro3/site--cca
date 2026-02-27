import logoUrl from '../assets/logo cca collor (1).png'
import { SiteToggle } from './SiteToggle'

type SiteMode = 'industrial' | 'institucional'

const navLinksInstitucional = [
  { href: '#', label: 'Home' },
  { href: '#quem-somos', label: 'Quem é a CCA' },
  { href: '#onde-atuamos', label: 'Onde Atuamos' },
  { href: '#tres-gestoes', label: 'As Três Gestões' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#empresas', label: 'Empresas que Acreditam' },
  { href: '#contato', label: 'Contato' },
]

const navLinksIndustrial = [
  { href: '#', label: 'Home' },
  { href: '#contexto', label: 'Contexto' },
  { href: '#inspecao', label: 'Inspeção' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#metodologia-reabilitacao', label: 'Metodologia' },
  { href: '#governanca', label: 'Governança' },
  { href: '#contato', label: 'Contato' },
]

interface HeaderProps {
  siteMode: SiteMode
  onSiteModeChange: (mode: SiteMode) => void
}

export function Header({ siteMode, onSiteModeChange }: HeaderProps) {
  const navLinks = siteMode === 'industrial' ? navLinksIndustrial : navLinksInstitucional

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <nav className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
        {/* Linha 1: Logo à esquerda | Links + CTA à direita */}
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="shrink-0">
            <img
              src={logoUrl}
              alt="CCA Engenharia"
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            />
          </a>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-3 lg:gap-5">
            <div className="flex items-center gap-3 overflow-x-auto lg:gap-5 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium text-[#1e293b]/80 transition hover:text-[#1e293b]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contato"
              className="shrink-0 rounded-[8px] bg-[#137FEC] px-4 py-2 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(19,127,236,0.35)] transition hover:opacity-90"
            >
              Acessar Plataforma
            </a>
          </div>
        </div>
        {/* Linha 2: Toggle centralizado */}
        <div className="flex justify-center pt-3 border-t border-slate-100 mt-3">
          <SiteToggle mode={siteMode} onModeChange={onSiteModeChange} />
        </div>
      </nav>
    </header>
  )
}
