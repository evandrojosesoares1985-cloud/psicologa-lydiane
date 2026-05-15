import { Laptop, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

function Services() {
  return (
    <section className="bg-[#f3eadc] py-24 sm:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Atendimentos" title="Atendimentos presenciais e online">
          O atendimento pode acontecer presencialmente ou online, conforme a sua
          necessidade e disponibilidade, sempre com cuidado, privacidade e sigilo.
        </SectionHeader>

        <div className="mx-auto grid max-w-4xl items-stretch gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-clay/15 bg-white/70 p-7 sm:p-8">
            <MapPin className="mb-7 text-olive" aria-hidden="true" size={28} strokeWidth={1.6} />
            <h3 className="font-serif text-3xl text-cocoa">Presencial</h3>
            <p className="mt-4 text-[1.08rem] leading-8 text-stone-600">
              Ambiente reservado, acolhedor e sigiloso para atendimentos com
              conforto e ética.
            </p>
          </article>

          <article className="rounded-3xl border border-clay/15 bg-white/70 p-7 sm:p-8">
            <Laptop className="mb-7 text-olive" aria-hidden="true" size={28} strokeWidth={1.6} />
            <h3 className="font-serif text-3xl text-cocoa">Online</h3>
            <p className="mt-4 text-[1.08rem] leading-8 text-stone-600">
              Atendimento realizado com privacidade, cuidado e escuta profissional,
              respeitando as orientações éticas da prática psicológica.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
