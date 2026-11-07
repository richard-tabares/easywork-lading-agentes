import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Check, FileText, Mail, Send, Upload } from 'lucide-react'
import icon from '../../../assets/icon.png'
import ButtonLink from '../../../components/ui/ButtonLink'

const tabs = [
  { id: 'lector', label: 'Lector IA' },
  { id: 'semaforo', label: 'Semáforo de cobranza' },
  { id: 'aviso', label: 'Recordatorio automático' },
  { id: 'ia', label: 'Asistente IA' },
  { id: 'prospeccion', label: 'Prospección' },
]

const panelMotion = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.18, ease: 'easeOut' },
}

function LectorPanel() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-5">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          De PDF a póliza registrada en segundos
        </h3>
        <p className="text-base leading-relaxed text-ink">
          La IA lee la carátula y llena los campos por ti. Revisas, confirmas con un clic y el
          sistema calcula todos los recibos de la vigencia.
        </p>
        <p className="text-sm leading-relaxed text-ink">
          Funciona con pólizas de cualquier aseguradora, en PDF o foto.
        </p>
      </div>

      <div className="flex min-w-0 flex-wrap gap-5 rounded-3xl bg-surface p-7 lg:col-span-3">
        <div className="flex min-w-0 flex-1 basis-56 flex-col gap-2.5 rounded-xl bg-white p-5 shadow-lg">
          <div className="h-3 w-3/5 rounded bg-brand" />
          <div className="h-2 w-11/12 rounded bg-lilac-100" />
          <div className="h-2 w-4/5 rounded bg-lilac-100" />
          <div className="h-5.5 w-5/6 rounded bg-highlight" />
          <div className="h-2 w-3/4 rounded bg-lilac-100" />
          <div className="h-5.5 w-3/5 rounded bg-highlight" />
          <div className="h-2 w-11/12 rounded bg-lilac-100" />
          <div className="h-5.5 w-4/5 rounded bg-highlight" />
          <div className="h-2 w-1/2 rounded bg-lilac-100" />
        </div>

        <div className="flex min-w-0 flex-1 basis-56 flex-col gap-2.5">
          {[
            ['Contratante', '[Cliente]'],
            ['Vigencia', '01/12/26 – 01/12/27'],
            ['Forma de pago', 'Trimestral'],
            ['Cobertura', 'GMM'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between gap-2 rounded-xl bg-white px-3.5 py-3 text-sm"
            >
              <span>{label}</span>
              <strong className="font-semibold text-brand">{value}</strong>
            </div>
          ))}
          <ButtonLink href="#precios" className="min-h-11 px-4 text-sm">
            Confirmar y crear recibos
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

function SemaforoPanel() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-5">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          Sabes a quién cobrar hoy
        </h3>
        <p className="text-base leading-relaxed text-ink">
          Recibos vencidos, por vencer y al día, filtrados por aseguradora o responsable. Sin
          descargar el Excel del portal.
        </p>
      </div>

      <div className="flex min-w-0 flex-col gap-4 rounded-3xl bg-surface p-7 lg:col-span-3">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border-t-4 border-danger-strong bg-white p-4">
            <div className="font-montserrat text-3xl font-extrabold text-brand">3</div>
            <div className="text-xs">Vencidos</div>
          </div>
          <div className="rounded-xl border-t-4 border-warning-strong bg-white p-4">
            <div className="font-montserrat text-3xl font-extrabold text-brand">7</div>
            <div className="text-xs">Vencen en 5 días</div>
          </div>
          <div className="rounded-xl border-t-4 border-success-strong bg-white p-4">
            <div className="font-montserrat text-3xl font-extrabold text-brand">24</div>
            <div className="text-xs">A tiempo este mes</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-white">
          <div className="flex justify-between gap-3 border-b border-line px-4 py-3.5 text-sm">
            <span className="font-semibold text-brand">[Cliente A] · GMM</span>
            <span className="rounded-full bg-danger-bg px-2.5 py-0.5 font-semibold text-danger">
              Vencido
            </span>
          </div>
          <div className="flex justify-between gap-3 border-b border-line px-4 py-3.5 text-sm">
            <span className="font-semibold text-brand">[Cliente B] · Auto</span>
            <span className="rounded-full bg-warning-bg px-2.5 py-0.5 font-semibold text-warning">
              Vence en 3 días
            </span>
          </div>
          <div className="flex justify-between gap-3 px-4 py-3.5 text-sm">
            <span className="font-semibold text-brand">[Cliente C] · Vida</span>
            <span className="rounded-full bg-success-bg px-2.5 py-0.5 font-semibold text-success">
              Pagado
            </span>
          </div>
        </div>

        <span className="text-xs">Datos de ejemplo</span>
      </div>
    </div>
  )
}

