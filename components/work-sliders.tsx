"use client";

import Image from "next/image";
import { LazyYouTube } from "@/components/lazy-youtube";
import { useAutoplaySlider } from "@/hooks/use-autoplay-slider";

type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  url?: string;
  kind: "video" | "thumb";
};

function chunkPairs<T>(arr: T[]): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) out.push(arr.slice(i, i + 2));
  return out;
}

type BlockVariant = "vertical" | "horizontal" | "thumbs";

function MediaBlock({
  items,
  variant,
  autoMs = 4500,
  className = "",
}: {
  items: MediaItem[];
  variant: BlockVariant;
  autoMs?: number;
  className?: string;
}) {
  const isPortrait = variant === "vertical";
  const isThumbs = variant === "thumbs";

  const pages = isThumbs ? chunkPairs(items) : items.map((i) => [i]);
  const { index: pageIdx, setIndex: setPageIdx, setPaused } = useAutoplaySlider(pages.length, autoMs);

  const currentPage = pages[pageIdx] ?? pages[0] ?? [];
  const currentItem = currentPage[0];

  const goPrev = () => setPageIdx((i) => (i - 1 + pages.length) % pages.length);
  const goNext = () => setPageIdx((i) => (i + 1) % pages.length);

  const mobileAspect = isPortrait ? "aspect-[9/16]" : isThumbs ? "aspect-[4/3]" : "aspect-video";

  return (
    <article
      className={`flex flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── MEDIA: sin controles encima ── */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-black ${mobileAspect} lg:aspect-auto lg:min-h-0 lg:flex-1`}
      >
        {isThumbs ? (
          <div
            className={`absolute inset-0 grid gap-2 p-2 ${currentPage.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
          >
            {currentPage.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-xl bg-neutral-200">
                {item.url ? (
                  <Image
                    src={item.url}
                    fill
                    className="object-cover"
                    alt={item.title}
                    unoptimized
                    sizes="(max-width: 1024px) 45vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 p-2">
                    <span className="text-center text-[11px] font-semibold text-neutral-500">{item.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : currentItem?.kind === "video" && currentItem?.url ? (
          <LazyYouTube
            url={currentItem.url}
            title={currentItem.title}
            portrait={isPortrait}
            fillHeight
            autoplayMuted
          />
        ) : currentItem?.url ? (
          <Image
            src={currentItem.url}
            fill
            className="object-cover"
            alt={currentItem.title}
            unoptimized
            sizes="(max-width: 1024px) 90vw, 55vw"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-200" />
        )}
      </div>

      {/* ── TEXTO ── */}
      <div className="mt-2.5 shrink-0">
        <h3 className="text-sm font-semibold text-[var(--color-primary)] md:text-base">
          {currentItem?.title ?? "—"}
        </h3>
        {currentItem?.description ? (
          <p className="mt-0.5 text-xs leading-snug text-[var(--color-text)] md:text-sm">
            {currentItem.description}
          </p>
        ) : null}
      </div>

      {/* ── CONTROLES: siempre debajo del texto, nunca sobre la imagen ── */}
      <div className="mt-2.5 flex shrink-0 items-center justify-between gap-2">
        {pages.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black/60 bg-[var(--color-card)] text-lg font-bold text-[var(--color-primary)] transition hover:border-black"
              aria-label="Anterior"
            >
              ‹
            </button>
            <div className="flex items-center gap-1.5">
              {pages.map((_, pi) => (
                <button
                  key={pi}
                  type="button"
                  onClick={() => setPageIdx(pi)}
                  className={`rounded-full transition-all duration-200 ${pi === pageIdx ? "h-2.5 w-2.5 bg-black" : "h-2 w-2 bg-black/20 hover:bg-black/40"}`}
                  aria-label={`Página ${pi + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black/60 bg-[var(--color-card)] text-lg font-bold text-[var(--color-primary)] transition hover:border-black"
              aria-label="Siguiente"
            >
              ›
            </button>
          </>
        ) : (
          <div className="h-8" aria-hidden="true" />
        )}
      </div>
    </article>
  );
}

type WorkSlidersProps = {
  verticalItems: MediaItem[];
  horizontalItems: MediaItem[];
  thumbnailItems: MediaItem[];
};

export function WorkSliders({ verticalItems, horizontalItems, thumbnailItems }: WorkSlidersProps) {
  const vItems =
    verticalItems.length > 0
      ? verticalItems
      : [
          {
            id: "fv1",
            title: "Short Engagement - Tutorial",
            description: "Vertical con foco en hook y retencion inicial.",
            url: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
            kind: "video" as const,
          },
          {
            id: "fv2",
            title: "Short Viral - Productividad",
            description: "Ejemplo vertical para TikTok/Reels con ritmo rapido.",
            url: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U",
            kind: "video" as const,
          },
        ];

  const hItems =
    horizontalItems.length > 0
      ? horizontalItems
      : [
          {
            id: "fh1",
            title: "YouTube Long Form - Tutorial",
            description: "Caso horizontal para YouTube de formato largo.",
            url: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U",
            kind: "video" as const,
          },
          {
            id: "fh2",
            title: "YouTube Serie - Episodio",
            description: "Formato horizontal para contenido largo con narrativa.",
            url: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw",
            kind: "video" as const,
          },
        ];

  const tItems =
    thumbnailItems.length > 0
      ? thumbnailItems
      : [
          { id: "ft1", title: "Hook visual impacto", description: "CTR alto para feed.", url: undefined, kind: "thumb" as const },
          { id: "ft2", title: "Rostro + accion", description: "Composicion movil.", url: undefined, kind: "thumb" as const },
          { id: "ft3", title: "Promesa + curiosidad", description: "Sin clickbait.", url: undefined, kind: "thumb" as const },
          { id: "ft4", title: "Marca consistente", description: "Sistema visual.", url: undefined, kind: "thumb" as const },
        ];

  return (
    /* gap-5 = 20px  |  Desktop: 2 cols, 2 rows, altura fija para alinear bordes */
    <div className="grid grid-cols-1 gap-5 lg:h-[640px] lg:grid-cols-[5fr_8fr] lg:grid-rows-[1fr_1fr]">
      {/* Izquierda: vertical, ocupa las 2 filas */}
      <MediaBlock
        variant="vertical"
        items={vItems}
        autoMs={5000}
        className="lg:row-span-2 lg:h-full"
      />
      {/* Derecha arriba: horizontal */}
      <MediaBlock
        variant="horizontal"
        items={hItems}
        autoMs={5500}
        className="lg:h-full"
      />
      {/* Derecha abajo: miniaturas de 2 en 2 */}
      <MediaBlock
        variant="thumbs"
        items={tItems}
        autoMs={3500}
        className="lg:h-full"
      />
    </div>
  );
}
