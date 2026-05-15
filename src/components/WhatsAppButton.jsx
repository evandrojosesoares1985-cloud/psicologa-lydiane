import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/5519995222316'

function WhatsAppButton({ children = 'Agendar pelo WhatsApp', variant = 'primary' }) {
  const styles =
    variant === 'light'
      ? 'border-white/70 bg-white/95 text-cocoa shadow-xl shadow-stone-900/10 hover:bg-white'
      : 'border-[#5f6648] bg-[#5f6648] text-white shadow-2xl shadow-olive/30 hover:bg-[#50573d]'

  return (
    <a
      className={`inline-flex min-h-[3.7rem] w-full max-w-full items-center justify-center gap-2 rounded-full border px-7 text-center text-[1.02rem] font-semibold leading-tight transition sm:w-auto sm:whitespace-nowrap sm:px-8 ${styles}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com Lydiane A. Procópio pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />
      {children}
    </a>
  )
}

export default WhatsAppButton
