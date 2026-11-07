import ButtonLink from '../../../components/ui/ButtonLink'
import logo from '../../../assets/logo.png'

export default function FinalCta() {
  return (
    <section className="flex flex-wrap overflow-hidden bg-white">
      <div className="relative min-h-105 min-w-0 grow basis-full lg:basis-2/3">
        <div
          aria-hidden="true"
          className="bg-ew-pattern absolute -bottom-10 -top-10 left-0 right-7.5 rounded-r-full"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -top-10 right-0 w-7.5 bg-white"
        />

        <div className="relative flex justify-end px-6 py-18 pr-30">
          <div className="flex max-w-xl flex-col gap-5">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Esta tarde puedes tener tus pólizas cobrándose solas.
            </h2>
            <p className="font-heading text-xl font-extrabold text-lilac-300">
              Empieza hoy. Es gratis.
            </p>
            <p className="text-base leading-relaxed text-lilac-200">
              Crea tu cuenta en 2 minutos y carga tus primeras pólizas fácil. Sin tarjeta, sin
              trámites, sin compromisos.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink variant="white" to="/registro" className="min-h-13 px-7 text-base">
                Probar gratis 7 días
              </ButtonLink>
              <ButtonLink
                variant="outlineWhite"
                href="https://wa.me/525662754599"
                className="min-h-13 px-6 text-base"
              >
                Hablar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex min-w-0 grow basis-full items-center justify-center px-6 py-12 lg:basis-1/3">
        <div
          aria-hidden="true"
          className="absolute -left-8 bottom-6 top-6 w-4 rounded-r-full border-r-8 border-ink"
        />
        <img
          src={logo}
          alt="Easywork · All in one"
          className="block h-auto w-full max-w-xs p-8"
        />
      </div>
    </section>
  )
}
