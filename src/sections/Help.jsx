import {
  Brain,
  Compass,
  Feather,
  Heart,
  MessageCircleHeart,
  Sparkles,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const demands = [
  {
    title: 'Ansiedade e Angústia',
    description:
      'Sensação constante de aperto no peito, pensamentos acelerados, preocupações excessivas com o futuro e dificuldade de relaxar no dia a dia.',
    icon: Feather,
  },
  {
    title: 'Dificuldades nos Relacionamentos',
    description:
      'Conflitos familiares, desafios na convivência a dois, término de relações, repetição de padrões afetivos e busca por limites saudáveis.',
    icon: MessageCircleHeart,
  },
  {
    title: 'Autoestima e Insegurança',
    description:
      'Autocrítica severa, medo do julgamento, sentimento de inadequação, síndrome do impostor e dependência de aprovação externa.',
    icon: Sparkles,
  },
  {
    title: 'Sobrecarga e Esgotamento',
    description:
      'Exaustão mental ligada ao trabalho ou à rotina, sensação de estar sempre no limite e perda de energia para atividades cotidianas.',
    icon: Brain,
  },
  {
    title: 'Luto e Processos de Perda',
    description:
      'Espaço de cuidado para elaborar perdas significativas, separações, despedidas e transformações difíceis na própria história.',
    icon: Heart,
  },
  {
    title: 'Transições de Vida e Mudanças',
    description:
      'Momentos de decisão profissional, transições de fases de vida e a necessidade de se reposicionar com mais clareza e autonomia.',
    icon: Compass,
  },
]

function Help() {
  return (
    <section id="como-posso-ajudar" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Como posso te ajudar" title="Escuta para aquilo que pede cuidado">
          Cada pessoa chega ao consultório com uma história própria. O acompanhamento
          psicológico abre espaço para nomear vivências, sustentar perguntas e acolher
          daquilo que tem sido difícil atravessar sozinho.
        </SectionHeader>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demands.map(({ title, description, icon: Icon }) => (
            <article className="soft-card flex flex-col justify-between rounded-3xl p-7 sm:p-8" key={title}>
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-green text-deep">
                  <Icon aria-hidden="true" size={24} strokeWidth={1.6} />
                </div>
                <h3 className="font-serif text-2xl font-semibold leading-snug text-deep sm:text-[1.75rem]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/80 sm:text-base sm:leading-7">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Help
