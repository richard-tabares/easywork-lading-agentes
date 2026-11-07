export const BILLING_OPTIONS = [
  { id: 'm', label: 'Mensual' },
  { id: 't', label: 'Trimestral' },
  { id: 'a', label: 'Anual · −10%' },
]

export const PLANS = {
  basic: {
    id: 'basic',
    name: 'Basic',
    price: 27,
    note: 'Pólizas ilimitadas, lector de pólizas con IA, cobranza, renovaciones, agenda y tareas.',
    otherHref: '/checkout/core',
    otherLabel: '¿Necesitas WhatsApp? Cambiar a Core →',
    title: 'Easywork · Pago plan Basic',
  },
  core: {
    id: 'core',
    name: 'Core',
    price: 57,
    note: 'Todo lo de Basic más WhatsApp Business integrado, recordatorios por WhatsApp, campañas de renovación y soporte prioritario.',
    otherHref: '/checkout/basic',
    otherLabel: '¿No necesitas WhatsApp? Cambiar a Basic →',
    title: 'Easywork · Pago plan Core',
  },
}

const round2 = (value) => Math.round(value * 100) / 100

export function formatNumber(value) {
  const rounded = round2(value)
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2)
}

export function getBillingMonths(billing) {
  if (billing === 't') return 3
  if (billing === 'a') return 12
  return 1
}

export function getLandingPricing(price, billing) {
  const monthly = billing === 'a' ? price * 0.9 : price
  let note = 'Facturado mes a mes'

  if (billing === 't') {
    note = `Pago trimestral: $${formatNumber(price * 3)} USD`
  }

  if (billing === 'a') {
    note = `Pago anual: $${formatNumber(price * 12 * 0.9)} USD · ahorras $${formatNumber(price * 12 * 0.1)}`
  }

  return { monthly: formatNumber(monthly), note }
}

export function getCheckoutTotals(price, billing) {
  const months = getBillingMonths(billing)
  const subtotal = price * months
  const discount = billing === 'a' ? subtotal * 0.1 : 0
  const total = subtotal - discount

  const per = billing === 't' ? '/ trimestre' : billing === 'a' ? '/ año' : '/ mes'
  const periodLabel =
    billing === 't' ? 'pago trimestral' : billing === 'a' ? 'pago anual' : 'pago mensual'
  const renewal =
    billing === 't' ? 'cada 3 meses' : billing === 'a' ? 'cada año' : 'cada mes'

  let equiv = ''
  if (billing === 't') {
    equiv = `Equivale a $${price} USD/mes`
  }
  if (billing === 'a') {
    equiv = `Equivale a $${formatNumber(total / 12)} USD/mes · ahorras $${formatNumber(discount)} USD`
  }

  return {
    subtotal: formatNumber(subtotal),
    discount: formatNumber(discount),
    total: formatNumber(total),
    per,
    periodLabel,
    renewal,
    equiv,
    isAnnual: billing === 'a',
  }
}
