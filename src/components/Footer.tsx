import logoUrl from '../assets/logo cca collor (1).png'

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#0F172A] py-10">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#" className="block">
          <img
            src={logoUrl}
            alt="CCA Engenharia"
            className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
          />
        </a>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} CCA Engenharia. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
