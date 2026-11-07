import { m } from 'motion/react'
import { Mic } from 'lucide-react'
import icon from '../../../assets/icon.png'
import coreWhatsAppBackdrop from '../../../assets/backdrops/core-whatsapp-agent.webp'
import ButtonLink from '../../../components/ui/ButtonLink'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

function PhoneCard({ title, children }) {
  return (
    <m.div
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="flex flex-col gap-3"
    >
      <h3 className="text-center text-sm font-semibold text-white">{title}</h3>
      <div className="flex flex-col gap-2 rounded-3xl border border-chat-border bg-chat-bg p-2.5">
        <div className="flex items-center gap-2.5 px-2 py-1.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <img src={icon} alt="" className="h-5.5 w-5.5" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold text-white">Easywork</span>
            <span className="text-xs text-chat-green">en línea</span>
          </span>
        </div>
        <div className="flex h-75 flex-col gap-2 overflow-y-auto overscroll-contain rounded-2xl bg-chat-panel p-3 text-xs leading-relaxed [scrollbar-color:var(--color-chat-border)_transparent] [scrollbar-width:thin]">
          {children}
        </div>
      </div>
    </m.div>
  )
}

function Outgoing({ children }) {
  return (
    <div className="self-end rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-2xl bg-chat-accent px-2.5 py-2 text-white">
      {children}
    </div>
  )
}

function Incoming({ children }) {
  return (
    <div className="self-start rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-chat-bubble px-2.5 py-2 text-chat-text">
      {children}
    </div>
  )
}

function Time({ children }) {
  return <div className="text-right text-xs text-lilac-300">{children}</div>
}

export default function CoreWhatsApp() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <PhotoBackdrop
        src={coreWhatsAppBackdrop}
        className="absolute inset-0"
        overlayClassName="bg-brand/80"
      />
      <m.div
        className="relative mx-auto flex max-w-6xl flex-col gap-11"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="rounded-full border border-lilac-400 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white">
            PLAN CORE
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Habla con tu cartera y no tomes notas
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-lilac-200">
            Tu asistente IA está en WhatsApp, listo 24/7. Sin apps nuevas, sin cursos, sin aprender
            nada.
          </p>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <PhoneCard title="Crea tareas al momento">
            <Outgoing>
              Recuérdame llamar a Juan Pérez mañana a las 10 am para su renovación
              <Time>9:41</Time>
            </Outgoing>
            <Incoming>
              <span className="font-semibold text-chat-green">✓ Tarea creada</span>
              <br />
              <strong className="font-semibold">Llamar a Juan Pérez</strong>, mañana 10:00 AM
              <br />
              Renovación de póliza GMM
              <Time>9:41</Time>
            </Incoming>
          </PhoneCard>

          <PhoneCard title="Habla en vez de escribir">
            <Outgoing>
              <span className="flex items-center gap-2">
                <Mic size={16} strokeWidth={2.2} className="flex-none" aria-hidden="true" />
                <span className="flex flex-1 items-center gap-0.5" aria-hidden="true">
                  <span className="h-2 w-0.5 rounded-full bg-lilac-300" />
                  <span className="h-3.5 w-0.5 rounded-full bg-lilac-300" />
                  <span className="h-2.5 w-0.5 rounded-full bg-lilac-300" />
                  <span className="h-4 w-0.5 rounded-full bg-lilac-300" />
                  <span className="h-2 w-0.5 rounded-full bg-lilac-300" />
                </span>
                <span className="text-xs text-lilac-300">0:09</span>
              </span>
            </Outgoing>
            <Incoming>
              Escuché: “Llama a Carlos hoy, su seguro de auto vence esta semana”
              <br />
              ¿Correcto?
              <Time>10:05</Time>
            </Incoming>
            <Outgoing>Sí</Outgoing>
            <Incoming>
              <span className="font-semibold text-chat-green">✓ Tarea creada</span>
              <br />
              <strong className="font-semibold">Llamar a Carlos</strong>, hoy
              <br />
              Auto vence esta semana
            </Incoming>
          </PhoneCard>

          <PhoneCard title="Pregúntale a tu cartera">
            <Outgoing>¿Cuántas renovaciones tengo este mes?</Outgoing>
            <Incoming>
              <span>
                Tienes <strong className="font-semibold">8 renovaciones</strong> este mes:
              </span>
              <span className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-dot-red" />
                2 urgentes (esta semana)
              </span>
              <span className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-dot-amber" />
                3 antes del 30
              </span>
              <span className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-chat-green" />
                3 en los próximos 30 días
              </span>
            </Incoming>
            <Outgoing>¿Cuál es la más urgente?</Outgoing>
            <Incoming>
              <strong className="font-semibold">María López · GMM</strong>
              <br />
              Vence en 2 días · Prima $[monto] MXN
            </Incoming>
          </PhoneCard>

          <PhoneCard title="Revisa tu día al terminar">
            <Incoming>
              <strong className="font-semibold">Resumen del día</strong>
              <br />
              Completadas: 2
              <br />
              Pendientes:
              <br />
              1. Seguimiento a Roberto
              <br />
              2. Renovar póliza de auto
              <br />
              ¿Cuáles completaste hoy?
            </Incoming>
            <Outgoing>Ninguna</Outgoing>
            <Incoming>¿Las movemos a mañana? Responde sí o no.</Incoming>
            <Outgoing>Sí</Outgoing>
            <Incoming>Listo, moví 2 tareas para mañana. ¡Descansa!</Incoming>
          </PhoneCard>
        </div>

        <div className="flex justify-center">
          <ButtonLink variant="white" href="#precios" className="min-h-13 px-7 text-base">
            Ver plan Core
          </ButtonLink>
        </div>
      </m.div>
    </section>
  )
}
