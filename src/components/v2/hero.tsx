"use client";

import Image from "next/image";
import { site } from "@/lib/site";

const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
const waLink = wa ? `https://wa.me/${wa}?text=${encodeURIComponent("Halo, saya ingin menanyakan jasa sedot WC.")}` : "#";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[85vh] flex items-center bg-white pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/image/hero-truck.jpg"
          alt="Truck Juragan Tinja"
          fill
          className="object-cover animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623] mb-3 animate-[fadeUp_0.6s_ease-out_0.1s_both]">
            Jasa Sedot WC Terpercaya
          </p>
          <h1
            className="text-4xl font-extrabold leading-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl animate-[fadeUp_0.6s_ease-out_0.2s_both]"
          >
            JASA SEDOT WC
            <span className="block text-[#1976D2]">TERMURAH</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#555] animate-[fadeUp_0.6s_ease-out_0.35s_both]">
            Kami melayani jasa sedot WC untuk rumah, kantor, ruko, dan tempat usaha dengan peralatan modern serta tenaga ahli berpengalaman.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-[fadeUp_0.6s_ease-out_0.5s_both]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F5A623]/30 transition-all hover:bg-[#e09520] hover:shadow-xl"
            >
              Chat via WhatsApp
            </a>
            <a
              href="#harga"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1976D2] px-7 py-3.5 text-sm font-bold text-[#1976D2] transition-colors hover:bg-[#1976D2] hover:text-white"
            >
              Lihat Harga
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
