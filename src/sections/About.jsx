import { BadgeCheck, Sprout } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <section className="bg-white/45 py-24 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="image-frame overflow-hidden rounded-[30px]">
          <img
            className="h-[440px] w-full object-cover object-[center_20%] sm:h-[540px]"
            src="/images/lydiane/Sobre.png"
            alt="Lydiane A. Procópio em ambiente acolhedor de atendimento"
          />
        </div>

        <div>
          <SectionHeader eyebrow="Sobre mim" title="Uma presença clínica atenta" align="left">
            Sou psicóloga clínica, com atuação orientada pela escuta psicanalítica.
            Ofereço um espaço ético, sigiloso e acolhedor para que cada pessoa possa
            falar sobre sua história, seus conflitos e suas formas de se relacionar
            consigo e com o mundo.
          </SectionHeader>

          <div className="space-y-5 text-[1.08rem] leading-8 text-stone-600 sm:text-xl sm:leading-9">
            <p>
              Minha prática considera a singularidade de cada sujeito, respeitando
              seu tempo, sua trajetória e seus processos emocionais.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-clay/15 bg-cream p-6">
              <BadgeCheck className="mb-4 text-olive" aria-hidden="true" size={23} strokeWidth={1.6} />
              <p className="text-[1.08rem] font-semibold leading-7 text-cocoa">Atendimento ético e sigiloso</p>
            </div>
            <div className="rounded-3xl border border-clay/15 bg-cream p-6">
              <Sprout className="mb-4 text-olive" aria-hidden="true" size={23} strokeWidth={1.6} />
              <p className="text-[1.08rem] font-semibold leading-7 text-cocoa">Respeito ao seu tempo e à sua história</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
