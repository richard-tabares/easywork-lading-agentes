import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { m } from 'motion/react'
import AuthLayout from '../components/AuthLayout'
import { FieldError, FieldLabel, TextInput } from '../../../components/ui/Field'
import { validateLogin } from '../lib/validators'
import { pageTransition } from '../../../lib/motion'

export default function LoginPage() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateLogin(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      navigate('/')
    }
  }

  return (
    <>
      <title>Easywork · Iniciar sesión</title>
      <m.div {...pageTransition}>
        <AuthLayout
          logoClassName="h-16"
          headline={
            <>
              Tu cartera se cobra a tiempo,{' '}
              <span className="text-lilac-300">aunque tú no estés.</span>
            </>
          }
          bullets={[
            'Semáforo de cobranza en tiempo real',
            'Recordatorios automáticos a tus clientes',
            'Lector de pólizas con IA',
          ]}
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="font-heading text-3xl font-extrabold text-brand">Iniciar sesión</h2>
            <p className="text-sm text-ink">Ingresa tu correo y contraseña para continuar.</p>
          </div>

          <form className="flex flex-col gap-4.5" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-2">
              <FieldLabel htmlFor="lg-email">Correo electrónico</FieldLabel>
              <TextInput
                id="lg-email"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                value={values.email}
                onChange={update('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'lg-email-error' : undefined}
                required
              />
              <FieldError id="lg-email-error">{errors.email}</FieldError>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <FieldLabel htmlFor="lg-pass">Contraseña</FieldLabel>
                <a href="#" className="text-sm font-medium">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <TextInput
                id="lg-pass"
                type="password"
                autoComplete="current-password"
                placeholder="Tu contraseña"
                value={values.password}
                onChange={update('password')}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'lg-pass-error' : undefined}
                required
              />
              <FieldError id="lg-pass-error">{errors.password}</FieldError>
            </div>

            <button
              type="submit"
              className="mt-1.5 min-h-13 rounded-xl bg-brand text-base font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="font-semibold">
              Prueba gratis 7 días
            </Link>
          </p>

          <p className="text-center text-sm">
            ¿Necesitas ayuda?{' '}
            <a href="https://wa.me/525662754599">WhatsApp +52 56 6275 4599</a>
          </p>
        </AuthLayout>
      </m.div>
    </>
  )
}
