import logo from '../../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white px-6 pb-8 pt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap justify-between gap-8">
          <img src={logo} alt="Easywork · All in one" className="block h-18 w-auto" />

          <div className="flex flex-wrap gap-12 text-sm">
            <div className="flex flex-col gap-2.5">
              <strong className="font-semibold text-brand">Producto</strong>
              <a className="text-ink no-underline transition-colors hover:text-brand" href="#funciones">
                Funciones
              </a>
              <a className="text-ink no-underline transition-colors hover:text-brand" href="#precios">
                Precios
              </a>
              <a className="text-ink no-underline transition-colors hover:text-brand" href="#faq">
                Preguntas frecuentes
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <strong className="font-semibold text-brand">Legal</strong>
              <a className="text-ink no-underline transition-colors hover:text-brand" href="#">
                Aviso de privacidad
              </a>
              <a className="text-ink no-underline transition-colors hover:text-brand" href="#">
                Términos y condiciones
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <strong className="font-semibold text-brand">Contacto</strong>
              <a
                className="text-ink no-underline transition-colors hover:text-brand"
                href="https://wa.me/525662754599"
              >
                WhatsApp +52 56 6275 4599
              </a>
              <a
                className="text-ink no-underline transition-colors hover:text-brand"
                href="mailto:hola@easywork.com.mx"
              >
                hola@easywork.com.mx
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-line pt-5 text-sm">
          © 2026 Easywork · Hecho en México para agentes de seguros
        </p>
      </div>
    </footer>
  )
}
