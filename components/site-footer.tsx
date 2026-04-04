export function SiteFooter() {
  return (
    <footer className="bg-[#00274d] py-12 text-center text-sm text-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed">
          <strong>Cupo limitado:</strong> priorizo pocos proyectos para dar mas foco a cada entrega.
        </p>
        <div className="mt-6 grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-4">
            <h3 className="mb-2 text-sm font-semibold">Navegacion</h3>
            <ul className="space-y-2 text-xs/relaxed text-white/90">
              <li><a href="#hero">Inicio</a></li>
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
            <h3 className="mb-2 text-sm font-semibold">Trabajo y precios</h3>
            <ul className="space-y-2 text-xs/relaxed text-white/90">
              <li>Precio por video segun plan.</li>
              <li>Revisiones incluidas por plan.</li>
              <li>Extras claros si superas limites.</li>
              <li>
                <a href="#pricing">Ver precios</a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <h3 className="mb-2 text-sm font-semibold">Contacto rapido</h3>
            <ul className="space-y-2 text-xs/relaxed text-white/90">
              <li>Formato + duracion final</li>
              <li>Material que envias</li>
              <li>Objetivo del video</li>
              <li>
                <a href="#contacto">Ir a contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/85">© 2026 Mostafa Cherif · Edicion de alto rendimiento</p>
      </div>
    </footer>
  );
}
