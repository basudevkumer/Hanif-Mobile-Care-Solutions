"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Wrench, Search, ShoppingBag } from "lucide-react";
import Brand from "@/components/common/Brand";
import { mainNavigation } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md transition-shadow duration-200">
      <div className="container-page flex h-18 items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex shrink-0 items-center">
          <Brand />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main navigation"
        >
          {mainNavigation.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 text-small font-medium transition-colors duration-200 hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Call - Desktop */}
          <a
            href="tel:+8801700000000"
            className="hidden xl:inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-caption font-medium text-muted hover:text-foreground transition-colors"
            title="Call Support"
          >
            <PhoneCall className="size-4 text-primary" />
            <span>+880 1700-000000</span>
          </a>

          {/* Book Service CTA Button */}
          <Link
            href="/services"
            className="btn btn-primary btn-sm flex items-center gap-1.5 shadow-brand"
          >
            <Wrench className="size-3.5" />
            <span>Book Service</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="icon-btn md:hidden text-foreground hover:bg-surface focus-ring"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-18 bottom-0 z-50 bg-background/95 backdrop-blur-lg md:hidden border-t border-border flex flex-col justify-between p-6 overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {mainNavigation.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary-soft text-primary font-semibold"
                      : "text-foreground hover:bg-surface"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="size-2 rounded-full bg-primary" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6">
            <a
              href="tel:+8801700000000"
              className="flex items-center justify-center gap-2 rounded-lg bg-surface py-3 text-small font-medium text-foreground hover:bg-ink-200 transition-colors"
            >
              <PhoneCall className="size-4 text-primary" />
              <span>Call Us: +880 1700-000000</span>
            </a>

            <Link
              href="/services"
              className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2"
            >
              <Wrench className="size-4" />
              <span>Book a Service Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
