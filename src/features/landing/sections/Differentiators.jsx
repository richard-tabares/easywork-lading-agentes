import { m } from 'motion/react'
import { CreditCard, Mic, Smartphone } from 'lucide-react'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

const items = [
  {
    icon: Mic,
    title: 'IA conversacional real',
    text: 'Todos dicen tener IA. Aquí puedes escribirle o hablarle a tu asistente en WhatsApp y él actúa.',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp-first',
    text: 'El agente mexicano vive en WhatsApp. Nosotros también. Sin apps nuevas, sin logins extras, sin aprender nada.',
  },
  {
    icon: CreditCard,
    title: 'Precio justo',
    text: 'Desde USD 27/mes. El competidor más conocido cobra ~USD 40/mes por una interfaz de los 90s. Sin automatizaciones básicas. Sin permanencia.',
  },
]

export default function Differentiators() {
  return (
    <section className="bg-white px-6 py-24">
      <m.div
        className="mx-auto flex max-w-6xl flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl lg:text-5xl">
            ¿Por qué diferente?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink">
            No es otro CRM genérico con 20 funciones que nadie usa. Esto es lo que nos hace
            distintos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <m.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-3.5 rounded-2xl border border-line bg-soft p-8 transition-colors duration-200 hover:border-brand"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand">
                  <Icon size={26} strokeWidth={2} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-brand">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink">{item.text}</p>
              </m.div>
            )
          })}
        </div>
      </m.div>
    </section>
  )
}
