import { useState } from 'react'
import { m } from 'motion/react'
import OrderSummary from '../components/OrderSummary'
import PaymentForm from '../components/PaymentForm'
import { getCheckoutTotals, PLANS } from '../../../lib/pricing'
import { pageTransition } from '../../../lib/motion'

export default function CheckoutPage({ plan = 'basic' }) {
  const config = PLANS[plan] ?? PLANS.basic
  const [billing, setBilling] = useState('m')
  const totals = getCheckoutTotals(config.price, billing)

  return (
    <>
      <title>{config.title}</title>
      <m.div
        {...pageTransition}
        className="flex min-h-screen flex-wrap bg-white font-sans text-ink"
      >
        <OrderSummary
          config={config}
          billing={billing}
          setBilling={setBilling}
          totals={totals}
        />
        <main className="flex min-w-0 grow basis-full px-6 py-12 lg:basis-1/2">
          <PaymentForm totals={totals} />
        </main>
      </m.div>
    </>
  )
}
