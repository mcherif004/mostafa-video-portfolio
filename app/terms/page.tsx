import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Condiciones de Servicio | Mostafa Cherif",
  description: "Condiciones de servicio para proyectos de edicion y miniaturas.",
};

export default function TermsPage() {
  return (
    <main className="section-shell">
      <section className="mx-auto max-w-content px-4 sm:px-5 md:px-6" aria-labelledby="terms-title">
        <p className="section-kicker">Legal</p>
        <h1 id="terms-title" className="section-title-premium mb-6 text-[clamp(1.9rem,4.2vw,3rem)] font-bold">
          Condiciones de servicio
        </h1>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)] md:p-8">
          <ul className="space-y-3 text-sm leading-relaxed text-[var(--color-text)] md:text-base">
            <li>
              <strong>Información inicial:</strong> en el primer mensaje envía formato, duración final, objetivo del vídeo, referencias y plazo.
            </li>
            <li>
              <strong>Material:</strong> comparte enlaces organizados (Drive/carpeta), nombra clips por orden y marca tomas clave para acelerar la edición.
            </li>
            <li>
              <strong>Vertical (Shorts/Reels/TikTok):</strong> incluye límites por plan en vídeo final, material que envías y revisiones. Cambios estructurales fuera del enfoque inicial se cotizan aparte.
            </li>
            <li>
              <strong>Horizontal (YouTube):</strong> incluye límites por plan en duración final, material enviado y revisiones. Si el material llega desordenado puede requerir limpieza previa.
            </li>
            <li>
              <strong>Miniaturas:</strong> incluye propuesta basada en brief y ajustes sobre la misma línea creativa. Rediseño completo o cambio de concepto va como nuevo encargo.
            </li>
            <li>
              <strong>Pago y reserva:</strong> 50% por adelantado para reservar agenda; el resto al cerrar entrega final acordada.
            </li>
            <li>
              <strong>Coste extra:</strong> +1€/min de vídeo final extra y +5€ por cada 10 min de material extra. Urgencias, motion avanzado, proyecto fuente o re-montaje completo se presupuestan aparte.
            </li>
            <li>
              <strong>Derechos:</strong> el cliente garantiza que tiene derechos del material enviado. Recibe uso comercial de la versión final entregada. Archivos fuente solo si se acuerda por escrito.
            </li>
          </ul>
          <div className="mt-6 border-t border-[var(--color-border)] pt-5">
            <Link
              href="/#contacto"
              className="inline-flex items-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-secondary)]"
            >
              Volver y solicitar propuesta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
