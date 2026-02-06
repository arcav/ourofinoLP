"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative pt-24 border-t border-gray-100 overflow-hidden bg-[#f8faff]">
            {/* Colorful Top Background */}
            <div className="absolute inset-0 bg-[#f8faff] z-0"></div>

            {/* Abstract Blue Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#00AEEF]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto max-w-6xl relative z-10 px-4">

                {/* PARCEIROS SECTION */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-12">
                        <span className="bg-white/50 backdrop-blur border border-[#004DB6]/10 text-[#004DB6] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
                            Realização e Apoio
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
                        {[
                            { src: "/carnaval/krisart-1.png", alt: "Krisart" },
                            { src: "/carnaval/170236 - karina 1.png", alt: "Kharina" },
                            { src: "/carnaval/170235 - procorrer 4 1.png", alt: "ProCorrer" },
                            { src: "/carnaval/170235 - Esquadrao da diversao 1.png", alt: "Esquadrão da Diversão" },
                            { src: "/carnaval/170234 - Chacara Mato Preto 1.png", alt: "Chácara Mato Preto" },
                            { src: "/carnaval/170235 - Feira artesanato 1.png", alt: "Bazar da Feira" },
                        ].map((partner, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="w-full h-20 flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 cursor-pointer group relative"
                            >
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    fill
                                    className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                    sizes="(max-width: 768px) 33vw, 16vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BRAND SECTION - High Contrast Blue Footer */}
            <div className="bg-[#004DB6] text-white py-16 px-4 relative mt-12 overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Logo + Tagline */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <motion.div
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                className="w-32 bg-white p-4 rounded-3xl shadow-lg relative h-32"
                            >
                                <Image
                                    src="/carnaval/logo-ourofino-n 1.png"
                                    alt="Ouro Fino"
                                    fill
                                    className="object-contain p-2"
                                    sizes="128px"
                                />
                            </motion.div>

                            <div className="text-center md:text-left">
                                <h4 className="text-2xl font-bold tracking-tight mb-2">
                                    Nossa origem <span className="text-[#00AEEF] font-black">é ser natural.</span>
                                </h4>
                                <p className="text-white/70 text-sm font-medium max-w-xs">
                                    Um legado de preservação e diversão para toda a família desde 1898.
                                </p>
                            </div>
                        </div>

                        {/* Social + Actions */}
                        <div className="flex flex-col items-center md:items-end gap-6">
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-[#004DB6] rounded-2xl flex items-center justify-center transition-all shadow-lg border border-white/20">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-[#C13584] rounded-2xl flex items-center justify-center transition-all shadow-lg border border-white/20">
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-wider">
                        <p>© 2026 Ouro Fino - Todos os direitos reservados.</p>
                        <p className="flex items-center gap-2">
                            Feito com
                            <span className="w-1 h-1 bg-[#00AEEF] rounded-full"></span>
                            em Campo Largo
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
