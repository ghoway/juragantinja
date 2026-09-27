const rawUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const isPlaceholder = (value: string) => /x{3,}/i.test(value);

export const site = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Juragan Tinja",
  tagline: process.env.NEXT_PUBLIC_APP_TAGLINE ?? "Solusi Cepat & Bersih untuk Masalah Septic Tank Anda",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
    "Jasa sedot WC, sedot limbah industri & sanitasi, serta sedot septic tank di Bogor dan Bekasi.",
  url: rawUrl.replace(/\/+$/, ""),
  address: process.env.NEXT_PUBLIC_APP_ADDRESS ?? "",
  phone: process.env.NEXT_PUBLIC_APP_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_APP_WHATSAPP ?? "",
  email: process.env.NEXT_PUBLIC_APP_EMAIL ?? "",
  hours: process.env.NEXT_PUBLIC_APP_OPERATIONAL_HOURS ?? "24 Jam (Senin - Minggu)",
  foundedYear: process.env.NEXT_PUBLIC_APP_FOUNDED_YEAR ?? "2020",
  areas: ["Bogor", "Bekasi", "Depok", "Jakarta Timur", "Cibinong", "Tangerang"],
  locale: "id_ID",
  language: "id",
} as const;

export const hasRealPhone = Boolean(site.phone) && !isPlaceholder(site.phone);
export const hasRealWhatsapp = Boolean(site.whatsapp) && !isPlaceholder(site.whatsapp);
export const hasRealEmail = Boolean(site.email) && !isPlaceholder(site.email);

export const galleryPaths = (process.env.NEXT_PUBLIC_APP_GALLERY_IMAGE ?? "")
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean);

export const heroImage = "/image/hero-truck.jpg";
export const shareImage = heroImage;
export const shareImageSize = { width: 678, height: 452 } as const;

export const absoluteUrl = (path: string) => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export const seo = {
  title: `${site.name} — Jasa Sedot WC Bogor, Bekasi & Sekitarannya`,
  description:
    "Jasa sedot WC, sedot limbah industri & sanitasi, serta sedot septic tank di Bogor dan Bekasi. Layanan 24 jam, harga transparan, tim profesional.",
  keywords: [
    "jasa sedot wc",
    "sedot wc bekasi",
    "sedot wc bogor",
    "sedot wc depok",
    "sedot wc jakarta timur",
    "sedot wc cibinong",
    "sedot septic tank bekasi",
    "jasa sedot limbah industri",
    "jasa sedot limbah sanitasi",
    "sedot wc 24 jam",
    "sedot wc murah",
    "boros septik tank",
    "jasa pumping wc",
  ],
} as const;
