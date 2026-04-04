"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LazyYouTube } from "@/components/lazy-youtube";
import { useAutoplaySlider } from "@/hooks/use-autoplay-slider";

type MediaItem = {
  id: string;
  title: string;
  description?: string | null;
  url?: string;
  kind: "video" | "thumb";
};

function chunkOf<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

type BlockVariant = "vertical" | "horizontal" | "thumbs";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

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

  const pages = isThumbs ? chunkOf(items, 3) : items.map((i) => [i]);
  const { index: pageIdx, setIndex: setPageIdx, setPaused } = useAutoplaySlider(pages.length, autoMs);

  const currentPage = pages[pageIdx] ?? pages[0] ?? [];
  const currentItem = currentPage[0];

  const navigate = (dir: 1 | -1) => {
    setPaused(true);
    setPageIdx((i) => (i + dir + pages.length) % pages.length);
    setTimeout(() => setPaused(false), 200);
  };

  const mobileAspect = isPortrait ? "aspect-[9/16]" : isThumbs ? "aspect-[4/3]" : "aspect-video";

  const thumbCols =
    currentPage.length === 1 ? "grid-cols-1" : currentPage.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <article
      className={`flex flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-3 transition duration-300 hover:shadow-[0_14px_32px_rgba(0,0,0,0.12)] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── MEDIA ── */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-black ${mobileAspect} lg:aspect-auto lg:min-h-0 lg:flex-1`}
      >
        <AnimatePresence initial={false} custom={1} mode="wait">
          <motion.div
            key={pageIdx}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {isThumbs ? (
              <div className={`grid h-full gap-2 p-2 ${thumbCols}`}>
                {currentPage.map((item) => (
                  <div key={item.id} className="relative overflow-hidden rounded-xl bg-neutral-200">
                    {item.url ? (
                      <Image
                        src={item.url}
                        fill
                        className="object-cover"
                        alt={item.title}
                        unoptimized
                        sizes="(max-width: 1024px) 30vw, 18vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-300 p-2">
                        <span className="text-center text-[10px] font-semibold leading-snug text-neutral-500">
                          {item.title}
                        </span>
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
                alt={currentItem.title ?? ""}
                unoptimized
                sizes="(max-width: 1024px) 90vw, 55vw"
              />
            ) : (
              <div className="h-full w-full bg-neutral-200" />
            )}
          </motion.div>
        </AnimatePresence>
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

      {/* ── CONTROLES: debajo del texto, nunca sobre la imagen ── */}
      <div className="mt-2.5 flex shrink-0 items-center justify-between gap-2">
        {pages.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black/60 bg-[var(--color-card)] text-xl font-bold text-[var(--color-primary)] transition hover:border-black hover:bg-[var(--color-accent)]"
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
                  className={`rounded-full transition-all duration-300 ${
                    pi === pageIdx ? "w-5 h-2 bg-black" : "h-2 w-2 bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Página ${pi + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate(1)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black/60 bg-[var(--color-card)] text-xl font-bold text-[var(--color-primary)] transition hover:border-black hover:bg-[var(--color-accent)]"
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
          { id: "ft5", title: "Contraste alto", description: "Maxima visibilidad.", url: undefined, kind: "thumb" as const },
          { id: "ft6", title: "Emotion-first", description: "Conecta antes del clic.", url: undefined, kind: "thumb" as const },
        ];

  return (
    /* gap-5 = 20px | 3fr_8fr: vertical más estrecho que la columna derecha */
    <div className="grid grid-cols-1 gap-5 lg:h-[640px] lg:grid-cols-[3fr_8fr] lg:grid-rows-[1fr_1fr]">
      <MediaBlock variant="vertical" items={vItems} autoMs={5000} className="lg:row-span-2 lg:h-full" />
      <MediaBlock variant="horizontal" items={hItems} autoMs={5500} className="lg:h-full" />
      <MediaBlock variant="thumbs" items={tItems} autoMs={3500} className="lg:h-full" />
    </div>
  );
}
