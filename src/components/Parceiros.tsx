// Carrega todos os logos da pasta assets/parceiros (inclui .png e .jpg)
const imageModules = import.meta.glob<{ default: string }>(
  '../assets/parceiros/*.{png,jpg,jpeg}',
  { eager: true }
)

const parceirosRaw = Object.entries(imageModules).map(([path, mod]) => {
  const fileName = path.replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '')
  const alt = fileName
    .replace(/[-_]/g, ' ')
    .replace(/\d+$/, '')
    .trim() || 'Parceiro'
  return { src: mod.default, alt, fileName: fileName.toLowerCase() }
})

const parceirosSorted = [...parceirosRaw].sort((a, b) => {
  if (a.fileName === 'download') return -1
  if (b.fileName === 'download') return 1
  if (a.fileName === 'arkos') return 1
  if (b.fileName === 'arkos') return -1
  return 0
})

// Nacional Gas no lugar da BTB (swap de posição)
const parceiros = [...parceirosSorted]
const idxNacional = parceiros.findIndex((p) => p.fileName.includes('nacional-gas'))
const idxBTB = parceiros.findIndex((p) => p.fileName.includes('btb'))
if (idxNacional >= 0 && idxBTB >= 0) {
  ;[parceiros[idxNacional], parceiros[idxBTB]] = [parceiros[idxBTB], parceiros[idxNacional]]
}

export function Parceiros() {
  return (
    <section id="empresas" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          Empresas que Acreditam na CCA
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#1e293b]/80">
          Empresas que confiam na CCA para governança técnica do ativo construído.
        </p>
        <div className="mt-16 mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-4 rounded-[8px] border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:gap-6 lg:gap-8 lg:p-10">
          {parceiros.map((parceiro) => {
            const isNacionalGas = parceiro.fileName.includes('nacional-gas')
            const isOasis = parceiro.fileName.includes('oasis-logo')
            const getContainerClass = () => {
              if (isNacionalGas)
                return 'h-40 w-[calc((100%-2rem)/3)] sm:h-44 md:w-[calc((100%-4.5rem)/4)] lg:h-56 lg:w-[calc((100%-6rem)/4)] flex shrink-0 min-w-0 items-center justify-center p-3'
              if (isOasis)
                return 'h-36 w-[calc((100%-2rem)/3)] sm:h-40 md:w-[calc((100%-4.5rem)/4)] lg:h-48 lg:w-[calc((100%-6rem)/4)] flex shrink-0 items-center justify-center p-3'
              return 'h-24 w-[calc((100%-2rem)/3)] sm:h-28 md:w-[calc((100%-4.5rem)/4)] lg:h-32 lg:w-[calc((100%-6rem)/4)] flex shrink-0 items-center justify-center p-3'
            }
            const getImgClass = () => {
              if (isNacionalGas) return 'max-w-[480px]'
              if (isOasis) return 'max-w-[400px]'
              return 'max-w-[180px]'
            }
            return (
              <div key={parceiro.src} className={getContainerClass()}>
                <img
                  src={parceiro.src}
                  alt={parceiro.alt}
                  className={`max-h-full w-full object-contain object-center transition duration-200 hover:opacity-90 ${getImgClass()}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
