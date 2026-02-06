"use client";

import { motion } from "framer-motion";
import { Radar, Send, Thermometer, Zap } from "lucide-react";

const steps = [
    {
        title: "Storm Detection & Targeting",
        bullets: [
            "Multi-source radar & satellite inputs",
            "Target zone modeling & prediction",
            "Engagement window classification",
        ],
        icon: Radar,
    },
    {
        title: "High-Altitude Deployment",
        bullets: [
            "Rapid staging & launch coordination",
            "Controlled release at designated bands",
            "Safety perimeter protocols",
        ],
        icon: Send,
    },
    {
        title: "Thermal / Pressure Disruption",
        bullets: [
            "Localized destabilization of flow",
            "Pressure-gradient interference",
            "Measured, staged engagement cycles",
        ],
        icon: Thermometer,
    },
    {
        title: "Rapid Energy Dissipation",
        bullets: [
            "Reduce sustained rotation coherence",
            "Interrupt amplification feedback loops",
            "Transition toward non-destructive dispersion",
        ],
        icon: Zap,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
            {/* Background mask */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,51,0.05)_0%,transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
                        How Storm Defender® Works
                    </h2>
                    <div className="h-1 w-20 bg-brand-red mx-auto" />
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-1 glass-card p-8 flex flex-col group"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                                    <step.icon className="text-brand-red w-6 h-6" />
                                </div>
                                <span className="text-4xl font-black text-white/40 group-hover:text-white/60 transition-all">
                                    0{index + 1}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold mb-6 uppercase tracking-tight line-clamp-2">
                                {step.title}
                            </h4>
                            <ul className="space-y-4 flex-grow">
                                {step.bullets.map((bullet) => (
                                    <li key={bullet} className="text-sm text-white/70 flex gap-3 leading-snug">
                                        <span className="text-brand-red mt-1 text-lg leading-none">•</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 h-12 w-full bg-white/5 rounded-lg overflow-hidden relative">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "0%" }}
                                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-[1px] bg-white/10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
