import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/5519995222316'

function WhatsAppButton({ children = 'Agendar atendimento pelo WhatsApp' }) {
  return (
    <a
      className="inline-flex min-h-14 w-full max-w-full items-center justify-center gap-3 rounded-full bg-deep px-5 py-3 text-center text-base font-semibold leading-snug text-cream transition-colors hover:bg-deep/90 sm:w-auto sm:px-7"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="shrink-0" aria-hidden="true" size={20} strokeWidth={1.8} />
      <span>{children}</span>
    </a>
  )
}

export default WhatsAppButton
