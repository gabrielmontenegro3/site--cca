import { Phone, Mail, MessageCircle } from 'lucide-react'

export function Contato() {
  return (
    <section id="contato" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[8px] border border-[#137FEC]/20 bg-[#137FEC] p-12 shadow-[0_4px_24px_rgba(19,127,236,0.25)] md:p-16">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Se sua organização busca reduzir riscos e preservar o valor patrimonial.
            </h2>
            <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/20 text-xl font-bold text-white">
              ?
            </span>
          </div>
          <p className="mt-4 text-center text-white/90">
            Entre em contato com nossos especialistas e solicite uma avaliação técnica preliminar.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <a
              href="tel:+5585985097622"
              className="flex items-center gap-3 text-white transition hover:opacity-90"
            >
              <Phone className="h-5 w-5" />
              <span>(85) 98509-7622</span>
            </a>
            <a
              href="mailto:contato@ccaengenharia.com.br"
              className="flex items-center gap-3 text-white transition hover:opacity-90"
            >
              <Mail className="h-5 w-5" />
              <span>contato@ccaengenharia.com.br</span>
            </a>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/5585985097622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[8px] border border-slate-200/80 bg-white px-8 py-4 font-semibold text-[#137FEC] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:bg-slate-50"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
