import { prisma } from "@/lib/db";
import { Reveal } from "@/components/reveal";

export async function Pricing() {
  let services: Array<{
    id: string;
    name: string;
    description: string | null;
    pricingPlans: Array<{
      id: string;
      name: string;
      price: unknown;
      currency: string;
      description: string | null;
      features: unknown;
    }>;
  }> = [];
  let dbError = false;

  try {
    services = await prisma.service.findMany({
      include: {
        pricingPlans: {
          where: { active: true },
          orderBy: { price: "asc" },
        },
      },
      where: { active: true },
      orderBy: { createdAt: "asc" },
    });
  } catch {
    dbError = true;
  }

  return (
    <section id="pricing" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="pricing-title"
          className="mb-7 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Precios
        </h2>

        {dbError && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
            No se pudo cargar pricing desde la base de datos.
          </div>
        )}

        {!dbError && services.length === 0 && (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
            Aun no hay servicios ni planes disponibles.
          </div>
        )}

        {!dbError &&
          services.length > 0 &&
          services.map((service) => (
            <div key={service.id} className="mb-10">
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-primary)]">{service.name}</h3>
              {service.description && <p className="mb-6 max-w-3xl text-[var(--color-text)]">{service.description}</p>}

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {service.pricingPlans.map((plan, index) => (
                  <Reveal key={plan.id} delay={index * 0.05}>
                    <article
                    key={plan.id}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                  >
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-[var(--color-primary)]">{plan.name}</h4>
                      <p className="mb-2 text-3xl font-extrabold text-[var(--color-primary)]">
                        {String(plan.price)}€ <span className="text-sm font-bold opacity-80">por video</span>
                      </p>
                      {plan.description && <p className="mb-3 text-sm text-[var(--color-text)]">{plan.description}</p>}

                      <ul className="space-y-2 text-sm text-[var(--color-text)]">
                        {Array.isArray(plan.features) &&
                          plan.features.map((feature, index) => (
                            <li
                              key={`${plan.id}-${index}`}
                              className="pl-5 before:relative before:-left-5 before:mr-[-1.2rem] before:text-[var(--color-primary)] before:content-['•']"
                            >
                              {String(feature)}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
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
