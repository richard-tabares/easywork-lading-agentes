const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validatePayment(values) {
  const errors = {}
  const cardDigits = values.card.replace(/\s+/g, '')

  if (!emailPattern.test(values.email)) {
    errors.email = 'Escribe un correo válido.'
  }

  if (!/^\d{16}$/.test(cardDigits)) {
    errors.card = 'Escribe los 16 dígitos de la tarjeta.'
  }

  if (!/^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/.test(values.expiry)) {
    errors.expiry = 'Usa el formato MM / AA.'
  }

  if (!/^\d{3,4}$/.test(values.cvc)) {
    errors.cvc = 'Escribe 3 o 4 dígitos.'
  }

  if (!values.name.trim()) {
    errors.name = 'Escribe el nombre del titular.'
  }

  if (!values.country) {
    errors.country = 'Selecciona un país.'
  }

  return errors
}
