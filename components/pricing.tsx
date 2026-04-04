import { prisma } from "@/lib/db";

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
    <section id="pricing" className="bg-blue-50/70 py-16 dark:bg-zinc-900/70 md:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="pricing-title" className="mb-8 text-3xl font-bold text-blue-700 dark:text-red-400 md:text-4xl">
          Precios
        </h2>

        {dbError && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
            No se pudo cargar pricing desde la base de datos.
          </div>
        )}

        {!dbError && services.length === 0 && (
          <div className="rounded-2xl border border-blue-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            Aun no hay servicios ni planes disponibles.
          </div>
        )}

        {!dbError &&
          services.length > 0 &&
          services.map((service) => (
            <div key={service.id} className="mb-10">
              <h3 className="mb-4 text-2xl font-semibold text-blue-700 dark:text-red-400">{service.name}</h3>
              {service.description && <p className="mb-6 max-w-3xl text-slate-700 dark:text-zinc-200">{service.description}</p>}

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {service.pricingPlans.map((plan) => (
                  <article
                    key={plan.id}
                    className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                  >
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-blue-700 dark:text-red-400">{plan.name}</h4>
                      <p className="mb-2 text-3xl font-extrabold text-blue-700 dark:text-red-400">
                        {String(plan.price)}€ <span className="text-sm font-bold opacity-80">por video</span>
                      </p>
                      {plan.description && <p className="mb-3 text-sm text-slate-700 dark:text-zinc-200">{plan.description}</p>}

                      <ul className="space-y-2 text-sm text-slate-700 dark:text-zinc-200">
                        {Array.isArray(plan.features) &&
                          plan.features.map((feature, index) => (
                            <li key={`${plan.id}-${index}`} className="pl-5 before:relative before:-left-5 before:mr-[-1.2rem] before:text-blue-600 before:content-['•'] dark:before:text-red-400">
                              {String(feature)}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </article>
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
    <section id="pricing" className="bg-blue-50/70 py-16 dark:bg-zinc-900/70 md:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="pricing-title" className="mb-8 text-3xl font-bold text-blue-700 dark:text-red-400 md:text-4xl">
          Precios
        </h2>
        <div className="rounded-2xl border border-blue-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          Cargando planes...
        </div>
      </div>
    </section>
  );
}
