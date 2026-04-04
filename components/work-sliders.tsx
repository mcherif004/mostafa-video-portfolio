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

type WorkSlidersProps = {
  verticalItems: MediaItem[];
  horizontalItems: MediaItem[];
  thumbnailItems: MediaItem[];
};

export function WorkSliders({ verticalItems, horizontalItems, thumbnailItems }: WorkSlidersProps) {
  const fallbackVertical: MediaItem = {
    id: "fallback-vertical",
    title: "Hero vertical",
    description: "Ejemplo vertical optimizado para retencion.",
    url: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    kind: "video",
  };

  const fallbackHorizontalA: MediaItem = {
    id: "fallback-horizontal-a",
    title: "Video horizontal 1",
    description: "Narrativa horizontal orientada a conversion.",
    url: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U",
    kind: "video",
  };

  const fallbackHorizontalB: MediaItem = {
    id: "fallback-horizontal-b",
    title: "Video horizontal 2",
    description: "Segundo ejemplo para mostrar resultados.",
    url: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw",
    kind: "video",
  };

  const heroVertical = verticalItems[0] || fallbackVertical;
  const mainHorizontal = horizontalItems[0] || verticalItems[1] || fallbackHorizontalA;
  const backupHorizontal = horizontalItems[1] || verticalItems[2] || fallbackHorizontalB;
  const thumbsPool = thumbnailItems.length > 0 ? thumbnailItems : [mainHorizontal, backupHorizontal];
  const { index, setIndex, setPaused } = useAutoplaySlider(thumbsPool.length, 3200);
  const currentThumb = thumbsPool[index];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-center">
      <article className="w-full max-w-[240px] shrink-0 rounded-3xl border-4 border-black bg-[var(--color-card)] p-2.5 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] sm:max-w-[260px] lg:mx-0">
        <div className="flex justify-center">
          <LazyYouTube
            url={heroVertical.url || ""}
            title={heroVertical.title}
            portrait
            autoplayMuted
            fillContainer
          />
        </div>
        <div className="pt-2.5">
          <h3 className="text-sm font-semibold text-[var(--color-primary)] md:text-base">{heroVertical.title}</h3>
          {heroVertical.description ? (
            <p className="mt-1 text-xs text-[var(--color-text)] md:text-sm">{heroVertical.description}</p>
          ) : null}
        </div>
      </article>

      <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 md:gap-6">
        <article
          className="rounded-3xl border-4 border-black bg-[var(--color-card)] p-2.5 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] md:p-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100">
            {currentThumb?.url ? (
              <Image
                src={currentThumb.url}
                alt={currentThumb.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#e5e7eb,#d4d4d8)]" />
            )}
          </div>
          <div className="pt-2.5">
            <h3 className="text-sm font-semibold text-[var(--color-primary)] md:text-base">
              {currentThumb?.title || "Miniaturas automaticas"}
            </h3>
            <p className="mt-1 text-xs text-[var(--color-text)] md:text-sm">
              {currentThumb?.description || "Slider automatico para comparar hooks visuales."}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            {thumbsPool.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-black" : "bg-black/25"}`}
                aria-label={`Ir a miniatura ${dotIndex + 1}`}
              />
            ))}
          </div>
        </article>

        <article className="flex min-h-0 flex-col rounded-3xl border-4 border-black bg-[var(--color-card)] p-2.5 transition duration-300 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] md:p-3">
          <div className="w-full min-w-0 overflow-hidden rounded-xl">
            <LazyYouTube
              url={mainHorizontal.url || backupHorizontal.url || ""}
              title={mainHorizontal.title}
              autoplayMuted
              fillContainer
            />
          </div>
          <div className="pt-2.5">
            <h3 className="text-sm font-semibold text-[var(--color-primary)] md:text-base">{mainHorizontal.title}</h3>
            {mainHorizontal.description ? (
              <p className="mt-1 text-xs text-[var(--color-text)] md:text-sm">{mainHorizontal.description}</p>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
}
