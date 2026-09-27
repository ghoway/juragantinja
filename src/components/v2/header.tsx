"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Juragan Tinja";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="text-xl font-bold tracking-tight text-[#1976D2]">
          {appName}
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-[#333] transition-colors hover:text-[#1976D2]">
              {l.label}
            </a>
          ))}
          <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e09520]">
            <Phone className="h-4 w-4" />
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[#1976D2]" aria-label="Menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                 className="block rounded-lg px-4 py-3 text-sm font-medium text-[#333] hover:bg-[#f0f7ff] hover:text-[#1976D2]">
                {l.label}
              </a>
            ))}
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer"
               className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#F5A623] px-4 py-3 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" />
              Hubungi Kami
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
