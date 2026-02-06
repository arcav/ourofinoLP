"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-0 overflow-hidden bg-[#F5F7FA]">
            {/* Decorative Top Line Gradient */}
            {/* Top Wave Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    className="relative block w-full h-[40px] md:h-[60px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            {/* Background Waves - Bottom Layer */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[150px] md:h-[250px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    {/* Light Wave (Back) */}
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".10"
                        className="fill-[#00AEEF]"
                    ></path>
                    {/* Front Wave (Darker/Main) */}
                    <path
                        d="M0,0V15.81C13,36.92,54.64,64.1,83.28,71.2c24.75,6.13,42.95,5.36,68.46,5.47,48.09.21,80.73-10.93,126-25.29,48.07-15.26,90.47-36.87,143.62-43.51,69.66-8.71,123.67,13.3,184.28,29.37,84.09,22.3,158.37,28.66,242.06,7.57C890.3,31.63,907.69,22,923.4,14c33.8-17.2,74.5-23.3,111.69-20.93,66.19,4.2,126.63,39.3,164.91,73.18V0Z"
                        opacity=".15"
                        className="fill-[#004DB6]"
                    ></path>
                    {/* Bottom fill to cover space potentially */}
                </svg>
            </div>

            {/* More Water/Wave elements for the very bottom to ensure full coverage if needed */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#E0F7FA] to-transparent z-0 opacity-30"></div>


            <div className="container mx-auto max-w-6xl relative z-10 px-4">

                {/* PARCEIROS SECTION */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-10">
                        <span className="bg-white/80 backdrop-blur border border-[#004DB6]/20 text-[#004DB6] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
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



                {/* BRAND SECTION - Neutral Background Version */}
                <div className="py-8 pb-24 relative px-4">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Logo + Tagline */}
                        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <motion.div
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                className="w-40 h-28 bg-white p-3 rounded-3xl shadow-lg relative shrink-0 border border-blue-50"
                            >
                                <Image
                                    src="/carnaval/logo-ourofino.png"
                                    alt="Ouro Fino"
                                    fill
                                    className="object-contain p-2"
                                    sizes="(max-width: 768px) 160px, 160px"
                                />
                            </motion.div>

                            <div>
                                <h4 className="text-2xl font-bold tracking-tight mb-2 text-[#004DB6]">
                                    Nossa origem <span className="text-[#00AEEF] font-black">é ser natural.</span>
                                </h4>
                                <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto md:mx-0">
                                    Um legado de preservação e diversão para toda a família desde 1898.
                                </p>
                            </div>
                        </div>

                        {/* Social + Actions */}
                        <div className="flex flex-col items-center md:items-end gap-6">
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white text-[#004DB6] hover:bg-[#004DB6] hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-md hover:shadow-xl border border-blue-100 group">
                                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white text-[#C13584] hover:bg-[#C13584] hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-md hover:shadow-xl border border-blue-100 group">
                                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <p>© 2026 Ouro Fino - Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
