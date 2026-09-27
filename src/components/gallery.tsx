"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/lib/constants";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;
  const total = galleryImages.length;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  if (total === 0) return null;

  return (
    <section className="bg-bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Galeri
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-text-light"
        >
          Klik salah satu gambar untuk melihat lebih detail
        </motion.p>

        <div className="gallery-grid mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex aspect-4/3 cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl bg-white p-2"
              aria-label={`Buka gambar ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute inset-0 rounded-2xl bg-primary/0 transition-colors group-hover:bg-primary/40" />
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Tutup galeri"
            >
              <X className="h-6 w-6" />
            </button>

            {total > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-6 md:p-3"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            )}

            <motion.div
              key={galleryImages[index].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[80vh] w-full max-w-4xl flex-col items-center"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                <Image
                  src={galleryImages[index].src}
                  alt={galleryImages[index].alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-300">
                {galleryImages[index].alt}
                {total > 1 && (
                  <span className="ml-2 text-gray-500">
                    {index + 1} / {total}
                  </span>
                )}
              </p>
            </motion.div>

            {total > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-6 md:p-3"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
