import { Phone, Mail, Globe, MessageCircle, LogIn } from 'lucide-react'

export function Contato() {
  return (
    <section id="contato" className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-800 md:text-4xl">
          Contato
        </h2>
        <div className="mt-8 grid gap-6 rounded-xl bg-[#F7F8FC] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:grid-cols-2 md:p-12">
          <div className="space-y-4">
            <a
              href="tel:+5585985097622"
              className="flex items-center gap-4 text-[#1e293b] transition hover:text-[#137FEC]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                <Phone className="h-6 w-6 stroke-[1.5] text-[#137FEC]" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500">Telefone / WhatsApp</p>
                <p className="font-semibold">(85) 98509-7622</p>
              </div>
            </a>
            <a
              href="mailto:contato@cca-engenharia.com.br"
              className="flex items-center gap-4 text-[#1e293b] transition hover:text-[#137FEC]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                <Mail className="h-6 w-6 stroke-[1.5] text-[#137FEC]" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500">E-mail</p>
                <p className="font-semibold">contato@cca-engenharia.com.br</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-[#1e293b]">
              <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#137FEC]/10">
                <Globe className="h-6 w-6 stroke-[1.5] text-[#137FEC]" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500">Atuação</p>
                <p className="font-semibold">Nacional</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a
              href="https://wa.me/5585985097622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#137FEC] px-8 py-4 font-semibold text-white shadow-[0_2px_12px_rgba(19,127,236,0.35)] transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5 stroke-[1.5]" />
              Falar com a CCA
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-slate-200/80 bg-white px-8 py-4 font-semibold text-[#137FEC] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:bg-slate-50"
            >
              <LogIn className="h-5 w-5 stroke-[1.5]" />
              Acessar Plataforma
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
