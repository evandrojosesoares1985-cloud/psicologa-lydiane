function Header() {
  return (
    <header id="inicio">
      <div className="container-page flex items-center justify-between gap-4 py-2">
        <a className="shrink-0 rounded-xl" href="#inicio" aria-label="Lydiane A. Procópio, início">
          <img className="h-auto w-[132px] sm:w-[160px]" src="/brand/logo-lydiane.png" width="1254" height="1254" alt="Lydiane A. Procópio | Psicóloga Clínica" />
        </a>
        <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-7">
          <a className="hidden min-h-11 items-center text-base font-medium text-deep transition-colors hover:underline sm:inline-flex" href="#atendimentos">Atendimentos</a>
          <a className="hidden min-h-11 items-center text-base font-medium text-deep transition-colors hover:underline sm:inline-flex" href="#sobre">Sobre</a>
          <a className="inline-flex min-h-11 items-center justify-center rounded-full bg-deep px-5 text-base font-semibold text-cream transition-colors hover:bg-deep/90" href="https://wa.me/5519995222316" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
