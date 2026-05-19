import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Équipe — Ingénieurs, Architectes & Experts BTP",
  description: "Rencontrez l'équipe de FD-TECH CONSTRUCTION SERVICE SARL — ingénieurs, architectes et techniciens passionnés par l'excellence en construction au Cameroun.",
  alternates: { canonical: "https://fdtechconstruction.cm/team" },
};

const leadership = [
  {
    name: "Directeur Général",
    role: "CEO & Fondateur",
    bio: "Ingénieur en génie civil avec plus de 10 ans d'expérience dans le secteur BTP au Cameroun. Il a fondé FD-TECH en 2019 avec la vision de transformer la construction en Afrique Centrale.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format",
    expertise: ["Génie Civil", "Management", "Stratégie BTP"],
  },
  {
    name: "Directeur Technique",
    role: "CTO & Ingénieur Principal",
    bio: "Expert en structures et béton armé, il supervise l'ensemble des aspects techniques de nos projets, garantissant qualité et conformité aux normes internationales.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&auto=format",
    expertise: ["Structures", "Béton Armé", "Normes BTP"],
  },
  {
    name: "Architecte Principal",
    role: "Lead Architect",
    bio: "Architecte diplômé avec une vision moderne et fonctionnelle, il conçoit des espaces qui allient esthétique, durabilité et performance technique.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format",
    expertise: ["Architecture", "Design", "BIM"],
  },
];

const team = [
  { name: "Chef de Chantier Senior",  role: "Senior Site Manager",    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format", dept: "Opérations" },
  { name: "Ingénieure Structures",    role: "Structural Engineer",    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format", dept: "Technique" },
  { name: "Responsable Commercial",   role: "Sales Manager",          img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format", dept: "Commercial" },
  { name: "Gestionnaire de Projets",  role: "Project Manager",        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format", dept: "Gestion" },
  { name: "Technicien Électricité",   role: "Electrical Technician",  img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80&auto=format", dept: "Technique" },
  { name: "Responsable Matériaux",    role: "Materials Manager",      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80&auto=format", dept: "Logistique" },
];

const values = [
  { n:"01", t:"Sécurité Avant Tout",    d:"Zéro compromis. Chaque chantier respecte les protocoles les plus stricts pour protéger nos équipes et nos clients." },
  { n:"02", t:"Excellence Technique",   d:"Nous investissons continuellement dans la formation et les technologies BTP les plus avancées." },
  { n:"03", t:"Intégrité & Transparence", d:"Devis clairs, délais respectés et communication ouverte à chaque étape de votre projet." },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden border-b border-[#2e2c29]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format"
          alt="Équipe FD-TECH" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d97706]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-[#d97706] text-[11px] tracking-[0.25em] uppercase mb-4">Notre Équipe</p>
              <h1 className="display text-[clamp(3rem,7vw,6.5rem)] text-[#f5f0eb] uppercase">
                Les Bâtisseurs<br />
                <span className="text-[#2e2c29]">Derrière</span><br />
                FD-TECH
              </h1>
            </div>
            <div className="pb-2 space-y-5">
              <p className="text-[#7c7870] leading-relaxed">
                Des ingénieurs, architectes et techniciens passionnés par l&apos;excellence en construction. Notre équipe pluridisciplinaire combine expertise technique et créativité pour livrer des projets qui dépassent les attentes.
              </p>
              <div className="flex gap-8">
                {[{v:"15+",l:"Experts"},{v:"5",l:"Départements"},{v:"80+",l:"Projets"}].map((s) => (
                  <div key={s.l}>
                    <p className="display text-2xl text-[#f5f0eb]">{s.v}</p>
                    <p className="text-[#7c7870] text-[10px] tracking-[0.15em] uppercase">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEAM BANNER ══ */}
      <section className="px-6 py-10 max-w-7xl mx-auto w-full">
        <div className="relative w-full h-64 md:h-[400px] overflow-hidden bg-[#0a0908]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format"
            alt="Équipe FD-TECH sur chantier" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="font-[family-name:var(--font-oswald)] font-medium text-[clamp(1.2rem,3vw,2rem)] text-[#f5f0eb] uppercase max-w-2xl">
              Chaque projet est plus que du béton et de l&apos;acier — c&apos;est un engagement envers les personnes.
            </p>
          </div>
        </div>
      </section>

      {/* ══ LEADERSHIP ══ */}
      <section className="border-t border-[#2e2c29] py-20 px-6 bg-[#111110]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <p className="text-[#d97706] text-[11px] tracking-[0.2em] uppercase mb-3">Direction</p>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">L&apos;Équipe de Direction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((m) => (
              <div key={m.name} className="group space-y-5">
                <div className="relative overflow-hidden bg-[#0a0908] aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out" />
                  {/* Expertise overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0a0908]/95 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2">
                      {m.expertise.map((e) => (
                        <span key={e} className="text-[#d97706] text-[10px] border border-[#d97706]/30 px-2 py-1 tracking-wide">{e}</span>
                      ))}
                    </div>
                  </div>
                  {/* Amber left stripe */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-[family-name:var(--font-oswald)] font-medium text-xl text-[#f5f0eb] uppercase">{m.name}</h3>
                  <p className="text-[#d97706] text-[11px] tracking-[0.15em] uppercase">{m.role}</p>
                  <p className="text-[#7c7870] text-sm leading-relaxed pt-1">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FULL TEAM ══ */}
      <section className="border-t border-[#2e2c29] py-20 px-6 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <p className="text-[#d97706] text-[11px] tracking-[0.2em] uppercase mb-3">L&apos;Équipe Complète</p>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
              Les Esprits<br />
              <span className="text-[#2e2c29]">Derrière Chaque Chantier</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((m) => (
              <div key={m.name} className="group space-y-3">
                <div className="relative overflow-hidden bg-[#1a1917] aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/60 to-transparent" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-oswald)] font-medium text-sm text-[#f5f0eb] uppercase leading-tight">{m.name}</p>
                  <p className="text-[#7c7870] text-xs mt-0.5">{m.role}</p>
                  <span className="inline-block mt-1.5 text-[9px] tracking-[0.15em] uppercase text-[#d97706] border border-[#d97706]/30 px-2 py-0.5">{m.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="border-t border-[#2e2c29] py-20 px-6 bg-[#111110]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.5rem)] text-[#f5f0eb] uppercase">
              Ce qui nous<br />
              <span className="text-[#d97706]">Unit</span>
            </h2>
          </div>
          <div className="space-y-0">
            {values.map((v, i) => (
              <div key={v.n} className={`flex gap-6 py-7 ${i < values.length - 1 ? "border-b border-[#2e2c29]" : ""}`}>
                <span className="text-[#d97706] font-mono text-xs shrink-0 pt-1">{v.n}</span>
                <div className="space-y-1">
                  <h3 className="font-[family-name:var(--font-oswald)] font-medium text-xl text-[#f5f0eb] uppercase">{v.t}</h3>
                  <p className="text-[#7c7870] text-sm leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOIN US ══ */}
      <section className="bg-[#d97706] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <p className="text-[#92400e] text-[11px] tracking-[0.2em] uppercase">Rejoignez-nous</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] text-[#111110] uppercase">
              Construisons<br />Ensemble
            </h2>
            <p className="text-[#92400e] text-sm max-w-sm leading-relaxed">
              Vous êtes ingénieur, architecte ou technicien passionné ? Rejoignez une équipe qui bâtit l&apos;avenir du Cameroun.
            </p>
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-[#111110] text-[#f5f0eb] font-semibold text-[11px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-[#0a0908] transition-colors shrink-0">
            Nous Contacter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
