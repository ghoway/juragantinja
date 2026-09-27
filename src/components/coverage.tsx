"use client";

import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { coverageAreas } from "@/lib/constants";

export default function Coverage() {
  const mapsUrl = process.env.NEXT_PUBLIC_APP_GOOGLE_MAPS_EMBED_URL;

  return (
    <section id="kontak" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Area Layanan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-text-light"
        >
          Kami melayani area Bogor, Bekasi, dan sekitarnya
        </motion.p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {coverageAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-2 rounded-xl bg-bg-alt p-3"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-text">{area}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-text-light">
              Tidak menemukan area Anda? Hubungi kami untuk konfirmasi jangkauan layanan.
            </p>
          </div>

          {mapsUrl ? (
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Juragan Tinja"
              />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center rounded-2xl bg-bg-alt p-8"
            >
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-primary/30" />
                <p className="mt-4 text-sm text-text-light">
                  {process.env.NEXT_PUBLIC_APP_ADDRESS}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
