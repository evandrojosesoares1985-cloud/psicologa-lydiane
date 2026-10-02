import { Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function Psychoanalysis() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeader
            eyebrow="Psicanálise"
            title="Psicanálise: mais do que ouvir, é compreender."
            align="left"
          >
            A psicanálise propõe um espaço de fala e escuta em que o sujeito pode
            se aproximar de sua própria história, reconhecer repetições, elaborar
            conflitos e construir novas formas de se posicionar diante da vida.
          </SectionHeader>

          <div className="soft-card rounded-3xl p-7 sm:p-9">
            <Quote className="mb-6 text-deep" aria-hidden="true" size={32} strokeWidth={1.4} />
            <p className="font-serif text-[2rem] leading-tight text-deep sm:text-[2.65rem]">
              Falar de si pode ser um caminho para escutar o que insiste, compreender
              o que se repete e criar novas possibilidades de elaboração.
            </p>
            <p className="mt-6 text-[1.08rem] leading-8 text-deep/85 sm:text-xl sm:leading-9">
              O processo analítico acontece com delicadeza, sem julgamentos e sem
              promessas de soluções imediatas. Trata-se de uma travessia singular,
              sustentada pela ética, pela escuta e pelo cuidado.
            </p>
          </div>
        </div>

        <div className="image-frame overflow-hidden rounded-3xl">
          <img
            className="aspect-[1092/1440] w-full object-cover object-[center_20%] sm:max-h-[560px]"
            src="/images/lydiane/Psicanalise.webp"
            width="1092"
            height="1440"
            loading="lazy"
            decoding="async"
            alt="Ambiente sereno representando a escuta em psicanálise"
          />
        </div>
      </div>
    </section>
  )
}

export default Psychoanalysis
