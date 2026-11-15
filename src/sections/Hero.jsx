import { ArrowDown, HeartHandshake, MapPin } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'

function Hero() {
  return (
    <section className="pb-16 pt-4 sm:pb-24 sm:pt-8">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="min-w-0 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-soft-green/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep sm:text-sm">
            <MapPin className="text-bronze" size={15} />
            <span>Pirassununga - SP • Atendimentos Presenciais e Online</span>
          </div>

          <h1 className="editorial-title mt-5 text-[2.75rem] leading-[1.05] sm:text-[3.75rem] lg:text-[4.25rem]">
            Lydiane A. Procópio
          </h1>

          <p className="mt-4 text-base font-medium text-bronze sm:text-lg">
            Psicóloga Clínica | CRP 06/188503
          </p>

          <p className="mt-6 max-w-2xl font-serif text-[1.8rem] leading-snug text-deep sm:text-[2.2rem]">
            Um espaço seguro, ético e acolhedor para falar sobre você.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-deep/85 sm:text-lg sm:leading-8">
            Atendimento psicológico presencial no centro de Pirassununga e online para todo o Brasil.
            Escuta atenta e sensível para processos de autoconhecimento, questões emocionais,
            relacionamentos, autoestima, ansiedade e sofrimento psíquico orientada pela psicanálise.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton message="Olá, Lydiane! Visitei seu site e gostaria de agendar uma consulta." />
            <a
              href="#como-posso-ajudar"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-deep/15 bg-white/60 px-6 text-center text-base font-medium text-deep transition-all hover:bg-soft-green sm:w-auto"
            >
              <span>Conhecer atuação</span>
              <ArrowDown className="shrink-0 text-bronze" aria-hidden="true" size={18} strokeWidth={1.8} />
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
              alt="Retrato profissional de Lydiane A. Procópio, psicóloga clínica"
            />
          </div>
          <div className="mt-5 flex items-start gap-3 text-deep/85">
            <HeartHandshake className="mt-1 shrink-0 text-bronze" aria-hidden="true" size={22} strokeWidth={1.6} />
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
