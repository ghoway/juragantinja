# Juragan Tinja — Landing Page

Landing page satu halaman (statis) untuk jasa sedot WC, sedot limbah industri & sanitasi, serta sedot septic tank di wilayah Bogor, Bekasi, dan sekitarnya.

Dibangun dengan **Next.js 16 (App Router)** + **React 19** + **TypeScript** + **Tailwind CSS 4**, dan di-*export* menjadi HTML statis (`out/`) sehingga bisa di-host di mana saja tanpa Node.js server.

---

## 1. Menjalankan Proyek

```bash
bun install     # install dependency
bun run dev     # http://localhost:3000
bun run lint    # eslint
bun run build   # build static → folder out/
```

`bun run build` menghasilkan folder `out/`. Upload isi folder tersebut ke hosting statis (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, dsb).

---

## 2. Konfigurasi Env

Semua isi teks, kontak, dan gambar diatur di `.env.local` (file ini tidak ikut ter-commit). Salin dari `.env.example` lalu isi dengan data asli.

| Variabel | Dipakai untuk | Contoh / catatan |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_NAME` | Nama brand di header, footer, SEO, dan schema | `Juragan Tinja` |
| `NEXT_PUBLIC_APP_DESCRIPTION` | Deskripsi panjang di hero & meta description fallback | Satu paragraf, ± 155 karakter |
| `NEXT_PUBLIC_APP_URL` | **WAJIB diisi domain asli.** Dipakai untuk canonical URL, sitemap, robots, dan Open Graph | `https://domainanda.com` — **jangan `localhost` saat sudah online** |
| `NEXT_PUBLIC_APP_TAGLINE` | Headline utama di hero | `Solusi Cepat & Bersih untuk Masalah Septic Tank Anda` |
| `NEXT_PUBLIC_APP_ADDRESS` | Alamat di footer, section area, dan JSON-LD `PostalAddress` | `Jl. Kranggan, Kel Jatisampurna, ...` |
| `NEXT_PUBLIC_APP_PHONE` | Nomor telepon (tombol `tel:` di CTA, footer, JSON-LD) | `08123456789` — format saja, tanpa spasi |
| `NEXT_PUBLIC_APP_WHATSAPP` | Nomor WhatsApp untuk semua link `wa.me` | `6281234567890` — **format internasional tanpa `+`/spasi** |
| `NEXT_PUBLIC_APP_EMAIL` | Email di footer & JSON-LD | `halo@domainanda.com` |
| `NEXT_PUBLIC_APP_OPERATIONAL_HOURS` | Jam buka di footer | `24 Jam (Senin - Minggu)` |
| `NEXT_PUBLIC_APP_FOUNDED_YEAR` | Tahun berdiri di hero, about, dan `foundingDate` | `2020` |
| `NEXT_PUBLIC_APP_GOOGLE_MAPS_EMBED_URL` | Peta di section "Area Layanan". Kosongkan = tampil kartu alamat | `https://maps.google.com/maps?...&output=embed` |
| `NEXT_PUBLIC_APP_GALLERY_IMAGE` | **Daftar gambar galeri, comma-separated** | `/image/brosur.jpg,/image/team.jpg` |
| `GOOGLE_SITE_VERIFICATION` | Token Google Search Console (tanpa prefix `NEXT_PUBLIC_`) | isi setelah verifikasi |
| `YANDEX_VERIFICATION` | Token Yandex Webmaster | opsional |

> **Penting:** semua variabel `NEXT_PUBLIC_*` di-inline saat **build**. Setelah mengubah `.env.local`, jalankan ulang `bun run dev` atau `bun run build` — refresh browser saja tidak cukup.

### Mengubah nama, deskripsi, dan URL

Tidak perlu menyentuh kode. Cukup edit `.env.local`:

```env
NEXT_PUBLIC_APP_NAME=Nama Brand Anda
NEXT_PUBLIC_APP_DESCRIPTION=Deskripsi singkat layanan Anda untuk mesin pencari.
NEXT_PUBLIC_APP_URL=https://domainanda.com
```

Setelah build ulang, nama ikut berubah di header, footer, title tag, Open Graph, dan structured data.

---

## 3. Panduan Ukuran Foto

Semua gambar diletakkan di `public/image/`. Alt text diambil otomatis dari nama file, jadi `proses-pengerjaan.jpg` otomatis menjadi "proses pengerjaan".

| Slot | File | Ukuran ideal | Rasio | Format | Batas ukuran |
| --- | --- | --- | --- | --- | --- |
| **Hero / background utama** | `public/image/hero-truck.jpg` | **1920 × 1080 px** (minimal 1600 × 900) | 16:9 | JPG/WebP quality 80 | ≤ 300 KB |
| **Thumbnail galeri** | `public/image/*.jpg` | **1200 × 900 px** | 4:3 | JPG/WebP | ≤ 250 KB per file |
| **Brosur / flyer** | `public/image/brosur.jpg` | 1240 × 1754 px (A4 @150 dpi) | A4 | JPG | ≤ 400 KB |
| **Favicon / icon** | `public/icon.png` | **192 × 192 px** (disarankan juga 512 × 512) | 1:1 | PNG | ≤ 100 KB |
| **OG image (share WhatsApp/X)** | `public/image/hero-truck.jpg` | **1200 × 630 px** | 1.91:1 | JPG | ≤ 300 KB |

