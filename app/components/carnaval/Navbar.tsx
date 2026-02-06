"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = document.querySelectorAll("section[id]");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute("id") || "";
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (href === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#programacao", label: "Programação" },
        { href: "#info", label: "Garantiza tu Ingreso" },
        { href: "#aviso", label: "Aviso" },
        { href: "#mapa", label: "Mapa" }
    ];

    return (
        <>
            <nav
                aria-label="Menu principal"
                className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'top-0' : 'top-0'}`}
            >
                <div className={`
                    flex items-center justify-between gap-4 md:gap-8 
                    bg-white/90 backdrop-blur-2xl 
                    border-b-[3px]
                    shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                    px-6 py-3 transition-all duration-300
                    w-full
                    ${scrolled
                        ? 'py-2 shadow-[0_15px_45px_rgba(0,0,0,0.2)] bg-white/95 border-[#009FE3]'
                        : 'py-3 border-white'
                    }
                `}>

                    {/* Logo */}
                    <Link href="/" onClick={(e) => scrollToSection(e, "/")} className="shrink-0">
                        <Image
                            src="/carnaval/logo-ourofino.png"
                            alt="Ouro Fino"
                            width={150}
                            height={60}
                            className="h-10 md:h-14 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Links - Centered */}
                    <div className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide text-gray-600">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "") || (link.href === "/" && activeSection === "");

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`
                                        transition-all duration-300 uppercase relative
                                        ${isActive ? 'text-[#009FE3] scale-105' : 'hover:text-[#004DB6] hover:scale-105'}
                                    `}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#009FE3] rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-[#009FE3]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
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
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "") || (link.href === "/" && activeSection === "");

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`
                                        text-2xl font-black uppercase tracking-tight transition-colors
                                        ${isActive ? 'text-[#009FE3]' : 'text-gray-800'}
                                    `}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
