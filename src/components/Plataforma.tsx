import { MessageSquare, FolderOpen, ListChecks, Workflow, ArrowRight } from 'lucide-react'

const itens = [
  { icon: MessageSquare, text: 'Chamados técnicos' },
  { icon: FolderOpen, text: 'Evidências registradas' },
  { icon: ListChecks, text: 'Classificação conforme normas aplicáveis' },
  { icon: Workflow, text: 'Fluxo de atendimento técnico' },
]

export function Plataforma() {
  return (
    <section id="plataforma" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          Plataforma CCA
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#1e293b]/80">
          Ambiente digital que materializa a Governança Técnica do Ativo Construído, sustentando decisões ao longo do ciclo de vida do ativo.
        </p>
        <div className="mt-16 rounded-[8px] border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-12">
          <p className="text-[#1e293b]/90">
            A plataforma organiza:
          </p>
          <ul className="mt-6 space-y-4">
            {itens.map((item) => (
              <li key={item.text} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
                  <item.icon className="h-5 w-5 text-white" />
                </span>
                <span className="text-[#1e293b]/90">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3 rounded-[8px] bg-white p-4 border border-slate-200/60">
            <span className="font-semibold text-[#1e293b]">Fluxo:</span>
            <span className="text-[#1e293b]/80">Atendimento → Chamado → Serviço</span>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#137FEC] px-8 py-4 font-semibold text-white shadow-[0_2px_12px_rgba(19,127,236,0.35)] transition hover:opacity-90"
            >
              Acessar Plataforma
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
