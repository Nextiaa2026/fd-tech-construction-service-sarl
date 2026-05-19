import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Accueil — Construire Fort, Construire Durable",
  description: "FD-TECH CONSTRUCTION SERVICE SARL — BTP, immobilier, location, vente de terrain et matériaux au Cameroun depuis 2019.",
  alternates: { canonical: "https://fdtechconstruction.cm" },
};

const marquee = [
  "Bâtiment & BTP","·","Immobilier","·","Location de Maisons","·","Vente de Terrain","·",
  "Construction Clé en Main","·","Matériels de Construction","·","Prestation de Services","·",
  "Bâtiment & BTP","·","Immobilier","·","Location de Maisons","·","Vente de Terrain","·",
  "Construction Clé en Main","·","Matériels de Construction","·","Prestation de Services","·",
];

const services = [
  { num:"01", title:"Bâtiment & Travaux Publics",          img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format" },
  { num:"02", title:"Immobilier",                           img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80&auto=format" },
  { num:"03", title:"Location de Maisons & Appartements",   img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80&auto=format" },
  { num:"04", title:"Vente de Terrain",                     img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&auto=format" },
  { num:"05", title:"Construction de Bâtiments & Maisons",  img:"https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=700&q=80&auto=format" },
  { num:"06", title:"Vente de Matériels de Constructions",  img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format" },
  { num:"07", title:"Prestation de Services",               img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80&auto=format" },
];

const projects = [
  { title:"Résidence Les Palmiers",          cat:"Construction Résidentielle", year:"2023", img:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format" },
  { title:"Immeuble Commercial Centre-Ville", cat:"Bâtiment Commercial",       year:"2023", img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80&auto=format" },
  { title:"Villa Moderne Bastos",             cat:"Construction Résidentielle", year:"2022", img:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden grain">
        {/* Full-bleed dark construction photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85&auto=format"
          alt="Chantier FD-TECH Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay — heavy at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/60 to-[#0a0908]/20" />
        {/* Amber left stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d97706]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8 fu">
            <div className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
            <span className="text-[#d97706] text-[11px] font-semibold tracking-[0.25em] uppercase">
              BTP & Immobilier — Cameroun — Depuis 2019
            </span>
          </div>

          {/* Giant heading */}
          <h1 className="display text-[clamp(3.5rem,10vw,9.5rem)] text-[#f5f0eb] uppercase fu fu-1 mb-6">
            Construire<br />
            <span className="text-[#d97706]">Fort.</span><br />
            <span className="text-[#f5f0eb]/30">Durable.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 fu fu-2">
            <p className="text-[#7c7870] text-sm max-w-sm leading-relaxed">
              Bâtiment, travaux publics, immobilier, location, vente de terrain et matériaux de construction — votre partenaire BTP de confiance au Cameroun.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link href="/projects"
                className="inline-flex items-center gap-2 bg-[#d97706] text-[#111110] font-semibold text-[11px] tracking-[0.18em] uppercase px-6 py-3.5 hover:bg-[#f59e0b] transition-colors">
                Nos Projets <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 border border-[#f5f0eb]/30 text-[#f5f0eb] font-semibold text-[11px] tracking-[0.18em] uppercase px-6 py-3.5 hover:border-[#d97706] hover:text-[#d97706] transition-colors">
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <section className="border-y border-[#2e2c29] py-4 overflow-hidden bg-[#0a0908]">
        <div className="flex whitespace-nowrap">
          <div className="marquee flex gap-10 pr-10">
            {marquee.map((item, i) => (
              <span key={i} className={`text-[11px] font-medium tracking-[0.2em] uppercase shrink-0 ${item==="·" ? "text-[#d97706]" : "text-[#2e2c29]"}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="bg-[#111110] border-b border-[#2e2c29]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2e2c29]">
          {[
            { v:"2019", l:"Fondée" },
            { v:"5+",   l:"Années d'expertise" },
            { v:"80+",  l:"Projets réalisés" },
            { v:"7",    l:"Domaines de service" },
          ].map((s) => (
            <div key={s.l} className="px-8 py-10">
              <p className="display text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0eb]">{s.v}</p>
              <div className="w-5 h-[2px] bg-[#d97706] my-3" />
              <p className="text-[#7c7870] text-xs tracking-[0.15em] uppercase">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="py-24 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="display text-[clamp(2rem,5vw,4.5rem)] text-[#f5f0eb] uppercase">
              Construire à<br />
              Grande Échelle.<br />
              <span className="text-[#2e2c29]">Construire pour</span><br />
              <span className="text-[#d97706]">l&apos;Impact.</span>
            </h2>
          </div>
          <div className="space-y-6 pt-2 md:pt-10">
            <p className="text-[#7c7870] leading-relaxed">
              Nous combinons expertise technique et passion pour livrer des projets de construction qui façonnent le Cameroun. De la conception à la livraison, chaque détail est maîtrisé avec rigueur et professionnalisme.
            </p>
            <p className="text-[#7c7870] leading-relaxed">
              <span className="text-[#f5f0eb] font-medium">Chaque projet est plus que du béton et de l&apos;acier</span> — c&apos;est un engagement envers les personnes, les communautés et l&apos;avenir du Cameroun.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#d97706] font-semibold text-[11px] tracking-[0.18em] uppercase hover:gap-3 transition-all">
              Notre histoire <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES — 7 services, alternating layout ══ */}
      <section className="border-t border-[#2e2c29] py-24 px-6 bg-[#111110]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-end justify-between">
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
              Nos<br /><span className="text-[#d97706]">Services</span>
            </h2>
            <Link href="/services"
              className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase border border-[#2e2c29] text-[#7c7870] px-5 py-2.5 hover:border-[#d97706] hover:text-[#d97706] transition-colors">
              Voir Tout <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Services list — horizontal rows with image */}
          <div className="space-y-0">
            {services.map((s, i) => (
              <Link key={s.num} href="/services"
                className="group flex items-center justify-between gap-6 border-b border-[#2e2c29] py-5 hover:bg-[#1a1917] transition-colors px-4 -mx-4">
                <div className="flex items-center gap-6">
                  <span className="text-[#2e2c29] font-mono text-xs w-6 shrink-0">{s.num}</span>
                  {/* Thumbnail */}
                  <div className="relative w-16 h-12 overflow-hidden bg-[#2e2c29] shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-[family-name:var(--font-oswald)] font-medium text-[clamp(1rem,2.5vw,1.5rem)] text-[#f5f0eb]/70 group-hover:text-[#f5f0eb] uppercase tracking-wide transition-colors">
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#2e2c29] group-hover:text-[#d97706] shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══ */}
      <section className="border-t border-[#2e2c29] py-24 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex items-end justify-between">
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
              Projets<br /><span className="text-[#2e2c29]">Réalisés</span>
            </h2>
            <Link href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase border border-[#2e2c29] text-[#7c7870] px-5 py-2.5 hover:border-[#d97706] hover:text-[#d97706] transition-colors">
              Voir Tout <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <Link key={p.title} href="/projects" className="group block">
                <div className="relative overflow-hidden bg-[#1a1917] h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d97706] text-[#111110] text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1">{p.cat}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[#7c7870] text-xs">{p.year}</p>
                      <p className="font-[family-name:var(--font-oswald)] font-medium text-lg text-[#f5f0eb] uppercase">{p.title}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM BANNER ══ */}
      <section className="border-t border-[#2e2c29] py-24 px-6 bg-[#111110]">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden h-72 md:h-[460px] grain">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format"
              alt="Équipe FD-TECH sur chantier"
              className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908]/90 to-[#0a0908]/30" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d97706]" />
            <div className="relative z-10 h-full p-8 md:p-14 flex flex-col justify-between">
              <div className="space-y-4 max-w-xl">
                <p className="text-[#d97706] text-[11px] tracking-[0.2em] uppercase">Notre Équipe</p>
                <h2 className="display text-[clamp(2rem,5vw,4rem)] text-[#f5f0eb] uppercase">
                  Les Bâtisseurs<br />Derrière FD-TECH
                </h2>
                <p className="text-[#7c7870] text-sm leading-relaxed max-w-sm">
                  Ingénieurs, architectes et techniciens passionnés par l&apos;excellence en construction et l&apos;innovation BTP au Cameroun.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex gap-8">
                  {[{v:"15+",l:"Experts"},{v:"80+",l:"Projets"},{v:"5+",l:"Années"}].map((s) => (
                    <div key={s.l}>
                      <p className="display text-2xl text-[#f5f0eb]">{s.v}</p>
                      <p className="text-[#7c7870] text-[10px] tracking-[0.15em] uppercase">{s.l}</p>
                    </div>
                  ))}
                </div>
                <Link href="/team"
                  className="inline-flex items-center gap-2 bg-[#d97706] text-[#111110] font-semibold text-[11px] tracking-[0.18em] uppercase px-6 py-3 hover:bg-[#f59e0b] transition-colors">
                  Rencontrer l&apos;Équipe <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-[#d97706] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-[#92400e] text-[11px] tracking-[0.2em] uppercase">Prêt à construire ?</p>
            <h2 className="display text-[clamp(2.5rem,7vw,6rem)] text-[#111110] uppercase leading-none">
              Chaque Projet<br />
              est une Promesse.
            </h2>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-[#111110] text-[#f5f0eb] font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#0a0908] transition-colors shrink-0">
            Démarrer Votre Projet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
