"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const waLink = (number: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent("Halo, saya ingin menanyakan jasa sedot WC.")}`;

export default function FloatingWa() {
  const [open, setOpen] = useState(true);
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-5 sm:bottom-5">
      {open && (
        <div className="relative w-60 rounded-2xl rounded-br-md bg-white p-4 shadow-xl ring-1 ring-black/5">
          <button onClick={() => setOpen(false)}
                  className="absolute top-2 right-2 flex cursor-pointer items-center rounded-full p-0.5 text-gray-400 transition-colors hover:text-gray-600"
                  aria-label="Tutup pesan">
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-semibold text-[#1976D2]">Butuh jasa sedot WC?</p>
          <p className="mt-1 text-xs leading-relaxed text-[#666]">
            Tim kami siap membantu 24 jam. Chat sekarang untuk estimasi harga.
          </p>
        </div>
      )}

      <a href={waLink(wa)} target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp"
         className="group flex h-14 items-center rounded-full bg-[#25D366] pr-3.5 pl-3.5 text-white shadow-lg transition-[padding,transform] duration-300 hover:scale-105 hover:pr-5 active:scale-95">
        <span className="relative flex h-8 w-8 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
          <span className="wa-wiggle">
            <MessageCircle className="h-7 w-7" />
          </span>
        </span>
      </a>
    </div>
  );
}
