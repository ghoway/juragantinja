import {
  Zap,
  BadgeDollarSign,
  Award,
  Clock,
  Droplets,
  Factory,
  Recycle,
  type LucideIcon,
} from "lucide-react";

export type WhyUsItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyUsItems: WhyUsItem[] = [
  { icon: Zap, title: "Respon Cepat", description: "Tim kami siap datang dalam hitungan menit setelah Anda menghubungi" },
  { icon: BadgeDollarSign, title: "Harga Transparan", description: "Tanpa biaya tersembunyi, harga disepakati sebelum pengerjaan" },
  { icon: Award, title: "Berpengalaman", description: "Telah melayani ratusan pelanggan puas di area Bekasi dan sekitarnya" },
  { icon: Clock, title: "Layanan 24 Jam", description: "Siap melayani kapanpun Anda butuhkan, termasuk hari libur" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  { icon: Droplets, title: "Jasa Sedot WC", description: "Penyedotan limbah WC untuk rumah tangga, kantor, dan fasilitas komersial" },
  { icon: Factory, title: "Sedot Limbah Industri & Sanitasi", description: "Pengosongan dan penanganan limbah industri serta limbah sanitasi dengan alat modern" },
  { icon: Recycle, title: "Sedot Septic Tank", description: "Pembersihan dan pengosongan total septic tank secara menyeluruh" },
];

export type PriceItem = {
  service: string;
  price: string;
  note: string;
};

export const priceList: PriceItem[] = [
  { service: "Jasa Sedot WC", price: "Rp 250.000", note: "Kapasitas ≤ 2 kubik" },
  { service: "Sedot Limbah Industri & Sanitasi", price: "Rp 450.000", note: "Tergantung volume & kondisi" },
  { service: "Sedot Septic Tank", price: "Rp 500.000", note: "Termasuk pembersihan" },
];

export const coverageAreas = [
  "Bogor",
  "Bekasi Kota",
  "Bekasi Timur",
  "Bekasi Selatan",
  "Bekasi Utara",
  "Bekasi Barat",
  "Depok",
  "Jakarta Timur",
  "Cibinong",
  "Tangerang",
];

// ponytail: alt text diturunkan dari filename, jadi kurang deskriptif.
// Kalau butuh alt khusus per gambar, ganti format env jadi "path|alt" dan split di sini.
export const galleryImages = (process.env.NEXT_PUBLIC_APP_GALLERY_IMAGE ?? "")
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean)
  .map((entry) => ({
    src: entry,
    alt:
      entry
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "")
        .replace(/[-_]/g, " ") ?? entry,
  }));

export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#kontak", label: "Kontak" },
];
