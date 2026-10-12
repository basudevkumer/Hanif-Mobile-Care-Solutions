import Link from "next/link";
import {
  Wrench,
  ShoppingBag,
  Star,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import Container from "@/components/common/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-10 lg:py-16">
      {/* Subtle background radial tint */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 size-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-caption font-semibold text-foreground shadow-xs">
              <span className="flex size-2 rounded-full bg-primary animate-pulse" />
              <span>Certified Electronics & Mobile Care</span>
            </div>

            {/* Display Headline */}
            <h1 className="type-display mt-5 text-foreground">
              Keep Your Tech{" "}
              <span className="text-primary font-black">Flawless & Fast.</span>
            </h1>

            {/* Subtitle */}
            <p className="type-body-lg mt-4 text-muted max-w-xl">
              Professional smartphone repairs, genuine factory parts, and premium
              mobile accessories—restored with precision and backed by a 90-day warranty.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/services"
                className="btn btn-primary btn-lg shadow-brand flex items-center gap-2"
              >
                <Wrench className="size-4" />
                <span>Book a Repair</span>
              </Link>
              <Link
                href="/products"
                className="btn btn-outline btn-lg flex items-center gap-2"
              >
                <ShoppingBag className="size-4" />
                <span>Shop Accessories</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-h3 font-black text-foreground">45m</span>
                <span className="text-caption text-muted mt-0.5">Avg Repair Time</span>
              </div>
              <div className="flex flex-col">
                <span className="text-h3 font-black text-foreground">100%</span>
                <span className="text-caption text-muted mt-0.5">Genuine Parts</span>
              </div>
              <div className="flex flex-col">
                <span className="text-h3 font-black text-foreground">90 Days</span>
                <span className="text-caption text-muted mt-0.5">Repair Warranty</span>
              </div>
            </div>

            {/* Supported Flagships Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
              <span className="text-caption font-semibold text-muted mr-1">
                Servicing:
              </span>
              {["Apple iPhone", "Samsung Galaxy", "Google Pixel", "Xiaomi", "OnePlus"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-ink-700 border border-border"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column: Clean Interactive Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Floating Top-Right Warranty Badge */}
              <div className="absolute -top-3.5 -right-2 sm:-right-4 z-20 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-caption font-bold shadow-brand flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" />
                <span>90-Day Warranty</span>
              </div>

              {/* Main Diagnostic Showcase Card */}
              <div className="relative rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-card">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black shadow-sm">
                      <Smartphone className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-small font-bold text-foreground">
                        Express Repair Center
                      </h4>
                      <p className="text-caption text-muted">
                        Live Diagnostic Bench
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-success flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-success-700" />
                    Technicians Online
                  </span>
                </div>

                {/* Simulated Diagnostic Check List */}
                <div className="my-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-surface-raised p-3.5 border border-border/80">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 text-primary shrink-0" />
                      <span className="text-small font-medium text-foreground">
                        OLED Screen & Digitizer
                      </span>
                    </div>
                    <span className="text-caption font-semibold text-success-700 bg-success-50 px-2 py-0.5 rounded-md">
                      Original
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-surface-raised p-3.5 border border-border/80">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 text-primary shrink-0" />
                      <span className="text-small font-medium text-foreground">
                        Battery Health & Cycles
                      </span>
                    </div>
                    <span className="text-caption font-semibold text-primary bg-primary-soft px-2 py-0.5 rounded-md">
                      100% Peak
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-surface-raised p-3.5 border border-border/80">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-4 text-primary shrink-0" />
                      <span className="text-small font-medium text-foreground">
                        Micro-Soldering & IC Logic
                      </span>
                    </div>
                    <span className="text-caption font-semibold text-ink-700 bg-surface px-2 py-0.5 rounded-md">
                      Certified
                    </span>
                  </div>
                </div>

                {/* Integrated Customer Rating Section (No Overlaps) */}
                <div className="mt-6 rounded-2xl border border-border bg-surface-raised p-4 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary font-bold">
                      <Star className="size-5 fill-primary text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-small font-extrabold text-foreground leading-tight">
                        <span>4.9 / 5.0</span>
                        <span className="text-caption font-normal text-muted">
                          (2,400+ Reviews)
                        </span>
                      </div>
                      <p className="text-caption text-muted mt-0.5">
                        Highest rated mobile care in Dhaka
                      </p>
                    </div>
                  </div>
                  <span className="badge badge-success text-[11px] shrink-0 hidden sm:inline-flex">
                    Top Rated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
