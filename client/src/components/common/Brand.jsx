import Link from "next/link";

export default function Brand({ className = "" }) {
  return (
    <Link className={`brand ${className}`.trim()} href="/" aria-label="Hanif Mobile Care Solutions home">
      <span className="brand-mark">H</span>
      <span>
        <strong>Hanif</strong>
        <small>Mobile Care</small>
      </span>
    </Link>
  );
}
