import Link from "next/link";
import Brand from "@/components/common/Brand";
import { footerNavigation } from "@/data/navigation";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand className="footer-brand" />
          <p className="footer-copy">Trusted mobile repair and care for the devices you depend on every day.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {footerNavigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+8801700000000">+880 1700-000000</a>
          <a href="mailto:hello@hanifmobile.com">hello@hanifmobile.com</a>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hanif Mobile Care Solutions</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
