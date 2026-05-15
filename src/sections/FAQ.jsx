import { ChevronDown } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const questions = [
  {
    question: 'Como funciona a primeira sessão?',
    answer:
      'A primeira sessão é um momento para você apresentar sua demanda, conhecer o formato do atendimento e tirar dúvidas sobre frequência, horários e combinados clínicos.',
  },
  {
    question: 'A terapia online é segura?',
    answer:
      'Sim. A terapia online segue os mesmos princípios éticos do atendimento presencial, com privacidade, sigilo profissional e cuidado com o ambiente da sessão.',
  },
  {
    question: 'Quanto tempo dura o processo terapêutico?',
    answer:
      'A duração varia para cada pessoa. O processo terapêutico acompanha a singularidade da demanda, do momento de vida e do percurso construído em sessão.',
  },
  {
    question: 'Preciso saber exatamente o que falar?',
    answer:
      'Não. A sessão é um espaço para falar no seu tempo. Aquilo que parece confuso, difícil ou ainda sem forma também pode encontrar lugar na escuta clínica.',
  },
]

function FAQ() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Perguntas frequentes" title="Dúvidas comuns antes de começar">
          Algumas informações podem ajudar você a chegar com mais tranquilidade ao
          primeiro contato.
        </SectionHeader>

        <div className="mx-auto max-w-3xl space-y-5">
          {questions.map((item) => (
            <details
              className="group rounded-3xl border border-clay/15 bg-white/65 p-6 shadow-sm sm:p-7"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-[1.72rem] leading-tight text-cocoa sm:text-[1.8rem]">
                {item.question}
                <ChevronDown
                  className="shrink-0 text-olive transition group-open:rotate-180"
                  aria-hidden="true"
                  size={22}
                  strokeWidth={1.7}
                />
              </summary>
              <p className="mt-5 text-[1.08rem] leading-8 text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
