"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function extractVideoId(url: string) {
  const shorts = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{6,})/)?.[1];
  if (shorts) return shorts;
  const watch = url.match(/[?&]v=([a-zA-Z0-9_-]{6,})/)?.[1];
  if (watch) return watch;
  const shortUrl = url.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/)?.[1];
  return shortUrl ?? null;
}

type LazyYouTubeProps = {
  url: string;
  title: string;
  portrait?: boolean;
  autoplayMuted?: boolean;
  /** Rellena el ancho de la caja (bento); mantiene proporción con recorte vía overflow */
  fillContainer?: boolean;
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function LazyYouTube({
  url,
  title,
  portrait = false,
  autoplayMuted = false,
  fillContainer = false,
}: LazyYouTubeProps) {
  const [loaded, setLoaded] = useState(autoplayMuted);
  const videoId = useMemo(() => extractVideoId(url), [url]);

  const landscapeShell = fillContainer
    ? "relative aspect-video w-full overflow-hidden rounded-xl bg-black"
    : "relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/10";
  const portraitShell = fillContainer
    ? "relative mx-auto aspect-[9/16] w-full max-w-[min(100%,320px)] overflow-hidden rounded-xl bg-black"
    : "relative mx-auto aspect-[9/16] w-full max-w-[280px] max-h-[450px] overflow-hidden rounded-2xl bg-black shadow-[0_16px_48px_rgba(0,0,0,0.22)] ring-1 ring-black/15";

  if (!videoId) {
    return (
      <div className={portrait ? portraitShell : landscapeShell}>
        <iframe
          src={autoplayMuted ? `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&playsinline=1` : url}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0 object-cover"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const embedUrl = autoplayMuted
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&rel=0`
    : `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={`group ${portrait ? portraitShell : landscapeShell} ${!loaded ? "cursor-pointer" : ""}`}
      onClick={() => !loaded && setLoaded(true)}
      onKeyDown={(event) => {
        if (!loaded && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          setLoaded(true);
        }
      }}
      role={loaded ? undefined : "button"}
      tabIndex={loaded ? undefined : 0}
      aria-label={loaded ? undefined : `Reproducir video: ${title}`}
    >
      {loaded ? (
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0 object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={thumbnailUrl}
            alt={`Miniatura de ${title}`}
            fill
            sizes={portrait ? (fillContainer ? "(max-width: 1024px) 45vw, 320px" : "280px") : "(max-width: 768px) 100vw, 720px"}
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition group-hover:border-white/60 group-hover:bg-white/20">
              <PlayIcon />
            </span>
          </div>
        </>
      )}
    </div>
  );
}
