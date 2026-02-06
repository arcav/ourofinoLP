"use client";

import { motion } from "framer-motion";
import { MapPin, AlertCircle } from "lucide-react";

export default function InfoSection() {
    const rules = [
        "Estacionamento Incluso",
        "Crianças até 03 anos não pagam",
        "Uso das churrasqueiras restrito a compradores com pulseira",
        "Permitido entrar com alimentos e bebidas próprios",
        "Documentos de meia-entrada exigidos no acesso",
        "Traga suas próprias redes e cadeiras para melhor aproveitar"
    ];

    return (
        <section className="py-16 px-4 bg-white overflow-hidden" id="info">
            <div className="container mx-auto max-w-5xl">

                {/* IMPORTANTE: Disruptive Layout */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-16 relative">
                    {/* Decorative Elements */}
                    <div className="absolute -left-20 top-0 w-64 h-64 bg-[#00AEEF] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                    <div className="absolute -right-20 bottom-0 w-64 h-64 bg-[#004DB6] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ x: -50, opacity: 0, rotate: -5 }}
                        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full"
                    >
                        <div className="relative w-full max-w-[300px] sm:max-w-none mx-auto">
                            <h2 className="text-[3.5rem] xs:text-5xl sm:text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#004DB6] to-[#00AEEF] relative z-10 tracking-tighter leading-[0.9] break-words">
                                AVISO<br />GERAL
                            </h2>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <AlertCircle className="w-32 h-32 xs:w-40 xs:h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 text-[#f0f2f5] -rotate-12" />
                            </div>
                        </div>
                        <p className="mt-6 sm:mt-8 text-base sm:text-xl font-bold text-gray-400 max-w-xs sm:max-w-sm px-4 sm:px-0">
                            Fique atento às regras para garantir uma diversão segura e tranquila para todos.
                        </p>
                    </motion.div>

                    {/* Info Side (Right) */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                            {/* Glassmorphism Highlight */}
                            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#00AEEF] to-[#004DB6]"></div>

                            <ul className="space-y-6 relative z-10">
                                {rules.map((rule, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#f0f2f5] flex items-center justify-center shrink-0 group-hover:bg-[#004DB6] transition-colors duration-300">
                                            <span className="text-[#004DB6] font-black group-hover:text-white transition-colors">{i + 1}</span>
                                        </div>
                                        <span className="text-lg font-medium text-gray-600 group-hover:text-[#004DB6] transition-colors pt-1">
                                            {rule}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>



            </div>
        </section>
    );
}
