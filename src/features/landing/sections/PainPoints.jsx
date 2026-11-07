import { m } from 'motion/react'
import {
  BellRing,
  CalendarX,
  FileSpreadsheet,
  Keyboard,
  Unplug,
  UserRoundCog,
} from 'lucide-react'
import painPointsBackdrop from '../../../assets/backdrops/pain-points-paperwork.webp'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

const pains = [
  {
    icon: BellRing,
    text: 'Un cliente cancela porque nadie le recordó su recibo.',
  },
  {
    icon: FileSpreadsheet,
    text: 'Tu cartera vive en Excel, en el portal de cada aseguradora y en tu memoria.',
  },
  {
    icon: Keyboard,
    text: 'Capturar una póliza a mano te quita minutos, y corregir errores de dedo, otros tantos.',
  },
  {
    icon: Unplug,
    text: 'Pagas el sistema por un lado y WhatsApp por otro, y la conexión se traba.',
  },
  {
    icon: CalendarX,
    text: 'No sabes cuántas renovaciones tienes este mes hasta que ya pasaron.',
  },
  {
    icon: UserRoundCog,
    text: 'Eres el “todólogo”: si tú no revisas, nadie cobra.',
  },
]

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <PhotoBackdrop
        src={painPointsBackdrop}
        className="absolute inset-0"
        overlayClassName="bg-brand/80"
      />
      <m.div
        className="relative mx-auto flex max-w-6xl flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            ¿Te suena familiar?
          </h2>
          <p className="max-w-xl text-base text-lilac-200">
            Si te pasa alguna de estas, tu cartera está trabajando en tu contra.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {pains.map((pain) => {
            const Icon = pain.icon
            return (
              <m.div
                key={pain.text}
                variants={fadeUp}
                className="flex items-start gap-3.5 rounded-2xl bg-white p-6"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-ink">
                  <Icon size={18} strokeWidth={2.4} className="text-white" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-ink-strong">{pain.text}</p>
              </m.div>
            )
          })}
        </div>

        <p className="text-center font-heading text-xl font-bold leading-snug text-white">
          No pierdes clientes por vender mal. Los pierdes por falta de seguimiento.
          <br />
          Eso es lo que Easywork automatiza.
        </p>
      </m.div>
    </section>
  )
}
