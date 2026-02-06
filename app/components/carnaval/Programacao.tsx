"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Programacao() {
    const schedule = [
        {
            day: "14",
            month: "FEV",
            blocks: [
                { time: "10:00", text: "Trilha guiada / Lounge" },
                { time: "11:00", text: "Chute a Gol / DJ " },
                { time: "14:00", text: "Trio de Samba / Recepção" }
            ],
            kids: ["Estátua Musical", "Siga o Mestre", "Circuito"]
        },
        {
            day: "15",
            month: "FEV",
            blocks: [
                { time: "10:00", text: "Lounge de descanso" },
                { time: "11:00", text: "Desenho e Pintura" },
                { time: "14:00", text: "Trio de Samba" }
            ],
            kids: ["Oficina de Contação", "Gincana Divertida"]
        },
        {
            day: "16",
            month: "FEV",
            blocks: [
                { time: "10:00", text: "Lounge e Atividades" },
                { time: "11:00", text: "Desenho e Pintura" },
                { time: "14:00", text: "Marchinhas" }
            ],
            kids: ["Desafio do Idioma", "Alerta"]
        },
        {
            day: "17",
            month: "FEV",
            blocks: [
                { time: "10:00", text: "Feira de Mulheres" },
                { time: "11:00", text: "Chute a Gol / Pintura" },
                { time: "14:00", text: "Oficina de Jogos" }
            ],
            kids: []
        },
        {
            day: "18",
            month: "FEV",
            blocks: [
                { time: "10:00", text: "Lounge / Feira" },
                { time: "11:00", text: "Desenho e Pintura" }
            ],
            kids: []
        }
    ];

    return (
        <section className="py-12 px-4 bg-gray-50 relative" id="programacao">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004DB6] uppercase tracking-tight leading-none px-2">
                        Confira nossa <br /><span className="text-[#00AEEF]">programação:</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-8 pb-16 px-2 md:px-0">
                    {schedule.map((day, i) => (
                        <Card
                            key={i}
                            day={day}
                            index={i}
                            total={schedule.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ day, index, total }: any) {
    return (
        <div
            className="sticky z-10"
            style={{
                top: `calc(100px + ${index * 15}px)`,
                marginBottom: `${(total - index) * 0}px`
            }}
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full drop-shadow-2xl"
            >
                <div className="flex flex-col md:flex-row min-h-[auto] md:min-h-[220px] rounded-[2rem] md:rounded-3xl overflow-hidden bg-[#004DB6] text-white relative">

                    {/* TICKET NOTCHES (Only desktop to save space on mobile) */}
                    <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full z-20"></div>
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-50 rounded-full z-20"></div>

                    {/* DATE SECTION - Mobile: Top Banner, Desktop: Left Side */}
                    <div className="bg-[#003d91] w-full md:w-48 flex flex-row md:flex-col justify-between md:justify-center items-center p-6 md:p-6 border-b md:border-b-0 md:border-r-2 border-dashed border-white/20 shrink-0 relative">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl md:text-7xl font-black tracking-tighter relative z-10">{day.day}</span>
                            <span className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-[#00AEEF] mt-0 md:mt-2 relative z-10">{day.month}</span>
                        </div>
                        {/* Mobile decorative element */}
                        <div className="md:hidden w-12 h-1 bg-white/20 rounded-full"></div>

                        {/* Texture */}
                        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-8 relative">

                        {/* Time Blocks */}
                        <div className="flex-1 space-y-3 md:space-y-4 w-full">
                            {day.blocks.map((block: any, idx: number) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 group border-b border-white/10 pb-2 last:border-0 last:pb-0 sm:border-0 sm:pb-0">
                                    <span className="text-[#00AEEF] font-bold text-sm sm:text-base w-full sm:w-14 shrink-0 group-hover:text-white transition-colors">{block.time}</span>
                                    <span className="text-white font-semibold text-sm sm:text-base md:text-lg leading-snug break-words">{block.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Kids Badge */}
                        {day.kids.length > 0 && (
                            <div className="w-full lg:w-56 bg-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 shrink-0 flex flex-col justify-center border border-white/10 h-auto self-stretch backdrop-blur-sm mt-2 md:mt-0">
                                <div className="flex items-center gap-2 mb-2 md:mb-3">
                                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-[10px] md:text-xs font-black uppercase text-yellow-400 tracking-widest">Espaço Kids</span>
                                </div>
                                <div className="grid grid-cols-1 gap-1">
                                    {day.kids.map((k: string, kx: number) => (
                                        <p key={kx} className="text-xs md:text-sm text-white/90 font-medium flex items-center gap-2">
                                            <span className="w-1 h-1 bg-yellow-400 rounded-full shrink-0"></span>
                                            {k}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Spacing filler for desktop alignment */}
                        {day.kids.length === 0 && <div className="hidden lg:block w-56 shrink-0"></div>}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
