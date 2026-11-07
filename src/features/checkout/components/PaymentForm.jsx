import { useState } from 'react'
import { Check, Lock } from 'lucide-react'
import { FieldError, FieldLabel, TextInput } from '../../../components/ui/Field'
import { validatePayment } from '../lib/validators'

const initialValues = {
  email: '',
  card: '',
  expiry: '',
  cvc: '',
  name: '',
  country: 'México',
}

export default function PaymentForm({ totals }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSuccess(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validatePayment(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true)
    }
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-5 pl-6">
      <h1 className="font-heading text-2xl font-extrabold text-brand">Pagar con tarjeta</h1>

      <form className="flex flex-col gap-4.5" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="ck-email">Correo electrónico</FieldLabel>
          <TextInput
            id="ck-email"
            type="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'ck-email-error' : undefined}
            required
          />
          <FieldError id="ck-email-error">{errors.email}</FieldError>
        </div>

        <fieldset className="flex min-w-0 flex-col gap-1.5">
          <legend className="mb-1.5 p-0 text-sm font-medium text-brand">
            Información de la tarjeta
          </legend>
          <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-field">
            <label htmlFor="ck-card" className="sr-only">
              Número de tarjeta
            </label>
            <input
              id="ck-card"
              type="text"
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="1234 1234 1234 1234"
              value={values.card}
              onChange={update('card')}
              aria-invalid={Boolean(errors.card)}
              aria-describedby={errors.card ? 'ck-card-error' : undefined}
              className="min-h-11.5 w-full min-w-0 border-b border-field bg-white px-3.5 py-3 font-sans text-sm text-brand placeholder:text-placeholder focus:border-brand focus:outline-none"
              required
            />
            <div className="flex min-w-0">
              <label htmlFor="ck-exp" className="sr-only">
                Fecha de vencimiento
              </label>
              <input
                id="ck-exp"
                type="text"
                inputMode="numeric"
                autoComplete="cc-exp"
                placeholder="MM / AA"
                value={values.expiry}
                onChange={update('expiry')}
                aria-invalid={Boolean(errors.expiry)}
                aria-describedby={errors.expiry ? 'ck-exp-error' : undefined}
                className="min-h-11.5 min-w-0 flex-1 border-r border-field bg-white px-3.5 py-3 font-sans text-sm text-brand placeholder:text-placeholder focus:outline-none"
                required
              />
              <label htmlFor="ck-cvc" className="sr-only">
                CVC
              </label>
              <input
                id="ck-cvc"
                type="text"
                inputMode="numeric"
                autoComplete="cc-csc"
                placeholder="CVC"
                value={values.cvc}
                onChange={update('cvc')}
                aria-invalid={Boolean(errors.cvc)}
                aria-describedby={errors.cvc ? 'ck-cvc-error' : undefined}
                className="min-h-11.5 min-w-0 flex-1 bg-white px-3.5 py-3 font-sans text-sm text-brand placeholder:text-placeholder focus:outline-none"
                required
              />
            </div>
          </div>
          <FieldError id="ck-card-error">{errors.card}</FieldError>
          <FieldError id="ck-exp-error">{errors.expiry}</FieldError>
          <FieldError id="ck-cvc-error">{errors.cvc}</FieldError>
        </fieldset>

        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="ck-name">Nombre del titular</FieldLabel>
          <TextInput
            id="ck-name"
            type="text"
            autoComplete="cc-name"
            placeholder="Como aparece en la tarjeta"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'ck-name-error' : undefined}
            required
          />
          <FieldError id="ck-name-error">{errors.name}</FieldError>
        </div>

        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="ck-country">País o región</FieldLabel>
          <select
            id="ck-country"
            autoComplete="country"
            value={values.country}
            onChange={update('country')}
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? 'ck-country-error' : undefined}
            className="min-h-11.5 w-full rounded-xl border border-field bg-white px-3.5 py-3 font-sans text-sm text-brand focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
          >
            <option>México</option>
            <option>Estados Unidos</option>
            <option>Otro</option>
          </select>
          <FieldError id="ck-country-error">{errors.country}</FieldError>
        </div>

        <button
          type="submit"
          className="mt-1 min-h-13 rounded-xl bg-brand text-base font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Suscribirme · ${totals.total} USD
        </button>
      </form>

      {success && (
        <div
          role="status"
          className="flex items-start gap-2 rounded-xl bg-success-bg px-3.5 py-3 text-sm text-success"
        >
          <Check size={18} strokeWidth={2.4} className="mt-0.5 flex-none" aria-hidden="true" />
          Pago de demostración: no se realizó ningún cargo.
        </div>
      )}

      <p className="text-sm leading-relaxed">
        Tu suscripción se renueva automáticamente {totals.renewal}. Sin permanencia: cancela cuando
        quieras. Al continuar aceptas los <a href="#">Términos y Condiciones</a>.
      </p>

      <p className="flex items-center gap-2 text-sm">
        <Lock size={16} strokeWidth={2} className="text-ink" aria-hidden="true" />
        Pago seguro procesado por Stripe
      </p>
    </div>
  )
}
