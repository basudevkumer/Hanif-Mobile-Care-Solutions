import Link from "next/link";
import {
  Smartphone,
  BatteryCharging,
  Droplets,
  Volume2,
  Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Screen & OLED Repair",
    desc: "Cracked glass, lines, or dead touch",
    time: "30-45 mins",
    icon: Smartphone,
    href: "/services#screen",
  },
  {
    title: "Battery Replacement",
    desc: "Fast draining, overheating, or swelling",
    time: "20-30 mins",
    icon: BatteryCharging,
    href: "/services#battery",
  },
  {
    title: "Water Damage Repair",
    desc: "Ultrasonic cleaning & IC recovery",
    time: "Same Day",
    icon: Droplets,
    href: "/services#water",
  },
  {
    title: "Mic, Speaker & Port",
    desc: "Muffled sound, charging port issues",
    time: "30 mins",
    icon: Volume2,
    href: "/services#audio",
  },
  {
    title: "Accessories & Audio",
    desc: "Genuine chargers, earbuds & cases",
    time: "In Stock",
    icon: Headphones,
    href: "/products",
  },
];

export default function QuickServicesSection() {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="type-overline uppercase tracking-wider font-bold">
              Our Specialties
            </span>
            <h2 className="type-h2 text-foreground mt-1">
              Popular Repair Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-small font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            <span>View all services</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group card card-raised p-5 rounded-2xl border border-border card-interactive flex flex-col justify-between"
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-surface text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-body font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-caption text-muted mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/80 flex items-center justify-between">
                  <span className="badge badge-neutral text-caption">
                    {item.time}
                  </span>
                  <div className="flex size-7 items-center justify-center rounded-full bg-surface group-hover:bg-primary group-hover:text-primary-foreground text-foreground transition-colors">
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
