import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { homeFeatures } from "@/data/home";

export default function FeaturesSection() {
  return (
    <section className="section-y bg-surface/60 border-y border-border relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="type-overline uppercase tracking-wider font-bold">
            Why Choose Us
          </span>
          <h2 className="type-h2 text-foreground mt-2">
            Care That Goes Beyond The Repair
          </h2>
          <p className="type-body text-muted mt-3">
            From simple screen replacements to complex motherboard micro-soldering,
            our certified technicians deliver dependable and honest results.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeFeatures.map((feature, idx) => (
            <article
              key={idx}
              className="card card-raised p-6 sm:p-7 flex flex-col justify-between card-interactive rounded-2xl border border-border group"
            >
              <div>
                {/* Number / Icon Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary font-black text-base transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {feature.icon}
                  </span>
                  {feature.tag && (
                    <span className="badge badge-neutral text-caption">
                      {feature.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-body-lg font-bold text-foreground mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-small text-muted leading-relaxed">
                  {feature.text}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-caption font-semibold text-muted group-hover:text-primary transition-colors">
                <span>Learn more</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-12 rounded-2xl bg-surface-raised border border-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black shadow-brand">
              <Wrench className="size-5" />
            </div>
            <div>
              <h4 className="text-body font-bold text-foreground">
                Need an urgent phone repair today?
              </h4>
              <p className="text-small text-muted mt-0.5">
                Walk-ins are always welcome, or reserve your repair slot to skip the line.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/services"
              className="btn btn-primary btn-md w-full sm:w-auto shadow-brand flex items-center justify-center gap-2"
            >
              <span>Schedule Repair</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
