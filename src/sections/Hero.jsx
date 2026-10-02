import { ArrowDown, HeartHandshake } from 'lucide-react'
import WhatsAppButton from '../components/WhatsAppButton'

function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container-page flex min-h-[76px] items-center justify-between gap-4 py-3 sm:min-h-[92px]">
          <a className="shrink-0" href="#inicio" aria-label="Lydiane A. Procópio, início">
            <img className="h-auto w-[148px] sm:w-[178px]" src="/brand/logo-lydiane.png" alt="Lydiane A. Procópio | Psicóloga Clínica" />
          </a>
          <nav aria-label="Navegação principal" className="flex items-center gap-3 sm:gap-6">
            <a className="hidden text-sm font-medium text-cocoa transition hover:text-olive sm:inline" href="#como-posso-ajudar">Atendimentos</a>
            <a className="hidden text-sm font-medium text-cocoa transition hover:text-olive sm:inline" href="#sobre">Sobre</a>
            <a className="inline-flex min-h-10 items-center justify-center rounded-full border border-olive bg-olive px-4 text-sm font-semibold text-white transition hover:bg-[#50573d] sm:px-5" href="https://wa.me/5519995222316" target="_blank" rel="noreferrer">WhatsApp</a>
          </nav>
        </div>
      </header>
      <div id="inicio" className="container-page grid min-h-svh items-center gap-[4.5rem] py-28 sm:py-32 lg:grid-cols-[0.98fr_1.02fr] lg:py-36">
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
