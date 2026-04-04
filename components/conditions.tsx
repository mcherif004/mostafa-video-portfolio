export function Conditions() {
  return (
    <section id="condiciones" className="bg-blue-50/70 py-16 dark:bg-zinc-900/70 md:py-24" aria-labelledby="condiciones-title">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="condiciones-title" className="mb-6 text-3xl font-bold text-blue-700 dark:text-red-400 md:text-4xl">
          Condiciones
        </h2>
        <details className="rounded-2xl border border-blue-100 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
          <summary className="cursor-pointer px-5 py-4 text-lg font-semibold text-blue-700 dark:text-red-400">
            Ver condiciones de trabajo
          </summary>
          <div className="border-t border-blue-100 p-5 dark:border-zinc-800">
            <ul className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-zinc-200">
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
