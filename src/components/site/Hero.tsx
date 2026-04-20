import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-kitchen.jpg";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
    >
      <img
        src={heroImg}
        alt="Cuisine professionnelle en acier inoxydable"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative container-px max-w-7xl mx-auto pt-32 pb-20 z-10">
        <div className="max-w-3xl animate-fade-in-slow">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/15 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/80">
              Conception · Fabrication · Installation
            </span>
          </div>

          <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.05] text-white mb-6">
            L'expertise des cuisines{" "}
            <span className="italic text-accent">professionnelles</span>.
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-10">
            Des espaces de travail sur mesure, conformes et esthétiques pour
            l'industrie de la restauration. Pensés pour la performance,
            façonnés pour durer.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="accent" size="xl">
              <a href="#contact">
                Démarrer mon projet <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#realisations">Voir nos réalisations</a>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { k: "20+", v: "Années d'expertise" },
              { k: "300+", v: "Projets livrés" },
              { k: "100%", v: "Conformité HACCP" },
            ].map((s) => (
              <div key={s.v} className="border-l border-accent/60 pl-4">
                <div className="font-display text-3xl text-white">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-accent transition-colors animate-bounce"
        aria-label="Faire défiler"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};
