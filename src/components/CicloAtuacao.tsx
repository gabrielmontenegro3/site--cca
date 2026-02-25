import { Search, ClipboardCheck, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Inspeção',
    description: 'Mapeamento minucioso para identificação de falhas, manifestações patológicas e não conformidades em relação aos requisitos técnicos.',
    icon: Search,
  },
  {
    number: '2',
    title: 'Diagnóstico',
    description: 'Análise técnica das manifestações identificadas, com classificação de criticidade, mecanismos de degradação e impactos funcionais.',
    icon: ClipboardCheck,
  },
  {
    number: '3',
    title: 'Prognóstico',
    description: 'Avaliação da evolução dos processos de degradação, redução de vida útil e impacto na disponibilidade operacional do ativo.',
    icon: TrendingUp,
  },
]

export function CicloAtuacao() {
  return (
    <section id="ciclo" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          O Ciclo de Atuação
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#1e293b]/80">
          Nossa metodologia de Engenharia Diagnóstica é estruturada em três pilares fundamentais para garantir a longevidade do ativo.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[8px] border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#137FEC]">
                <step.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b]">
                {step.number}. {step.title}
              </h3>
              <p className="mt-4 text-[#1e293b]/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
