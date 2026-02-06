"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] md:h-screen min-h-[550px] flex flex-col items-center justify-start overflow-hidden pt-24 bg-[#E30613] md:bg-gray-50">
            {/* 
                Color note: On mobile (portrait), we use brand red background to fill gaps. 
                On desktop, we use gray/white to match the site.
            */}

            <div className="relative w-full h-full">
                <Image
                    src="/carnaval/hero-bg.png"
                    alt="Verão Ouro Fino Carnaval"
                    fill
                    className="object-contain object-top"
                    priority
                />
            </div>

            {/* Gradient Blend at bottom to smooth out the transition to white content */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />

            {/* Floating CTA - Positioned Lower (bottom-4) and Smaller */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center z-20 px-4 sm:px-6">
                <button className="w-full sm:w-auto bg-[#004DB6] text-white text-base sm:text-lg font-bold py-3 sm:py-3 px-6 sm:px-10 rounded-full hover:bg-blue-800 transition-all shadow-[0_4px_15px_rgba(0,77,182,0.4)] hover:shadow-[0_10px_25px_rgba(0,77,182,0.6)] hover:-translate-y-0.5 transform flex items-center justify-center gap-2 uppercase tracking-wide group animate-fade-in-up cursor-pointer border-2 border-white/20 backdrop-blur-sm">
                    Garanta seu Ingresso
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
