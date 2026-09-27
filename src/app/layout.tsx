import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import RevealGuard from "@/components/reveal-guard";
import { priceList, services } from "@/lib/constants";
import {
  absoluteUrl,
  hasRealEmail,
  hasRealPhone,
  hasRealWhatsapp,
  heroImage,
  seo,
  shareImageSize,
  site,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  applicationName: site.name,
  keywords: [...seo.keywords],
  category: "Home Services",
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: hasRealPhone, address: false, email: hasRealEmail },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/icon.png", sizes: "192x192" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: heroImage,
        ...shareImageSize,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [{ url: heroImage, ...shareImageSize, alt: site.name }],
  },
};

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Layanan",
  itemListElement: services.map((service, i) => {
    const price = priceList[i];
    return {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: { "@type": "LocalBusiness", name: site.name },
        areaServed: site.areas,
      },
      ...(price
        ? { price: price.price.replace(/[^0-9]/g, ""), priceCurrency: "IDR" }
        : {}),
    };
  }),
};

const localBusiness = {
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: seo.description,
  url: site.url,
  image: absoluteUrl(heroImage),
  logo: absoluteUrl("/icon.png"),
  telephone: hasRealPhone ? site.phone : undefined,
  email: hasRealEmail ? site.email : undefined,
  foundingDate: site.foundedYear,
  priceRange: "Rp 200.000 - Rp 500.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Bekasi",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: site.areas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  contactPoint: hasRealWhatsapp
    ? [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["id"],
          ...(hasRealPhone ? { telephone: site.phone } : {}),
          url: `https://wa.me/${site.whatsapp}`,
        },
      ]
    : undefined,
  hasOfferCatalog: offerCatalog,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: seo.description,
      inLanguage: site.language,
      publisher: { "@id": `${site.url}/#business` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: seo.title,
      description: seo.description,
      inLanguage: site.language,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#business` },
    },
    localBusiness,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.language} className={`${geistSans.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://maps.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <RevealGuard />
        {children}
      </body>
    </html>
  );
}
