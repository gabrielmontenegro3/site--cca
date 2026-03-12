export function EmpresasAcreditam() {
  return (
    <section id="empresas" className="bg-white py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 md:text-4xl">
          Empresas que Acreditam na CCA
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-slate-600">
          Empresas que confiam na CCA para governança técnica do ativo construído.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl bg-[#F7F8FC] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <p className="text-center text-slate-500">
            Inserir logos das empresas parceiras
          </p>
          {/* Quando tiver os logos, use algo como:
          <img src="..." alt="Empresa 1" className="h-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100" />
          */}
        </div>
      </div>
    </section>
  )
}
