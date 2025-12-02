"use client";

import { useRef, useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface BeholdPost {
  id: string;
  permalink: string;
  mediaUrl: string;
  sizes: {
    medium: { mediaUrl: string; width: number; height: number };
  };
  caption: string;
}

interface BeholdFeed {
  posts: BeholdPost[];
}

const BEHOLD_FEED_URL = "https://feeds.behold.so/PXJ5dqYwFVUjjxhxCO0P";

export const PhotoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [photos, setPhotos] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BEHOLD_FEED_URL)
      .then((res) => res.json())
      .then((data: BeholdFeed) => {
        setPhotos(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch Instagram feed:", err);
        setLoading(false);
      });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex gap-4 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="aspect-square w-56 shrink-0 animate-pulse rounded-lg bg-card"
          />
        ))}
      </div>
    );
  }

  if (photos.length === 0) {
    return <p className="text-sm italic text-muted">No photos found.</p>;
  }

  return (
    <div className="group/carousel relative">
      {/* Left scroll button */}
      <button
        onClick={() => scroll("left")}
        className="bg-card/90 absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-foreground opacity-0 shadow-lg ring-1 ring-border backdrop-blur-sm transition-all hover:scale-110 hover:bg-card group-hover/carousel:opacity-100"
        aria-label="Scroll left"
      >
        <LuChevronLeft className="h-5 w-5" />
      </button>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        className="bg-card/90 absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-foreground opacity-0 shadow-lg ring-1 ring-border backdrop-blur-sm transition-all hover:scale-110 hover:bg-card group-hover/carousel:opacity-100"
        aria-label="Scroll right"
      >
        <LuChevronRight className="h-5 w-5" />
      </button>

      {/* Photo strip */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-2 pb-4 pt-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {photos.map((photo) => (
          <a
            key={photo.id}
            href={photo.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative shrink-0 snap-start"
          >
            <div className="relative aspect-square w-56 overflow-hidden rounded-lg bg-card ring-1 ring-border transition-all duration-300 hover:ring-accent">
              <img
                src={photo.sizes.medium.mediaUrl}
                alt={photo.caption || "Film photograph"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Film grain overlay */}
              <div className="bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 /%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 /%3E%3C/svg%3E')] pointer-events-none absolute inset-0 rounded-lg opacity-20 mix-blend-overlay" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
