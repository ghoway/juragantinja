"use client";

import { MessageCircle, X } from "lucide-react";

const waLink = (number: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent("Halo, saya ingin menanyakan jasa sedot WC.")}`;

export default function FloatingWa() {
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-5 sm:bottom-5">
      <details
        open
        className="wa-bubble group/bubble relative w-60 rounded-2xl rounded-br-md bg-white p-4 shadow-xl ring-1 ring-black/5"
      >
        <summary className="absolute top-2 right-2 flex cursor-pointer list-none items-center rounded-full p-0.5 text-gray-400 transition-colors hover:text-gray-600 marker:content-none [&::-webkit-details-marker]:hidden">
          <X className="h-3.5 w-3.5" />
          <span className="sr-only">Tutup pesan</span>
        </summary>
        <p className="text-sm font-semibold text-primary">Butuh jasa sedot WC?</p>
        <p className="mt-1 text-xs leading-relaxed text-text-light">
          Tim kami siap membantu 24 jam. Chat sekarang untuk estimasi harga.
        </p>
      </details>

      <a
        href={waLink(wa)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="group flex h-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-8 w-8 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
          <span className="wa-wiggle">
            <MessageCircle className="h-7 w-7 text-white" />
          </span>
        </span>
      </a>
    </div>
  );
}
