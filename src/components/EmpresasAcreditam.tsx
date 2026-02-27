export function EmpresasAcreditam() {
  return (
    <section id="empresas" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">
          Empresas que Acreditam na CCA
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#1e293b]/80">
          Empresas que confiam na CCA para governança técnica do ativo construído.
        </p>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 rounded-[8px] border border-slate-200/80 border-dashed bg-white p-12 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
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
