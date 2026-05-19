import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — BTP, Immobilier, Location & Construction",
  description: "Bâtiment, travaux publics, immobilier, location de maisons, vente de terrain, construction et matériaux — les 7 services de FD-TECH CONSTRUCTION SERVICE SARL.",
  alternates: { canonical: "https://fdtechconstruction.cm/services" },
};

const services = [
  {
    num: "01",
    title: "Bâtiment & Travaux Publics",
    desc: "Construction de bâtiments résidentiels, commerciaux, industriels et d'infrastructures publiques selon les normes camerounaises et internationales en vigueur.",
    features: ["Bâtiments résidentiels & commerciaux", "Infrastructures industrielles", "Ouvrages d'art & ponts", "Réhabilitation & rénovation", "Génie civil"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format",
  },
  {
    num: "02",
    title: "Immobilier",
    desc: "Achat, vente et gestion de biens immobiliers au Cameroun. Nous vous accompagnons dans toutes vos transactions avec expertise et transparence.",
    features: ["Vente de maisons & villas", "Vente d'appartements", "Locaux commerciaux", "Conseil en investissement immobilier", "Estimation de biens"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format",
  },
  {
    num: "03",
    title: "Location de Maisons & Appartements",
    desc: "Large catalogue de biens à louer — maisons, appartements et locaux commerciaux dans les meilleures localisations au Cameroun.",
    features: ["Maisons individuelles", "Appartements meublés & non meublés", "Locaux commerciaux", "Gestion locative complète", "Accompagnement locataires"],
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80&auto=format",
  },
  {
    num: "04",
    title: "Vente de Terrain",
    desc: "Terrains viabilisés, constructibles et bien localisés pour vos projets résidentiels, commerciaux ou industriels au Cameroun.",
    features: ["Terrains viabilisés", "Terrains constructibles", "Zones résidentielles & industrielles", "Conseil foncier", "Sécurisation juridique"],
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format",
  },
  {
    num: "05",
    title: "Construction de Bâtiments & Maisons",
    desc: "Réalisation clé en main de vos projets de construction — de la conception architecturale à la livraison finale, avec un suivi rigoureux à chaque étape.",
    features: ["Conception architecturale", "Études techniques & structurelles", "Suivi de chantier quotidien", "Coordination des corps de métier", "Livraison clé en main"],
    img: "https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=900&q=80&auto=format",
  },
  {
    num: "06",
    title: "Vente de Matériels de Constructions",
    desc: "Fourniture de matériaux et matériels de construction certifiés pour particuliers et professionnels — qualité garantie, prix compétitifs.",
    features: ["Ciment & béton prêt à l'emploi", "Fer à béton & acier de construction", "Bois de charpente & menuiserie", "Carrelage & revêtements de sol", "Peinture, enduits & finitions"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format",
  },
  {
    num: "07",
    title: "Prestation de Services",
    desc: "Accompagnement personnalisé pour tous vos besoins en construction et immobilier — conseil, expertise technique et solutions sur mesure.",
    features: ["Audit & expertise technique", "Estimation de coûts & devis", "Conseil en construction", "Suivi & contrôle qualité", "Support post-livraison"],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&auto=format",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden border-b border-[#2e2c29]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=1600&q=80&auto=format"
          alt="Services FD-TECH" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d97706]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-[#d97706] text-[11px] tracking-[0.25em] uppercase mb-4">Nos Services</p>
              <h1 className="display text-[clamp(3rem,7vw,6.5rem)] text-[#f5f0eb] uppercase">
                7 Domaines<br />
                <span className="text-[#2e2c29]">d&apos;Expertise</span>
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-[#7c7870] leading-relaxed">
                Des solutions BTP complètes pour tous vos projets au Cameroun — de la construction à la location, de la vente de terrain à la fourniture de matériaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES — alternating image/text ══ */}
      <section className="bg-[#111110]">
        {services.map((s, i) => (
          <div key={s.num} className={`border-b border-[#2e2c29] grid grid-cols-1 md:grid-cols-2 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>

            {/* Image — always left on even, right on odd */}
            <div className={`relative h-64 md:h-auto min-h-[320px] bg-[#0a0908] overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title}
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" />
              {/* Amber number overlay */}
              <div className="absolute top-6 left-6">
                <span className="font-[family-name:var(--font-oswald)] font-medium text-6xl text-[#d97706]/20 leading-none">{s.num}</span>
              </div>
              {/* Category badge */}
              <div className="absolute bottom-6 left-6">
                <span className="bg-[#d97706] text-[#111110] text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5">{s.title}</span>
              </div>
            </div>

            {/* Text */}
            <div className={`p-10 md:p-14 flex flex-col justify-center space-y-6 bg-[#111110] ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="text-[#d97706] font-mono text-xs">{s.num}</span>
                <div className="h-[1px] w-8 bg-[#2e2c29]" />
              </div>
              <h2 className="display text-[clamp(1.5rem,3vw,2.5rem)] text-[#f5f0eb] uppercase">{s.title}</h2>
              <p className="text-[#7c7870] leading-relaxed text-sm">{s.desc}</p>
              <ul className="space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#7c7870] text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d97706] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-[#d97706] font-semibold text-[11px] tracking-[0.18em] uppercase hover:gap-3 transition-all">
                Demander ce service <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ══ PROCESS ══ */}
      <section className="border-t border-[#2e2c29] py-24 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
              Notre Processus<br />
              <span className="text-[#d97706]">de Travail</span>
            </h2>
            <p className="text-[#7c7870] leading-relaxed pt-2 md:pt-10">
              Un processus éprouvé qui garantit des résultats exceptionnels à chaque étape, de la première consultation à la livraison finale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#2e2c29]">
            {[
              { n:"01", t:"Consultation", d:"Analyse de vos besoins, du site et de la faisabilité du projet." },
              { n:"02", t:"Conception",   d:"Plans architecturaux, études techniques et estimation budgétaire." },
              { n:"03", t:"Exécution",    d:"Réalisation des travaux avec suivi quotidien et contrôle qualité." },
              { n:"04", t:"Livraison",    d:"Livraison dans les délais et support post-livraison garanti." },
            ].map((p, i) => (
              <div key={p.n} className={`p-8 space-y-3 bg-[#111110] ${i < 3 ? "border-b md:border-b-0 md:border-r border-[#2e2c29]" : ""}`}>
                <span className="text-[#d97706] font-mono text-xs">{p.n}</span>
                <h3 className="font-[family-name:var(--font-oswald)] font-medium text-xl text-[#f5f0eb] uppercase">{p.t}</h3>
                <p className="text-[#7c7870] text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-[#d97706] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-[#92400e] text-[11px] tracking-[0.2em] uppercase">Prêt à construire ?</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] text-[#111110] uppercase">
              Démarrons Votre<br />Projet
            </h2>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-[#111110] text-[#f5f0eb] font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#0a0908] transition-colors shrink-0">
            Demander un Devis Gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
