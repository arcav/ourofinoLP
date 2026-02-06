"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapSection() {
    return (
        <section className="pt-16 pb-16 px-4 bg-[#f0f2f5]" id="mapa">
            <div className="container mx-auto max-w-5xl">
                {/* Localização: Disruptive Minimalist Map */}
                <div className="relative">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004DB6] uppercase tracking-tight leading-none px-2">
                            Localização
                        </h2>
                    </div>

                    <div className="relative w-full h-[600px] md:h-[500px] flex items-center justify-center">
                        {/* Abstract Background Decoration */}
                        <div className="absolute inset-0 bg-white rounded-4xl md:rounded-[3rem] -rotate-1 scale-95 opacity-50 shadow-md"></div>

                        {/* Map Container with Creative Mask */}
                        <div className="relative w-full h-full rounded-4xl md:rounded-[3rem] overflow-hidden shadow-2xl z-10 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2291589766955!2d-49.53205392359556!3d-25.429486677564035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41197775957%3A0x6a8799c90539665e!2sEst%C3%A2ncia%20Hidromineral%20Ouro%20Fino!5e0!3m2!1spt-BR!2sbr!4v1707168000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out md:grayscale"
                            ></iframe>

                            {/* Floating Minimalist Info Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="
                                    absolute 
                                    bottom-0 left-0 right-0 
                                    md:bottom-6 md:left-12 md:right-auto md:w-96 
                                    bg-white/95 backdrop-blur-xl 
                                    p-6 md:p-8 
                                    rounded-t-4xl md:rounded-4xl 
                                    shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl 
                                    border-t md:border border-white/50
                                "
                            >
                                <div className="flex items-center justify-between mb-4 md:mb-6">
                                    <div>
                                        <p className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider mb-1 md:mb-2">Localização</p>
                                        <h3 className="text-xl md:text-2xl font-black text-[#004DB6] leading-none">
                                            Estância Hidromineral<br />Ouro Fino
                                        </h3>
                                    </div>
                                    <div className="bg-white/50 p-2 rounded-full shadow-sm">
                                        <img
                                            src="/carnaval/logo-ourofino.png"
                                            alt="Ouro Fino Logo"
                                            className="w-12 h-auto object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                    <div>
                                        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wide">Endereço</p>
                                        <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                                            Estrada de Ouro Fino, s/n<br />Bateias, Campo Largo - PR
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Horário de Funcionamento</p>
                                        <p className="text-gray-700 font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Terça a Domingo: 07h às 18h
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.app.goo.gl/gu7g7"
                                    target="_blank"
                                    className="flex items-center justify-between w-full bg-linear-to-r from-[#004DB6] to-[#00AEEF] text-white p-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg hover:shadow-[#004DB6]/30 group"
                                >
                                    Traçar Rota no Waze/Maps
                                    <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
