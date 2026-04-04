export function Conditions() {
  return (
    <section id="condiciones" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="condiciones-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="condiciones-title"
          className="mb-6 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Condiciones
        </h2>
        <details className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
          <summary className="cursor-pointer px-5 py-4 text-lg font-semibold text-[var(--color-primary)]">
            Ver condiciones de trabajo
          </summary>
          <div className="border-t border-[var(--color-border)] p-5">
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--color-text)]">
              <li>
                <strong>Como enviar la informacion:</strong> envia formato, duracion final, objetivo del video y plazo.
              </li>
              <li>
                <strong>Como enviar material:</strong> comparte enlaces organizados y marca tomas clave.
              </li>
              <li>
                <strong>Vertical:</strong> limites por plan en duracion final, material y revisiones.
              </li>
              <li>
                <strong>Horizontal:</strong> limites por plan y revisiones con extras cotizados aparte.
              </li>
              <li>
                <strong>Pago y reserva:</strong> 50% por adelantado y resto al cerrar entrega.
              </li>
            </ul>
          </div>
        </details>
      </div>
    </section>
  );
}
