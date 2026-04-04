import Image from "next/image";

const channels = [
  { name: "mcherifx", sub: "10K+ suscriptores", href: "https://www.youtube.com/@mcherifx" },
  { name: "iamkingjayy", sub: "10K+ suscriptores", href: "https://www.youtube.com/@iamkingjayy" },
  { name: "IcyBrez", sub: "10K+ suscriptores", href: "https://www.youtube.com/@IcyBrez" },
  { name: "JimRisingJuega", sub: "10K+ suscriptores", href: "https://www.youtube.com/@JimRisingJuega" },
  { name: "ManiaticLina", sub: "10K+ suscriptores", href: "https://www.youtube.com/@ManiaticLina" },
];

export function ClientsMarquee() {
  return (
    <section
      id="clientes"
      className="overflow-x-clip border-y border-slate-200 bg-slate-100 py-14 dark:border-zinc-800 dark:bg-zinc-900"
      aria-labelledby="clientes-title"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="clientes-title" className="mb-4 text-3xl font-bold text-blue-700 dark:text-red-400 md:text-4xl">
          Clientes con los que he trabajado
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-700 dark:text-zinc-200">
          Canales reales con trabajo entregado. Carrusel continuo sin cortes.
        </p>
      </div>
      <div className="w-screen pl-[calc(50%-50vw)]" aria-label="Canales de YouTube">
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {[...channels, ...channels].map((c, idx) => (
            <a
              key={`${c.name}-${idx}`}
              className="mr-3 inline-flex min-w-[200px] items-center gap-3 rounded-2xl border border-white/10 bg-black px-3 py-2 text-white transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`https://unavatar.io/youtube/${c.name}`}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
                width={48}
                height={48}
                loading="lazy"
                unoptimized
              />
              <span className="min-w-0 text-left leading-tight">
                <span className="block truncate text-base font-bold text-white">{c.name}</span>
                <span className="block text-xs font-semibold text-sky-300">{c.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
