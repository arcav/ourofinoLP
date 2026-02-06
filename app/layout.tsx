import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap", // Best practice for font loading
});

export const metadata: Metadata = {
  title: "Carnaval Ouro Fino 2026",
  description: "Garanta seu ingresso para o melhor carnaval de todos os tempos. Shows, blocos e muita diversão na Estância Ouro Fino.",
  metadataBase: new URL("https://ourofino.com.br"), // Replace with actual domain when live
  openGraph: {
    title: "Carnaval Verão Ouro Fino 2026",
    description: "Venha viver a magia do carnaval na Estância Ouro Fino. Programação completa e ingressos disponíveis.",
    images: ["/carnaval/hero-bg.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnaval Ouro Fino 2026",
    description: "Garanta seu ingresso agora!",
    images: ["/carnaval/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
