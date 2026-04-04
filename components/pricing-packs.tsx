const bulkPacks = [
  {
    id: "pack-10",
    name: "Pack 10 clips / mes",
    price: "490€",
    period: "Suscripcion mensual",
    perks: ["Prioridad total", "Sistema visual consistente", "Calendario fijo"],
  },
  {
    id: "pack-20",
    name: "Pack 20 clips / mes",
    price: "890€",
    period: "Suscripcion mensual",
    perks: ["Escalado de produccion", "Menor coste por clip", "Soporte prioritario"],
  },
];

export function PricingPacks() {
  return (
    <section id="packs" className="section-shell bg-[var(--color-accent)]/40" aria-labelledby="packs-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Packs</p>
        <h2
          id="packs-title"
          className="section-title-premium mb-3 text-[clamp(1.3rem,2.6vw,1.9rem)] font-bold"
        >
          Volumen mensual sin perder calidad
        </h2>
        <p className="mb-6 max-w-3xl text-sm font-medium leading-relaxed text-[var(--color-text)] md:text-base">
          Entre resultados y tarifas por pieza: packs para quien publica a ritmo de creador y necesita previsibilidad.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {bulkPacks.map((pack) => (
            <article
              key={pack.id}
              className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-5 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] md:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-secondary)]">
                {pack.period}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[var(--color-primary)] md:text-xl">{pack.name}</h3>
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
    </section>
  );
}
