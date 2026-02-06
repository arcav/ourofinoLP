import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { SITE_URL } from "./config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap", // Best practice for font loading
});

export const metadata: Metadata = {
  title: "Carnaval Ouro Fino 2026",
  description: "Garanta seu ingresso para o melhor carnaval de todos os tempos. Shows, blocos e muita diversão na Estância Ouro Fino.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Carnaval Verão Ouro Fino 2026",
    description: "Venha viver a magia do carnaval na Estância Ouro Fino. Programação completa e ingressos disponíveis.",
    images: ["/carnaval/hero-bg.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnaval Ouro Fino 2026",
    description: "Garanta seu ingresso ahora!",
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPLZW9Z6');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPLZW9Z6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
