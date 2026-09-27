"use client";

import { useState } from "react";
import { X as XIcon } from "lucide-react";
import { galleryImages } from "@/lib/constants";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeri" className="bg-[#f8f9fa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Galeri</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Dokumentasi Kerja</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img) => (
            <button key={img.src} onClick={() => setSelected(img.src)}
                    className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white" aria-label="Tutup">
            <XIcon className="h-8 w-8" />
          </button>
          <img src={selected} alt="Preview" className="max-h-[85vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
