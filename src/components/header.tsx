"use client";

import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Juragan Tinja";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#beranda"
          className="min-w-0 truncate text-xl font-bold tracking-tight text-primary"
        >
          {appName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-light transition-colors hover:text-primary"
            >
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

        {/* Mobile — burger menu with full-width drawer */}
        <details className="group relative shrink-0 md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg p-2 text-primary marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Buka menu navigasi</span>
            <Menu className="h-6 w-6 group-open:hidden" />
            <X className="hidden h-6 w-6 group-open:block" />
          </summary>

          <nav className="mobile-drawer fixed inset-x-0 top-[52px] z-50 overflow-y-auto border-t border-gray-100 bg-white shadow-xl">
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) =>
                    e.currentTarget.closest("details")?.removeAttribute("open")
                  }
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text-light transition-colors hover:bg-bg-alt hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  e.currentTarget.closest("details")?.removeAttribute("open")
                }
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Hubungi Kami
              </a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
