import {
  Compass,
  Feather,
  Heart,
  Leaf,
  MessageCircleHeart,
  Sparkles,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const cards = [
  {
    title: 'Ansiedade, angústias e sofrimento psíquico',
    icon: Feather,
  },
  {
    title: 'Dificuldades nos relacionamentos',
    icon: MessageCircleHeart,
  },
  {
    title: 'Autoestima e autoconhecimento',
    icon: Sparkles,
  },
  {
    title: 'Conflitos emocionais',
    icon: Heart,
  },
  {
    title: 'Processos de mudança',
    icon: Compass,
  },
  {
    title: 'Questões emocionais',
    icon: Leaf,
  },
]

function Help() {
  return (
    <section id="como-posso-ajudar" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Como posso te ajudar" title="Escuta para aquilo que pede cuidado">
          Cada pessoa chega ao consultório com uma história própria. O acompanhamento
          psicológico abre espaço para nomear vivências, sustentar perguntas e cuidar
          daquilo que tem sido difícil atravessar.
        </SectionHeader>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, icon: Icon }) => (
            <article className="soft-card rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-8" key={title}>
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linen text-olive">
                <Icon aria-hidden="true" size={22} strokeWidth={1.55} />
              </div>
              <h3 className="font-serif text-[1.78rem] leading-tight text-cocoa">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Help
