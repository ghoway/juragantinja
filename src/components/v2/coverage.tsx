"use client";

import { MapPin } from "lucide-react";
import { coverageAreas } from "@/lib/constants";

export default function Coverage() {
  return (
    <section id="layanan" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Cakupan Area</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Area Layanan</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coverageAreas.map((area) => (
            <div key={area} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#f8f9fa] px-5 py-4">
              <MapPin className="h-5 w-5 shrink-0 text-[#1976D2]" />
              <span className="text-sm font-medium text-[#333]">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3!2d106.86!3d-6.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f!2sKranggan!5e0!3m2!1sid!2sid!4v1" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Lokasi" />
        </div>
      </div>
    </section>
  );
}
