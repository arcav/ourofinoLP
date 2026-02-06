import dynamic from "next/dynamic";
import Navbar from "@/app/components/carnaval/Navbar";
import Hero from "@/app/components/carnaval/Hero";
import Programacao from "@/app/components/carnaval/Programacao";
import Ingressos from "@/app/components/carnaval/Ingressos";

const InfoSection = dynamic(() => import("@/app/components/carnaval/InfoSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});
const MapSection = dynamic(() => import("@/app/components/carnaval/MapSection"), {
  loading: () => <div className="h-[500px] bg-[#f0f2f5] animate-pulse" />,
});
const Footer = dynamic(() => import("@/app/components/carnaval/Footer"));

import type { Metadata } from "next";
import { SITE_URL } from "./config";

export const metadata: Metadata = {
  title: "Carnaval Ouro Fino 2026 | O Maior Carnaval de Minas Gerais",
  description: "Venha viver a magia do Carnaval 2026 na Estância Hidromineral Ouro Fino en Minas Gerais. Programação completa, shows, atrações infantis e muita natureza. Garanta seu ingresso!",
  keywords: ["Carnaval Ouro Fino 2026", "Ouro Folia", "Carnaval Minas Gerais", "Família", "Estância Hidromineral", "Ingressos Carnaval"],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Carnaval Ouro Fino 2026 | Diversão para toda a família",
    description: "O melhor carnaval para a família em meio à natureza de Ouro Fino, MG.",
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
      <div id="ingressos">
        <Ingressos />
      </div>
      <div id="info">
        <InfoSection />
      </div>
      <div id="mapa">
        <MapSection />
      </div>
      <Footer />
    </main>
  );
}
