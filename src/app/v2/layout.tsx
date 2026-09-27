import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Juragan Tinja - V2",
  description: "Jasa sedot WC terpercaya",
  alternates: { canonical: "/v2" },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
