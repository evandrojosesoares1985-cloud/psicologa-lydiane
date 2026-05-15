import { ArrowDown, HeartHandshake } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'

function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <div className="container-page grid min-h-svh items-center gap-[4.5rem] py-12 sm:py-14 lg:grid-cols-[0.98fr_1.02fr] lg:py-16">
        <div className="min-w-0 max-w-3xl pt-14 lg:pt-0">
          <span className="eyebrow">Psicologia clínica</span>
          <h1 className="editorial-title mt-7 text-[3.78rem] sm:text-[4.75rem] lg:text-[7.15rem]">
            Lydiane A. Procópio
          </h1>
          <p className="mt-7 text-[1.08rem] font-semibold text-olive sm:text-xl">
            Psicóloga Clínica | CRP 06/188503
          </p>
          <p className="mt-9 max-w-2xl font-serif text-[2.08rem] leading-tight text-cocoa sm:text-[2.72rem]">
            Um espaço seguro, ético e acolhedor para falar sobre você.
          </p>
          <p className="mt-8 max-w-2xl text-[1.08rem] leading-8 text-stone-600 sm:text-xl sm:leading-9">
            Atendimento psicológico presencial e online, com escuta sensível para
            processos de autoconhecimento, questões emocionais, relacionamentos,
            autoestima, ansiedade e sofrimento psíquico.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton />
            <a
              href="#como-posso-ajudar"
              className="inline-flex min-h-[3.7rem] w-full items-center justify-center gap-2 rounded-full border border-clay/25 px-7 text-center text-[1.02rem] font-semibold text-cocoa transition hover:border-olive hover:text-olive sm:w-auto sm:whitespace-nowrap sm:px-8"
            >
              Conhecer minha atuação
              <ArrowDown aria-hidden="true" size={17} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="image-frame overflow-hidden rounded-[32px]">
            <img
              className="h-[490px] w-full object-cover object-[center_18%] sm:h-[590px] lg:h-[700px]"
              src="/images/lydiane/Hero.png"
              alt="Retrato profissional de Lydiane A. Procópio"
            />
          </div>
          <div className="soft-card absolute -bottom-8 left-5 right-5 rounded-3xl p-5 sm:left-auto sm:w-[20.5rem] sm:p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-linen text-olive">
              <HeartHandshake aria-hidden="true" size={22} strokeWidth={1.6} />
            </div>
            <p className="font-serif text-[1.7rem] leading-tight text-cocoa">
              Atendimento conduzido com sigilo, cuidado e responsabilidade ética.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
