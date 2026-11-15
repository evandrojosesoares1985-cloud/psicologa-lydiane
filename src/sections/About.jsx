import { BadgeCheck, Heart, Sprout } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <section id="sobre" className="bg-soft-green/30 py-16 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="image-frame overflow-hidden rounded-3xl shadow-sm">
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
          <SectionHeader eyebrow="Sobre mim" title="Uma presença clínica atenta e dedicada" align="left">
            Sou psicóloga clínica (CRP 06/188503), com atuação orientada pela escuta psicanalítica.
            Ofereço um espaço ético, sigiloso e acolhedor para que cada pessoa possa
            falar sobre sua história, seus conflitos e suas formas de se relacionar
            consigo e com o mundo.
          </SectionHeader>

          <div className="space-y-4 text-base leading-relaxed text-deep/85 sm:text-lg sm:leading-8">
            <p>
              Minha prática clínica considera a singularidade absoluta de cada sujeito, respeitando
              o tempo interno de elaboração, a trajetória de vida e os processos emocionais de cada paciente.
            </p>
            <p>
              Com dedicação aos estudos contínuos da psicanálise e rigor técnico, conduzo o processo terapêutico
              sem pré-julgamentos, sustentando uma escuta que acolhe tanto as certezas quanto as dúvidas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-deep/10 bg-white/70 p-5">
              <BadgeCheck className="mb-3 text-bronze" aria-hidden="true" size={24} strokeWidth={1.6} />
              <p className="text-sm font-semibold leading-snug text-deep">Atendimento ético e sigiloso (CFP)</p>
            </div>
            <div className="rounded-2xl border border-deep/10 bg-white/70 p-5">
              <Sprout className="mb-3 text-bronze" aria-hidden="true" size={24} strokeWidth={1.6} />
              <p className="text-sm font-semibold leading-snug text-deep">Respeito ao seu tempo e história</p>
            </div>
            <div className="rounded-2xl border border-deep/10 bg-white/70 p-5">
              <Heart className="mb-3 text-bronze" aria-hidden="true" size={24} strokeWidth={1.6} />
              <p className="text-sm font-semibold leading-snug text-deep">Escuta sensível e humanizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
