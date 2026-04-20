import { MapPin, Building2, Users, Award } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const stats = [
  { icon: MapPin, label: "Basés à Lognes", value: "77185" },
  { icon: Building2, label: "Secteurs servis", value: "Restauration · Hôtellerie · Collectivités" },
  { icon: Users, label: "Clients fidèles", value: "Restaurants · Hôtels · Écoles · Traiteurs" },
  { icon: Award, label: "Engagement", value: "Qualité française & savoir-faire artisanal" },
];

export const About = () => {
  const ref = useReveal();
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              À propos
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-balance">
              D.Petrillo, l'art de transformer les espaces{" "}
              <span className="italic">culinaires</span>.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              Implantés à <strong>Lognes (77185)</strong>, nous transformons
              les espaces professionnels en environnements culinaires
              fonctionnels, durables et conformes aux exigences de votre
              métier.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous accompagnons les restaurants, hôtels, écoles et traiteurs
              dans la conception et la réalisation de cuisines pensées pour la
              productivité, l'hygiène et la longévité. De la première
              esquisse à la mise en service, notre équipe orchestre chaque
              étape avec rigueur et précision.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-border mt-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-background p-6 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center shrink-0">
                    <s.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="font-medium mt-1 text-sm">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
