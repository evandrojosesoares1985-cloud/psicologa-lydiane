import { MapPin, Phone } from 'lucide-react'
import { getWhatsAppUrl } from '../components/WhatsAppButton'

function Footer() {
  return (
    <footer className="bg-dark-green py-14 text-cream border-t border-cream/10">
      <div className="container-page flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <img
            className="mb-3 h-13 sm:h-15 w-auto max-w-[260px] sm:max-w-[300px] object-contain"
            src="/brand/logo-horizontal-verde-escuro.png"
            width="1793"
            height="388"
            loading="lazy"
            decoding="async"
            alt="Lydiane A. Procópio | Psicóloga Clínica"
          />
          <p className="text-sm font-medium text-champagne">CRP 06/188503 • Pirassununga - SP</p>

          <div className="mt-5 space-y-2.5 text-sm text-cream/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 shrink-0 text-champagne" size={17} />
              <span>R. 13 de Maio, 1698 — Centro, Pirassununga - SP, 13631-030</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="shrink-0 text-champagne" size={17} />
              <a
                className="transition-colors hover:text-white hover:underline"
                href={getWhatsAppUrl('Olá, Lydiane! Visitei seu site e gostaria de agendar uma consulta.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                (19) 99522-2316 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-lg space-y-4 text-xs sm:text-sm leading-relaxed text-cream/75 md:text-right">
          <div className="inline-block rounded-xl border border-cream/15 bg-white/5 px-4 py-2 text-left md:text-right">
            <p className="font-semibold text-white">Modalidades de Atendimento:</p>
            <p className="text-cream/90">Presencial em Pirassununga - SP • Online para todo o Brasil</p>
          </div>
          <p>
            As informações contidas neste site possuem finalidade exclusivamente informativa e não substituem
            o processo de avaliação psicológica individualizada conduzido por profissional habilitado.
          </p>
          <p className="text-xs text-cream/60">
            © {new Date().getFullYear()} Lydiane A. Procópio. Todos os direitos reservados. Em conformidade com o Código de Ética Profissional do Psicólogo (CFP).
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
