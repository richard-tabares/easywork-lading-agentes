import { m } from 'motion/react'
import {
  AlarmClock,
  Calendar,
  CreditCard,
  FileText,
  Filter,
  MessageCircle,
  MessageCircleMore,
  RotateCw,
  Sparkles,
} from 'lucide-react'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

const features = [
  {
    icon: FileText,
    tone: 'brand',
    title: 'Lector de pólizas con IA',
    text: 'De PDF a póliza registrada, con cliente y carpeta digital creados.',
  },
  {
    icon: CreditCard,
    tone: 'ink',
    title: 'Cobranza automatizada',
    text: 'Recibos calculados, avisos a tus clientes y reporte de vencidos por aseguradora.',
  },
  {
    icon: RotateCw,
    tone: 'brand',
    title: 'Renovaciones a la vista',
    text: 'Próximas renovaciones por mes y campañas por correo para avisar cambios.',
  },
  {
    icon: MessageCircle,
    tone: 'brand',
    title: 'WhatsApp integrado',
    text: 'Recordatorios y mensajes a tus clientes desde la misma ficha.',
  },
  {
    icon: Filter,
    tone: 'ink',
    title: 'Prospección hasta la emisión',
    text: 'Del contacto inicial a la póliza emitida, con propuestas, cotizaciones e historial en cada prospecto.',
  },
  {
    icon: Sparkles,
    tone: 'brand',
    title: 'Asistente Easy AI',
    text: 'Pregunta por tu cartera, crea tareas y obtén resúmenes de tus reuniones.',
  },
  {
    icon: Calendar,
    tone: 'ink',
    title: 'Agenda y tareas',
    text: 'Calendario, citas por Zoom o Meet y tareas con recordatorio.',
  },
  {
    icon: MessageCircleMore,
    tone: 'core',
    title: 'Asistente IA en WhatsApp',
    text: 'Crea tareas hablando o enviando audios, consulta tu cartera con preguntas, sube pólizas en formato PDF — todo desde WhatsApp.',
  },
  {
    icon: AlarmClock,
    tone: 'ink',
    title: 'Alertas matutinas y vespertinas',
    text: 'Cada mañana recibes recordatorios sobre las renovaciones urgentes. Cada noche el asistente te pregunta qué completaste y mueve lo pendiente a mañana.',
  },
]

export default function Features() {
  return (
    <section id="funciones" className="bg-surface px-6 py-24">
      <m.div
        className="mx-auto flex max-w-6xl flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold tracking-widest text-brand">ALL IN ONE</span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl lg:text-5xl">
            Todo lo que necesitas, nada que no uses
          </h2>
          <p className="max-w-xl text-base text-ink">
            Construido para el asesor independiente que maneja entre 50 y 350 pólizas activas.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            const isCore = feature.tone === 'core'
            return (
              <m.div
                key={feature.title}
                variants={fadeUp}
                className={
                  isCore
                    ? 'relative flex flex-col gap-3 rounded-2xl bg-brand p-7 shadow-xl'
                    : 'flex flex-col gap-3 rounded-2xl bg-white p-7'
                }
              >
                {isCore && (
                  <span className="absolute right-4.5 top-4.5 rounded-full border border-lilac-400 bg-white/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-white">
                    PLAN CORE
                  </span>
                )}
                <div
                  className={
                    isCore
                      ? 'flex h-12 w-12 items-center justify-center rounded-xl bg-white'
                      : `flex h-12 w-12 items-center justify-center rounded-xl ${
                          feature.tone === 'brand' ? 'bg-brand' : 'bg-ink'
                        }`
                  }
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className={isCore ? 'text-brand' : 'text-white'}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={`font-heading text-lg font-extrabold ${
                    isCore ? 'text-white' : 'text-brand'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isCore ? 'text-lilac-100' : 'text-ink'
                  }`}
                >
                  {feature.text}
                </p>
              </m.div>
            )
          })}
        </div>
      </m.div>
    </section>
  )
}
