import { BarChart3, Link2, AlertTriangle } from 'lucide-react'

const features = [
  {
    title: 'Suporte à Tomada de Decisão',
    description: 'Informação técnica estruturada para qualificar decisões de manutenção, reabilitação e gestão do ativo.',
    icon: BarChart3,
  },
  {
    title: 'Integração Diagnóstica',
    description: 'Conecta inspeção, diagnóstico e prognóstico em um fluxo contínuo de governança técnica.',
    icon: Link2,
  },
  {
    title: 'Priorização de Intervenções',
    description: 'Escalonamento técnico da atuação com base em criticidade e impacto operacional.',
    icon: AlertTriangle,
  },
]

export function Governanca() {
  return (
    <section id="governanca" className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Governança Técnica do{' '}
              <span className="text-[#137FEC]">Ativo Construído</span>
            </h2>
            <div className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="mt-2 text-slate-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[8px] border border-slate-600/50 bg-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
              alt="Dashboard técnico"
              className="h-80 w-full object-cover opacity-90 lg:h-96"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0F172A]/80">
              <span className="text-5xl font-bold text-white">100%</span>
              <span className="mt-2 text-lg font-semibold uppercase tracking-wider text-white">
                Robustez da Base Técnica
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
