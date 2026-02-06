"use client";

import { motion } from "framer-motion";
import { Ticket, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Ingressos() {
    return (
        <section className="py-16 px-4 bg-[#f0f2f5] overflow-hidden" id="ingressos">
            <div className="container mx-auto max-w-6xl">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-[#004DB6] uppercase mb-4 tracking-tight">
                        Garanta seu <span className="text-[#00AEEF]">Ingresso</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Participe do maior carnaval da região com conforto e segurança. Escolha a opção ideal para você.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {/* TICKET 1: MEIA - Left Layout */}
                    <div className="relative">
                        <div className="grid md:grid-cols-2 gap-8 items-center">

                            {/* Visual Side (Image) */}
                            <motion.div
                                initial={{ x: -100, opacity: 0, rotate: -10 }}
                                whileInView={{ x: 0, opacity: 1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                className="relative z-10 flex justify-center md:justify-end"
                            >
                                <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] aspect-square drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer">
                                    {/* Glow */}
                                    <div className="absolute inset-0 bg-[#00AEEF] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                                    <Image
                                        src="/carnaval/ingresso-03-655x655 2.png"
                                        alt="Ingresso Meia"
                                        fill
                                        className="object-contain relative z-10"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Floating Badge */}
                                    <div className="absolute top-6 sm:top-10 right-0 z-20 bg-white text-[#004DB6] font-black px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-xl rotate-12 border-2 sm:border-4 border-[#00AEEF] text-xs sm:text-base">
                                        50% OFF
                                    </div>
                                </div>
                            </motion.div>

                            {/* Info Side (Card) */}
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-0"
                            >
                                <div className="bg-white p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-[#00AEEF]/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>

                                    <h3 className="text-2xl sm:text-3xl font-black text-[#004DB6] uppercase tracking-wide mb-1 md:mb-2 relative z-10 text-center md:text-left">Meia Entrada</h3>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-6 md:mb-8 relative z-10 text-center md:text-left">Estudantes • Idosos • PNE</p>

                                    <div className="flex items-baseline justify-center md:justify-start gap-1 md:gap-2 mb-6 md:mb-8 relative z-10">
                                        <span className="text-xl md:text-2xl font-bold text-gray-400">R$</span>
                                        <span className="text-6xl sm:text-7xl font-black text-[#004DB6] tracking-tighter">30</span>
                                        <span className="text-lg md:text-xl font-bold text-gray-400">,00</span>
                                    </div>

                                    <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 relative z-10">
                                        {[
                                            "Acesso completo ao parque",
                                            "Programação de shows inclusa",
                                            "Área de descanso e lazer",
                                            "Apresentação de documento necessária"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-gray-600 font-medium text-sm md:text-base">
                                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                                                <span className="leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full bg-[#f0f2f5] hover:bg-[#00AEEF] text-[#004DB6] hover:text-white font-black py-3 md:py-4 rounded-xl transition-all text-base md:text-lg flex items-center justify-center gap-2 group-hover:shadow-lg">
                                        Selecionar Ingresso
                                        <Ticket className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </motion.div>

                        </div>

                        {/* Connector Line (Decorative) */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-t-4 border-r-4 border-dashed border-[#004DB6]/10 rounded-tr-[3rem]"></div>
                    </div>

                    {/* TICKET 2: INTEIRA - Right Layout */}
                    <div className="relative">
                        <div className="grid md:grid-cols-2 gap-8 items-center">

                            {/* Info Side (Card) */}
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-0 order-2 md:order-1"
                            >
                                <div className="bg-[#004DB6] p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group hover:shadow-[#004DB6]/30 transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-white/5 rounded-br-[100%] transition-transform group-hover:scale-110"></div>

                                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2 relative z-10 gap-2 sm:gap-0">
                                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">Inteira</h3>
                                        <span className="bg-yellow-400 text-[#004DB6] text-[10px] font-black uppercase px-3 py-1 rounded-full whitespace-nowrap">Mais Vendido</span>
                                    </div>
                                    <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-6 md:mb-8 relative z-10 text-center sm:text-left">Público Geral</p>

                                    <div className="flex items-baseline justify-center sm:justify-start gap-1 md:gap-2 mb-6 md:mb-8 relative z-10">
                                        <span className="text-xl md:text-2xl font-bold text-white/60">R$</span>
                                        <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">60</span>
                                        <span className="text-lg md:text-xl font-bold text-white/60">,00</span>
                                    </div>

                                    <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 relative z-10">
                                        {[
                                            "Acesso TOTAL ao parque e atrações",
                                            "Todas as atrações musicais",
                                            "Sem restrição de horários",
                                            "Estacionamento gratuito (limitado)"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-white/90 font-medium text-sm md:text-base">
                                                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                                                </div>
                                                <span className="leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full bg-white text-[#004DB6] hover:bg-yellow-400 font-black py-3 md:py-4 rounded-xl transition-all text-base md:text-lg flex items-center justify-center gap-2 shadow-lg">
                                        Comprar Agora
                                        <Ticket className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Visual Side (Image) */}
                            <motion.div
                                initial={{ x: 100, opacity: 0, rotate: 10 }}
                                whileInView={{ x: 0, opacity: 1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                className="relative z-10 flex justify-center md:justify-start order-1 md:order-2"
                            >
                                <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] aspect-square drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer">
                                    {/* Glow */}
                                    <div className="absolute inset-0 bg-[#004DB6] blur-[80px] opacity-30 rounded-full animate-pulse"></div>
                                    <Image
                                        src="/carnaval/ingresso-03-655x655 1.png"
                                        alt="Ingresso Inteira"
                                        fill
                                        className="object-contain relative z-10"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Star Badge */}
                                    <div className="absolute bottom-16 sm:bottom-20 left-0 z-20 bg-yellow-400 text-[#004DB6] font-black px-3 sm:px-4 py-3 sm:py-4 rounded-full shadow-xl -rotate-12 border-4 border-white flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                                        <Star className="w-5 h-5 sm:w-6 sm:h-6 mb-1 fill-[#004DB6]" />
                                        <span className="text-[10px] sm:text-xs leading-none text-center">BEST SELLER</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>

                <div className="text-center mt-24">
                    <p className="text-gray-400 font-medium text-sm">
                        *Dúvidas? Entre em contato com nossa equipe de suporte.
                    </p>
                </div>

            </div>
        </section>
    );
}
