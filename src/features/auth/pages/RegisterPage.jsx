import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { m } from 'motion/react'
import AuthLayout from '../components/AuthLayout'
import { FieldError, FieldLabel, TextInput } from '../../../components/ui/Field'
import { validateRegister } from '../lib/validators'
import { pageTransition } from '../../../lib/motion'

const initialValues = {
  name: '',
  email: '',
  email2: '',
  password: '',
  password2: '',
  whatsapp: '',
}

const plans = [
  { id: 'basic', name: 'BASIC · MÁS POPULAR', price: '$27 USD/mes' },
  { id: 'core', name: 'CORE', price: '$57 USD/mes · con WhatsApp' },
]

export default function RegisterPage() {
  const navigate = useNavigate()
  const [plan, setPlan] = useState('basic')
  const [accepted, setAccepted] = useState(false)
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateRegister(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      navigate(`/checkout/${plan}`)
    }
  }

  return (
    <>
      <title>Easywork · Crear cuenta</title>
      <m.div {...pageTransition}>
        <AuthLayout
          logoClassName="h-14"
          headline={
            <>
              Organiza tu cartera.
              <br />
              <span className="text-lilac-300">Cobra y renueva a tiempo.</span>
            </>
          }
          bullets={[
            '7 días gratis para probar todo',
            'Hasta 30 pólizas de prueba',
            'Sube tus pólizas y la IA las registra',
            'Sin permanencia, cancela cuando quieras',
          ]}
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="font-heading text-3xl font-extrabold text-brand">Crea tu cuenta</h2>
            <p className="text-sm text-ink">
              Empieza tu prueba gratis de 7 días con hasta 30 pólizas.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Plan"
            className="grid grid-cols-2 gap-2.5"
          >
            {plans.map((item) => {
              const selected = plan === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setPlan(item.id)}
                  className={`flex min-h-16 flex-col gap-0.5 rounded-xl border-2 px-3.5 py-3 text-left ${
                    selected ? 'border-brand bg-lilac-50' : 'border-field bg-white'
                  }`}
                >
                  <span className="text-xs font-semibold tracking-wide text-brand">
                    {item.name}
                  </span>
                  <span className="text-sm text-ink">{item.price}</span>
                </button>
              )
            })}
          </div>

          <form className="flex flex-col gap-3.5" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-1.5">
              <FieldLabel htmlFor="rg-name">Nombre completo</FieldLabel>
              <TextInput
                id="rg-name"
                type="text"
                autoComplete="name"
                placeholder="Juan Pérez"
                value={values.name}
                onChange={update('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'rg-name-error' : undefined}
                required
              />
              <FieldError id="rg-name-error">{errors.name}</FieldError>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="rg-email">Correo electrónico</FieldLabel>
                <TextInput
                  id="rg-email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'rg-email-error' : undefined}
                  required
                />
                <FieldError id="rg-email-error">{errors.email}</FieldError>
              </div>

              <div className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="rg-email2">Confirmar correo</FieldLabel>
                <TextInput
                  id="rg-email2"
                  type="email"
                  placeholder="Repite tu correo"
                  value={values.email2}
                  onChange={update('email2')}
                  aria-invalid={Boolean(errors.email2)}
                  aria-describedby={errors.email2 ? 'rg-email2-error' : undefined}
                  required
                />
                <FieldError id="rg-email2-error">{errors.email2}</FieldError>
              </div>

              <div className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="rg-pass">Contraseña</FieldLabel>
                <TextInput
                  id="rg-pass"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Mínimo 8 caracteres"
                  value={values.password}
                  onChange={update('password')}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'rg-pass-error' : undefined}
                  minLength={8}
                  required
                />
                <FieldError id="rg-pass-error">{errors.password}</FieldError>
              </div>

              <div className="flex flex-col gap-1.5">
                <FieldLabel htmlFor="rg-pass2">Confirmar contraseña</FieldLabel>
                <TextInput
                  id="rg-pass2"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repite tu contraseña"
                  value={values.password2}
                  onChange={update('password2')}
                  aria-invalid={Boolean(errors.password2)}
                  aria-describedby={errors.password2 ? 'rg-pass2-error' : undefined}
                  minLength={8}
                  required
                />
                <FieldError id="rg-pass2-error">{errors.password2}</FieldError>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel htmlFor="rg-wa">Tu número de WhatsApp</FieldLabel>
              <div className="flex overflow-hidden rounded-xl border border-field">
                <span className="flex items-center border-r border-field bg-surface px-3.5 text-sm font-medium text-brand">
                  MX +52
                </span>
                <input
                  id="rg-wa"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  placeholder="55 1234 5678"
                  value={values.whatsapp}
                  onChange={update('whatsapp')}
                  aria-invalid={Boolean(errors.whatsapp)}
                  aria-describedby={errors.whatsapp ? 'rg-wa-error' : undefined}
                  className="min-h-11.5 min-w-0 flex-1 border-0 bg-white px-3.5 py-3 font-sans text-sm text-brand placeholder:text-placeholder focus:outline-none focus:ring-0"
                  required
                />
              </div>
              <span className="text-xs leading-normal">
                10 dígitos, sin el 52. Te enviamos un código para confirmar tu cuenta.
              </span>
              <FieldError id="rg-wa-error">{errors.whatsapp}</FieldError>
            </div>

            <label className="flex cursor-pointer items-start gap-2.5 py-1 text-sm leading-normal">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                className="mt-0.5 h-5 w-5 flex-none accent-brand"
              />
              <span>
                Acepto los <a href="#">Términos y Condiciones</a> y el{' '}
                <a href="#">Aviso de Privacidad</a>
              </span>
            </label>

            <button
              type="submit"
              disabled={!accepted}
              className={`min-h-13 rounded-xl text-base font-semibold text-white transition-colors ${
                accepted ? 'bg-brand hover:bg-brand-hover' : 'cursor-not-allowed bg-disabled'
              }`}
            >
              Comenzar prueba gratis · {plan === 'basic' ? 'Basic' : 'Core'}
            </button>
          </form>

          <p className="text-center text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="font-semibold">
              Inicia sesión
            </Link>
          </p>
        </AuthLayout>
      </m.div>
    </>
  )
}
