"use client";

import { motion } from "framer-motion";
import { Wind, Waves, Ship } from "lucide-react";

const capabilities = [
    {
        title: "Tornado Dismantling",
        description: "Intervene during formation windows with targeted disruption from altitude. Dismantle cores before touchdown.",
        icon: Wind,
        href: "#tornado-defense",
    },
    {
        title: "Hurricane Disruption",
        description: "Reduce organized rotation by degrading core energy transfer mechanisms. Systematic weakening of eyewalls.",
        icon: Waves,
        href: "#hurricane-defense",
    },
    {
        title: "Rapid Deployment",
        description: "Mobile logistics designed for fast positioning and controlled release. Scalable response for any atmospheric tier.",
        icon: Ship,
        href: "#how-it-works",
    },
];

export default function CapabilityCards() {
    return (
        <section id="capabilities" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-10 flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors">
                                <cap.icon className="text-brand-red w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{cap.title}</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                {cap.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-white/5 w-full">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                                    Access Technical Data
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
