import { Reveal } from "@/components/reveal";

export async function Pricing() {
  const plans = [
    {
      id: "base",
      name: "Base",
      tagline: "Subida semanal",
      price: "desde 25€",
      features: [
        "1 entrega semanal optimizada para publicación",
        "Edición limpia y ritmo narrativo consistente",
        "1 ronda de ajustes",
      ],
      highlighted: false,
    },
    {
      id: "estandar",
      name: "Estandar",
      tagline: "Recomendado",
      price: "desde 60€",
      features: [
        "Mayor calidad de montaje y sonido",
        "Adaptado a tu estilo y tipo de audiencia",
        "Hasta 2 rondas de ajustes",
      ],
      highlighted: true,
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Motion Graphics y efectos",
      price: "desde 110€",
      features: [
        "Diseño de motion graphics y overlays",
        "Efectos avanzados de edición",
        "Prioridad de entrega y soporte dedicado",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="pricing-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Precios
        </h2>

        <p className="mb-8 max-w-3xl text-[var(--color-text)]">
          Estructura de precios orientada a resultados: más consistencia, mejor retención y un flujo de
          publicación estable para tu canal.
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.05}>
              <article
                className={`rounded-2xl border bg-[var(--color-card)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] ${
                  plan.highlighted
                    ? "border-[var(--color-primary)] ring-2 ring-[color:var(--color-primary)]/30"
                    : "border-[var(--color-border)]"
                }`}
              >
                <p className="mb-2 inline-flex rounded-full bg-[color:var(--color-primary)]/12 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
                  {plan.tagline}
                </p>
                <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]">{plan.name}</h3>
                <p className="mb-4 text-3xl font-extrabold text-[var(--color-primary)]">{plan.price}</p>
                <ul className="space-y-2 text-sm text-[var(--color-text)]">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="pl-5 before:relative before:-left-5 before:mr-[-1.2rem] before:text-[var(--color-primary)] before:content-['•']"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
            <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]">Packs de Clips</h3>
            <p className="mb-3 text-[var(--color-text)]">
              Para creadores que necesitan volumen semanal con consistencia visual.
            </p>
            <p className="text-2xl font-extrabold text-[var(--color-primary)]">10 clips x 40€</p>
            <p className="mt-2 text-sm text-[var(--color-text)]/85">
              Incluye adaptación de formato, ritmo optimizado y entrega organizada por lote.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function PricingSkeleton() {
  return (
    <section id="pricing" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="pricing-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Precios
        </h2>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
          Cargando planes...
        </div>
      </div>
    </section>
  );
}
