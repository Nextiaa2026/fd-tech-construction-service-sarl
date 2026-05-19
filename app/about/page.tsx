import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire & Vision",
  description: "Découvrez FD-TECH CONSTRUCTION SERVICE SARL, spécialiste BTP et immobilier au Cameroun depuis 2019.",
  alternates: { canonical: "https://fdtechconstruction.cm/about" },
};

const milestones = [
  { year: "2019", title: "Fondation", desc: "FD-TECH CONSTRUCTION SERVICE SARL est fondée avec la vision de transformer le secteur BTP au Cameroun." },
  { year: "2020", title: "Premiers Grands Projets", desc: "Livraison de nos premiers projets résidentiels et commerciaux à Douala et Yaoundé." },
  { year: "2021", title: "Expansion des Services", desc: "Lancement de notre division matériaux et extension vers les travaux publics et la location immobilière." },
  { year: "2022", title: "Croissance de l'Équipe", desc: "L'équipe passe à 15+ experts — ingénieurs, architectes et techniciens spécialisés." },
  { year: "2023", title: "80+ Projets Réalisés", desc: "Franchissement du cap des 80 projets livrés avec un taux de satisfaction client de 100%." },
  { year: "2024+", title: "Vision Régionale", desc: "Développement vers d'autres marchés d'Afrique Centrale avec des projets d'envergure régionale." },
];

const coreValues = [
  { title: "Sécurité", desc: "Zéro compromis. Chaque chantier respecte les protocoles les plus stricts." },
  { title: "Excellence", desc: "Des matériaux certifiés, des techniques éprouvées, des livraisons irréprochables." },
  { title: "Intégrité", desc: "Devis transparents, délais respectés, communication ouverte à chaque étape." },
  { title: "Innovation", desc: "Adoption des technologies BTP modernes pour des constructions durables et performantes." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden border-b border-[#2e2c29]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format"
          alt="FD-TECH Construction" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d97706]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-[#d97706] text-[11px] tracking-[0.25em] uppercase mb-4">Notre Histoire</p>
              <h1 className="display text-[clamp(3rem,7vw,6.5rem)] text-[#f5f0eb] uppercase">
                L&apos;Histoire<br />
                <span className="text-[#2e2c29]">de FD-TECH</span>
              </h1>
            </div>
            <div className="pb-2">
              <p className="text-[#7c7870] leading-relaxed">
                Fondée en 2019, FD-TECH CONSTRUCTION SERVICE SARL est née d&apos;une conviction : le Cameroun mérite des constructions de classe mondiale, réalisées par des experts locaux passionnés et engagés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HERO IMAGE ══ */}
      <section className="px-6 py-10 max-w-7xl mx-auto w-full">
        <div className="relative w-full h-64 md:h-[460px] overflow-hidden bg-[#0a0908]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=1600&q=80&auto=format"
            alt="Chantier FD-TECH" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-[#d97706] text-[#111110] text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5">Cameroun — Depuis 2019</span>
          </div>
        </div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="border-t border-[#2e2c29] py-20 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] font-medium text-[clamp(1.5rem,3vw,2.5rem)] text-[#f5f0eb] leading-snug max-w-4xl uppercase">
            <span className="text-[#2e2c29]">Chaque projet est plus que du béton et de l&apos;acier —</span>{" "}
            <span className="text-[#d97706]">c&apos;est un engagement envers les personnes.</span>{" "}
            Nous créons des emplois, améliorons les infrastructures et laissons derrière nous des bâtiments qui soutiennent la croissance pour des décennies.
          </p>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="border-y border-[#2e2c29] bg-[#111110]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2e2c29]">
          {[
            { value: "2019", label: "Année de création" },
            { value: "5+",   label: "Années d'expertise" },
            { value: "80+",  label: "Projets réalisés" },
            { value: "15+",  label: "Experts en équipe" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-10">
              <p className="display text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0eb]">{s.value}</p>
              <div className="w-5 h-[2px] bg-[#d97706] my-3" />
              <p className="text-[#7c7870] text-[10px] tracking-[0.15em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="py-24 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
            Notre <span className="text-[#d97706]">Parcours</span>
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className={`grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 py-8 ${i < milestones.length - 1 ? "border-b border-[#2e2c29]" : ""}`}>
                <p className="display text-2xl text-[#2e2c29]">{m.year}</p>
                <div className="space-y-1">
                  <h3 className="font-[family-name:var(--font-oswald)] font-medium text-xl text-[#f5f0eb] uppercase">{m.title}</h3>
                  <p className="text-[#7c7870] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="border-t border-[#2e2c29] py-24 px-6 bg-[#111110]">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
            Nos Valeurs<br /><span className="text-[#d97706]">Fondamentales</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#2e2c29]">
            {coreValues.map((v, i) => (
              <div key={v.title} className={`p-8 space-y-3 bg-[#111110] ${i < 3 ? "border-b md:border-b-0 md:border-r border-[#2e2c29]" : ""}`}>
                <h3 className="font-[family-name:var(--font-oswald)] font-medium text-xl text-[#f5f0eb] uppercase">{v.title}</h3>
                <p className="text-[#7c7870] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPLIT IMAGE ══ */}
      <section className="border-t border-[#2e2c29] py-24 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#2e2c29]">
          <div className="relative h-72 md:h-auto min-h-[360px] bg-[#1a1917] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format"
              alt="Architecture FD-TECH" className="w-full h-full object-cover opacity-70" />
          </div>
          <div className="p-10 md:p-14 flex flex-col justify-center space-y-6 bg-[#111110]">
            <p className="text-[#d97706] text-[11px] tracking-[0.2em] uppercase">Notre Mission</p>
            <h2 className="display text-[clamp(1.8rem,3vw,2.8rem)] text-[#f5f0eb] uppercase">
              Bâtir l&apos;Avenir du Cameroun
            </h2>
            <p className="text-[#7c7870] text-sm leading-relaxed">
              Notre mission est de livrer des projets de construction qui respectent les plus hauts standards de qualité, de sécurité et de durabilité — tout en contribuant au développement économique et social du Cameroun.
            </p>
            <ul className="space-y-3">
              {["Constructions conformes aux normes internationales","Matériaux certifiés et durables","Respect strict des délais et des budgets","Accompagnement de la conception à la livraison"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#7c7870] text-sm">
                  <div className="w-1 h-1 bg-[#d97706] shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/team" className="inline-flex items-center gap-2 text-[#d97706] font-semibold text-[11px] tracking-[0.18em] uppercase hover:gap-3 transition-all">
              Rencontrer l&apos;Équipe <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-[#d97706] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="display text-[clamp(2rem,5vw,4rem)] text-[#111110] uppercase">
            Construisons<br /><span className="text-[#92400e]">Ensemble</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#111110] text-[#f5f0eb] font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#0a0908] transition-colors shrink-0">
            Démarrer Votre Projet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}



