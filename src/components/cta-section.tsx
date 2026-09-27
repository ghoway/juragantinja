"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function CtaSection() {
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
  const phone = process.env.NEXT_PUBLIC_APP_PHONE ?? "";

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Butuh Jasa Sedot WC Sekarang?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
        >
          Hubungi kami sekarang untuk layanan cepat dan terpercaya. Tim kami siap datang ke lokasi Anda.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
          {phone && (
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {phone}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
