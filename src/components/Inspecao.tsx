import imgInspecao from '../assets/parceiros/Image_fx (1).png'

export function Inspecao() {
  return (
    <section id="inspecao" className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800">
          Inspeção e Reabilitação com metodologia
        </h2>
        <div className="mb-8">
          <img
            src={imgInspecao}
            alt="Inspeção técnica"
            className="mx-auto rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          />
        </div>
        <div className="space-y-3 rounded-xl bg-[#F7F8FC] p-6 text-base text-slate-600 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <p>
            A atuação da CCA inicia-se por meio da inspeção técnica de sistemas e subsistemas construtivos sujeitos à degradação durante a operação do ativo.
          </p>
          <p>
            A inspeção permite identificar evidências técnicas de falhas, anomalias e não conformidades que possam comprometer o desempenho funcional da edificação industrial.
          </p>
        </div>
      </div>
    </section>
  )
}
