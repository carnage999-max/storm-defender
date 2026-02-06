"use client";

import { motion } from "framer-motion";
import ZoomableImage from "./ZoomableImage";

export default function HurricaneSection() {
    return (
        <section id="hurricane-defense" className="py-24 bg-black relative">
            {/* Angled Divider Bottom */}
            <div className="absolute bottom-0 left-0 right-0 section-divider-reverse transform translate-y-[99%] z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="flex-1 space-y-8 text-right lg:text-left order-2 lg:order-1">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl glass-card p-2">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <ZoomableImage
                                    src="/images/stormdef_twirling_sky_rising_tide_04.png"
                                    alt="Hurricane Core Visualization"
                                    className="object-cover"
                                    containerClassName="h-full w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <p className="text-xs text-white/30 uppercase tracking-[0.3em] font-medium hidden lg:block">
                            Core energy pathway visualization — Satellite Layer 7
                        </p>
                    </div>

                    <div className="flex-1 space-y-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-gradient">
                                Hurricane Defense
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed">
                                Dissipating core energy before coastal landfall.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 border-r-4 border-r-brand-orange text-right"
                        >
                            <h4 className="text-xl font-bold mb-4 uppercase">The Scaling Threat</h4>
                            <p className="text-white/60 leading-relaxed">
                                Hurricanes draw strength from sustained heat/energy exchange and organized circulation.
                                Deflection strategies are unreliable and non-deterministic.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <div className="flex-1 text-right">
                                    <h5 className="font-bold uppercase text-brand-orange text-sm tracking-widest mb-2">Altitude Dismantling</h5>
                                    <p className="text-sm text-white/40 leading-relaxed">
                                        Storm Defender® targets altitude-based dismantling: degrade the storm’s ability to maintain
                                        organized structure and reduce destructive capacity ahead of coastal exposure.
                                    </p>
                                </div>
                                <div className="w-1.5 h-16 bg-brand-orange/20 rounded-full" />
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-1 text-right">
                                    <h5 className="font-bold uppercase text-brand-orange text-sm tracking-widest mb-2">Thermal Injection</h5>
                                    <p className="text-sm text-white/40 leading-relaxed">
                                        Precision insertion of destabilizing agents into the eyewall’s convection cycles forces
                                        immediate pressure equalization and structural collapse.
                                    </p>
                                </div>
                                <div className="w-1.5 h-16 bg-brand-orange/20 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
