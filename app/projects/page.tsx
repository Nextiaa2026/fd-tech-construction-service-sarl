import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets — Nos Réalisations BTP & Immobilier",
  description: "Découvrez les projets réalisés par FD-TECH CONSTRUCTION SERVICE SARL — constructions résidentielles, commerciales, travaux publics et immobilier au Cameroun.",
  alternates: { canonical: "https://fdtechconstruction.cm/projects" },
};

const categories = ["Tous", "Résidentiel", "Commercial", "Travaux Publics", "Immobilier"];

const projects = [
  {
    title: "Résidence Les Palmiers",
    cat: "Résidentiel",
    year: "2023",
    location: "Douala, Cameroun",
    desc: "Complexe résidentiel de 24 appartements avec espaces verts, parking souterrain et équipements modernes.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format",
    featured: true,
  },
  {
    title: "Immeuble Commercial Centre-Ville",
    cat: "Commercial",
    year: "2023",
    location: "Yaoundé, Cameroun",
    desc: "Immeuble de bureaux R+5 avec façade vitrée, salles de conférence et espaces de coworking.",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80&auto=format",
    featured: false,
  },
  {
    title: "Route Nationale — Section Douala",
    cat: "Travaux Publics",
    year: "2022",
    location: "Douala, Cameroun",
    desc: "Réhabilitation de 12 km de route nationale avec drainage, signalisation et éclairage public.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format",
    featured: false,
  },
  {
    title: "Villa Moderne Bastos",
    cat: "Résidentiel",
    year: "2022",
    location: "Yaoundé, Cameroun",
    desc: "Villa contemporaine 5 chambres avec piscine, domotique intégrée et finitions haut de gamme.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format",
    featured: true,
  },
  {
    title: "Centre Commercial Akwa",
    cat: "Commercial",
    year: "2021",
    location: "Douala, Cameroun",
    desc: "Centre commercial de 3 500 m² avec 40 boutiques, food court et parking 200 places.",
    img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=700&q=80&auto=format",
    featured: false,
  },
  {
    title: "Pont Urbain — Biyem-Assi",
    cat: "Travaux Publics",
    year: "2021",
    location: "Yaoundé, Cameroun",
    desc: "Construction d'un pont urbain de 45 mètres en béton armé avec voies piétonnes sécurisées.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format",
    featured: false,
  },
  {
    title: "Lotissement Résidentiel Kotto",
    cat: "Immobilier",
    year: "2020",
    location: "Douala, Cameroun",
    desc: "Aménagement de 80 parcelles viabilisées avec voirie, eau, électricité et espaces communs.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&auto=format",
    featured: false,
  },
  {
    title: "Entrepôt Logistique Zone Industrielle",
    cat: "Commercial",
    year: "2020",
    location: "Douala, Cameroun",
    desc: "Entrepôt de 2 000 m² avec quais de chargement, bureaux intégrés et système anti-incendie.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&auto=format",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 w-full border-b border-[#e7e5e4]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#a8a29e] text-xs tracking-widest uppercase mb-4">Nos Réalisations</p>
            <h1 className="display text-[clamp(3rem,7vw,6rem)] text-[#0a0a0a] uppercase">
              Projets<br />
              <span className="text-[#a8a29e]">Réalisés</span>
            </h1>
          </div>
          <div className="pb-2 space-y-4">
            <p className="text-[#57534e] leading-relaxed">
              Des centaines de projets livrés avec excellence — résidentiels, commerciaux, travaux publics et immobilier. Chaque réalisation témoigne de notre engagement envers la qualité et la durabilité.
            </p>
            <div className="flex gap-8">
              {[{ v: "80+", l: "Projets" }, { v: "5+", l: "Années" }, { v: "100%", l: "Satisfaction" }].map((s) => (
                <div key={s.l}>
                  <p className="font-[family-name:var(--font-oswald)] font-medium text-2xl text-[#0a0a0a]">{s.v}</p>
                  <p className="text-[#a8a29e] text-xs tracking-widest uppercase">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CATEGORY FILTER (static) ══ */}
      <section className="px-6 py-6 max-w-7xl mx-auto w-full border-b border-[#e7e5e4]">
        <div className="flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`text-xs font-medium tracking-widest uppercase px-4 py-2 border cursor-default transition-colors ${
                i === 0
                  ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                  : "border-[#e7e5e4] text-[#a8a29e] hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ══ FEATURED PROJECTS ══ */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {projects.filter((p) => p.featured).map((p) => (
            <div key={p.title} className="group">
              <div className="relative overflow-hidden bg-[#f5f5f4] h-80 md:h-[420px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-[#0a0a0a] text-xs font-semibold tracking-widest uppercase px-3 py-1.5">
                    {p.cat}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-[#0a0a0a]" />
                </div>
              </div>
              <div className="pt-5 flex items-start justify-between">
                <div>
                  <p className="text-[#a8a29e] text-xs tracking-widest uppercase">{p.year} — {p.location}</p>
                  <h3 className="font-[family-name:var(--font-oswald)] font-medium text-xl text-[#0a0a0a] uppercase mt-1">{p.title}</h3>
                  <p className="text-[#78716c] text-sm mt-2 leading-relaxed max-w-sm">{p.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#d6d3d1] group-hover:text-[#0a0a0a] transition-colors mt-1 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* ══ ALL PROJECTS GRID ══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter((p) => !p.featured).map((p) => (
            <div key={p.title} className="group">
              <div className="relative overflow-hidden bg-[#f5f5f4] h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-[#0a0a0a] text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                    {p.cat}
                  </span>
                </div>
              </div>
              <div className="pt-4 flex items-start justify-between">
                <div>
                  <p className="text-[#a8a29e] text-xs tracking-widest uppercase">{p.year} — {p.location}</p>
                  <h3 className="font-[family-name:var(--font-oswald)] font-medium text-lg text-[#0a0a0a] uppercase mt-1">{p.title}</h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#d6d3d1] group-hover:text-[#0a0a0a] transition-colors mt-1 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ STATS BANNER ══ */}
      <section className="border-t border-[#e7e5e4] py-16 px-6 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e7e5e4]">
            {[
              { value: "40%", label: "de nos projets sont des références régionales", desc: "Nos réalisations servent de modèles pour d'autres projets en Afrique Centrale." },
              { value: "80%", label: "des projets utilisent des matériaux locaux certifiés", desc: "Nous privilégions les matériaux locaux de qualité pour soutenir l'économie camerounaise." },
              { value: "95%", label: "de taux de satisfaction client", desc: "Nos clients recommandent FD-TECH à leurs partenaires et proches." },
            ].map((s, i) => (
              <div key={s.value} className={`p-10 bg-white ${i < 2 ? "border-b md:border-b-0 md:border-r border-[#e7e5e4]" : ""}`}>
                <p className="font-[family-name:var(--font-oswald)] font-medium text-5xl text-[#0a0a0a]">{s.value}</p>
                <p className="text-[#0a0a0a] font-medium text-sm mt-3 leading-snug">{s.label}</p>
                <p className="text-[#a8a29e] text-xs mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-white/30 text-xs tracking-widest uppercase">Votre Projet</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] text-white uppercase">
              Votre Projet<br />
              <span className="text-white/30">Sera le Prochain</span>
            </h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#0a0a0a] hover:text-white hover:border hover:border-white transition-colors shrink-0">
            Démarrer Votre Projet <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
