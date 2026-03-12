import { List, Shield, Wrench, BarChart2, Check } from 'lucide-react'

const aplicacoes = [
  { text: 'Planejamento de intervenções', icon: List },
  { text: 'Redução de risco técnico', icon: Shield },
  { text: 'Suporte à manutenção estratégica', icon: Wrench },
  { text: 'Previsibilidade de falhas', icon: BarChart2 },
  { text: 'Preservação da integridade funcional', icon: Check },
]

export function Aplicacoes() {
  return (
    <section id="aplicacoes" className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800">
          Aplicações
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          A informação técnica produzida permite:
        </p>
        <ul className="space-y-4">
          {aplicacoes.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-4 rounded-xl bg-[#F7F8FC] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                <item.icon className="h-6 w-6 stroke-[1.5] text-[#137FEC]" />
              </span>
              <span className="text-lg font-medium text-[#1e293b]">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
