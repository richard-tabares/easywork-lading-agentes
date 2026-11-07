import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'

const faqs = [
  {
    q: '¿Cómo funciona la prueba de 7 días?',
    a: 'Creas tu cuenta, subes tus pólizas y usas Easywork durante 7 días. Al terminar eliges el plan que mejor te funcione.',
  },
  {
    q: '¿Con qué aseguradoras funciona?',
    a: 'El lector con IA lee pólizas en PDF o foto de cualquier aseguradora. Tú revisas los datos y confirmas con un clic.',
  },
  {
    q: '¿Puedo pagar trimestral o anual?',
    a: 'Sí. Basic y Core se pueden pagar de forma mensual, trimestral o anual. El pago anual tiene 10% de descuento. Cada plan es para 1 usuario.',
  },
  {
    q: '¿Cuál es la diferencia entre Basic y Core?',
    a: 'Basic incluye todo para administrar y cobrar tu cartera con avisos por correo. Core suma WhatsApp Business integrado para enviar recordatorios y mensajes a tus clientes. El envío de mensajes por WhatsApp tiene un costo adicional.',
  },
  {
    q: '¿Me ayudan a migrar desde Excel?',
    a: 'Sí. Importamos tu cartera de forma masiva desde Excel para que empieces con todo cargado.',
  },
  {
    q: '¿Necesito más de un usuario?',
    a: 'Los planes Basic y Core son para 1 usuario. Si tienes equipo, escríbenos por WhatsApp y armamos un plan para tu despacho de seguros.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-surface px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <h2 className="text-center font-heading text-3xl font-extrabold text-brand md:text-4xl lg:text-5xl">
          Preguntas frecuentes
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 px-5.5 py-5 text-left text-base font-semibold text-brand"
                >
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7.5 w-7.5 flex-none items-center justify-center rounded-lg bg-brand text-lg leading-none text-white"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5.5 pb-5.5 text-sm leading-relaxed text-ink">{faq.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
