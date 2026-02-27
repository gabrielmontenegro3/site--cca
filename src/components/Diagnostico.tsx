const cards = [
  {
    title: 'Classificação do nível de criticidade',
    icon: '📊',
  },
  {
    title: 'Identificação de mecanismos de degradação',
    icon: '🔍',
  },
  {
    title: 'Avaliação do desempenho dos sistemas',
    icon: '📈',
  },
  {
    title: 'Determinação de impactos funcionais',
    icon: '⚙️',
  },
]

export function Diagnostico() {
  return (
    <section id="diagnostico" className="bg-[#F7F9FA] py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-slate-800">
          Diagnóstico
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600">
          Com base nas informações levantadas em campo, é realizado o diagnóstico técnico das manifestações identificadas, incluindo:
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
