import { MapPin, FileText, Building } from 'lucide-react'

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
    icon: Building,
    title: 'Gestão Técnica do Ativo Construído',
    description: 'Organização e acompanhamento do desempenho técnico da edificação ao longo de sua vida útil, com foco na preservação do valor patrimonial e na mitigação de riscos operacionais.',
  },
]

export function TresGestoes() {
  return (
    <section id="tres-gestoes" className="bg-white py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 md:text-4xl">
          As Três Gestões
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          Atuam de forma integrada ao longo do ciclo de vida útil do ativo, compondo um único sistema de governança técnica.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {gestoes.map((gestao) => (
            <div
              key={gestao.title}
              className="flex flex-col items-center rounded-xl bg-[#F7F8FC] p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#137FEC]">
                <gestao.icon className="h-7 w-7 stroke-[1.5] text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b]">{gestao.title}</h3>
              <p className="mt-3 text-[#1e293b]/85">{gestao.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
