export function Services() {
  const items = [
    {
      id: "vertical",
      title: "Vertical",
      cta: "#vertical-pack",
      ctaLabel: "Ver Vertical",
      bullets: [
        "Hook fuerte en los primeros segundos",
        "Ritmo agil para retencion y viralidad",
        "Montaje para Shorts, Reels y TikTok",
        "Entrega lista para publicar",
      ],
    },
    {
      id: "youtube",
      title: "Horizontal (YouTube)",
      cta: "#horizontal-pack",
      ctaLabel: "Ver Horizontal",
      bullets: [
        "Estructura narrativa clara de inicio a cierre",
        "Ritmo estable para mantener atencion",
        "Audio y continuidad visual bien integrados",
        "Montaje preparado para YouTube largo",
      ],
    },
    {
      id: "miniaturas",
      title: "Miniaturas",
      cta: "#pricing",
      ctaLabel: "Ver Precios",
      bullets: [
        "Diseno enfocado a CTR",
        "Jerarquia visual clara en movil y desktop",
        "Consistencia con tu marca y estilo",
        "Pensadas para vender el video en un vistazo",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="bg-blue-50/70 py-16 dark:bg-zinc-900/70 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="servicios-title" className="mb-8 text-3xl font-bold text-blue-700 dark:text-red-400 md:text-4xl">
          Servicios
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
            >
              <h3 className="mb-4 border-b border-blue-100 pb-2 text-xl font-semibold text-blue-700 dark:border-zinc-700 dark:text-red-400">
                {item.title}
              </h3>
              <ul className="mb-5 space-y-2 text-sm font-medium text-slate-700 dark:text-zinc-200">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="pl-5 before:relative before:-left-5 before:mr-[-1.2rem] before:text-blue-600 before:content-['→'] dark:before:text-red-400">
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={item.cta}
                className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-950/40"
              >
                {item.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
