import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Expertise } from "@/components/site/Expertise";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "D.PETRILLO — Cuisines professionnelles sur mesure | Lognes";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "D.Petrillo conçoit, fabrique et installe des cuisines professionnelles sur mesure pour restaurants, hôtels et collectivités. Basés à Lognes (77).";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
