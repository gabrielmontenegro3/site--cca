import logoUrl from '../assets/logo cca collor (1).png'

export function Header() {
  const navLinks = [
    { href: '#ciclo', label: 'Metodologia' },
    { href: '#contexto', label: 'Sobre nós' },
    { href: '#aplicacoes', label: 'Aplicações' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="block">
          <img
            src={logoUrl}
            alt="CCA Engenharia"
            className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
          />
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text)]/80 transition hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-[8px] bg-[#137FEC] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(19,127,236,0.35)] transition hover:opacity-90"
          >
            Acessar Plataforma
          </a>
        </div>
      </nav>
    </header>
  )
}
