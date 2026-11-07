import { Check } from 'lucide-react'
import icon from '../../../assets/icon.png'
import heroBackdrop from '../../../assets/backdrops/hero-insurance-agent.webp'
import ButtonLink from '../../../components/ui/ButtonLink'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'

const fileFacts = [
  { label: 'Contratante', value: '[Nombre del cliente]' },
  { label: 'RFC', value: 'XAXX010101000' },
  { label: 'Vigencia', value: '01/12/26 – 01/12/27' },
  { label: 'Forma de pago', value: 'Trimestral' },
]

const cardChecks = [
  '4 recibos calculados',
  'Recordatorio programado 15 días antes',
  'Cliente y carpeta digital creados',
]

export default function Hero() {
  return (
    <section id="inicio" className="flex flex-wrap overflow-hidden bg-white">
      <div className="flex min-w-0 grow basis-full justify-end lg:basis-1/2">
        <div className="flex w-full max-w-2xl flex-col gap-6 py-18 pl-6 pr-10 lg:pl-20">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-lilac-50 px-3.5 py-2 text-xs font-semibold text-brand">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            Lector de pólizas con IA · Recordatorios por WhatsApp
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-none tracking-tight text-brand md:text-5xl lg:text-6xl">
            Sube la póliza.
            <br />
            Easywork te recuerda que se debe cobrar o renovar a tiempo.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink">
            El CRM para agentes de seguros que lee tus pólizas con IA, calcula los recibos y avisa a
            tus clientes antes de cada vencimiento. Prospectos, clientes, renovaciones y gestión de
            cartera en un solo lugar.
          </p>

          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/registro" className="min-h-13 px-7 text-base">
              Probar gratis 7 días
            </ButtonLink>
            <ButtonLink variant="ghost" href="#como-funciona" className="min-h-13 px-6 text-base">
              Ver cómo funciona
            </ButtonLink>
          </div>

          <p className="text-sm text-ink">Sin tarjeta · 7 días gratis · Sin permanencia</p>
        </div>
      </div>

      <div className="relative min-h-150 min-w-0 grow basis-full lg:basis-1/2">
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -top-10 left-4 right-0 rounded-l-full bg-white"
        />
        <PhotoBackdrop
          src={heroBackdrop}
          priority
          className="absolute -bottom-10 -top-10 left-7.5 right-0 rounded-l-full"
          overlayClassName="bg-linear-to-r from-brand/90 via-brand/80 to-brand/60"
        />

        <div className="relative flex h-full min-h-150 items-center justify-center px-6 py-12 lg:pl-24 lg:pr-8">
          <div className="flex w-full min-w-0 max-w-md flex-col gap-4 break-words rounded-2xl bg-white p-5.5 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <img src={icon} alt="" className="h-7 w-7" />
                <span className="text-sm font-semibold text-brand">Lector de pólizas IA</span>
              </div>
              <span className="rounded-full bg-success-bg px-2.5 py-1 text-xs font-semibold text-success">
                Listo
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-surface p-3">
              <div className="flex h-11 w-9 items-center justify-center rounded-md bg-brand text-xs font-semibold text-white">
                PDF
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="break-words text-sm font-medium text-brand">poliza_gmm_ejemplo.pdf</span>
                <span className="text-xs text-ink">8 campos detectados</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {fileFacts.map((fact) => (
                <div key={fact.label} className="min-w-0 rounded-xl border border-line p-2.5">
                  <div className="text-xs text-ink">{fact.label}</div>
                  <div className="break-words text-sm font-semibold text-brand">{fact.value}</div>
                </div>
              ))}
              <div className="col-span-2 min-w-0 rounded-xl border border-line p-2.5">
                <div className="text-xs text-ink">Cobertura</div>
                <div className="text-sm font-semibold text-brand">Gastos Médicos Mayores</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-line pt-3.5">
              {cardChecks.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-brand">
                  <Check size={18} strokeWidth={2.2} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
