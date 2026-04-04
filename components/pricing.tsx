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

function PlanMiniCard({ plan, compact }: { plan: PlanMini; compact?: boolean }) {
  const h = plan.highlighted;
  return (
    <article
      className={`flex w-full flex-col rounded-xl border-2 border-black p-2.5 text-left transition duration-200 md:p-3 ${
        compact ? "min-h-0" : "min-h-[132px] md:min-h-[140px]"
      } ${
        h
          ? "relative z-[1] scale-[1.01] bg-[var(--color-card)] shadow-[0_8px_22px_rgba(0,0,0,0.16)] ring-2 ring-black"
          : "bg-[var(--color-card)]/95"
      }`}
    >
      {h ? (
        <p className="mb-1 w-fit rounded-full bg-black px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
          Recomendado
        </p>
      ) : null}
      {plan.subtitle ? (
        <p className="text-[9px] font-semibold uppercase tracking-wide text-[var(--color-secondary)]">{plan.subtitle}</p>
      ) : null}
      <h4 className="mt-0.5 text-xs font-bold text-[var(--color-primary)] md:text-sm">{plan.name}</h4>
      <div className="mt-0.5 flex flex-wrap items-baseline gap-1">
        <span className="text-base font-extrabold text-[var(--color-primary)] md:text-lg">{plan.price}</span>
        {plan.priceNote ? <span className="text-[10px] text-[var(--color-text)]/90">{plan.priceNote}</span> : null}
      </div>
      {plan.promoBadge ? (
        <p className="mt-1.5 rounded-md border border-black/25 bg-black/[0.04] px-1.5 py-1 text-[9px] font-bold leading-snug text-[var(--color-primary)]">
          {plan.promoBadge}
        </p>
      ) : null}
      {plan.note && !(plan.features && plan.features.length) ? (
        <p className="mt-1.5 flex-1 text-[10px] leading-snug text-[var(--color-text)] md:text-[11px]">{plan.note}</p>
      ) : null}
      {plan.features && plan.features.length > 0 ? (
        <ul className="mt-1.5 flex-1 space-y-0.5 text-[10px] leading-snug text-[var(--color-text)] md:text-[11px]">
          {plan.features.map((f) => (
            <li
              key={f}
              className="pl-2.5 before:relative before:-left-2.5 before:mr-[-0.55rem] before:text-[var(--color-primary)] before:content-['•']"
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
  plansLayout = "row",
}: {
  kicker: string;
  title: string;
  subtitle: string;
  plans: PlanMini[];
  plansLayout?: "row" | "column";
}) {
  const plansClass =
    plansLayout === "column"
      ? "mt-3 flex flex-col gap-2.5"
      : "mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:items-stretch sm:gap-2 md:gap-2.5";

  return (
    <article className="flex min-w-0 flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:scale-[1.005] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] md:p-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--color-secondary)]">{kicker}</p>
      <h3 className="mt-0.5 text-base font-bold text-[var(--color-primary)] md:text-lg">{title}</h3>
      <p className="mt-0.5 text-[11px] text-[var(--color-text)]/90 md:text-xs">{subtitle}</p>
      <div className={plansClass}>
        {plans.map((plan) => (
          <PlanMiniCard key={plan.id} plan={plan} compact={plansLayout === "column"} />
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
        <h2 id="pricing-title" className="section-title-premium mb-2 text-[clamp(1.35rem,2.75vw,2rem)] font-bold">
          Inversion High-Ticket
        </h2>
        <p className="mb-5 max-w-3xl text-sm font-medium leading-relaxed text-[var(--color-text)]">
          Verticales en columna estrecha; miniaturas y horizontal a la derecha. Plan central destacado en cada bloque.
        </p>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-6 lg:flex-row lg:items-start">
          <div className="w-full shrink-0 lg:w-[min(100%,272px)] lg:max-w-[272px]">
            <PricingBentoPanel
              kicker="Formato"
              title="Verticales"
              subtitle="Shorts, Reels y TikTok con ritmo de retencion."
              plans={verticalPlans}
              plansLayout="column"
            />
          </div>
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 md:gap-6">
            <PricingBentoPanel
              kicker="Formato"
              title="Miniaturas"
              subtitle="CTR y coherencia de marca en el feed."
              plans={miniaturasPlans}
              plansLayout="row"
            />
            <PricingBentoPanel
              kicker="Formato"
              title="Horizontal"
              subtitle="Largos para YouTube con narrativa clara."
              plans={horizontalPlans}
              plansLayout="row"
            />
          </div>
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
          className="mb-6 text-[clamp(1.35rem,2.75vw,2rem)] font-bold text-[var(--color-primary)]"
        >
          Precios
        </h2>
        <div className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-4">Cargando planes...</div>
      </div>
    </section>
  );
}
