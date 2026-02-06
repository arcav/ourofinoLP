import Navbar from "@/app/components/carnaval/Navbar";
import Hero from "@/app/components/carnaval/Hero";
import Programacao from "@/app/components/carnaval/Programacao";
import Ingressos from "@/app/components/carnaval/Ingressos";
import InfoSection from "@/app/components/carnaval/InfoSection";
import MapSection from "@/app/components/carnaval/MapSection";
import Footer from "@/app/components/carnaval/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carnaval Ouro Fino 2026 | Diversão para toda a família",
  description: "Confira a programação do Carnaval na Estância Hidromineral Ouro Fino. Ingressos, atrações infantis, música e muita natureza. Garanta já o seu!",
  openGraph: {
    title: "Carnaval Ouro Fino 2026",
    description: "O melhor carnaval para a família em meio à natureza.",
    images: ["/carnaval/hero-bg.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="programacao">
        <Programacao />
      </div>
      <div id="info">
        <InfoSection />
      </div>
      <div id="ingressos">
        <Ingressos />
      </div>
      <div id="mapa">
        <MapSection />
      </div>
      <Footer />
    </main>
  );
}
