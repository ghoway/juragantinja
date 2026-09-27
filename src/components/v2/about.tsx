"use client";

import { CheckCircle } from "lucide-react";

const features = [
  "Peralatan modern dan lengkap",
  "Tim ahli berpengalaman",
  "Harga transparan tanpa biaya tersembunyi",
  "Layanan 24 jam setiap hari",
];

export default function About() {
  return (
    <section id="tentang" className="bg-[#f8f9fa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Tentang Kami</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Juragan Tinja</h2>
            <p className="mt-5 text-base leading-relaxed text-[#555]">
              Kami adalah penyedia jasa sedot WC terpercaya di area Bogor, Bekasi, dan sekitarnya. Dengan pengalaman bertahun-tahun dan peralatan modern, kami siap membantu mengatasi masalah sanitasi Anda.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1976D2]" />
                  <span className="text-sm text-[#333]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
              <img src="/image/team-work.jpg" alt="Tim Kerja" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-[#1976D2] px-5 py-3 text-white shadow-lg">
              <p className="text-2xl font-extrabold">10+</p>
              <p className="text-xs font-medium">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
