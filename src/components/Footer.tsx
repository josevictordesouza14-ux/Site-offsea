import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  return <footer className="footer container"><p>© {new Date().getFullYear()} OFFSEA<span>{company.legalName}</span></p><Link href="/privacidade">Privacidade<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg></Link></footer>;
}
