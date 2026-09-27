"use client";

import { priceList } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">Harga Terjangkau</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a] sm:text-4xl">Daftar Harga</h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {priceList.map((p) => (
            <div
              key={p.service}
              className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5 hover-lift"
            >
              <div className="min-w-0">
                <p className="font-bold text-[#1a1a1a]">{p.service}</p>
                {p.note && <p className="mt-0.5 text-xs text-[#888]">{p.note}</p>}
              </div>
              <p className="shrink-0 text-lg font-extrabold text-[#1976D2] sm:text-xl">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
