const cards = [
  {
    title: 'Variações Térmicas',
    description: 'Stress estrutural por ciclos térmicos contínuos em processos industriais.',
    icon: (
      <svg className="h-8 w-8 text-[#137FEC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m0-18l-4 4m4-4l4 4M12 21l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: 'Vibrações',
    description: 'Impacto mecânico e fadiga de materiais em sistemas operacionais.',
    icon: (
      <svg className="h-8 w-8 text-[#137FEC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 12h16M4 16h16" />
      </svg>
    ),
  },
  {
    title: 'Umidade',
    description: 'Corrosão e degradação química em ambientes de alta agressividade.',
    icon: (
      <svg className="h-8 w-8 text-[#137FEC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
      </svg>
    ),
  },
  {
    title: 'Interfaces',
    description: 'Complexidade de integração entre infraestrutura e sistemas de processo.',
    icon: (
      <svg className="h-8 w-8 text-[#137FEC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9a9 9 0 009 9m0 0a9 9 0 019-9" />
      </svg>
    ),
  },
]

export function ContextoAtivo() {
  return (
    <section id="contexto" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[8px] border border-slate-200/80 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-bold text-[#1e293b]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#1e293b]/80">{card.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1e293b]">
              Contexto do{' '}
              <span className="text-[#137FEC]">Ativo Industrial</span>
            </h2>
            <p className="mt-6 text-[#1e293b]/80">
              Ativos industriais enfrentam exposição contínua a variáveis críticas que impactam diretamente a integridade funcional.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Monitoramento da degradação em sistemas com prazos não programados.',
                'Análise de risco baseada em dados reais de exposição operacional.',
                'Garantia da segurança estrutural em ambientes de alta criticidade.',
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#137FEC]">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#1e293b]/80">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
