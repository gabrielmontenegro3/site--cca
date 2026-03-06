import { ArrowRight, Layout, Shield, Building2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1e293b] md:text-5xl">
              Governança Técnica do{' '}
              <span className="text-[#137FEC]">Ativo Construído</span>
            </h1>
            <p className="mt-4 text-lg italic text-[#1e293b]/80">
              A engenharia como estrutura permanente de apoio à decisão
            </p>
            <p className="mt-6 text-[#1e293b]/90">
              A CCA organiza a engenharia como estrutura permanente de apoio à decisão ao longo do ciclo de vida do ativo construído.
            </p>
            <p className="mt-3 text-[#1e293b]/80">
              Por meio da Engenharia Diagnóstica e de metodologia técnica estruturada, atuamos na inspeção, reabilitação e gestão da garantia predial e industrial.
            </p>
            <p className="mt-4 font-medium text-[#1e293b]">Aplicada às fases de:</p>
            <ul className="mt-3 space-y-2">
              {[
                { icon: Layout, label: 'Produção' },
                { icon: Shield, label: 'Garantia' },
                { icon: Building2, label: 'Operação do ativo' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                    <item.icon className="h-4 w-4 text-[#137FEC]" />
                  </span>
                  <span className="text-[#1e293b]/90">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-nowrap gap-3 md:flex-wrap md:gap-4">
              <a
                href="#metodologia"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] bg-[#137FEC] px-4 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(19,127,236,0.35)] transition hover:opacity-90 md:gap-2 md:px-8 md:py-4 md:text-base"
              >
                Conhecer Metodologia
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#contato"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-[#137FEC] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:bg-slate-50 md:gap-2 md:px-8 md:py-4 md:text-base"
              >
                Acessar Plataforma
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[8px] border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                alt="Governança técnica"
                className="h-[400px] w-full object-cover lg:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
