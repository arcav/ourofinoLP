"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#programacao", label: "Programação" },
        { href: "#info", label: "Horários" },
        { href: "#mapa", label: "Como Chegar" },
        { href: "/", label: "Home" }
    ];

    return (
        <>
            <nav className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'top-4' : 'top-6 md:top-8'}`}>
                <div className={`
                    flex items-center justify-between gap-8 
                    bg-white/90 backdrop-blur-xl border border-white/40
                    rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                    px-6 py-3 transition-all duration-300
                    w-[95%] max-w-4xl
                    ${scrolled ? 'py-2 shadow-xl bg-white/95' : 'py-3'}
                `}>

                    {/* Mobile: Logo or Brand Name (Optional, kept minimal as requested) */}
                    <Link href="/" className="md:hidden font-black text-[#004DB6] tracking-tighter text-lg">
                        OURO FINO
                    </Link>

                    {/* Desktop Links - Centered */}
                    <div className="hidden md:flex items-center justify-center w-full gap-10 font-bold text-sm tracking-wide text-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="hover:text-[#004DB6] transition-colors uppercase"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-[#004DB6]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-32 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-black text-[#004DB6] uppercase tracking-tight"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
