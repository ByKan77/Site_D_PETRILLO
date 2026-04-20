export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/60 border-t border-white/10">
      <div className="container-px max-w-7xl mx-auto py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-accent flex items-center justify-center font-display text-accent-foreground text-sm font-bold">
              D
            </div>
            <span className="font-display text-lg tracking-[0.2em] text-white">
              .PETRILLO
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Concepteur, fabricant et installateur de cuisines professionnelles
            depuis plus de 20 ans.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Navigation
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
            <li><a href="#realisations" className="hover:text-white transition-colors">Réalisations</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Contact
          </div>
          <address className="not-italic text-sm leading-relaxed">
            12 allée Lech Walesa<br />
            77185 Lognes, France<br />
            <a href="mailto:contact@dpetrillo.fr" className="hover:text-white transition-colors">
              contact@dpetrillo.fr
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px max-w-7xl mx-auto py-6 flex flex-wrap justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} D.Petrillo. Tous droits réservés.</p>
          <p>Conception · Fabrication · Installation de cuisines professionnelles</p>
        </div>
      </div>
    </footer>
  );
};
