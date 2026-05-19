import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit & Consultation",
  description: "Contactez FD-TECH CONSTRUCTION SERVICE SARL pour vos projets BTP et construction au Cameroun. Devis gratuit et réponse rapide.",
  alternates: { canonical: "https://fdtechconstruction.cm/contact" },
};

const contactInfo = [
  { icon: MapPin, label: "Adresse",    value: "Cameroun" },
  { icon: Mail,   label: "Email",      value: "contact@fdtechconstruction.cm" },
  { icon: Phone,  label: "Téléphone",  value: "+237 000 000 000" },
  { icon: Clock,  label: "Horaires",   value: "Lun – Ven : 7h00 – 18h00" },
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

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden border-b border-[#2e2c29]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format"
          alt="Contact FD-TECH" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d97706]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-[#d97706] text-[11px] tracking-[0.25em] uppercase mb-4">Parlons-nous</p>
              <h1 className="display text-[clamp(3rem,7vw,6.5rem)] text-[#f5f0eb] uppercase">
                Démarrons<br />
                <span className="text-[#2e2c29]">Votre Projet</span>
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-[#7c7870] leading-relaxed">
                Vous avez un projet de construction ? Décrivez-le nous et recevez une consultation gratuite et un devis personnalisé sous 48h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <section className="py-16 px-6 bg-[#111110]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-12">
            <div className="space-y-0">
              {contactInfo.map(({ icon: Icon, label, value }, i) => (
                <div key={label} className={`flex items-start gap-5 py-6 ${i < contactInfo.length - 1 ? "border-b border-[#2e2c29]" : ""}`}>
                  <div className="w-10 h-10 border border-[#2e2c29] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <div>
                    <p className="text-[#7c7870] text-[10px] tracking-[0.2em] uppercase mb-1">{label}</p>
                    <p className="text-[#f5f0eb] font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-full h-52 overflow-hidden bg-[#0a0908]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=800&q=80&auto=format"
                alt="Chantier FD-TECH" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Amber CTA card */}
            <div className="bg-[#d97706] p-10 space-y-6">
              <div className="space-y-2">
                <p className="text-[#92400e] text-[11px] tracking-[0.2em] uppercase">Consultation Gratuite</p>
                <h2 className="font-[family-name:var(--font-oswald)] font-medium text-2xl text-[#111110] uppercase leading-tight">
                  Décrivez votre projet, nous vous répondons sous 48h.
                </h2>
              </div>
              <a href="mailto:contact@fdtechconstruction.cm"
                className="flex items-center justify-center bg-[#111110] text-[#f5f0eb] font-semibold text-[11px] tracking-[0.18em] uppercase px-6 py-4 hover:bg-[#0a0908] transition-colors w-full">
                Envoyer un Email
              </a>
              <p className="text-[#92400e] text-xs text-center">Ou appelez-nous : +237 000 000 000</p>
            </div>

            {/* Services */}
            <div className="border border-[#2e2c29] p-8 space-y-5 bg-[#0a0908]">
              <h3 className="font-[family-name:var(--font-oswald)] font-medium text-lg text-[#f5f0eb] uppercase">
                Nos 7 Domaines d&apos;Intervention
              </h3>
              <ul className="space-y-3">
                {services.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 text-[#7c7870] text-sm">
                    <span className="text-[#d97706] font-mono text-[10px] w-5 shrink-0">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why us */}
            <div className="border border-[#2e2c29] p-8 space-y-4 bg-[#111110]">
              <h3 className="font-[family-name:var(--font-oswald)] font-medium text-lg text-[#f5f0eb] uppercase">
                Pourquoi FD-TECH ?
              </h3>
              <ul className="space-y-3">
                {["Réponse sous 48h garantie","Devis détaillé et transparent","5+ années d'expertise BTP au Cameroun","80+ projets livrés avec succès","Équipe d'ingénieurs certifiés"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#7c7870] text-sm">
                    <div className="w-1 h-1 bg-[#d97706] shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
