const cards = [
  {
    title: 'Evolução dos processos de degradação',
    icon: '📉',
  },
  {
    title: 'Redução de vida útil',
    icon: '⏱️',
  },
  {
    title: 'Risco funcional',
    icon: '⚠️',
  },
  {
    title: 'Impacto na disponibilidade operacional',
    icon: '🔄',
  },
]

export function Prognostico() {
  return (
    <section id="prognostico" className="bg-white py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-800">
          Prognóstico
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600">
          A partir do diagnóstico, é estabelecido o prognóstico técnico quanto à:
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-xl bg-[#F7F8FC] p-6 transition hover:shadow-md"
            >
              <span className="mb-4 text-3xl" aria-hidden>
                {card.icon}
              </span>
              <h3 className="font-semibold text-slate-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
