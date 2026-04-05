export function FeaturedVideo() {
  const source = process.env.NEXT_PUBLIC_FEATURED_VIDEO_URL || "/featured-reel.mp4";

  return (
    <section id="video-destacado" className="section-shell" aria-labelledby="featured-video-title">
      <div className="mx-auto max-w-content px-4 sm:px-5 md:px-6">
        <p className="section-kicker">Featured Reel</p>
        <h2 id="featured-video-title" className="section-title-premium mb-3 text-[clamp(1.55rem,3vw,2.2rem)] font-bold">
          Demo rápida
        </h2>
        <p className="mb-4 max-w-2xl text-sm font-medium text-[var(--color-text)]">
          Muestra en segundos lo que tardas semanas en construir. Sube tu reel y déjalo hablar.
        </p>
        <div className="relative mx-auto w-full max-w-[860px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-black shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
          <video
            className="aspect-video w-full max-h-[56vh]"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Video principal de presentación"
          >
            <source src={source} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
        </div>
      </div>
    </section>
  );
}
