import { Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import gallery1 from "@/assets/gallery-1.jpg";

const points = [
  "Études techniques et plans 3D détaillés",
  "Sélection rigoureuse des matériaux inox",
  "Optimisation énergétique et ergonomique",
  "Suivi de chantier et coordination des corps d'état",
  "Maintenance préventive et SAV réactif",
];

export const Expertise = () => {
  const refImg = useReveal();
  const refTxt = useReveal();
  return (
    <section id="expertise" className="section-y bg-gradient-dark text-white relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div ref={refImg} className="reveal relative">
          <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
          <img
            src={gallery1}
            alt="Cuisine professionnelle en service"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full aspect-[4/5] object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 max-w-[220px] shadow-accent-glow">
            <div className="font-display text-3xl">20+</div>
            <div className="text-sm mt-1 leading-tight">
              ans à équiper les professionnels du goût
            </div>
          </div>
        </div>

        <div ref={refTxt} className="reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Notre expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6 text-balance">
            Une approche{" "}
            <span className="italic text-accent">d'orfèvre</span> au service
            de votre métier.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Chaque projet commence par une écoute attentive de vos contraintes
            opérationnelles. Nous concevons ensuite des solutions techniques
            sur mesure, fabriquées dans nos ateliers et installées par nos
            équipes spécialisées.
          </p>

          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <div className="w-6 h-6 mt-0.5 bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-accent" strokeWidth={2.5} />
                </div>
                <span className="text-white/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
