"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Juragan Tinja";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="min-w-0 truncate text-xl font-bold tracking-tight text-primary">
          {appName}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-text-light transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            <Phone className="h-4 w-4" />
            Hubungi Kami
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 md:hidden p-2 text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-text-light transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Hubungi Kami
          </a>
        </nav>
      )}
    </header>
  );
}
