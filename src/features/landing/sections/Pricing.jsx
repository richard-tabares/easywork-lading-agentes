import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Check, Gift, X } from 'lucide-react'
import ButtonLink from '../../../components/ui/ButtonLink'
import { BILLING_OPTIONS, getLandingPricing } from '../../../lib/pricing'

const trialFeatures = [
  'Hasta 30 pólizas de prueba',
  'Lector de pólizas con IA',
  'Semáforo de cobranza',
  'Recordatorios de cobro por correo',
  'Renovaciones, agenda y tareas',
]

const basicFeatures = [
  'Pólizas ilimitadas',
  'Lector de pólizas con IA',
  'Recibos y recordatorios de cobro por correo',
  'Renovaciones y alertas',
  'Agenda y tareas',
]

const coreFeatures = [
  'Todo lo de Basic',
  'Asistente IA en WhatsApp',
  'WhatsApp Business integrado*',
  'Recordatorios de cobro por WhatsApp',
  'Campañas de renovación y reportes de cobranza',
  'Soporte prioritario',
]

function FeatureItem({ children }) {
  return (
    <li className="flex gap-2.5">
      <Check
        size={18}
        strokeWidth={2.4}
        className="mt-0.5 flex-none text-brand"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  )
}

function ExcludedItem({ children }) {
  return (
    <li className="flex gap-2.5 text-muted">
      <X size={18} strokeWidth={2.4} className="mt-0.5 flex-none" aria-hidden="true" />
      <span>
        <span className="sr-only">No incluye: </span>
        {children}
      </span>
    </li>
  )
}

function AnimatedPrice({ value }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.span
        key={value}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="font-montserrat text-5xl font-extrabold leading-none text-brand"
      >
        ${value}
      </m.span>
    </AnimatePresence>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('m')
  const [selectedPlan, setSelectedPlan] = useState('basic')
  const basic = getLandingPricing(27, billing)
  const core = getLandingPricing(57, billing)

  const cardClass = (planId) =>
    `relative flex cursor-pointer flex-col gap-4.5 rounded-3xl border-2 px-7 pb-7 pt-9 transition-[border-color,box-shadow] duration-200 hover:z-10 ${
      selectedPlan === planId ? 'border-brand shadow-xl' : 'border-lilac-300 hover:border-brand'
    }`

  return (
    <section id="precios" className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl lg:text-5xl">
            Elige tu plan
          </h2>
          <p className="text-base text-ink">
            7 días gratis. Sin permanencia. Cancela cuando quieras.
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Forma de pago"
          className="flex flex-wrap gap-1.5 rounded-2xl bg-surface p-1.5"
        >
          {BILLING_OPTIONS.map((option) => (
            <button
              key={option.id}
              role="radio"
              aria-checked={billing === option.id}
              onClick={() => setBilling(option.id)}
              className={`min-h-11 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                billing === option.id ? 'bg-brand text-white' : 'text-ink hover:text-brand'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid w-full items-stretch gap-6 lg:grid-cols-3">
          <m.div
            onClick={() => setSelectedPlan('trial')}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={cardClass('trial')}
          >
            <span className="text-sm font-semibold tracking-widest text-ink">PRUEBA GRATIS</span>
            <div className="flex items-baseline gap-2">
              <span className="font-montserrat text-5xl font-extrabold leading-none text-brand">
                $0
              </span>
              <span className="text-sm">por 7 días</span>
            </div>
            <span className="flex items-center gap-2 rounded-xl border border-lilac-200 bg-lilac-50 px-3 py-2.5 text-sm font-semibold text-brand">
              <Gift size={18} strokeWidth={2} className="flex-none" aria-hidden="true" />
              Incluye 7 días de Basic gratis
            </span>
            <span className="text-sm">1 usuario</span>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-sm">
              {trialFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
              <ExcludedItem>WhatsApp Business integrado</ExcludedItem>
            </ul>
            <ButtonLink variant="ghost" to="/registro" className="mt-auto min-h-13 text-base">
              Crear cuenta gratis
            </ButtonLink>
            <span className="text-center text-sm">Sin tarjeta · Sin permanencia</span>
          </m.div>

          <m.div
            onClick={() => setSelectedPlan('basic')}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={cardClass('basic')}
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white">
              MÁS POPULAR
            </span>
            <span className="text-sm font-semibold tracking-widest text-brand">BASIC</span>
            <div className="flex items-baseline gap-2">
              <AnimatedPrice value={basic.monthly} />
              <span className="text-sm">USD / mes</span>
            </div>
            <span className="min-h-5.5 text-sm font-medium text-brand">{basic.note}</span>
            <span className="text-sm">1 usuario</span>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-sm">
              {basicFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
              <ExcludedItem>WhatsApp Business integrado</ExcludedItem>
            </ul>
            <ButtonLink to="/checkout/basic" className="mt-auto min-h-13 text-base">
              Empezar con Basic
            </ButtonLink>
            <span className="text-center text-sm">Cancela cuando quieras</span>
          </m.div>

          <m.div
            onClick={() => setSelectedPlan('core')}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={cardClass('core')}
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white">
              CON WHATSAPP
            </span>
            <span className="text-sm font-semibold tracking-widest text-ink">CORE</span>
            <div className="flex items-baseline gap-2">
              <AnimatedPrice value={core.monthly} />
              <span className="text-sm">USD / mes</span>
            </div>
            <span className="min-h-5.5 text-sm font-medium text-brand">{core.note}</span>
            <span className="text-sm">1 usuario</span>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-sm">
              {coreFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </ul>
            <p className="rounded-xl bg-surface px-3 py-2.5 text-sm leading-snug text-ink">
              *El envío de mensajes por WhatsApp tiene un costo adicional.
            </p>
            <ButtonLink variant="ghost" to="/checkout/core" className="mt-auto min-h-13 text-base">
              Empezar con Core
            </ButtonLink>
          </m.div>
        </div>

        <p className="text-center text-base font-medium text-brand">
          ¿Más de 500 pólizas o eres una promotoría?{' '}
          <a href="https://wa.me/525662754599" className="font-bold">
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  )
}