function AvisoPanel() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-5">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-2">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          El primer aviso lo manda Easywork
        </h3>
        <p className="text-base leading-relaxed text-ink">
          Tu cliente recibe el recordatorio por correo o WhatsApp antes del vencimiento. A tu equipo
          le llega la tarea de seguimiento, ya asignada.
        </p>
      </div>

      <div className="flex min-w-0 flex-wrap items-start gap-5 rounded-3xl bg-surface p-7 lg:col-span-3">
        <div className="flex min-w-0 flex-1 basis-56 flex-col gap-2.5 rounded-2xl bg-whatsapp-bg p-4.5">
          <span className="text-xs font-semibold text-success">WhatsApp · al cliente</span>
          <div className="rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white p-3.5 text-sm leading-relaxed text-ink-chat">
            Hola [Nombre], te recordamos que el recibo de tu póliza de Gastos Médicos vence el 15 de
            diciembre. ¿Te ayudamos con tu pago?
          </div>
        </div>

        <div className="flex min-w-0 flex-1 basis-48 flex-col gap-2.5 rounded-2xl bg-white p-4.5 shadow-lg">
          <span className="text-xs font-semibold text-brand">Tarea creada</span>
          <strong className="text-sm font-semibold text-brand">Dar seguimiento al cobro</strong>
          <span className="text-sm">Responsable: [Agente]</span>
          <span className="text-sm">Fecha: 13 dic</span>
        </div>
      </div>
    </div>
  )
}

function IAPanel() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-5">
      <div className="flex min-w-0 flex-col gap-4.5 lg:col-span-2">
        <h3 className="font-heading text-2xl font-extrabold text-brand">Pregúntale a tu cartera</h3>
        <p className="text-base leading-relaxed text-ink">
          Easy AI responde en lenguaje natural sobre tus clientes, recibos y renovaciones, crea
          tareas de seguimiento y resume tus reuniones. Sin buscar en reportes.
        </p>
        <ul className="flex list-none flex-col gap-3 p-0 text-sm">
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-brand" />
            Consulta tu cartera escribiendo como hablas
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink" />
            Crea tareas de seguimiento al instante
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lilac-400" />
            Resumen de reuniones con cada prospecto
          </li>
        </ul>
      </div>

      <div className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-2xl lg:col-span-3">
        <div className="flex items-center gap-3 bg-brand p-3.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
            <img src={icon} alt="" className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Easy AI</span>
            <span className="text-xs text-lilac-300">Asistente de tu cartera</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-surface p-5 text-sm leading-relaxed">
          <div className="w-4/5 self-start rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white p-3.5 text-ink-chat">
            Buenos días. Hoy tienes:
            <br />
            · 2 recibos vencidos
            <br />
            · 3 renovaciones esta semana
            <br />
            ¿Quieres ver los detalles?
          </div>
          <div className="self-end rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-2xl bg-brand px-3.5 py-2.5 text-white">
            Sí, los vencidos
          </div>
          <div className="w-4/5 self-start rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white p-3.5 text-ink-chat">
            <strong className="font-semibold text-brand">[Cliente A] · GMM</strong>
            <br />
            Venció ayer · $[monto] MXN
            <br />
            ¿Creo una tarea de seguimiento?
          </div>
          <div className="self-end rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-2xl bg-brand px-3.5 py-2.5 text-white">
            Sí
          </div>
          <div className="flex w-4/5 items-start gap-2 self-start rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-white p-3.5 text-ink-chat">
            <Check
              size={18}
              strokeWidth={2.6}
              className="mt-0.5 flex-none text-success-strong"
              aria-hidden="true"
            />
            <span>Tarea creada: Llamar a [Cliente A] · hoy 10:00</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 border-t border-line px-4 py-3">
          <span className="flex-1 rounded-xl bg-surface px-3.5 py-2.5 text-sm text-placeholder">
            Escribe a Easy AI…
          </span>
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand"
          >
            <Send size={18} strokeWidth={2.2} className="text-white" />
          </span>
        </div>
      </div>
    </div>
  )
}

