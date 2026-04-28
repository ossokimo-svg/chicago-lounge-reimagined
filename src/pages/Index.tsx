import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Event from "@/components/Event";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Chicago Lounge — Café & Restaurang | Katrineholm";
    const ensureMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    ensureMeta(
      "description",
      "Chicago Lounge i Katrineholm — exklusiv café & restaurang med lyxig meny, event-lokal på 800 kvm, biljard och PlayStation."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Event />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
