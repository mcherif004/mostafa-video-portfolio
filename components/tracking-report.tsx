import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Pedido recibido",
    detail: "Confirmo material, objetivo y fecha estimada en el mismo hilo.",
  },
  {
    title: "Edicion en curso",
    detail: "Recibes avance con estado: montaje, ajustes y versión de revisión.",
  },
  {
    title: "Entrega y cierre",
    detail: "Compartición final por Drive/SwissTransfer + checklist de publicación.",
  },
];

export function TrackingReport() {
  return (
    <section id="tracking" className="py-14 md:py-20 lg:py-24" aria-labelledby="tracking-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="tracking-title"
          className="mb-4 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Tracking de pedido
        </h2>
        <p className="mb-8 max-w-3xl text-[var(--color-text)]">
          Cada proyecto incluye un informe de edición para que sepas en todo momento en qué estado está tu contenido y
          cuándo se entrega.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  Etapa {index + 1}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">{step.title}</h3>
                <p className="text-sm text-[var(--color-text)]">{step.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
