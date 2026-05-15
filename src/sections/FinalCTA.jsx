import WhatsAppButton from '../components/WhatsAppButton'

function FinalCTA() {
  return (
    <section className="pb-24 sm:pb-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[36px] bg-cocoa/[0.78] px-6 py-16 text-center text-white shadow-2xl shadow-stone-900/10 sm:px-12 sm:py-20">
          <img
            className="absolute inset-0 h-full w-full object-cover object-[center_35%] opacity-[0.42]"
            src="/images/lydiane/chamada-final.png"
            alt=""
          />
          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-linen">
              Agendamento
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-none sm:text-6xl">
              Vamos conversar?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.12rem] leading-8 text-white/88 sm:text-xl">
              O primeiro passo pode ser simplesmente abrir espaço para falar.
            </p>
            <div className="mt-9">
              <WhatsAppButton variant="light">Agendar atendimento pelo WhatsApp</WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
