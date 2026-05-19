import Link from "next/link";

const nav = [
  { href: "/",         label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/about",    label: "À Propos" },
  { href: "/team",     label: "Équipe" },
  { href: "/contact",  label: "Contact" },
];

const services = [
  "Bâtiment & Travaux Publics",
  "Immobilier",
  "Location de Maisons & Appartements",
  "Vente de Terrain",
  "Construction de Bâtiments & Maisons",
  "Vente de Matériels de Constructions",
  "Prestation de Services",
];

export function Footer() {
  return (
    <footer className="bg-[#0a0908] border-t border-[#2e2c29]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* Big wordmark */}
        <div className="border-b border-[#2e2c29] pb-14 mb-14">
          <h2 className="display text-[clamp(2.5rem,8vw,7rem)] uppercase leading-none">
            <span className="text-[#2e2c29]">FD-TECH</span><br />
            <span className="text-[#f5f0eb]">Construction</span><br />
            <span className="text-[#d97706]">Service SARL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <p className="text-[#7c7870] text-sm leading-relaxed max-w-xs">
              Spécialiste du bâtiment, travaux publics, immobilier et fourniture de matériaux de construction au Cameroun depuis 2019.
            </p>
            <p className="text-[#2e2c29] text-xs tracking-[0.2em] uppercase">SARL — Fondée en 2019</p>
          </div>

          <div>
            <p className="text-[#7c7870] text-[11px] tracking-[0.2em] uppercase mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#7c7870] text-sm hover:text-[#d97706] transition-colors tracking-wide">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#7c7870] text-[11px] tracking-[0.2em] uppercase mb-5">Nos Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-[#7c7870] text-sm leading-snug">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2e2c29] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#2e2c29] text-xs tracking-wide">
            © {new Date().getFullYear()} FD-TECH CONSTRUCTION SERVICE SARL. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#2e2c29] text-xs hover:text-[#7c7870] transition-colors">Confidentialité</a>
            <a href="#" className="text-[#2e2c29] text-xs hover:text-[#7c7870] transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
