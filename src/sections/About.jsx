import { BadgeCheck, Sprout } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <section id="sobre" className="bg-soft-green/40 py-16 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="image-frame overflow-hidden rounded-3xl">
          <img
            className="aspect-[1122/1402] w-full object-cover object-[center_20%] sm:max-h-[540px]"
            src="/images/lydiane/Sobre.webp"
            width="1122"
            height="1402"
            loading="lazy"
            decoding="async"
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

          <div className="space-y-5 text-[1.08rem] leading-8 text-deep/85 sm:text-xl sm:leading-9">
            <p>
              Minha prática considera a singularidade de cada sujeito, respeitando
              seu tempo, sua trajetória e seus processos emocionais.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-eucalyptus/15 bg-cream p-6">
              <BadgeCheck className="mb-4 text-deep" aria-hidden="true" size={23} strokeWidth={1.6} />
              <p className="text-[1.08rem] font-semibold leading-7 text-deep">Atendimento ético e sigiloso</p>
            </div>
            <div className="rounded-3xl border border-eucalyptus/15 bg-cream p-6">
              <Sprout className="mb-4 text-deep" aria-hidden="true" size={23} strokeWidth={1.6} />
              <p className="text-[1.08rem] font-semibold leading-7 text-deep">Respeito ao seu tempo e à sua história</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
