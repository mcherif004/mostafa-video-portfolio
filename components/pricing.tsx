 "use client";
 
 import { useState } from "react";
 import { Reveal } from "@/components/reveal";
 
 type PricingTab = "vertical" | "horizontal" | "miniaturas";
 
 export function Pricing() {
   const [tab, setTab] = useState<PricingTab>("vertical");
 
   const verticalPlans = [
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
 
   const bulkPacks = [
     { id: "pack-10", name: "Pack 10 clips / mes", price: "490€", period: "suscripcion mensual", perks: ["Prioridad total", "Sistema visual consistente", "Calendario fijo"] },
     { id: "pack-20", name: "Pack 20 clips / mes", price: "890€", period: "suscripcion mensual", perks: ["Escalado de produccion", "Menor coste por clip", "Soporte prioritario"] },
   ];
 
   const horizontalPlans = [
     { id: "h-starter", name: "Starter", price: "180€", note: "Video largo 10-15 min", features: ["1 revision", "Edicion narrativa", "Audio limpio"] },
     { id: "h-growth", name: "Growth", price: "290€", note: "Video largo 20-30 min", features: ["2 revisiones", "Ritmo avanzado", "Refuerzo visual"] },
     { id: "h-authority", name: "Authority", price: "450€", note: "Video largo 30-45 min", features: ["3 revisiones", "Post-produccion premium", "Prioridad total"] },
   ];
 
   const miniaturas = [
     { id: "thumb-1", name: "Miniatura premium", price: "55€", note: "Diseño unico orientado a CTR alto." },
     { id: "thumb-2", name: "Pack 5 miniaturas", price: "240€", note: "Sistema visual completo para serie." },
     { id: "thumb-3", name: "Pack 10 miniaturas", price: "450€", note: "Escala de contenido para canal pro." },
   ];
 
   return (
     <section id="pricing" className="bg-[var(--color-accent)]/75 py-10 md:py-14 lg:py-16" aria-labelledby="pricing-title">
       <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
         <h2 id="pricing-title" className="mb-3 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]">
           Inversion High-Ticket
         </h2>
         <p className="mb-6 max-w-3xl font-medium leading-relaxed text-[var(--color-text)]">
           Posicionamiento de agencia: menos volumen basura, mas calidad, mas retorno por pieza.
         </p>
 
         <div className="mb-6 flex flex-wrap gap-2">
           <button
             type="button"
             onClick={() => setTab("vertical")}
             className={`rounded-full px-4 py-2 text-sm font-semibold ${tab === "vertical" ? "bg-[var(--color-primary)] text-white" : "border border-[var(--color-border)] text-[var(--color-primary)]"}`}
           >
             Vertical + Packs
           </button>
           <button
             type="button"
             onClick={() => setTab("horizontal")}
             className={`rounded-full px-4 py-2 text-sm font-semibold ${tab === "horizontal" ? "bg-[var(--color-primary)] text-white" : "border border-[var(--color-border)] text-[var(--color-primary)]"}`}
           >
             Horizontal
           </button>
           <button
             type="button"
             onClick={() => setTab("miniaturas")}
             className={`rounded-full px-4 py-2 text-sm font-semibold ${tab === "miniaturas" ? "bg-[var(--color-primary)] text-white" : "border border-[var(--color-border)] text-[var(--color-primary)]"}`}
           >
             Miniaturas
           </button>
         </div>
 
         {tab === "vertical" && (
           <>
             <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
               {verticalPlans.map((plan, index) => (
                 <Reveal key={plan.id} delay={index * 0.05}>
                   <article
                     className={`relative flex h-full flex-col rounded-2xl border bg-[var(--color-card)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.10)] ${
                       plan.highlighted ? "border-[var(--color-primary)] ring-2 ring-[color:var(--color-primary)]/35" : "border-[var(--color-border)]"
                     }`}
                   >
                     {plan.highlighted && (
                       <p className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-4 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                         Mas contratado
                       </p>
                     )}
                     <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">{plan.subtitle}</p>
                     <h3 className="mb-3 text-xl font-bold text-[var(--color-primary)]">{plan.name}</h3>
                     <div className="mb-1 flex flex-wrap items-baseline gap-2">
                       <span className="text-3xl font-extrabold text-[var(--color-primary)]">{plan.price}</span>
                       <span className="text-sm text-[var(--color-text)]/90">{plan.priceNote}</span>
                     </div>
                     {"promoBadge" in plan && plan.promoBadge ? (
                       <p className="mb-4 inline-flex rounded-lg border border-[var(--color-primary)]/40 bg-[color:var(--color-primary)]/10 px-3 py-2 text-xs font-bold leading-snug text-[var(--color-primary)]">
                         {plan.promoBadge}
                       </p>
                     ) : (
                       <div className="mb-4 h-px" aria-hidden="true" />
                     )}
                     <ul className="mb-2 flex-1 space-y-2 text-sm text-[var(--color-text)]">
                       {plan.features.map((feature) => (
                         <li key={feature} className="pl-5 before:relative before:-left-5 before:mr-[-1.2rem] before:text-[var(--color-primary)] before:content-['•']">
                           {feature}
                         </li>
                       ))}
                     </ul>
                   </article>
                 </Reveal>
               ))}
             </div>
 
             <Reveal delay={0.15} className="mt-10">
               <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-accent)]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.08)] md:p-8">
                 <h3 className="text-2xl font-bold text-[var(--color-primary)]">Packs de clips mensuales</h3>
                 <div className="mt-4 grid gap-4 md:grid-cols-2">
                   {bulkPacks.map((pack) => (
                     <article key={pack.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/90 p-5">
                       <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-secondary)]">{pack.period}</p>
                       <h4 className="mt-1 text-lg font-bold text-[var(--color-primary)]">{pack.name}</h4>
                       <p className="mt-3 text-3xl font-extrabold text-[var(--color-primary)]">{pack.price}</p>
                       <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                         {pack.perks.map((perk) => (
                           <li key={perk} className="flex gap-2">
                             <span className="text-[var(--color-primary)]" aria-hidden="true">✓</span>
                             <span>{perk}</span>
                           </li>
                         ))}
                       </ul>
                     </article>
                   ))}
                 </div>
               </div>
             </Reveal>
           </>
         )}
 
         {tab === "horizontal" && (
           <div className="grid gap-4 md:grid-cols-3">
             {horizontalPlans.map((plan) => (
               <article key={plan.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
                 <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">{plan.note}</p>
                 <h4 className="mt-1 text-lg font-bold text-[var(--color-primary)]">{plan.name}</h4>
                 <p className="mt-2 text-3xl font-extrabold text-[var(--color-primary)]">{plan.price}</p>
                 <ul className="mt-3 space-y-1 text-sm text-[var(--color-text)]">
                   {plan.features.map((item) => (
                     <li key={item}>• {item}</li>
                   ))}
                 </ul>
               </article>
             ))}
           </div>
         )}
 
         {tab === "miniaturas" && (
           <div className="grid gap-4 md:grid-cols-3">
             {miniaturas.map((plan) => (
               <article key={plan.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
                 <h4 className="text-lg font-bold text-[var(--color-primary)]">{plan.name}</h4>
                 <p className="mt-2 text-3xl font-extrabold text-[var(--color-primary)]">{plan.price}</p>
                 <p className="mt-2 text-sm text-[var(--color-text)]">{plan.note}</p>
               </article>
             ))}
           </div>
         )}
       </div>
     </section>
   );
 }

export function PricingSkeleton() {
  return (
    <section id="pricing" className="bg-[var(--color-accent)]/75 py-10 md:py-14 lg:py-16" aria-labelledby="pricing-title">
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
