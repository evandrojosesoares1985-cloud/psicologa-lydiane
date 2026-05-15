import { Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-clay/15 bg-[#4a352a] py-11 text-white">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl">Lydiane A. Procópio</p>
          <p className="mt-2 text-[1.02rem] text-white/72">Psicóloga Clínica | CRP 06/188503</p>
        </div>

        <div className="space-y-3 text-[1.02rem] leading-7 text-white/74 md:text-right">
          <a
            className="inline-flex items-center gap-2 transition hover:text-white"
            href="https://wa.me/5519995222316"
            target="_blank"
            rel="noreferrer"
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
