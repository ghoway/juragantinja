import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Dev-only. Next.js memblokir request ke aset dev yang datang dari host selain
  // localhost, jadi akses dari HP lewat IP LAN akan kena 403 pada script-tag
  // (browser mengirim Referer berisi IP LAN, bukan localhost) dan halaman jadi
  // tidak ter-hydrate sama sekali. Pola di bawah mengizinkan IP LAN pribadi.
  // Hapus baris ini kalau tidak pernah tes dari perangkat lain.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
