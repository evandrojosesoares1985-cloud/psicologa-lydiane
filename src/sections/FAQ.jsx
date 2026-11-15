import { ChevronDown } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const questions = [
  {
    question: 'Como funciona a primeira sessão?',
    answer:
      'A primeira sessão é um momento de acolhimento para você falar sobre o que te levou a buscar atendimento, esclarecer dúvidas sobre frequência, horários e compreender como o processo psicanalítico se desenvolve.',
  },
  {
    question: 'A terapia online é tão segura e eficaz quanto a presencial?',
    answer:
      'Sim. A psicoterapia online é regulamentada pelo Conselho Federal de Psicologia e segue rigorosamente os mesmos princípios éticos e de sigilo. A eficácia clínica é amplamente comprovada, garantindo acolhimento e escuta profunda no conforto do seu espaço privativo.',
  },
  {
    question: 'Você atende por plano de saúde ou convênio?',
    answer:
      'Os atendimentos são particulares. No entanto, forneço recibo profissional com todos os dados exigidos pelo Conselho Federal de Psicologia e pela Receita Federal, permitindo que você solicite o reembolso junto ao seu plano de saúde (caso seu convênio contemple essa modalidade — consulte as regras da sua operadora).',
  },
  {
    question: 'Quanto tempo dura o processo terapêutico?',
    answer:
      'A duração da psicoterapia varia de acordo com cada indivíduo. Por ser um processo singular e orientado pela escuta das particularidades de cada sujeito, não trabalhamos com um número pré-fixado de sessões.',
  },
  {
    question: 'Preciso saber exatamente o que falar ao iniciar?',
    answer:
      'Não. Você não precisa ensaiar ou saber exatamente por onde começar. A sessão é um espaço livre de cobranças. O que parecer confuso, difícil ou incompleto ganha contorno e sentido ao longo da conversa com a psicóloga.',
  },
]

function FAQ() {
  return (
    <section id="duvidas" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Perguntas frequentes" title="Dúvidas comuns antes de começar">
          Reunimos aqui respostas para as principais dúvidas que costumam surgir
          antes do primeiro contato.
        </SectionHeader>

        <div className="mx-auto max-w-3xl space-y-4">
          {questions.map((item) => (
            <details
              className="group rounded-3xl border border-deep/10 bg-white/75 p-6 transition-colors open:bg-white sm:p-7 shadow-xs hover:border-bronze/30"
              key={item.question}
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 rounded-sm text-base font-semibold leading-relaxed text-deep sm:text-lg">
                <span>{item.question}</span>
                <ChevronDown
                  className="shrink-0 text-bronze transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                  size={22}
                  strokeWidth={1.8}
                />
              </summary>
              <p className="mt-4 text-base leading-relaxed text-deep/85 sm:text-lg sm:leading-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
