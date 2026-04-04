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
};

export function LazyYouTube({ url, title, portrait = false }: LazyYouTubeProps) {
  const [loaded, setLoaded] = useState(false);
  const videoId = useMemo(() => extractVideoId(url), [url]);

  if (!videoId) {
    return (
      <div
        className={`relative overflow-hidden bg-black ${
          portrait ? "mx-auto aspect-[9/16] h-[min(60vh,640px)] max-h-[60vh]" : "aspect-video"
        }`}
      >
        <iframe
          src={url}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={`group relative cursor-pointer overflow-hidden bg-black ${
        portrait ? "mx-auto aspect-[9/16] h-[min(60vh,640px)] max-h-[60vh]" : "aspect-video"
      }`}
      onClick={() => setLoaded(true)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setLoaded(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Cargar reproductor de YouTube para ${title}`}
    >
      {loaded ? (
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={thumbnailUrl}
            alt={`Miniatura de ${title}`}
            fill
            sizes={portrait ? "(max-width: 768px) 85vw, 340px" : "(max-width: 768px) 100vw, 720px"}
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/65" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-xl bg-black/80 px-5 py-3 text-sm font-semibold text-white">Ver video</span>
          </div>
        </>
      )}
    </div>
  );
}
