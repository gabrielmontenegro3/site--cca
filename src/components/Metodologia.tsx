import { ClipboardCheck, Layers, Check } from 'lucide-react'

const itens = [
  'Atuação técnica em campo',
  'Método aplicado',
  'Plataforma de informação',
  'Gestão orientada ao risco',
  'Governança técnica contínua',
]

export function Metodologia() {
  return (
    <section id="metodologia" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          Metodologia
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#1e293b]/80">
          O modelo da CCA integra atuação em campo, método e tecnologia para decisões antecipadas, rastreáveis e qualificadas.
        </p>
        <div className="mt-16 rounded-[8px] border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-12">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
              <Layers className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1e293b]">O modelo da CCA integra:</h3>
            </div>
          </div>
          <ul className="mt-8 space-y-4">
            {itens.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                  <ClipboardCheck className="h-4 w-4 text-[#137FEC]" />
                </span>
                <span className="text-[#1e293b]/90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-[8px] bg-[#137FEC]/5 p-6">
            <p className="font-medium text-[#1e293b]">Essa integração permite decisões:</p>
            <ul className="mt-4 flex flex-wrap gap-4">
              {['Antecipadas', 'Rastreáveis', 'Qualificadas'].map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#137FEC]" />
                  <span className="text-[#1e293b]/90">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
