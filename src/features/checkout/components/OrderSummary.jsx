import { AnimatePresence, m } from 'motion/react'
import { Link } from 'react-router'
import BrandLogo from '../../../components/ui/BrandLogo'
import { BILLING_OPTIONS } from '../../../lib/pricing'

export default function OrderSummary({ config, billing, setBilling, totals }) {
  return (
    <section
      aria-label="Resumen de compra"
      className="flex min-w-0 grow basis-full justify-end border-r border-line-soft bg-surface px-6 py-12 lg:basis-1/2"
    >
      <div className="flex w-full max-w-md flex-col gap-7 pr-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/#precios" className="py-2.5 text-sm font-medium no-underline">
            ← Volver a planes
          </Link>
          <BrandLogo imageClassName="h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">
            Suscribirte a{' '}
            <strong className="font-semibold text-brand">Easywork {config.name}</strong>
          </span>
          <div className="flex flex-wrap items-baseline gap-2.5">
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={`${billing}-${totals.total}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="font-montserrat text-5xl font-extrabold leading-tight text-brand"
              >
                ${totals.total}
              </m.span>
            </AnimatePresence>
            <span className="text-sm">USD {totals.per}</span>
          </div>
          <span className="min-h-5.5 text-sm text-brand">{totals.equiv}</span>
        </div>

        <div
          role="radiogroup"
          aria-label="Forma de pago"
          className="flex flex-wrap gap-1.5 self-start rounded-2xl border border-line-soft bg-white p-1.5"
        >
          {BILLING_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={billing === option.id}
              onClick={() => setBilling(option.id)}
              className={`min-h-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                billing === option.id ? 'bg-brand text-white' : 'text-ink hover:text-brand'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3.5 rounded-2xl border border-line-soft bg-white p-5">
          <div className="flex justify-between gap-4 text-sm">
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-brand">Easywork {config.name}</span>
              <span className="text-sm">1 usuario · {totals.periodLabel}</span>
            </div>
            <span className="font-medium text-brand">${totals.subtotal}</span>
          </div>

          {totals.isAnnual && (
            <div className="flex justify-between gap-4 text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="rounded-md bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                  −10%
                </span>
                Descuento anual
              </span>
              <span className="font-medium text-brand">−${totals.discount}</span>
            </div>
          )}

          <div className="h-px bg-line-soft" />

          <div className="flex justify-between gap-4 text-base">
            <strong className="font-semibold text-brand">Total a pagar hoy</strong>
            <strong className="font-semibold text-brand">${totals.total} USD</strong>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span>{config.note}</span>
          <Link to={config.otherHref} className="self-start py-1.5 font-semibold no-underline">
            {config.otherLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
