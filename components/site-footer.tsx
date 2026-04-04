export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-footer-bg)] py-12 text-center text-sm text-[var(--color-footer-text)]">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed">
          <strong>Producción limitada a propósito:</strong> acepto pocos encargos simultáneos para que cada clip reciba
          criterio de retención y no una plantilla genérica.
        </p>
        <div className="mt-6 grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-4">
            <h3 className="mb-2 text-sm font-semibold">Navegación</h3>
            <ul className="space-y-2 text-xs/relaxed text-white/90">
              <li>
                <a href="#hero">Inicio</a>
              </li>
              <li>
                <a href="#prueba">Trabajo</a>
              </li>
              <li>
                <a href="#pricing">Precios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <h3 className="mb-2 text-sm font-semibold">Qué obtienes</h3>
            <ul className="space-y-2 text-xs/relaxed text-white/90">
              <li>Precios por valor y packs mensuales para escalar sin fricción.</li>
              <li>Revisiones acordadas por plan — sin sorpresas en el cierre.</li>
              <li>Extras cotizados si el scope crece; nada oculto en letra pequeña.</li>
              <li>
                <a href="#pricing">Ver planes</a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <h3 className="mb-2 text-sm font-semibold">Briefing rápido</h3>
            <ul className="space-y-2 text-xs/relaxed text-white/90">
              <li>Formato y duración objetivo</li>
              <li>Material y referencias</li>
              <li>Meta: retención, lanzamiento, campaña…</li>
              <li>
                <a href="#contacto">Enviar brief</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/85">
          © 2026 Mostafa Cherif · Edición de performance para creadores que quieren resultados medibles
        </p>
      </div>
    </footer>
  );
}
