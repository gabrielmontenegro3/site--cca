import { MapPin, FileText, Building2 } from 'lucide-react'

const gestoes = [
  {
    icon: MapPin,
    title: 'Gestão Técnica Multidisciplinar em Campo',
    description: 'Atuação desde as fases iniciais da obra, com foco na análise dos métodos executivos e na identificação de evidências técnicas que possam resultar em anomalias ao longo da vida útil do ativo.',
  },
  {
    icon: FileText,
    title: 'Gestão Técnica da Garantia Predial',
    description: 'Estruturação técnica das ocorrências registradas durante o período de responsabilidade da construtora, promovendo rastreabilidade e apoio à condução das responsabilidades construtivas.',
  },
  {
    icon: Building2,
    title: 'Gestão Técnica do Ativo Construído',
    description: 'Organização e acompanhamento do desempenho técnico da edificação ao longo de sua vida útil, com foco na preservação do valor patrimonial e na mitigação de riscos operacionais.',
  },
]

export function TresGestoes() {
  return (
    <section id="tres-gestoes" className="bg-white py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          As Três Gestões
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#1e293b]/80">
          Atuam de forma integrada ao longo do ciclo de vida útil do ativo, compondo um único sistema de governança técnica.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {gestoes.map((gestao) => (
            <div
              key={gestao.title}
              className="rounded-[8px] border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#137FEC]">
                <gestao.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b]">{gestao.title}</h3>
              <p className="mt-4 text-[#1e293b]/85">{gestao.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
