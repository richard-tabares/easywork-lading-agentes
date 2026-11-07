import { Link } from 'react-router'
import BrandLogo from '../../../components/ui/BrandLogo'
import ButtonLink from '../../../components/ui/ButtonLink'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3.5"
      >
        <BrandLogo imageClassName="h-13" />

        <div className="flex flex-wrap items-center gap-7 text-sm font-medium">
          <a className="text-ink no-underline transition-colors hover:text-brand" href="#como-funciona">
            Cómo funciona
          </a>
          <a className="text-ink no-underline transition-colors hover:text-brand" href="#funciones">
            Funciones
          </a>
          <a className="text-ink no-underline transition-colors hover:text-brand" href="#precios">
            Precios
          </a>
          <a className="text-ink no-underline transition-colors hover:text-brand" href="#faq">
            Preguntas
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-2 py-3 text-sm font-medium text-ink no-underline transition-colors hover:text-brand"
          >
            Iniciar sesión
          </Link>
          <ButtonLink to="/registro" className="min-h-11 px-5.5 text-sm">
            Probar gratis 7 días
          </ButtonLink>
        </div>
      </nav>
    </header>
  )
}
