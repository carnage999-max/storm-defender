"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tornado Defense", href: "#tornado-defense" },
    { name: "Hurricane Defense", href: "#hurricane-defense" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Validation", href: "#validation" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${(scrolled || isOpen)
                ? "bg-black/95 backdrop-blur-xl border-b border-brand-red/20 shadow-[0_0_50px_rgba(230,57,70,0.1)] h-16 md:h-20"
                : "bg-transparent h-20 md:h-32"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative">
                {/* Background Brand Glow */}
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none transition-all duration-500 ${scrolled ? "w-32 h-32 opacity-50" : "w-64 h-64 opacity-100"
                    }`} />

                <div className="flex-1 hidden lg:flex items-center gap-6">
                    {navItems.slice(1, 4).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex-shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <Link href="#home" className="flex flex-col items-center group">
                        <div className={`relative transition-all duration-500 drop-shadow-[0_0_20px_rgba(230,57,70,0.3)] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md ${scrolled ? "w-12 h-12 md:w-14 md:h-14 mb-1" : "w-16 h-16 md:w-24 md:h-24 mb-2"
                            }`}>
                            <Image
                                src="/logo/storm-defender.png"
                                alt="Storm Defender Logo"
                                fill
                                className="object-contain p-1"
                                priority
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <span className={`font-black tracking-[0.15em] uppercase bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent group-hover:from-brand-red group-hover:to-brand-orange transition-all duration-500 leading-none whitespace-nowrap ${scrolled ? "text-sm md:text-lg" : "text-lg md:text-2xl"
                                }`}>
                                Storm Defender®
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex-1 flex justify-end items-center gap-6">
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.slice(4, 7).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white absolute right-6 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 hover:bg-brand-red/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <Link
                        href="#contact"
                        className={`hidden lg:block border border-brand-red/50 hover:bg-brand-red/10 text-brand-red rounded-full font-black uppercase tracking-[0.2em] transition-all hover:scale-105 ${scrolled ? "px-4 py-1.5 text-[9px]" : "px-6 py-2 text-[10px]"
                            }`}
                    >
                        Briefing
                    </Link>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, translateY: -40 }}
                        animate={{ opacity: 1, height: "auto", translateY: 0 }}
                        exit={{ opacity: 0, height: 0, translateY: -40 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden bg-black/98 backdrop-blur-3xl border-b border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="px-10 py-12 flex flex-col gap-10">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-3xl font-black uppercase tracking-[0.25em] text-white/30 hover:text-brand-red transition-all block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.04, duration: 0.5, ease: "easeOut" }}
                            >
                                <Link
                                    href="#contact"
                                    className="bg-gradient-to-r from-brand-red to-brand-orange text-center text-white px-6 py-5 rounded-full text-lg font-black uppercase tracking-[0.3em] block shadow-2xl shadow-brand-red/40"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Secure Briefing
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
