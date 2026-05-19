"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/",         label: "Accueil",  num: "01" },
  { href: "/about",    label: "À Propos", num: "02" },
  { href: "/services", label: "Services", num: "03" },
  { href: "/projects", label: "Projets",  num: "04" },
  { href: "/team",     label: "Équipe",   num: "05" },
  { href: "/contact",  label: "Contact",  num: "06" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); setClosing(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  function close() { setClosing(true); setTimeout(() => { setOpen(false); setClosing(false); }, 450); }

  const visible = open || closing;

  return (
    <>
      {/* ── BAR ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        open ? "bg-transparent" : scrolled ? "bg-[#111110]/95 backdrop-blur-sm border-b border-[#2e2c29]" : "bg-[#111110]"
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link href="/" className="font-[family-name:var(--font-oswald)] font-medium text-xl tracking-[0.15em] uppercase text-[#f5f0eb]">
            FD<span className="text-[#d97706]">-</span>TECH
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors ${
                  pathname === l.href ? "text-[#d97706]" : "text-[#7c7870] hover:text-[#f5f0eb]"
                }`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact"
              className="hidden md:inline-flex items-center text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-2.5 bg-[#d97706] text-[#111110] hover:bg-[#f59e0b] transition-colors">
              Devis Gratuit
            </Link>

            {/* Hamburger */}
            <button onClick={() => open ? close() : setOpen(true)}
              className={`flex flex-col gap-[5px] p-2 ${open ? "is-open text-[#f5f0eb]" : "text-[#f5f0eb]"}`}
              aria-label="Menu">
              <span className="ham ham-t w-[22px]" />
              <span className="ham ham-m w-[15px]" />
              <span className="ham ham-b w-[22px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── OVERLAY ── */}
      {visible && (
        <div className={`fixed inset-0 z-40 bg-[#0a0908] flex flex-col ${closing ? "overlay-out" : "overlay-in"}`}>
          {/* Top bar */}
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between w-full">
            <span className="font-[family-name:var(--font-oswald)] font-medium text-xl tracking-[0.15em] uppercase text-[#f5f0eb]">
              FD<span className="text-[#d97706]">-</span>TECH
            </span>
            <button onClick={close} className="is-open flex flex-col gap-[5px] p-2 text-[#f5f0eb]" aria-label="Fermer">
              <span className="ham ham-t w-[22px]" />
              <span className="ham ham-m w-[15px]" />
              <span className="ham ham-b w-[22px]" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 space-y-1">
            {links.map((l, i) => (
              <Link key={l.href} href={l.href} onClick={close}
                className="nav-link group flex items-baseline gap-5 border-b border-[#2e2c29] py-5"
                style={{ animationDelay: `${0.08 + i * 0.07}s` }}>
                <span className="text-[#2e2c29] font-mono text-xs">{l.num}</span>
                <span className={`font-[family-name:var(--font-oswald)] font-medium text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tight transition-colors ${
                  pathname === l.href ? "text-[#d97706]" : "text-[#f5f0eb]/50 group-hover:text-[#f5f0eb]"
                }`}>
                  {l.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="px-8 md:px-16 py-8 flex items-center justify-between border-t border-[#2e2c29]">
            <p className="text-[#7c7870] text-[11px] tracking-[0.2em] uppercase">Cameroun — Depuis 2019</p>
            <Link href="/contact" onClick={close}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-2.5 bg-[#d97706] text-[#111110] hover:bg-[#f59e0b] transition-colors">
              Devis Gratuit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
