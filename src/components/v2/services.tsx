"use client";

import { Wrench, Droplets, Shield } from "lucide-react";
import { services } from "@/lib/constants";

const icons = [Wrench, Droplets, Shield];

export default function Services() {
  return (
    <section id="layanan" className="bg-[#f8f9fa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Layanan Kami</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Solusi Terpercaya</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Wrench;
            return (
              <div key={s.title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover-lift">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f0fe]">
                  <Icon className="h-6 w-6 text-[#1976D2]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
