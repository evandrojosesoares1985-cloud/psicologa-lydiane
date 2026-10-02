import { Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-deep py-11 text-cream">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <img className="mb-4 h-auto w-[154px] sm:w-[176px]" src="/brand/logo-lydiane.png" width="1254" height="1254" loading="lazy" decoding="async" alt="Lydiane A. Procópio | Psicóloga Clínica" />
          <p className="font-serif text-3xl">Lydiane A. Procópio</p>
          <p className="mt-2 text-base text-cream/90">Psicóloga Clínica | CRP 06/188503</p>
        </div>

        <div className="max-w-xl space-y-3 text-base leading-7 text-cream/90 md:text-right">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-sm transition-colors hover:text-white hover:underline"
            href="https://wa.me/5519995222316"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone aria-hidden="true" size={16} strokeWidth={1.7} />
            WhatsApp: (19) 99522-2316
          </a>
          <p>
            As informações desta página têm caráter informativo e não substituem
            uma avaliação psicológica individualizada.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
