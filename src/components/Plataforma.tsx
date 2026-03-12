import { MessageCircle, Folder, ListTodo, GitBranch, ArrowRight } from 'lucide-react'

const itens = [
  { icon: MessageCircle, text: 'Chamados técnicos' },
  { icon: Folder, text: 'Evidências registradas' },
  { icon: ListTodo, text: 'Classificação conforme normas aplicáveis' },
  { icon: GitBranch, text: 'Fluxo de atendimento técnico' },
]

export function Plataforma() {
  return (
    <section id="plataforma" className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 md:text-4xl">
          Plataforma CCA
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          Ambiente digital que materializa a Governança Técnica do Ativo Construído, sustentando decisões ao longo do ciclo de vida do ativo.
        </p>
        <div className="rounded-xl bg-[#F7F8FC] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-12">
          <p className="text-[#1e293b]/90">
            A plataforma organiza:
          </p>
          <ul className="mt-4 space-y-3">
            {itens.map((item) => (
              <li key={item.text} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
                  <item.icon className="h-5 w-5 stroke-[1.5] text-white" />
                </span>
                <span className="text-[#1e293b]/90">{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#F7F8FC] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <span className="font-semibold text-[#1e293b]">Fluxo:</span>
            <span className="text-[#1e293b]/80">Atendimento → Chamado → Serviço</span>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#137FEC] px-8 py-4 font-semibold text-white shadow-[0_2px_12px_rgba(19,127,236,0.35)] transition hover:opacity-90"
            >
              Acessar Plataforma
              <ArrowRight className="h-5 w-5 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
