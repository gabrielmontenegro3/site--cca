import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5585985097622"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition hover:scale-110 hover:shadow-lg"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  )
}
