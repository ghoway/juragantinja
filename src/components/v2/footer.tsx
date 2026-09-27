"use client";

import { navLinks } from "@/lib/constants";
import { site } from "@/lib/site";

const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
const phone = process.env.NEXT_PUBLIC_APP_PHONE ?? "";
const email = process.env.NEXT_PUBLIC_APP_EMAIL ?? "";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-white">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{site.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-white">Menu</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-400 transition-colors hover:text-[#F5A623]">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Kontak</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              {wa && <li>WA: {wa}</li>}
              {phone && <li>Telp: {phone}</li>}
              {email && <li>Email: {email}</li>}
            </ul>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm font-semibold text-white">Alamat</p>
            <p className="mt-2 text-sm text-gray-400">{site.address}</p>
            <p className="mt-1 text-sm text-gray-400">Buka 24 Jam (Senin - Minggu)</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} {site.name}. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
