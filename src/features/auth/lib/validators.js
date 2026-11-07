const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRegister(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Escribe tu nombre completo.'
  }

  if (!emailPattern.test(values.email)) {
    errors.email = 'Escribe un correo válido.'
  }

  if (values.email !== values.email2) {
    errors.email2 = 'Los correos no coinciden.'
  }

  if (values.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres.'
  }

  if (values.password !== values.password2) {
    errors.password2 = 'Las contraseñas no coinciden.'
  }

  if (!/^\d{10}$/.test(values.whatsapp.replace(/\s+/g, ''))) {
    errors.whatsapp = 'Escribe tu número de 10 dígitos.'
  }

  return errors
}

export function validateLogin(values) {
  const errors = {}

  if (!emailPattern.test(values.email)) {
    errors.email = 'Escribe un correo válido.'
  }

  if (!values.password) {
    errors.password = 'Escribe tu contraseña.'
  }

  return errors
}
