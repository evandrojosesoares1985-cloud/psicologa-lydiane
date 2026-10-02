import WhatsAppButton from '../components/WhatsAppButton'

function FinalCTA() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl bg-deep px-6 py-16 text-center text-cream sm:px-12 sm:py-20">
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
          <img className="pointer-events-none absolute bottom-5 right-5 -z-10 h-20 w-20 object-contain opacity-10 sm:bottom-8 sm:right-8 sm:h-28 sm:w-28" src="/brand/simbolo-lydiane.png" width="1254" height="1254" loading="lazy" decoding="async" alt="" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-champagne">
              Agendamento
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-none sm:text-6xl">
              Vamos conversar?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/95 sm:text-xl">
              O primeiro passo pode ser simplesmente abrir espaço para falar.
            </p>
            <div className="mx-auto mt-9 max-w-md rounded-[32px] bg-cream p-2 sm:inline-block sm:max-w-full">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