function ProspeccionPanel() {
  const stages = [
    'Contacto inicial',
    'Presentar propuesta',
    'Propuesta en revisión',
    'Trámite para emisión',
    'Emisión de póliza',
    'Negocio nuevo ganado',
  ]

  return (
    <div className="flex flex-wrap items-center gap-10">
      <div className="flex min-w-0 flex-col gap-4.5 lg:basis-full">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          Del primer contacto a la póliza emitida
        </h3>
        <p className="max-w-3xl text-base leading-relaxed text-ink">
          Cada prospecto avanza por etapas claras. Propuestas, cotizaciones, correos y documentos
          quedan en su historial, para que nadie pierda el hilo.
        </p>
        <ul className="flex list-none flex-col gap-3 p-0 text-sm">
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-brand" />
            Contacto inicial → Propuesta → Emisión → Negocio ganado
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink" />
            Correo, WhatsApp, llamadas, Zoom y Meet en un solo historial
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lilac-400" />
            Propuestas, cotizaciones y documentos en cada prospecto
          </li>
        </ul>
      </div>

      <div className="min-w-0 overflow-hidden rounded-2xl bg-surface shadow-2xl lg:basis-full">
        <div className="flex items-center justify-between gap-3 bg-brand px-4 py-3.5">
          <span className="text-sm font-semibold text-white">[Nombre del prospecto]</span>
          <span className="text-xs text-lilac-300">Seguro de auto</span>
        </div>

        <div className="flex flex-col gap-3.5 p-4">
          <div className="overflow-x-auto">
            <div className="grid min-w-max grid-cols-6 gap-1.5 text-center text-xs font-semibold">
              {stages.map((stage, index) => (
                <span
                  key={stage}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 ${
                    index === 0
                      ? 'bg-lilac-400 text-white'
                      : index === 1
                        ? 'bg-brand text-white'
                        : 'bg-lilac-100 text-brand'
                  }`}
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 rounded-xl bg-white p-2.5 text-xs font-medium">
            <span className="rounded-lg bg-lilac-50 px-3 py-1.5 font-semibold text-brand">
              General
            </span>
            <span className="px-3 py-1.5 text-ink">Documentos</span>
          </div>

          <div className="flex flex-wrap gap-3 rounded-xl bg-white px-3.5 py-3 text-xs font-medium tracking-wide text-ink">
            TAREAS · COMENTARIO · CORREO · CITAS · WHATSAPP · LLAMADA · ZOOM · MEET
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand">
                <Mail size={15} strokeWidth={2.2} className="text-white" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5 rounded-xl bg-white px-3.5 py-3">
                <span className="text-sm font-semibold text-brand">Correo saliente</span>
                <span className="text-sm">
                  Propuesta de costo y coberturas para el seguro de su vehículo
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink">
                <Upload size={15} strokeWidth={2.2} className="text-white" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-xl bg-white px-3.5 py-3">
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-brand">Archivo cargado</span>
                  <span className="text-sm">Cotizacion_auto.pdf · Cotizaciones presentadas</span>
                </div>
                <span className="flex-none rounded-lg bg-brand px-2.5 py-1.5 text-xs font-semibold text-white">
                  Ver archivo
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand">
                <FileText size={15} strokeWidth={2.2} className="text-white" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-xl bg-white px-3.5 py-3">
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-brand">Cotización de vehículo</span>
                  <span className="text-sm">[Marca · Modelo · Año]</span>
                </div>
                <span className="flex-none rounded-full bg-success-bg px-2.5 py-1 text-xs font-semibold text-success">
                  Cobertura amplia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Demo() {
  const [active, setActive] = useState('lector')

  return (
    <section className="bg-white px-6 py-24">
      <m.div
        className="mx-auto flex max-w-6xl flex-col gap-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink">
            Míralo en acción
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl lg:text-5xl">
            Así trabaja Easywork por ti
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Demostración"
          className="flex flex-wrap justify-center gap-2 self-center rounded-2xl bg-surface p-1.5"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`min-h-11 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                active === tab.id ? 'bg-brand text-white' : 'text-ink hover:text-brand'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <m.div key={active} {...panelMotion}>
            {active === 'lector' && <LectorPanel />}
            {active === 'semaforo' && <SemaforoPanel />}
            {active === 'aviso' && <AvisoPanel />}
            {active === 'ia' && <IAPanel />}
            {active === 'prospeccion' && <ProspeccionPanel />}
          </m.div>
        </AnimatePresence>

        <div className="flex justify-center">
          <ButtonLink href="#precios" className="min-h-13 px-7 text-base">
            Pruébalo con tus pólizas reales
          </ButtonLink>
        </div>
      </m.div>
    </section>
  )
}
