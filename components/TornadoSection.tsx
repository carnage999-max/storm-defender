"use client";

import { motion } from "framer-motion";
import ZoomableImage from "./ZoomableImage";

export default function TornadoSection() {
    return (
        <section id="tornado-defense" className="py-24 bg-black relative">
            {/* Angled Divider Top */}
            <div className="absolute top-0 left-0 right-0 section-divider transform -translate-y-[99%] z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-gradient">
                                Tornado Defense
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed max-w-xl">
                                Active intervention at the point of organization. Beyond passive survival.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 border-l-4 border-l-brand-red"
                        >
                            <h4 className="text-xl font-bold mb-4 uppercase">The Core Problem</h4>
                            <p className="text-white/60 leading-relaxed">
                                Tornadoes intensify when organized rotation couples with strong updraft structures and pressure gradients.
                                Passive defense is reactive—built to absorb damage after a touchdown is already underway.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h5 className="font-bold uppercase text-brand-red text-sm tracking-widest">Formation Dynamics</h5>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    Storm Defender® focuses on top-down disruption: engage formation dynamics early,
                                    reduce coherence, and force dissipation pathways before impact.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h5 className="font-bold uppercase text-brand-red text-sm tracking-widest">Atmospheric Locking</h5>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    Targeted thermal interference prevents the "locking" of rotation between the mid-level
                                    mesocyclone and the surface boundary layer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-auto grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <ZoomableImage
                                src="/images/stormdef_tornado_tanks_family_02.png"
                                alt="Neighborhood Defense"
                                className="object-cover"
                                containerClassName="h-full w-full"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="h-64 md:h-80 rounded-2xl overflow-hidden mt-8 shadow-2xl"
                        >
                            <ZoomableImage
                                src="/images/stormdef_vehicle_canisters_approach_tornado_06.png"
                                alt="Storm Approach"
                                className="object-cover"
                                containerClassName="h-full w-full"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-64 md:h-80 rounded-2xl overflow-hidden col-span-2 shadow-2xl"
                        >
                            <ZoomableImage
                                src="/images/stormdef_tornado_tanks_usflag_05.png"
                                alt="Strategic Positioning"
                                className="object-cover"
                                containerClassName="h-full w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
