import { Search, FileCheck, TrendingUp } from 'lucide-react'

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
    icon: FileCheck,
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
    <section id="ciclo" className="bg-white py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 md:text-4xl">
          O Ciclo de Atuação
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          Nossa metodologia de Engenharia Diagnóstica é estruturada em três pilares fundamentais para garantir a longevidade do ativo.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-[#F7F8FC] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#137FEC]">
                <step.icon className="h-7 w-7 stroke-[1.5] text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b]">
                {step.number}. {step.title}
              </h3>
              <p className="mt-3 text-[#1e293b]/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
