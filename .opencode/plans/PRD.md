# PRD — Juragan Tinja (Web Statis Sedot WC)

## 1. Overview

Website statis satu halaman (landing page) untuk usaha jasa sedot WC "Juragan Tinja" di area Bekasi & sekitarnya. Dibangun dengan Next.js 16 + Tailwind CSS 4 + TypeScript. Target: SEO friendly, fully responsive (mobile-first), fast loading, dan mendorong konversi via WhatsApp/telepon.

## 2. Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS 4 |
| Icon | Lucide React |
| Font | Geist Sans (sudah ter-setup) |
| Image | next/image (optimized) |
| Deployment | Static export (`output: 'export'` di next.config.ts) |

## 3. Environment Variables

### Yang Sudah Ada
```env
NEXT_PUBLIC_APP_NAME=Juragan Tinja
NEXT_PUBLIC_APP_DESCRIPTION=Sedot WC Terbaik di Kranggan
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ADDRESS=Jl. Kranggan, RT.003/RW.010, Jatirangga, Kec. Jatisampurna, Kota Bks, Jawa Barat 17434
```

### Yang Perlu Ditambahkan
```env
NEXT_PUBLIC_APP_PHONE=08xxxxxxxxxx
NEXT_PUBLIC_APP_WHATSAPP=628xxxxxxxxxx
NEXT_PUBLIC_APP_EMAIL=juragantinja@email.com
NEXT_PUBLIC_APP_OPERATIONAL_HOURS=24 Jam (Senin - Minggu)
NEXT_PUBLIC_APP_TAGLINE=Solusi Cepat & Bersih untuk Masalah Septik Tank Anda
NEXT_PUBLIC_APP_FOUNDED_YEAR=2020
NEXT_PUBLIC_APP_GOOGLE_MAPS_EMBED_URL=
```

> **Note:** Isi value di atas sesuai data asli sebelum build. Variable `NEXT_PUBLIC_APP_WHATSAPP` wajib format internasional tanpa `+` (contoh: `6281234567890`).

## 4. Design System

### Warna
| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary` | `#1e3a5f` | Navy — header, heading, elemen utama |
| `--color-primary-dark` | `#152a45` | Navy gelap — hover state |
| `--color-primary-light` | `#2d5a8e` | Navy terang — aksen |
| `--color-accent` | `#f59e0b` | Amber — CTA button, badge, highlight |
| `--color-accent-dark` | `#d97706` | Amber gelap — hover CTA |
| `--color-bg` | `#ffffff` | Putih — background utama |
| `--color-bg-alt` | `#f8fafc` | Abu sangat terang — section bergantian |
| `--color-text` | `#1e293b` | Slate 800 — body text |
| `--color-text-light` | `#64748b` | Slate 500 — secondary text |

### Typography
- **Font:** Geist Sans (sudah ada)
- **Heading:** font-bold, tracking-tight
- **Body:** text-base (16px), leading-relaxed

