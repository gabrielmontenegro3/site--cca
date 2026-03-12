import { ListChecks, Box, Check } from 'lucide-react'

const itens = [
  'Atuação técnica em campo',
  'Método aplicado',
  'Plataforma de informação',
  'Gestão orientada ao risco',
  'Governança técnica contínua',
]

export function Metodologia() {
  return (
    <section id="metodologia" className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 md:text-4xl">
          Metodologia
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          O modelo da CCA integra atuação em campo, método e tecnologia para decisões antecipadas, rastreáveis e qualificadas.
        </p>
        <div className="rounded-xl bg-[#F7F8FC] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-12">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]">
              <Box className="h-7 w-7 stroke-[1.5] text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1e293b]">O modelo da CCA integra:</h3>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {itens.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                  <ListChecks className="h-4 w-4 stroke-[1.5] text-[#137FEC]" />
                </span>
                <span className="text-[#1e293b]/90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-[#F7F8FC] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <p className="font-medium text-[#1e293b]">Essa integração permite decisões:</p>
            <ul className="mt-4 flex flex-wrap gap-4">
              {['Antecipadas', 'Rastreáveis', 'Qualificadas'].map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <Check className="h-5 w-5 stroke-[1.5] text-[#137FEC]" />
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
