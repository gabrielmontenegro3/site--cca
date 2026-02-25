import { ClipboardList, Shield, Wrench, BarChart3, CheckCircle } from 'lucide-react'

const aplicacoes = [
  { text: 'Planejamento de intervenções', icon: ClipboardList },
  { text: 'Redução de risco técnico', icon: Shield },
  { text: 'Suporte à manutenção estratégica', icon: Wrench },
  { text: 'Previsibilidade de falhas', icon: BarChart3 },
  { text: 'Preservação da integridade funcional', icon: CheckCircle },
]

export function Aplicacoes() {
  return (
    <section id="aplicacoes" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-[#1e293b]">
          Aplicações
        </h2>
        <p className="mb-12 text-center text-lg text-[#1e293b]/80">
          A informação técnica produzida permite:
        </p>
        <ul className="space-y-4">
          {aplicacoes.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-4 rounded-[8px] border border-slate-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                <item.icon className="h-6 w-6 text-[#137FEC]" />
              </span>
              <span className="text-lg font-medium text-[#1e293b]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
