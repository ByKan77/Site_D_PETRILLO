import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message trop court").max(1000),
});

export const Contact = () => {
  const ref = useReveal();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      toast.error("Veuillez corriger les erreurs du formulaire");
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Demande envoyée — nous vous recontactons sous 24h.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="section-y bg-charcoal text-white relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6 text-balance">
              Parlons de votre <span className="italic text-accent">projet</span>.
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 max-w-md">
              Décrivez-nous votre besoin. Notre équipe revient vers vous sous
              24 heures avec une première proposition d'accompagnement.
            </p>

            <div className="space-y-5 mb-10">
              <InfoRow icon={MapPin} label="Adresse">
                12 allée Lech Walesa<br />77185 Lognes, France
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                contact@dpetrillo.fr
              </InfoRow>
              <InfoRow icon={Phone} label="Téléphone">
                +33 1 60 00 00 00
              </InfoRow>
              <InfoRow icon={Clock} label="Horaires">
                Lun – Ven · 8h30 – 18h
              </InfoRow>
            </div>

            <a
              href="https://www.google.com/maps?q=12+allée+Lech+Walesa,+77185+Lognes"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative aspect-[16/9] overflow-hidden border border-white/10 hover:border-accent/50 transition-colors"
            >
              <iframe
                title="Carte D.Petrillo"
                src="https://www.google.com/maps?q=12+allée+Lech+Walesa,+77185+Lognes&output=embed"
                className="w-full h-full grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </a>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 md:p-10 space-y-6"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field id="name" label="Nom complet" error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-white placeholder:text-white/40"
                    placeholder="Jean Dupont"
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-white placeholder:text-white/40"
                    placeholder="jean@restaurant.fr"
                  />
                </Field>
              </div>
              <Field id="company" label="Entreprise" error={errors.company}>
                <Input
                  id="company"
                  name="company"
                  maxLength={150}
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-white placeholder:text-white/40"
                  placeholder="Restaurant Le Gourmet"
                />
              </Field>
              <Field id="message" label="Votre projet" error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-white placeholder:text-white/40 resize-none"
                  placeholder="Décrivez votre projet, vos contraintes, vos délais..."
                />
              </Field>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? "Envoi en cours..." : (
                    <>Envoyer ma demande <Send size={16} /></>
                  )}
                </Button>
                <p className="text-xs text-white/50 mt-4">
                  Réponse garantie sous 24h ouvrées.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
      <Icon size={16} className="text-accent" strokeWidth={1.5} />
    </div>
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-0.5">
        {label}
      </div>
      <div className="text-sm text-white/90 leading-relaxed">{children}</div>
    </div>
  </div>
);

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <Label
      htmlFor={id}
      className="text-[10px] uppercase tracking-[0.25em] text-white/60"
    >
      {label}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);
