import { MessageCircle } from 'lucide-react'

export const WHATSAPP_PHONE = '5519995222316'
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá, Lydiane! Visitei seu site e gostaria de informações sobre o atendimento psicológico.'

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

function WhatsAppButton({
  children = 'Agendar atendimento pelo WhatsApp',
  message = DEFAULT_WHATSAPP_MESSAGE,
  className = '',
}) {
  return (
    <a
      className={`inline-flex min-h-14 w-full max-w-full items-center justify-center gap-3 rounded-full bg-deep px-6 py-3.5 text-center text-base font-semibold leading-snug text-cream shadow-sm transition-all duration-200 hover:bg-deep/90 hover:shadow-md active:scale-[0.99] sm:w-auto sm:px-8 ${className}`}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="shrink-0" aria-hidden="true" size={21} strokeWidth={1.8} />
      <span>{children}</span>
    </a>
  )
}

export default WhatsAppButton
