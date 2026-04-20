import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const projects = [
  { img: g2, title: "Cuisine d'hôtel 4★", category: "Hôtellerie", location: "Paris" },
  { img: g1, title: "Restaurant gastronomique", category: "Restauration", location: "Lognes" },
  { img: g4, title: "Cuisine collective", category: "Collectivité", location: "Marne-la-Vallée" },
  { img: g3, title: "Cuisine ouverte", category: "Bistronomie", location: "Champs-sur-Marne" },
  { img: g6, title: "Îlot central sur mesure", category: "Restauration", location: "Noisy-le-Grand" },
  { img: g5, title: "Pianos et fourneaux", category: "Équipement", location: "Atelier" },
];

export const Gallery = () => {
  const ref = useReveal();
  return (
    <section id="realisations" className="section-y bg-secondary/40">
      <div className="container-px max-w-7xl mx-auto">
        <div ref={ref} className="reveal flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Nos réalisations
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-balance">
              Des projets pensés <span className="italic">jusqu'au moindre détail</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Une sélection de cuisines professionnelles conçues, fabriquées et
            installées par nos équipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  img,
  title,
  category,
  location,
  delay,
}: {
  img: string;
  title: string;
  category: string;
  location: string;
  delay: number;
}) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden bg-charcoal cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={img}
          alt={title}
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent">
            {category}
          </span>
          <ArrowUpRight
            size={20}
            className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-accent"
          />
        </div>
        <h3 className="font-display text-2xl mb-1">{title}</h3>
        <p className="text-sm text-white/60">{location}</p>
      </div>
    </div>
  );
};
