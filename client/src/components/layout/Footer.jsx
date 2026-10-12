import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Cpu,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Brand from "@/components/common/Brand";
import { footerNavigation } from "@/data/navigation";

const serviceLinks = [
  { label: "Screen & Display Replacement", href: "/services#screen" },
  { label: "Battery Replacement & Health", href: "/services#battery" },
  { label: "Water & Liquid Damage Repair", href: "/services#water" },
  { label: "Charging Port & Speaker Fix", href: "/services#hardware" },
  { label: "Motherboard & IC Diagnostics", href: "/services#chip" },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Parts",
    desc: "Original factory-grade components",
  },
  {
    icon: Sparkles,
    title: "90-Day Warranty",
    desc: "Guaranteed repair satisfaction",
  },
  {
    icon: Cpu,
    title: "Master Technicians",
    desc: "Certified chip-level diagnostics",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    desc: "Same-day service for common repairs",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-inverse text-on-inverse border-t border-ink-800">
      {/* Top Value / Guarantee Strip */}
      <div className="border-b border-ink-800/80 bg-ink-950/60 py-8">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="text-small font-bold text-on-inverse">
                    {item.title}
                  </h4>
                  <p className="text-caption text-ink-400 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Brand inverted />
            <p className="text-small text-ink-400 max-w-sm leading-relaxed">
              Hanif Mobile Care Solutions is your trusted destination for smartphone repairs,
              premium tech accessories, and certified device servicing.
            </p>

            <div className="mt-2 flex flex-col gap-2.5 text-small text-ink-300">
              <a
                href="tel:+8801700000000"
                className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Phone className="size-4 text-primary shrink-0" />
                <span>+880 1700-000000</span>
              </a>
              <a
                href="mailto:support@hanifmobilecare.com"
                className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Mail className="size-4 text-primary shrink-0" />
                <span>support@hanifmobilecare.com</span>
              </a>
              <div className="inline-flex items-center gap-2.5 text-ink-400">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-small font-bold text-on-inverse uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/"
                  className="text-small text-ink-400 hover:text-on-inverse transition-colors"
                >
                  Home
                </Link>
              </li>
              {footerNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-ink-400 hover:text-on-inverse transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-small text-ink-400 hover:text-on-inverse transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3">
            <h3 className="text-small font-bold text-on-inverse uppercase tracking-wider mb-4">
              Repair Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-small text-ink-400 hover:text-on-inverse transition-colors group"
                  >
                    <ChevronRight className="size-3 text-primary opacity-70 transition-transform group-hover:translate-x-0.5" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-small font-bold text-on-inverse uppercase tracking-wider mb-4">
              Working Hours
            </h3>
            <div className="flex flex-col gap-2 text-small text-ink-400">
              <div className="flex justify-between py-1 border-b border-ink-800">
                <span>Saturday – Thursday:</span>
                <span className="font-semibold text-on-inverse">9:30 AM – 8:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-ink-800">
                <span>Friday:</span>
                <span className="font-semibold text-on-inverse">3:00 PM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Emergency Inquiries:</span>
                <span className="font-semibold text-primary">24/7 via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="border-t border-ink-800 bg-ink-950 py-5">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-ink-400">
          <p>© {currentYear} Hanif Mobile Care Solutions. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
