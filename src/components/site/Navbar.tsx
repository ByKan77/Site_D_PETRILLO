import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="container-px max-w-7xl mx-auto flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-accent flex items-center justify-center font-display text-accent-foreground text-lg font-bold">
            D
          </div>
          <span className="font-display text-xl tracking-[0.2em] text-white">
            .PETRILLO
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-white/75 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="accent" size="lg">
            <a href="#contact">Demander un devis</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/5 animate-fade-in">
          <ul className="container-px max-w-7xl mx-auto py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild variant="accent" size="lg" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                Demander un devis
              </a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
