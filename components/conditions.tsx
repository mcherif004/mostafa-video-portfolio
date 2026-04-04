export function Conditions() {
  return (
    <section id="condiciones" className="bg-[var(--color-accent)]/75 py-14 md:py-20 lg:py-24" aria-labelledby="condiciones-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <h2
          id="condiciones-title"
          className="mb-6 text-[clamp(1.65rem,3.5vw,2.25rem)] font-bold text-[var(--color-primary)]"
        >
          Reglas claras, proyecto sin fricción
        </h2>
        <details className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
          <summary className="cursor-pointer px-5 py-4 text-lg font-semibold text-[var(--color-primary)]">
            Ver condiciones completas
          </summary>
          <div className="border-t border-[var(--color-border)] p-5">
            <ul className="space-y-3 text-sm leading-relaxed text-[var(--color-text)]">
              <li>
                <strong>Como enviar la informacion:</strong> envia formato, duracion final, objetivo del video y plazo.
              </li>
              <li>
                <strong>Como enviar material:</strong> comparte enlaces organizados por carpetas (A-roll, B-roll,
                musica, referencias) y marca tomas clave.
              </li>
              <li>
                <strong>Entrega de archivos:</strong> la entrega final se realiza por enlace privado de Drive o
                SwissTransfer, según peso y urgencia del proyecto.
              </li>
              <li>
                <strong>Tiempos de entrega:</strong> se calculan desde la recepción completa del material y de un brief
                validado. Si falta material, el plazo se pausa automáticamente.
              </li>
              <li>
                <strong>Vertical:</strong> limites por plan en duracion final, material y revisiones.
              </li>
              <li>
                <strong>Horizontal:</strong> limites por plan y revisiones con extras cotizados aparte.
              </li>
              <li>
                <strong>Miniaturas y packs:</strong> cada entrega sigue la línea visual aprobada; rediseños de concepto
                completo se presupuestan como nueva pieza.
              </li>
              <li>
                <strong>Pago y reserva:</strong> 50% por adelantado y resto al cerrar entrega.
              </li>
              <li>
                <strong>Uso y propiedad:</strong> el cliente recibe derechos de uso comercial de la versión final
                entregada. Los archivos fuente editables se entregan solo si se acuerda por escrito.
              </li>
              <li>
                <strong>Vacíos legales cubiertos:</strong> el cliente garantiza que tiene derechos del material enviado
                (audio/video/imágenes). No se asume responsabilidad por reclamaciones de copyright de terceros.
              </li>
              <li>
                <strong>Limitación de responsabilidad:</strong> no se garantizan resultados de alcance/ventas, ya que
                dependen de múltiples factores fuera del proceso de edición.
              </li>
            </ul>
          </div>
        </details>
      </div>
    </section>
  );
}