### Spacing & Layout
- Container max-width: `max-w-7xl` (1280px), center, `px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Mobile-first responsive breakpoints: `sm:640px`, `md:768px`, `lg:1024px`

## 5. Struktur Halaman (Sections)

### 5.1 Header / Navbar
- Logo text: `NEXT_PUBLIC_APP_NAME`
- Navigation links: Beranda, Layanan, Harga, Tentang Kami, Kontak
- Sticky top, background putih + shadow on scroll
- Mobile: hamburger menu
- CTA button kecil "Hubungi Kami" (link ke WhatsApp)

### 5.2 Hero Section
- **Background:** Gambar `1.png` (truk operasional) dengan dark overlay
- **Headline:** `NEXT_PUBLIC_APP_TAGLINE`
- **Sub-headline:** `NEXT_PUBLIC_APP_DESCRIPTION`
- **CTA utama:** "Hubungi via WhatsApp" (button amber, besar)
- **CTA sekunder:** "Lihat Layanan Kami" (scroll ke section layanan)
- **Badge:** "Layanan 24 Jam" atau "Melayani Sejak {FOUNDED_YEAR}"
- Full viewport height di mobile, 80vh di desktop

### 5.3 Keunggulan / Why Us (Trust Signals)
- 4 kolom grid (1 col mobile, 2 col tablet, 4 col desktop)
- Icon + judul + deskripsi singkat
- Contoh item:
  - **Respon Cepat** — Tim kami siap datang dalam hitungan menit
  - **Harga Transparan** — Tanpa biaya tersembunyi
  - **Berpengalaman** — Melayani ratusan pelanggan puas
  - **Layanan 24 Jam** — Siap kapanpun Anda butuhkan
- Background: `bg-alt` (abu terang)

### 5.4 Layanan / Services
- Grid 2x2 (mobile 1 col) atau 3 col desktop
- Card design: icon + judul + deskripsi
- Layanan:
  1. **Sedot WC** — Penyedotan limbah WC rumah tangga & komersial
  2. **Kuras Septic Tank** — Pembersihan total septic tank
  3. **Saluran Mampet** — Perbaikan saluran air yang tersumbat
  4. **Pembersihan Gorong-gorong** — Maintenance saluran air besar
  5. **Instalasi Septic Tank** — Pemasangan septic tank baru
  6. **Perawatan Berkala** — Jadwal maintenance rutin
- Gambar pendukung: `2.png`, `3.png` bisa digunakan sebagai dekorasi section

### 5.5 Harga / Price List
- Tabel atau card grid
- Kolom: Layanan, Estimasi Harga, Keterangan
- Data harga hardcoded (bisa diedit langsung di code, karena statis)
- Contoh struktur:
  | Layanan | Harga | Keterangan |
  |---|---|---|
  | Sedot WC Standar | Mulai Rp 250.000 | Kapasitas ≤ 2 kubik |
  | Sedot WC Besar | Mulai Rp 450.000 | Kapasitas > 2 kubik |
  | Kuras Septic Tank | Mulai Rp 500.000 | Termasuk pembersihan |
  | Saluran Mampet | Mulai Rp 200.000 | Tergantung tingkat sumbatan |
- **Disclaimer note:** *\*Harga dapat berubah sewaktu-waktu tergantung lokasi, jarak, dan kondisi lapangan. Hubungi kami untuk estimasi lebih akurat.*
- CTA di bawah tabel: "Minta Penawaran Harga" → WhatsApp
- Background: putih

### 5.6 Galeri / Dokumentasi Kerja
- Grid gambar: `3.png`, `4.png`, `5.png`
- 3 kolom desktop, 2 kolom tablet, 1 kolom mobile
- Aspect ratio konsisten (misal 4:3)
- Caption opsional
- Background: `bg-alt`

### 5.7 Area Layanan / Coverage
- Text + list area yang dilayani
- Area: Kranggan, Jatisampurna, Jatirangga, Jatiranggon, Pondok Gede, Bekasi Kota, Bekasi Timur, Bekasi Selatan, Bekasi Utara, Depok, Jakarta Timur
- Opsional: embed Google Maps (jika `GOOGLE_MAPS_EMBED_URL` diisi)
- Background: putih

### 5.8 Tentang Kami / About
- Deskripsi singkat usaha (2-3 paragraf)
- Gambar `4.png` di samping text (side-by-side layout)
- Poin-poin:
  - Berdiri sejak tahun `NEXT_PUBLIC_APP_FOUNDED_YEAR`
  - Melayani area Bekasi dan sekitarnya
  - Tim profesional dan berpengalaman
  - Peralatan modern dan lengkap
- Background: `bg-alt`

### 5.9 CTA Section (Call to Action)
- Full-width banner dengan background `primary` (navy)
- Headline: "Butuh Jasa Sedot WC Sekarang?"
- Sub: "Hubungi kami sekarang untuk layanan cepat dan terpercaya"
- Button besar: "Hubungi via WhatsApp" (amber)
- Nomor telepon ditampilkan juga

### 5.10 Footer
- Logo + deskripsi singkat
- Quick links: Beranda, Layanan, Harga, Tentang, Kontak
- Info kontak: Alamat, Telepon, WhatsApp, Email
- Jam operasional
- Copyright © {currentYear} {APP_NAME}
- Background: navy gelap (`primary-dark`)
- Text: putih/abu terang

## 6. Floating WhatsApp Button
- Fixed bottom-right
- Bulat, warna hijau WhatsApp (#25D366)
- Icon WhatsApp dari Lucide atau SVG
- Link ke `https://wa.me/{NEXT_PUBLIC_APP_WHATSAPP}`
- Selalu visible di semua section
- Pulse animation subtle untuk menarik perhatian

