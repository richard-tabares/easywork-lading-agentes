import { m } from 'motion/react'
import { Bell, FileUp, Link2 } from 'lucide-react'
import ButtonLink from '../../../components/ui/ButtonLink'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

const steps = [
  {
    number: '01',
    icon: FileUp,
    title: 'Sube tus pólizas',
    text: 'Arrastra el PDF o una foto. La IA identifica contratante, vigencia, RFC, forma de pago y cobertura, y crea al cliente con su carpeta digital. ¿Tienes Excel? Lo importamos completo.',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Conecta correo y WhatsApp',
    text: 'Gmail u Office 365 en un clic. WhatsApp Business se integra en tu plan, sin contratar conectores por fuera.',
  },
  {
    number: '03',
    icon: Bell,
    title: 'Easywork da seguimiento',
    text: 'Recordatorios de cobro automáticos, tareas con fecha y renovaciones a la vista. Tú solo atiendes lo que necesita tu atención.',
  },
]

export default function Steps() {
  return (
    <section id="como-funciona" className="bg-white px-6 py-24">
      <m.div
        className="mx-auto flex max-w-6xl flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink">
            Cómo funciona
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl lg:text-5xl">
            Tu cartera en orden en una tarde
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <m.div
                key={step.number}
                variants={fadeUp}
                className="flex flex-col gap-4 rounded-2xl border border-line p-8 transition-colors duration-200 hover:border-brand"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand">
                    <Icon size={26} strokeWidth={2} className="text-white" aria-hidden="true" />
                  </div>
                  <span className="font-montserrat text-4xl font-extrabold text-lilac-100">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-extrabold text-brand">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink">{step.text}</p>
              </m.div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <ButtonLink href="#precios" className="min-h-13 px-7 text-base">
            Empezar con mis pólizas →
          </ButtonLink>
        </div>
      </m.div>
    </section>
  )
}
