import Link from "next/link";

export default function Brand({ className = "", inverted = false }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`.trim()}
      aria-label="Hanif Mobile Care Solutions home"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-black text-xl shadow-brand transition-transform duration-300 group-hover:scale-105">
        H
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-base font-extrabold tracking-tight ${inverted ? "text-on-inverse" : "text-foreground"}`}>
          Hanif
        </span>
        <span className={`text-[11px] font-semibold tracking-wider uppercase mt-0.5 ${inverted ? "text-ink-400" : "text-muted"}`}>
          Mobile Care
        </span>
      </span>
    </Link>
  );
}
