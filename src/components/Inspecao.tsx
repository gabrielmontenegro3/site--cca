import imgInspecao from '../assets/parceiros/Depositphotos_28615723_original-4-scaled.jpg'

export function Inspecao() {
  return (
    <section id="inspecao" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Inspeção e Reabilitação com metodologia
        </h2>
        <div className="mt-10">
          <img
            src={imgInspecao}
            alt="Inspeção técnica"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-10 space-y-4 text-lg text-slate-600">
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
