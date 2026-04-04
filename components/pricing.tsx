import { Reveal } from "@/components/reveal";

export async function Pricing() {
  const verticalPlans = [
    {
      id: "starter",
      name: "Starter",
      subtitle: "Volumen básico",
      price: "desde 18€",
      priceNote: "por clip · facturación clara",
      features: [
        "Cortes dinámicos al servicio del ritmo",
        "Subtítulos nativos legibles en móvil",
        "Corrección de color básica y consistencia visual",
      ],
      highlighted: false,
    },
    {
      id: "impulse",
      name: "Impulse",
      subtitle: "Crecimiento real",
      price: "12€",
      priceNote: "por clip",
      promoBadge: "Promo: 7€ por clip (al contratar +2 clips)",
      features: [
        "Todo lo de Starter",
        "Hooks visuales que detienen el scroll",
        "Sound design y mezcla que sostienen la tensión",
        "B-roll y capas que refuerzan la historia",
        "Adaptación explícita al algoritmo (picos de retención)",
      ],
      highlighted: true,
    },
    {
      id: "authority",
      name: "Authority",
      subtitle: "Marcas top",
      price: "desde 95€",
      priceNote: "por clip · scope premium",
      features: [
        "Todo lo de Impulse",
        "Motion graphics avanzados y sistemas visuales",
        "Efectos especiales (VFX) cuando el concepto lo exige",
        "Revisiones prioritarias y ventana de entrega acelerada",
      ],
      highlighted: false,
    },
  ];

  const bulkPacks = [
    {
      id: "pack-10",
      name: "Pack 10 clips / mes",
      price: "165€",
      period: "facturación mensual",
      perks: ["Prioridad en calendario", "Coherencia visual entre entregas", "Ideal para calendario de publicación fijo"],
    },
    {
      id: "pack-20",
      name: "Pack 20 clips / mes",
      price: "299€",
      period: "facturación mensual",
      perks: ["Máxima continuidad de estilo", "Menor coste marginal por clip", "Pensado para equipos que publican a diario"],
    },
  ];

  return (
    <section id="pricing" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="pricing-title"
          className="mb-3 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Inversión en verticales
        </h2>
        <p className="mb-8 max-w-3xl font-medium leading-relaxed text-[var(--color-text)]">
          Olvida la tarifa por hora: pagas por resultado en feed. Elige el nivel de montaje que necesita tu audiencia —
          de publicación constante a producción de marca.
        </p>

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
          Planes verticales
        </p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {verticalPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.05}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-[var(--color-card)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] ${
                  plan.highlighted
                    ? "border-[var(--color-primary)] ring-2 ring-[color:var(--color-primary)]/35"
                    : "border-[var(--color-border)]"
                }`}
              >
                {plan.highlighted && (
                  <p className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-4 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                    Más contratado
                  </p>
                )}
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                  {plan.subtitle}
                </p>
                <h3 className="mb-3 text-xl font-bold text-[var(--color-primary)]">{plan.name}</h3>
                <div className="mb-1 flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[var(--color-primary)]">{plan.price}</span>
                  {"promoBadge" in plan && plan.promoBadge ? (
                    <span className="text-sm font-semibold text-[var(--color-text)]">{plan.priceNote}</span>
                  ) : (
                    <span className="text-sm text-[var(--color-text)]/90">{plan.priceNote}</span>
                  )}
                </div>
                {"promoBadge" in plan && plan.promoBadge ? (
                  <p className="mb-4 inline-flex max-w-full rounded-lg border border-[var(--color-primary)]/40 bg-[color:var(--color-primary)]/10 px-3 py-2 text-xs font-bold leading-snug text-[var(--color-primary)]">
                    {plan.promoBadge}
                  </p>
                ) : (
                  <div className="mb-4 h-px" aria-hidden="true" />
                )}
                <ul className="mb-2 flex-1 space-y-2 text-sm text-[var(--color-text)]">
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

        <Reveal delay={0.15} className="mt-14">
          <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-accent)]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.08)] md:p-8">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  Suscripción de volumen
                </p>
                <h3 className="text-2xl font-bold text-[var(--color-primary)]">Packs de clips mensuales</h3>
                <p className="mt-2 max-w-2xl text-sm font-medium text-[var(--color-text)]">
                  Compromiso mensual para quienes publican en serie: precio predecible, prioridad en cola y estética
                  alineada entre entregas.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {bulkPacks.map((pack) => (
                <article
                  key={pack.id}
                  className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/90 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-secondary)]">{pack.period}</p>
                  <h4 className="mt-1 text-lg font-bold text-[var(--color-primary)]">{pack.name}</h4>
                  <p className="mt-3 text-3xl font-extrabold text-[var(--color-primary)]">{pack.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                    {pack.perks.map((perk) => (
                      <li key={perk} className="flex gap-2">
                        <span className="text-[var(--color-primary)]" aria-hidden="true">
                          ✓
                        </span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
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
