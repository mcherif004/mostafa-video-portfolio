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
              <strong>Informacion inicial:</strong> enviar formato, duracion final, objetivo, referencia y deadline.
            </li>
            <li>
              <strong>Material:</strong> enlaces ordenados por carpetas (A-roll, B-roll, audio, recursos) y tomas clave.
            </li>
            <li>
              <strong>Entrega:</strong> por enlace privado (Drive o SwissTransfer) en el formato acordado.
            </li>
            <li>
              <strong>Plazos:</strong> cuentan desde la recepcion completa del material y brief validado.
            </li>
            <li>
              <strong>Revisiones:</strong> segun el plan contratado. Cambios de alcance se cotizan aparte.
            </li>
            <li>
              <strong>Pago:</strong> 50% para reserva de agenda y 50% al cierre de entrega.
            </li>
            <li>
              <strong>Derechos:</strong> el cliente garantiza derechos del material enviado y recibe uso comercial de la
              version final entregada.
            </li>
            <li>
              <strong>Resultados:</strong> no se garantizan views/ventas exactas porque dependen de factores externos.
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
