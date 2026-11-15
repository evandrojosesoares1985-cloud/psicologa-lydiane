import WhatsAppButton from '../components/WhatsAppButton'

function FinalCTA() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl bg-dark-green px-6 py-16 text-center text-cream shadow-xl sm:px-12 sm:py-20">
          <img
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[center_35%] opacity-15"
            src="/images/lydiane/chamada-final.webp"
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
            alt=""
            aria-hidden="true"
          />
          <img
            className="pointer-events-none absolute bottom-5 right-5 -z-10 h-20 w-20 object-contain opacity-10 sm:bottom-8 sm:right-8 sm:h-28 sm:w-28"
            src="/brand/simbolo-lydiane.png"
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
            alt=""
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-champagne sm:text-sm">
              Agendamento & Contato
            </span>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Vamos conversar?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-xl sm:leading-8">
              O primeiro passo pode ser simplesmente abrir espaço para falar sobre o que você sente.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-[32px] bg-cream p-2 sm:inline-block sm:max-w-full shadow-lg">
              <WhatsAppButton message="Olá, Lydiane! Gostaria de tirar algumas dúvidas e agendar uma sessão com você." />
            </div>

            <p className="mt-6 text-xs text-cream/75 sm:text-sm">
              Atendimento presencial em Pirassununga - SP e online para todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
