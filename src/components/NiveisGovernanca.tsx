const cards = [
  {
    title: 'A criticidade das decisões envolvidas',
  },
  {
    title: 'A quantidade de interfaces técnicas existentes',
  },
  {
    title: 'O nível de risco associado ao desempenho do ativo',
  },
]

export function NiveisGovernanca() {
  return (
    <section id="niveis" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Níveis de Governança
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-slate-300">
          Representam o grau de profundidade, controle e integração aplicado à atuação técnica, variando conforme:
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-lg border border-slate-600 bg-slate-800 p-8"
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
