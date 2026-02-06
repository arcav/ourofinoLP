"use client";

import { motion } from "framer-motion";
import { Ticket, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Ingressos() {
    return (
        <section className="py-8 px-4 bg-[#f0f2f5] overflow-hidden" id="ingressos">
            <div className="container mx-auto max-w-6xl">

                <div className="text-center mb-10">
                    <h2 className="text-5xl font-black text-[#004DB6] uppercase mb-4 tracking-tight">
                        Garanta seu <span className="text-[#00AEEF]">Ingresso</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Participe do maior carnaval da região com conforto e segurança. Escolha a opção ideal para você.
                    </p>
                </div>


                <div className="flex flex-col gap-10 md:gap-16">

                    {/* TICKET 1: INTEIRA - Right Layout */}
                    <div className="relative">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-0 items-center max-w-5xl mx-auto">

                            {/* Info Side (Card) - Mobile: Order 1, Desktop: Order 1 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 order-1 md:order-1 w-full"
                            >
                                <div className="bg-[#004DB6] p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-4xl shadow-2xl relative overflow-hidden group hover:shadow-[#004DB6]/30 transition-all duration-300 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] mx-auto md:mx-0 rotate-1 md:rotate-2 hover:rotate-0 hover:z-30">
                                    <div className="hidden md:block absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-br-[100%] transition-transform group-hover:scale-110" aria-hidden="true"></div>

                                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-1 relative z-10 gap-0 sm:gap-0">
                                        <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-wide text-center">Inteira</h3>
                                    </div>
                                    <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-3 md:mb-5 relative z-10 text-center sm:text-left">Público Geral</p>

                                    <div className="flex items-baseline justify-center sm:justify-start gap-1 mb-3 md:mb-4 relative z-10">
                                        <span className="text-base md:text-xl font-bold text-white/60">R$</span>
                                        <span className="text-4xl sm:text-6xl font-black text-white tracking-tighter">60</span>
                                        <span className="text-sm md:text-lg font-bold text-white/60">,00</span>
                                    </div>

                                    <div className="hidden md:block space-y-2 md:space-y-3 mb-5 md:mb-8 relative z-10">
                                        {[
                                            "Acesso TOTAL ao parque e atrações",
                                            "Todas as atrações musicais",
                                            "Sem restrição de horários",
                                            "Estacionamento gratuito (limitado)"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-white/90 font-medium text-xs md:text-base">
                                                <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                                                    <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                                                </div>
                                                <span className="leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>


                                    <a
                                        href="https://www.aguasourofino.com.br/ingresso-inteira-estancia-hidromineral"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Comprar ingresso inteira"
                                        className="w-full bg-white text-[#004DB6] hover:bg-yellow-400 font-black py-2.5 md:py-3.5 rounded-lg transition-all text-xs md:text-base flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        Garanta seu Ingresso
                                        <Ticket className="w-3.5 h-3.5 md:w-5 md:h-5" aria-hidden="true" />
                                    </a>
                                </div>
                            </motion.div>


                            {/* Visual Side (Image) - Mobile: Order 2, Desktop: Order 2 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-20 flex justify-center md:justify-start -mt-8 md:mt-0 order-2 md:order-2 md:-ml-24 w-full"
                            >
                                <div className="relative w-full max-w-[63%] sm:max-w-[280px] md:max-w-[500px] aspect-square">
                                    {/* Glow */}
                                    <div className="hidden md:block absolute inset-0 bg-[#004DB6] blur-[80px] opacity-30 rounded-full animate-pulse"></div>
                                    <Image
                                        src="/carnaval/INGRESSO-INTEIRA.png"
                                        alt="Ingresso Inteira - R$ 60,00"
                                        fill
                                        className="object-contain relative z-10"
                                        sizes="(max-width: 768px) 90vw, 50vw"
                                        priority
                                    />

                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* TICKET 2: MEIA - Left Layout */}
                    <div className="relative">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-0 items-center max-w-5xl mx-auto">

                            {/* Visual Side (Image) - Mobile: Order 2, Desktop: Order 1 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-20 flex justify-center md:justify-end -mt-8 md:mt-0 md:-mr-24 order-2 md:order-1 w-full"
                            >
                                <div className="relative w-full max-w-[63%] sm:max-w-[280px] md:max-w-[500px] aspect-square">
                                    {/* Glow */}
                                    <div className="hidden md:block absolute inset-0 bg-[#00AEEF] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                                    <Image
                                        src="/carnaval/INGRESSO-MEIA.png"
                                        alt="Ingresso Meia Entrada - R$ 30,00"
                                        fill
                                        className="object-contain relative z-10"
                                        sizes="(max-width: 768px) 90vw, 50vw"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Info Side (Card) - Mobile: Order 1, Desktop: Order 2 */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 order-1 md:order-2 w-full"
                            >
                                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-4xl shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] mx-auto md:mx-0 -rotate-1 md:-rotate-2 hover:rotate-0 hover:z-30">
                                    <div className="hidden md:block absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#00AEEF]/5 rounded-bl-[100%] transition-transform group-hover:scale-110" aria-hidden="true"></div>

                                    <h3 className="text-lg sm:text-2xl font-black text-[#004DB6] uppercase tracking-wide mb-1 relative z-10 text-center md:text-left">Meia Entrada</h3>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-3 md:mb-5 relative z-10 text-center md:text-left">Estudantes • Idosos • PNE</p>

                                    <div className="flex items-baseline justify-center md:justify-start gap-1 mb-3 md:mb-4 relative z-10">
                                        <span className="text-base md:text-xl font-bold text-gray-400">R$</span>
                                        <span className="text-4xl sm:text-6xl font-black text-[#004DB6] tracking-tighter">30</span>
                                        <span className="text-sm md:text-lg font-bold text-gray-400">,00</span>
                                    </div>

                                    <div className="hidden md:block space-y-2 md:space-y-3 mb-5 md:mb-8 relative z-10">
                                        {[
                                            "Acesso completo ao parque",
                                            "Programação de shows inclusa",
                                            "Área de descanso e lazer",
                                            "Apresentação de documento necessária"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-gray-600 font-medium text-xs md:text-base">
                                                <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#00AEEF] shrink-0 mt-0.5" aria-hidden="true" />
                                                <span className="leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>


                                    <a
                                        href="https://www.aguasourofino.com.br/ingresso-meia-estancia-hidromineral"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Comprar ingresso meia entrada"
                                        className="w-full bg-[#f0f2f5] hover:bg-[#00AEEF] text-[#004DB6] hover:text-white font-black py-2 md:py-3.5 rounded-lg transition-all text-xs md:text-base flex items-center justify-center gap-2 group-hover:shadow-lg"
                                    >
                                        Garanta seu Ingresso
                                        <Ticket className="w-3.5 h-3.5 md:w-5 md:h-5" aria-hidden="true" />
                                    </a>
                                </div>
                            </motion.div>

                        </div>

                        {/* Connector Line (Decorative) */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-t-4 border-r-4 border-dashed border-[#004DB6]/10 rounded-tr-[3rem]" aria-hidden="true"></div>
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
