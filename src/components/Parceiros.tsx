// Carrega todos os logos da pasta assets/parceiros (inclui .png e .jpg)
const imageModules = import.meta.glob<{ default: string }>(
  '../assets/parceiros/*.{png,jpg,jpeg}',
  { eager: true }
)

const parceiros = Object.entries(imageModules).map(([path, mod]) => {
  const fileName = path.replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '')
  const alt = fileName
    .replace(/[-_]/g, ' ')
    .replace(/\d+$/, '')
    .trim() || 'Parceiro'
  return { src: mod.default, alt }
})

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
        <div className="mt-16 mx-auto max-w-4xl grid grid-cols-2 place-items-center gap-6 rounded-[8px] border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:grid-cols-3 md:grid-cols-4 lg:gap-8 lg:p-10">
          {parceiros.map((parceiro) => (
            <div
              key={parceiro.src}
              className="flex h-20 w-full items-center justify-center p-3 sm:h-24 lg:h-28"
            >
              <img
                src={parceiro.src}
                alt={parceiro.alt}
                className="max-h-full max-w-[120px] w-full object-contain object-center transition duration-200 hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
