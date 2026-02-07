"use client";

import { motion } from "framer-motion";
import ZoomableImage from "./ZoomableImage";

export default function HurricaneSection() {
    return (
        <section id="hurricane-defense" className="py-24 bg-black relative">

            <div className="max-w-4xl mx-auto px-6">
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-gradient">
                            Hurricane Defense
                        </h2>
                        <p className="text-2xl text-white/50 leading-relaxed font-light">
                            Dissipating core energy before coastal landfall. Scientific intervention at scale.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-l-4 border-l-brand-orange space-y-4"
                        >
                            <h4 className="text-xl font-bold uppercase tracking-widest text-white">The Scaling Threat</h4>
                            <p className="text-white/60 leading-relaxed italic">
                                "Hurricanes draw strength from sustained heat/energy exchange.
                                Deflection is reactive; we focus on degradation."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-l-4 border-l-brand-red space-y-4"
                        >
                            <h4 className="text-xl font-bold uppercase tracking-widest text-white">Dissipation Logic</h4>
                            <p className="text-white/60 leading-relaxed">
                                Precision insertion of destabilizing agents into the eyewall’s convection cycles forces
                                immediate pressure equalization and structural collapse.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                            <h5 className="font-bold uppercase text-brand-orange text-sm tracking-[0.3em]">Altitude Dismantling</h5>
                            <p className="text-sm text-white/40 leading-relaxed uppercase font-medium">
                                Storm Defender® targets altitude-based dismantling: degrade the storm’s ability to maintain
                                organized structure and reduce capacity ahead of exposure.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold uppercase text-brand-red text-sm tracking-[0.3em]">Thermal Injection</h5>
                            <p className="text-sm text-white/40 leading-relaxed uppercase font-medium">
                                We utilize high-altitude vectors to stage payloads that neutralize surface-to-core
                                heat transfer, effectively starving the storm of its fuel source.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
