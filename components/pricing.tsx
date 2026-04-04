"use client";

type PlanMini = {
  id: string;
  name: string;
  subtitle?: string;
  price: string;
  priceNote?: string;
  promoBadge?: string;
  note?: string;
  features?: string[];
  highlighted?: boolean;
};

function PlanMiniCard({ plan }: { plan: PlanMini }) {
  const h = plan.highlighted;
  return (
    <article
      className={`flex min-h-[148px] flex-col rounded-xl border-2 border-black p-3 text-left transition duration-200 md:min-h-[160px] md:p-4 ${
        h
          ? "relative z-[1] scale-[1.02] bg-[var(--color-card)] shadow-[0_10px_28px_rgba(0,0,0,0.18)] ring-2 ring-black"
          : "bg-[var(--color-card)]/95"
      }`}
    >
      {h ? (
        <p className="mb-1.5 w-fit rounded-full bg-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          Recomendado
        </p>
      ) : null}
      {plan.subtitle ? (
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-secondary)]">{plan.subtitle}</p>
      ) : null}
      <h4 className="mt-0.5 text-sm font-bold text-[var(--color-primary)] md:text-base">{plan.name}</h4>
      <div className="mt-1 flex flex-wrap items-baseline gap-1">
        <span className="text-lg font-extrabold text-[var(--color-primary)] md:text-xl">{plan.price}</span>
        {plan.priceNote ? <span className="text-[11px] text-[var(--color-text)]/90">{plan.priceNote}</span> : null}
      </div>
      {plan.promoBadge ? (
        <p className="mt-2 rounded-md border border-black/25 bg-black/[0.04] px-2 py-1 text-[10px] font-bold leading-snug text-[var(--color-primary)]">
          {plan.promoBadge}
        </p>
      ) : null}
      {plan.note && !(plan.features && plan.features.length) ? (
        <p className="mt-2 flex-1 text-[11px] leading-snug text-[var(--color-text)]">{plan.note}</p>
      ) : null}
      {plan.features && plan.features.length > 0 ? (
        <ul className="mt-2 flex-1 space-y-1 text-[11px] leading-snug text-[var(--color-text)]">
          {plan.features.map((f) => (
            <li
              key={f}
              className="pl-3 before:relative before:-left-3 before:mr-[-0.65rem] before:text-[var(--color-primary)] before:content-['•']"
            >
              {f}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function PricingBentoPanel({
  kicker,
  title,
  subtitle,
  plans,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  plans: PlanMini[];
}) {
  return (
    <article className="flex flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-4 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] md:p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-secondary)]">{kicker}</p>
      <h3 className="mt-1 text-lg font-bold text-[var(--color-primary)] md:text-xl">{title}</h3>
      <p className="mt-1 text-xs text-[var(--color-text)]/90 md:text-sm">{subtitle}</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-stretch sm:gap-2 md:gap-3">
        {plans.map((plan) => (
          <PlanMiniCard key={plan.id} plan={plan} />
        ))}
      </div>
    </article>
  );
}

export function Pricing() {
  const verticalPlans: PlanMini[] = [
    {
      id: "starter",
      name: "Starter",
      subtitle: "Volumen base",
      price: "39€",
      priceNote: "por clip",
      features: ["Corte dinamico", "Subtitulos nativos", "Color base", "1 revision"],
      highlighted: false,
    },
    {
      id: "impulse",
      name: "Impulse",
      subtitle: "Plan destacado",
      price: "19€",
      priceNote: "por clip",
      promoBadge: "Promo: 7€ por clip (al contratar +2 clips)",
      features: ["Todo lo de Starter", "Hooks visuales", "Sound design", "B-roll", "Adaptacion a algoritmo"],
      highlighted: true,
    },
    {
      id: "authority",
      name: "Authority",
      subtitle: "Elite / marca",
      price: "149€",
      priceNote: "por clip",
      features: ["Todo lo de Impulse", "Motion Graphics Pro", "VFX avanzados", "Prioridad de agenda"],
      highlighted: false,
    },
  ];

  const horizontalPlans: PlanMini[] = [
    {
      id: "h-starter",
      name: "Starter",
      price: "180€",
      note: "Video largo 10-15 min",
      features: ["1 revision", "Edicion narrativa", "Audio limpio"],
      highlighted: false,
    },
    {
      id: "h-growth",
      name: "Growth",
      price: "290€",
      note: "Video largo 20-30 min",
      features: ["2 revisiones", "Ritmo avanzado", "Refuerzo visual"],
      highlighted: true,
    },
    {
      id: "h-authority",
      name: "Authority",
      price: "450€",
      note: "Video largo 30-45 min",
      features: ["3 revisiones", "Post-produccion premium", "Prioridad total"],
      highlighted: false,
    },
  ];

  const miniaturasPlans: PlanMini[] = [
    {
      id: "thumb-1",
      name: "Miniatura premium",
      price: "55€",
      note: "Diseno unico orientado a CTR alto.",
      highlighted: false,
    },
    {
      id: "thumb-2",
      name: "Pack 5 miniaturas",
      price: "240€",
      note: "Sistema visual completo para serie.",
      highlighted: true,
    },
    {
      id: "thumb-3",
      name: "Pack 10 miniaturas",
      price: "450€",
      note: "Escala de contenido para canal pro.",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="section-shell bg-[var(--color-accent)]/75" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Precios</p>
        <h2 id="pricing-title" className="section-title-premium mb-3 text-[clamp(1.65rem,3.5vw,2.45rem)] font-bold">
          Inversion High-Ticket
        </h2>
        <p className="mb-6 max-w-3xl font-medium leading-relaxed text-[var(--color-text)]">
          Mismo lenguaje visual que resultados: tres bloques, tres planes por bloque. El del centro es el que mas suelo
          recomendar.
        </p>

        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[1fr_2fr] lg:grid-rows-2 lg:items-stretch">
          <div className="lg:row-span-2">
            <PricingBentoPanel
              kicker="Formato"
              title="Verticales"
              subtitle="Shorts, Reels y TikTok con ritmo de retencion."
              plans={verticalPlans}
            />
          </div>
          <PricingBentoPanel
            kicker="Formato"
            title="Miniaturas"
            subtitle="CTR y coherencia de marca en el feed."
            plans={miniaturasPlans}
          />
          <PricingBentoPanel
            kicker="Formato"
            title="Horizontal"
            subtitle="Largos para YouTube con narrativa clara."
            plans={horizontalPlans}
          />
        </div>
      </div>
    </section>
  );
}

export function PricingSkeleton() {
  return (
    <section id="pricing" className="section-shell bg-[var(--color-accent)]/75" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="pricing-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Precios
        </h2>
        <div className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-4">Cargando planes...</div>
      </div>
    </section>
  );
}
