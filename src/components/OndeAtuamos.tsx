import { HardHat, FileCheck, Factory, Check } from 'lucide-react'

const contextos = [
  {
    id: 'producao',
    icon: HardHat,
    title: 'Empreendimentos em Produção',
    subtitle: 'Construtoras e Incorporadoras',
    description: 'A atuação inicia-se desde o início da obra, com foco na análise prévia dos métodos executivos e identificação de evidências técnicas que possam resultar em anomalias ao longo do ciclo de vida do ativo.',
  },
  {
    id: 'garantia',
    icon: FileCheck,
    title: 'Ativos em Garantia',
    description: 'Estruturação técnica das ocorrências registradas durante o período de responsabilidade da construtora, com foco no enquadramento de responsabilidades e qualificação das decisões de intervenção.',
  },
  {
    id: 'operacao',
    icon: Factory,
    title: 'Ativos em Operação',
    subtitle: 'Indústria, shopping, hospital, etc.',
    description: 'Inspeção e diagnóstico de sistemas construtivos sujeitos à degradação em ambiente operacional, expostos a variações térmicas, umidade, agentes físico-químicos e cargas operacionais.',
    bullets: [
      'Classificação de ocorrências',
      'Apoio à manutenção ou substituição de sistemas',
      'Redução do risco de indisponibilidade operacional',
    ],
    highlights: [
      'Por setor ou sistema',
      'Em áreas segregadas',
      'Sem paralisação integral da operação',
    ],
  },
]

export function OndeAtuamos() {
  return (
    <section id="onde-atuamos" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          Onde a CCA Atua
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#1e293b]/80">
          Atuação aplicada às fases de produção, garantia e operação do ativo — desde a obra até indústria em operação.
        </p>
        <div className="mt-16 space-y-10">
          {contextos.map((ctx) => (
            <div
              key={ctx.id}
              className="rounded-[8px] border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-10"
            >
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
                  <ctx.icon className="h-7 w-7 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-[#1e293b]">{ctx.title}</h3>
                  {ctx.subtitle && (
                    <p className="mt-1 text-sm text-[#137FEC] font-medium">{ctx.subtitle}</p>
                  )}
                  <p className="mt-4 text-[#1e293b]/85">{ctx.description}</p>
                  {ctx.bullets && (
                    <p className="mt-4 font-medium text-[#1e293b]">A atuação permite:</p>
                  )}
                  {ctx.bullets && (
                    <ul className="mt-2 space-y-1">
                      {ctx.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-[#1e293b]/85">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#137FEC]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {ctx.highlights && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {ctx.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-2 rounded-[8px] bg-[#137FEC]/10 px-3 py-1.5 text-sm font-medium text-[#137FEC]"
                        >
                          <Check className="h-4 w-4" />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