Tips:

- **Hero** adalah gambar full-bleed di layar penuh. Di HP 390px dan desktop 1440px file ini tetap di-*cover*, jadi resolusi kecil akan terlihat pecah.
- **Galeri** memakai `object-contain` sehingga gambar **tidak dipotong** — rasio 4:3 hanya untuk menjaga tinggi grid tetap seragam. Gambar beresolusi kecil tetap terbaca di thumbnail, tapi akan terlihat blur saat dibuka di lightbox.
- Uncompressed PNG untuk foto = besar dan lambat. Pakai JPG (kualitas 80–85) atau WebP.

---

## 4. Menambah / Mengubah Galeri

Semua gambar galeri diatur dari satu baris env (comma-separated, tanpa spasi di awal/b akhir item):

```env
NEXT_PUBLIC_APP_GALLERY_IMAGE=/image/brosur.jpg,/image/work-process.jpg,/image/team-work.jpg,/image/equipment.jpg,/image/septic-tank.jpg
```

- Tambah path baru → langsung muncul sebagai kartu + thumbnail baru.
- Bisa jumlah gambar berapa saja; grid menyesuaikan (mobile 1 kolom, tablet 2, desktop 3).
- Klik gambar untuk membuka lightbox: swipe/klik panah kiri-kanan, tombol `Esc`, dan counter posisi.

---

## 5. SEO

Sudah otomatis dari App Router Metadata API:

- `src/app/layout.tsx` — title template, description, keywords, canonical, Open Graph, Twitter Card, robots directives (`max-image-preview: large`), icons, manifest.
- `src/app/sitemap.ts` — sitemap.xml, lengkap dengan image sitemap.
- `src/app/robots.ts` — robots.txt. Sengaja `Disallow: /` selama `NEXT_PUBLIC_APP_URL` masih localhost, supaya build lokal tidak ter-index.
- `src/app/manifest.ts` — PWA manifest (nama, warna tema, icon).
- Structured data JSON-LD (`@graph`): `WebSite` + `WebPage` + `LocalBusiness` (alamat, jam buka, area layanan, `ContactPoint` WhatsApp) + `OfferCatalog` dari daftar harga.

### Setelah domain online

1. Set `NEXT_PUBLIC_APP_URL=https://domainanda.com` di `.env.local`, lalu build ulang.
2. Verifikasi `sitemap.xml` terbuka di browser: `https://domainanda.com/sitemap.xml`.
3. Daftarkan sitemap di **Google Search Console** → Sitemaps.
4. Isi `GOOGLE_SITE_VERIFICATION` di `.env.local` dengan token dari Search Console, build ulang.
5. Untuk hasil terbaik: daftarkan bisnis di **Google Business Profile** — biasanya pengaruhnya jauh lebih besar daripada optimasi on-page.

---

## 6. Struktur Folder

```
public/
  icon.png              # favicon
  image/                # hero, brosur, foto galeri
src/
  app/
    layout.tsx          # metadata, JSON-LD, font
    page.tsx            # komposisi semua section
    globals.css         # token warna, overflow guard
    sitemap.ts robots.ts manifest.ts
  components/
    header.tsx          # nav + burger menu
    hero.tsx
    why-us.tsx services.tsx pricing.tsx
    gallery.tsx         # grid + lightbox
    coverage.tsx        # area layanan + peta
    about.tsx cta-section.tsx
    footer.tsx floating-wa.tsx   # tombol WA mengambang
  lib/
    constants.ts        # data statis (jasanya, harga, area)
    site.ts             # baca env + nilai SEO terpusat
```

---

## 7. Catatan Teknis

- **Static export** (`output: "export"` di `next.config.ts`) → `next/image` otomatis `unoptimized`, dan metadata routes butuh `export const dynamic = "force-static"`.
- **Animasi** memakai `motion/react` (`whileInView` + `viewport={{ once: true }}`).
- `globals.css` memakai `overflow-x: clip` pada `html`/`body`. Animasi `translate X` secara default menambah lebar area scroll, yang pada mobile membuat `position: fixed` (header + tombol WA) ikut bergeser keluar layar. `clip` memotong overflow itu tanpa merusak `position: sticky`.
- Font: `Geist` via `next/font/google` (self-hosted, zero layout shift).
- Warna primary `#1e3a5f`, accent `#f59e0b`, background alternatif `#f8fafc` — ubah di `globals.css` pada blok `@theme inline`.
