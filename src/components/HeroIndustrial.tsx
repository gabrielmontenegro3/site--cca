import { ArrowRight } from 'lucide-react'

export function HeroIndustrial() {
  return (
    <section className="bg-[#F8FAFC] py-10 lg:py-14">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rounded-[8px] bg-[#137FEC]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#137FEC]">
              Programas de Diagnóstica Avançada
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#1e293b] md:text-5xl">
              Integridade do Ativo Construído em{' '}
              <span className="text-[#137FEC]">Ambiente Industrial.</span>
            </h1>
            <p className="mt-4 text-lg text-[#1e293b]/90">
              Inspeção, Diagnóstico e Prognóstico Técnico de Sistemas Construtivos em Operação.
            </p>
            <p className="mt-3 text-[#1e293b]/80">
              Atuação fundamentada na Engenharia Diagnóstica aplicada à análise do comportamento de sistemas construtivos expostos a solicitações físicas, químicas e operacionais inerentes ao ambiente industrial.
            </p>
            <a
              href="#metodologia-reabilitacao"
              className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#137FEC] px-8 py-4 font-semibold text-white shadow-[0_2px_12px_rgba(19,127,236,0.35)] transition hover:opacity-90"
            >
              Conhecer Metodologia de Atuação
              <ArrowRight className="h-5 w-5 stroke-[1.5]" />
            </a>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[8px] border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Ambiente industrial"
                className="h-[400px] w-full object-cover grayscale lg:h-[480px]"
              />
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-[8px] border border-slate-200/60 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Manutenção Técnica</p>
                <p className="font-bold text-[#1e293b]">Padrões Normativos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
