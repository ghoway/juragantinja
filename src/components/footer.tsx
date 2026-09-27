import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Footer() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Juragan Tinja";
  const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? "";
  const address = process.env.NEXT_PUBLIC_APP_ADDRESS ?? "";
  const phone = process.env.NEXT_PUBLIC_APP_PHONE ?? "";
  const email = process.env.NEXT_PUBLIC_APP_EMAIL ?? "";
  const hours = process.env.NEXT_PUBLIC_APP_OPERATIONAL_HOURS ?? "24 Jam";

  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">{appName}</h3>
            <p className="mt-3 text-sm leading-relaxed">{appDescription}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Menu</h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Kontak</h4>
            <ul className="mt-3 space-y-3 text-sm">
              {address && (
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{address}</span>
                </li>
              )}
              {phone && (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <a href={`tel:${phone}`} className="hover:text-white">{phone}</a>
                </li>
              )}
              {email && (
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Jam Operasional</h4>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span>{hours}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} {appName}. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
