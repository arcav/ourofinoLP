"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full flex justify-center items-start pt-6 pb-6 md:pt-28 md:pb-16 bg-gray-50/50">

            {/* Super Hero Card Container - No overflow hidden here so button can pop out */}
            <div className="relative w-[95%] max-w-[1100px] h-auto shadow-2xl border border-white/40 bg-white group transition-transform duration-700 hover:scale-[1.002] rounded-3xl md:rounded-[3rem]">

                {/* Image Container - This clips the image to corners */}
                <div className="relative w-full rounded-3xl md:rounded-[3rem] overflow-hidden">

                    {/* Mobile Image - Natural Height */}
                    <div className="relative w-full md:hidden flex">
                        <Image
                            src="/carnaval/Hero-mobile.png"
                            alt="Verão Ouro Fino Carnaval Mobile"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Desktop Image - Natural Height */}
                    <div className="relative w-full hidden md:flex">
                        <Image
                            src="/carnaval/VerãoOuroFino_2026_v9.webp"
                            alt="Verão Ouro Fino Carnaval Desktop"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Gradient Blend - Constrained to bottom of image */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/20 to-transparent pointer-events-none opacity-50" />
                </div>

                {/* Disruptive Floating CTA - Breaking out of the card (Outside overflow-hidden) */}
                <div className="absolute -bottom-8 md:-bottom-12 left-0 w-full flex justify-center z-30 px-4">
                    <button className="w-auto bg-[#004DB6] text-white text-base md:text-xl font-bold py-3 px-6 md:py-4 md:px-10 rounded-full hover:bg-blue-800 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,77,182,0.7)] hover:-translate-y-2 transform flex items-center justify-center gap-2 md:gap-3 uppercase tracking-wide group animate-fade-in-up cursor-pointer border-[3px] md:border-4 border-white backdrop-blur-md">
                        Garanta seu Ingresso
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
