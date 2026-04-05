import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Brief validado",
    detail: "Confirmo material, objetivo de performance y ventana de entrega en el mismo hilo. Cero ambigüedad.",
  },
  {
    title: "Montaje con intención",
    detail: "Avances con estado claro: estructura, ritmo, sonido y revisión — siempre sabes qué queda por pulir.",
  },
  {
    title: "Entrega y publicación",
    detail: "Archivo final por enlace privado + checklist rápido para maximizar retención al subir.",
  },
];

export function TrackingReport() {
  return (
    <section id="tracking" className="section-shell" aria-labelledby="tracking-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Proceso</p>
        <h2
          id="tracking-title"
          className="section-title-premium mb-4 text-[clamp(1.65rem,3.5vw,2.45rem)] font-bold"
        >
          Transparencia total, cero ansiedad
        </h2>
        <p className="mb-8 max-w-3xl font-medium leading-relaxed text-[var(--color-text)]">
          Ventaja operativa: cada proyecto incluye seguimiento explícito. Sabes en qué fase está el clip, cuándo toca tu
          feedback y cuándo cierra — para que puedas planificar contenido sin improvisar plazos.
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
