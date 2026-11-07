import { Check } from 'lucide-react'
import authBackdrop from '../../../assets/backdrops/auth-agent-office.webp'
import BrandLogo from '../../../components/ui/BrandLogo'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'

export default function AuthLayout({ logoClassName, headline, bullets, children }) {
  return (
    <div className="flex min-h-screen flex-wrap bg-white font-sans text-ink">
      <div className="relative min-h-105 min-w-0 grow basis-full overflow-hidden lg:basis-1/2">
        <PhotoBackdrop
          src={authBackdrop}
          className="absolute inset-0"
          overlayClassName="bg-linear-to-r from-brand/90 via-brand/80 to-brand/60"
        />

        <div className="relative flex h-full flex-col justify-between gap-10 px-14 pb-12 pt-14">
          <span className="text-sm font-semibold tracking-widest text-lilac-300">ALL IN ONE</span>

          <div className="flex max-w-xl flex-col gap-7">
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              {headline}
            </h1>
            <ul className="flex list-none flex-col gap-3.5 p-0 text-base text-lilac-100">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-ink"
                  >
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <span className="text-sm text-footer-muted">© 2026 Easywork</span>
        </div>
      </div>

      <main className="flex min-w-0 grow basis-full items-center justify-center px-6 py-12 lg:basis-1/2">
        <div className="flex w-full max-w-md flex-col gap-7">
          <BrandLogo imageClassName={logoClassName} className="self-start" />
          {children}
        </div>
      </main>
    </div>
  )
}
