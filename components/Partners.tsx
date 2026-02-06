"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Cpu, Users, Zap } from "lucide-react";

export default function Partners() {
    const partners = [
        { name: "Global Logistics", icon: Globe },
        { name: "Atmos Sensing", icon: Zap },
        { name: "Agency Delta", icon: Users },
        { name: "Core Dynamics", icon: Cpu },
    ];

    return (
        <section id="partners" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold uppercase tracking-tighter">Strategic Partnerships</h2>
                        <p className="text-white/50 leading-relaxed max-w-xl">
                            Storm Defender® is seeking partners across research, operations, and emergency planning.
                            If you support modeling, deployment logistics, sensing inputs, or validation pathways—request a secure briefing.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all transform active:scale-95"
                        >
                            Partner With Us
                        </Link>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                        {partners.map((partner) => (
                            <motion.div
                                key={partner.name}
                                whileHover={{ scale: 1.05 }}
                                className="h-32 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3 lg:grayscale lg:opacity-30 lg:hover:grayscale-0 lg:hover:opacity-100 transition-all cursor-crosshair"
                            >
                                <partner.icon className="w-8 h-8 text-white" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white lg:text-white/50">{partner.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
