export function MetodologiaReabilitacao() {
  return (
    <section id="metodologia-reabilitacao" className="bg-white py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1e293b]">
              Metodologia de Reabilitação
            </h2>
            <p className="mt-6 text-[#1e293b]/85">
              As metodologias de reabilitação são definidas considerando as condições específicas de operação do ativo, permitindo:
            </p>
            <ul className="mt-6 space-y-3 text-[#1e293b]/85">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#137FEC]" />
                Planejamento por setor ou sistema
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#137FEC]" />
                Execução em áreas segregadas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#137FEC]" />
                Compatibilização com janelas operacionais
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#137FEC]" />
                Continuidade das atividades produtivas
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
              alt="Metodologia de reabilitação"
              className="rounded-[8px] border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
