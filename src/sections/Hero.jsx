import { ArrowDown, HeartHandshake } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'

function Hero() {
  return (
    <section className="pb-16 pt-3 sm:pb-24 sm:pt-6">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="min-w-0 max-w-3xl">
          <h1 className="editorial-title text-[3rem] sm:text-[4rem] lg:text-[4.5rem]">
            Lydiane A. Procópio
          </h1>
          <p className="mt-5 text-base font-semibold text-deep sm:text-lg">
            Psicóloga Clínica | CRP 06/188503
          </p>
          <p className="mt-6 max-w-2xl font-serif text-[1.9rem] leading-tight text-deep sm:text-[2.35rem]">
            Um espaço seguro, ético e acolhedor para falar sobre você.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-deep/85 sm:text-lg sm:leading-8">
            Atendimento psicológico presencial e online, com escuta sensível para
            processos de autoconhecimento, questões emocionais, relacionamentos,
            autoestima, ansiedade e sofrimento psíquico.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <WhatsAppButton />
            <a
              href="#como-posso-ajudar"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-center text-base font-medium text-deep transition-colors hover:bg-soft-green sm:w-auto"
            >
              Conhecer minha atuação
              <ArrowDown className="shrink-0" aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <div className="image-frame overflow-hidden rounded-3xl">
            <img
              className="hero-photo w-full object-cover object-[center_20%]"
              src="/images/lydiane/Hero.webp"
              width="1122"
              height="1402"
              fetchPriority="high"
              alt="Retrato profissional de Lydiane A. Procópio"
            />
          </div>
          <div className="mt-5 flex items-start gap-3 text-deep/85">
            <HeartHandshake className="mt-1 shrink-0 text-deep" aria-hidden="true" size={22} strokeWidth={1.6} />
            <p className="text-base leading-7">
              Atendimento conduzido com sigilo, cuidado e responsabilidade ética.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
