import { getWhatsAppUrl } from './WhatsAppButton'

function Header() {
  return (
    <header id="inicio" className="sticky top-0 z-40 bg-cream/95 backdrop-blur-md border-b border-deep/5 transition-all">
      <div className="container-page flex items-center justify-between gap-4 py-3 sm:py-3.5">
        <a className="shrink-0 rounded-xl focus-visible:outline-offset-4" href="#inicio" aria-label="Lydiane A. Procópio, início">
          <img
            className="h-11 sm:h-13 md:h-14 w-auto max-w-[220px] sm:max-w-[270px] object-contain transition-transform hover:opacity-95"
            src="/brand/logo-horizontal-marfim.png"
            width="1793"
            height="388"
            alt="Lydiane A. Procópio | Psicóloga Clínica"
          />
        </a>

        <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-7">
          <a className="hidden min-h-11 items-center text-sm font-medium text-deep transition-colors hover:text-bronze md:inline-flex" href="#como-posso-ajudar">
            Como posso ajudar
          </a>
          <a className="hidden min-h-11 items-center text-sm font-medium text-deep transition-colors hover:text-bronze sm:inline-flex" href="#sobre">
            Sobre
          </a>
          <a className="hidden min-h-11 items-center text-sm font-medium text-deep transition-colors hover:text-bronze sm:inline-flex" href="#atendimentos">
            Atendimentos
          </a>
          <a className="hidden min-h-11 items-center text-sm font-medium text-deep transition-colors hover:text-bronze lg:inline-flex" href="#duvidas">
            Dúvidas
          </a>
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-deep px-5 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-deep/90 hover:shadow"
            href={getWhatsAppUrl('Olá, Lydiane! Gostaria de agendar um atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
