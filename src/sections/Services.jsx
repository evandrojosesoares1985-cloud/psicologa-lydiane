import { ExternalLink, Laptop, MapPin, ShieldCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { getWhatsAppUrl } from '../components/WhatsAppButton'

function Services() {
  const mapsUrl = 'https://maps.google.com/?q=R.+13+de+Maio,+1698+-+Centro,+Pirassununga+-+SP,+13631-030'

  return (
    <section id="atendimentos" className="bg-soft-green/40 py-16 sm:py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Atendimentos" title="Modalidades de Atendimento">
          O acompanhamento psicológico pode acontecer presencialmente no consultório em Pirassununga
          ou de forma online, sempre com o mesmo rigor ético, privacidade e sigilo profissional.
        </SectionHeader>

        <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
          {/* Card Presencial */}
          <article className="flex flex-col justify-between rounded-3xl border border-deep/10 bg-white/80 p-7 shadow-sm transition-all hover:border-bronze/40 sm:p-9">
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-green text-deep">
                <MapPin className="text-bronze" aria-hidden="true" size={26} strokeWidth={1.7} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-bronze">Atendimento no Consultório</span>
              <h3 className="mt-1 font-serif text-3xl font-semibold text-deep">Presencial</h3>

              <p className="mt-4 text-base leading-relaxed text-deep/85">
                Ambiente reservado, confortável e silencioso, planejado para oferecer uma experiência de
                acolhimento e escuta atenta no centro da cidade.
              </p>

              <div className="mt-6 rounded-2xl border border-deep/10 bg-cream/80 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-bronze">Endereço do Consultório</p>
                <p className="mt-1.5 text-base font-semibold text-deep">
                  R. 13 de Maio, 1698 — Centro
                </p>
                <p className="text-sm text-deep/80">
                  Pirassununga - SP • CEP 13631-030
                </p>
                <p className="mt-2 text-xs text-deep/70">
                  Fácil acesso, localização central e ambiente climatizado.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-deep px-5 text-sm font-semibold text-cream transition-colors hover:bg-deep/90"
                href={getWhatsAppUrl('Olá, Lydiane! Gostaria de agendar um atendimento presencial em Pirassununga.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Presencial
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-deep/20 px-4 text-sm font-medium text-deep transition-colors hover:bg-soft-green"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Ver no Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </article>

          {/* Card Online */}
          <article className="flex flex-col justify-between rounded-3xl border border-deep/10 bg-white/80 p-7 shadow-sm transition-all hover:border-bronze/40 sm:p-9">
            <div>
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-green text-deep">
                <Laptop className="text-bronze" aria-hidden="true" size={26} strokeWidth={1.7} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-bronze">Atendimento à Distância</span>
              <h3 className="mt-1 font-serif text-3xl font-semibold text-deep">Online</h3>

              <p className="mt-4 text-base leading-relaxed text-deep/85">
                Sessões por videochamada com total sigilo e comodidade, permitindo iniciar ou manter sua terapia
                onde você estiver, com a mesma eficácia clínica do presencial.
              </p>

              <div className="mt-6 rounded-2xl border border-deep/10 bg-cream/80 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze">
                  <ShieldCheck size={16} />
                  <span>Plataforma Segura e Sigilosa</span>
                </div>
                <p className="mt-1.5 text-base font-semibold text-deep">
                  Para todo o Brasil e Brasileiros no Exterior
                </p>
                <p className="text-sm text-deep/80">
                  Prática regulamentada e autorizada pelo CFP (Resolução CFP nº 11/2018).
                </p>
                <p className="mt-2 text-xs text-deep/70">
                  Basta ter uma conexão estável e um espaço privativo para sua sessão.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-deep px-5 text-sm font-semibold text-cream transition-colors hover:bg-deep/90 sm:w-auto"
                href={getWhatsAppUrl('Olá, Lydiane! Gostaria de informações sobre o atendimento online.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Sessão Online
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