## 7. SEO Requirements

### Meta Tags (di layout.tsx)
- `title`: `{APP_NAME} — {APP_DESCRIPTION}`
- `description`: Deskripsi lengkap layanan + area
- `keywords`: sedot wc, sedot wc bekasi, sedot wc kranggan, kuras septic tank, saluran mampet, jasa sedot wc
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags
- `robots`: index, follow
- `canonical`: `APP_URL`

### Structured Data (JSON-LD)
- Schema.org `LocalBusiness` type
- Berisi: name, address, telephone, url, openingHours, areaServed, priceRange, image
- Ditambahkan sebagai `<script type="application/ld+json">` di layout atau page

### Technical SEO
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Heading hierarchy: satu `<h1>` di hero, `<h2>` per section, `<h3>` untuk sub
- Alt text di semua gambar
- `lang="id"` di `<html>`
- Static export untuk fast loading

## 8. Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| < 640px (mobile) | 1 kolom, hamburger nav, stacked sections |
| 640-768px (tablet kecil) | 2 kolom grid mulai aktif |
| 768-1024px (tablet) | Side-by-side layout aktif |
| > 1024px (desktop) | Full layout, 3-4 kolom grid |

## 9. File Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + custom CSS variables
│   ├── layout.tsx           # Root layout + SEO meta + JSON-LD
│   ├── page.tsx             # Halaman utama (compose semua section)
│   └── favicon.ico
├── components/
│   ├── header.tsx           # Navbar + mobile menu
│   ├── hero.tsx
│   ├── why-us.tsx
│   ├── services.tsx
│   ├── pricing.tsx
│   ├── gallery.tsx
│   ├── coverage.tsx
│   ├── about.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   └── floating-wa.tsx      # Floating WhatsApp button
└── lib/
    └── constants.ts         # Data layanan, harga, area (hardcoded data)
```

## 10. Dependency Tambahan

Hanya satu dependency baru:
```bash
bun add lucide-react
```

## 11. Config Changes

### next.config.ts
```ts
const nextConfig: NextConfig = {
  output: 'export',
};
```

## 12. Prioritas Eksekusi

| Step | Task |
|---|---|
| 1 | Update `.env.local` dengan variable baru (placeholder values) |
| 2 | Update `globals.css` — color tokens, remove dark mode |
| 3 | Update `next.config.ts` — static export |
| 4 | Update `layout.tsx` — SEO meta, JSON-LD, lang="id" |
| 5 | Buat `lib/constants.ts` — data layanan, harga, area |
| 6 | Install `lucide-react` |
| 7 | Buat semua components (header → footer, urut) |
| 8 | Update `page.tsx` — compose semua components |
| 9 | Buat `floating-wa.tsx` |
| 10 | Test responsive di berbagai viewport |
| 11 | Lint & build check |

## 13. Non-Goals (Out of Scope)

- Dark mode (tidak diperlukan untuk web bisnis lokal)
- Multi-page routing (cukup satu halaman)
- Backend / database / CMS
- Payment gateway
- User authentication
- Blog / artikel (bisa ditambahkan nanti)
- Analytics (bisa ditambahkan nanti via Google Tag Manager)

## 14. Gambar yang Tersedia

| File | Konten | Rencana Penggunaan |
|---|---|---|
| `1.png` | Truk tangki sedot WC | Hero background |
| `2.png` | Tangki/drum penyimpanan | Section layanan / dekorasi |
| `3.png` | Proses kerja sedot WC | Galeri |
| `4.png` | Tim pekerja di lapangan | About section + Galeri |
| `5.png` | Proses kerja / alat | Galeri |
