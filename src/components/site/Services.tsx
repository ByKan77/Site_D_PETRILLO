import { Compass, Hammer, Wrench, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    icon: Compass,
    title: "Conception sur mesure",
    desc: "Aménagements bespoke pour restaurants, hôtels et cantines, pensés autour de vos flux de travail.",
    num: "01",
  },
  {
    icon: Hammer,
    title: "Fabrication",
    desc: "Production d'équipements professionnels en acier inoxydable, à la finition irréprochable.",
    num: "02",
  },
  {
    icon: Wrench,
    title: "Installation",
    desc: "Pose, mise en service et formation par nos techniciens experts, partout en Île-de-France.",
    num: "03",
  },
  {
    icon: ShieldCheck,
    title: "Conformité",
    desc: "Respect strict des normes d'hygiène HACCP et de sécurité alimentaire en vigueur.",
    num: "04",
  },
];

export const Services = () => {
  const ref = useReveal();
  return (
    <section id="services" className="section-y bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div ref={ref} className="reveal max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Nos services
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-balance leading-tight">
            Une expertise <span className="italic">complète</span>, du concept à
            la mise en service.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon: Icon,
  title,
  desc,
  num,
  delay,
}: {
  icon: typeof Compass;
  title: string;
  desc: string;
  num: string;
  delay: number;
}) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative bg-card p-8 lg:p-10 transition-all duration-500 hover:bg-charcoal hover:text-white cursor-default"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 flex items-center justify-center bg-secondary group-hover:bg-accent transition-colors duration-500">
          <Icon
            size={26}
            className="text-charcoal group-hover:text-accent-foreground transition-colors duration-500"
            strokeWidth={1.5}
          />
        </div>
        <span className="font-display text-sm text-muted-foreground group-hover:text-accent transition-colors">
          {num}
        </span>
      </div>
      <h3 className="text-xl font-display mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition-colors">
        {desc}
      </p>
    </div>
  );
};
