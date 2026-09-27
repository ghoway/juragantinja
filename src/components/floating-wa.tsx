"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const waLink = (number: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent("Halo, saya ingin menanyakan jasa sedot WC.")}`;

export default function FloatingWa() {
  const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const open = setTimeout(() => setShowBubble(true), 2500);
    const close = setTimeout(() => setShowBubble(false), 11000);
    return () => {
      clearTimeout(open);
      clearTimeout(close);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-5 sm:bottom-5">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            role="status"
            className="relative w-56 rounded-2xl rounded-br-md bg-white p-4 shadow-xl ring-1 ring-black/5"
          >
            <button
              type="button"
              onClick={() => setShowBubble(false)}
              aria-label="Tutup pesan"
              className="absolute top-2 right-2 text-gray-400 transition-colors hover:text-gray-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-sm font-semibold text-primary">Butuh jasa sedot WC?</p>
            <p className="mt-1 text-xs leading-relaxed text-text-light">
              Tim kami siap membantu 24 jam. Chat sekarang untuk estimasi harga.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={waLink(wa)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="group flex h-14 items-center rounded-full bg-[#25D366] pr-3.5 pl-3.5 text-white shadow-lg transition-[padding,transform] duration-300 hover:scale-105 hover:pr-5 active:scale-95"
      >
        <span className="relative flex h-8 w-8 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
          <span className="wa-wiggle">
            <MessageCircle className="h-7 w-7" />
          </span>
        </span>
        <span className="max-w-[11rem] pl-3 text-sm font-semibold whitespace-nowrap sm:max-w-0 sm:pl-0 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:ml-3 sm:group-hover:max-w-[11rem] sm:group-hover:opacity-100">
          Chat via WhatsApp
        </span>
      </a>
    </div>
  );
}
