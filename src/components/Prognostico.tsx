import { TrendingDown, Clock, AlertCircle, RefreshCw } from 'lucide-react'

const cards = [
  {
    title: 'Evolução dos processos de degradação',
    icon: TrendingDown,
  },
  {
    title: 'Redução de vida útil',
    icon: Clock,
  },
  {
    title: 'Risco funcional',
    icon: AlertCircle,
  },
  {
    title: 'Impacto na disponibilidade operacional',
    icon: RefreshCw,
  },
]

export function Prognostico() {
  return (
    <section id="prognostico" className="bg-white py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800">
          Prognóstico
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          A partir do diagnóstico, é estabelecido o prognóstico técnico quanto à:
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="flex flex-col items-center rounded-xl bg-[#F7F8FC] p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center text-[#137FEC]" aria-hidden>
                  <Icon className="h-6 w-6 stroke-[1.5]" />
                </span>
                <h3 className="font-semibold text-slate-700 leading-snug">{card.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
