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
        <div className="mt-16 grid grid-cols-2 place-items-center gap-8 rounded-[8px] border border-slate-200/80 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-12 lg:p-12">
          {parceiros.map((parceiro) => (
            <div
              key={parceiro.src}
              className="flex h-24 w-full items-center justify-center p-4 transition hover:opacity-100 sm:h-28 lg:h-32"
            >
              <img
                src={parceiro.src}
                alt={parceiro.alt}
                className="max-h-full w-full object-contain object-center opacity-80 grayscale transition duration-200 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
