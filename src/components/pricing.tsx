"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { priceList } from "@/lib/constants";

export default function Pricing() {
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";

  return (
    <section id="harga" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Daftar Harga
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-text-light"
        >
          Harga terjangkau dengan kualitas layanan terbaik
        </motion.p>

        {/* Desktop: table */}
        <div className="mx-auto mt-12 hidden max-w-4xl overflow-hidden rounded-2xl border border-gray-100 shadow-sm sm:block">
          <div className="grid grid-cols-3 bg-primary px-6 py-4 text-sm font-semibold text-white">
            <span>Layanan</span>
            <span>Estimasi Harga</span>
            <span>Keterangan</span>
          </div>
          {priceList.map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-bg-alt"}`}
            >
              <span className="font-medium text-text">{item.service}</span>
              <span className="font-semibold text-accent-dark">Mulai {item.price}</span>
              <span className="text-sm text-text-light">{item.note}</span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: cards */}
        <div className="mt-12 grid gap-4 sm:hidden">
          {priceList.map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-text">{item.service}</h3>
                <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent-dark">
                  Mulai {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-light">{item.note}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-text-light italic">
          *Harga dapat berubah sewaktu-waktu tergantung lokasi, jarak, dan kondisi lapangan. Hubungi kami untuk estimasi lebih akurat.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://wa.me/${wa}?text=${encodeURIComponent("Halo, saya ingin menanyakan estimasi harga layanan sedot WC.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            <MessageCircle className="h-5 w-5" />
            Minta Penawaran Harga
          </a>
        </motion.div>
      </div>
    </section>
  );
}
