import Link from "next/link";
import Brand from "@/components/common/Brand";
import { mainNavigation } from "@/data/navigation";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          {mainNavigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="nav-button" href="/book-service">Book a Service</Link>
      </div>
    </header>
  );
}
