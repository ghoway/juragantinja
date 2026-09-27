"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Juragan Tinja";
  const foundedYear = process.env.NEXT_PUBLIC_APP_FOUNDED_YEAR ?? "2020";

  const points = [
    `Berdiri sejak tahun ${foundedYear}`,
    "Melayani area Bogor, Bekasi, dan sekitarnya",
    "Tim profesional dan berpengalaman",
    "Peralatan modern dan lengkap",
    "Layanan 24 jam termasuk hari libur",
  ];

  return (
    <section id="tentang" className="bg-bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-4/3 overflow-hidden rounded-2xl"
          >
            <Image
              src="/image/team-work.jpg"
              alt={`Tim ${appName}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Tentang {appName}
            </h2>
            <p className="mt-4 leading-relaxed text-text-light">
              {appName} adalah penyedia jasa sedot WC, sedot limbah industri & sanitasi, serta
              sedot septic tank terpercaya yang telah
              melayani masyarakat di wilayah Bogor, Bekasi, dan sekitarnya. Kami hadir untuk memberikan solusi
              cepat, bersih, dan profesional untuk segala permasalahan saluran dan limbah Anda.
            </p>
            <p className="mt-4 leading-relaxed text-text-light">
              Dengan dukungan armada lengkap dan tim terlatih, kami memastikan setiap pengerjaan
              dilakukan dengan standar kebersihan tinggi dan hasil yang memuaskan.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-text">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
