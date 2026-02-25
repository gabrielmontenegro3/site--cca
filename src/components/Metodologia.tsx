export function Metodologia() {
  return (
    <section id="metodologia" className="bg-white py-20" aria-label="Metodologia de Reabilitação">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Metodologia de Reabilitação
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              As metodologias de reabilitação são definidas considerando as condições específicas de operação do ativo, permitindo:
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                Planejamento por setor ou sistema
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                Execução em áreas segregadas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                Compatibilização com janelas operacionais
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                Continuidade das atividades produtivas
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
              alt="Metodologia de reabilitação"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
