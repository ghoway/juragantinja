"use client";

import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
  const tagline = process.env.NEXT_PUBLIC_APP_TAGLINE ?? "Solusi Cepat & Bersih untuk Masalah Septik Tank Anda";
  const description = process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? "";
  const foundedYear = process.env.NEXT_PUBLIC_APP_FOUNDED_YEAR ?? "2020";

  return (
    <section id="beranda" className="relative flex min-h-screen items-center justify-center md:min-h-[80vh]">
      <Image
        src="/image/hero-truck.jpg"
        alt="Truk operasional Juragan Tinja"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase"
        >
          Melayani Sejak {foundedYear} &bull; Layanan 24 Jam
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-lg text-gray-200 leading-relaxed"
        >
          {description} — Melayani area Bogor, Bekasi, dan sekitarnya dengan peralatan modern dan tim profesional.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-accent-dark"
          >
            <MessageCircle className="h-5 w-5" />
            Hubungi via WhatsApp
          </a>
          <a
            href="#layanan"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            Lihat Layanan Kami
            <ChevronDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
