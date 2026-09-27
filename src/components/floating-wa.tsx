"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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

      <motion.a
        href={`https://wa.me/${wa}?text=${encodeURIComponent("Halo, saya ingin menanyakan jasa sedot WC.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-14 items-center rounded-full bg-[#25D366] pr-3.5 pl-3.5 shadow-lg transition-[padding] duration-300 hover:pr-5"
      >
        <span className="relative flex h-8 w-8 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
          <motion.span
            animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, repeatDelay: 3 }}
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </motion.span>
        </span>
        <span className="hidden max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap text-white opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:max-w-[10rem] group-hover:opacity-100 sm:block">
          Chat via WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
