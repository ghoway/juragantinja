"use client";

const wa = process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "";
const phone = process.env.NEXT_PUBLIC_APP_PHONE ?? "";

export default function Cta() {
  return (
    <section className="bg-[#1976D2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Butuh Jasa Sedot WC Sekarang?</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
          Hubungi kami sekarang untuk konsultasi gratis dan estimasi harga. Tim kami siap membantu 24 jam.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {wa && (
            <a href={`https://wa.me/${wa}?text=${encodeURIComponent("Halo, saya ingin menanyakan jasa sedot WC.")}`}
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl">
              Chat via WhatsApp
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`}
               className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#1976D2]">
              📞 {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
