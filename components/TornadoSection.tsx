"use client";

import { motion } from "framer-motion";
import ZoomableImage from "./ZoomableImage";

export default function TornadoSection() {
    return (
        <section id="tornado-defense" className="py-24 bg-black relative">

            <div className="max-w-4xl mx-auto px-6">
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-gradient">
                            Tornado Defense
                        </h2>
                        <p className="text-2xl text-white/50 leading-relaxed font-light">
                            Active intervention at the point of organization. Beyond passive survival.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-l-4 border-l-brand-red space-y-4"
                        >
                            <h4 className="text-xl font-bold uppercase tracking-widest text-white">The Core Problem</h4>
                            <p className="text-white/60 leading-relaxed italic">
                                "Tornadoes intensify when organized rotation couples with strong updraft structures and pressure gradients.
                                Passive defense is built to absorb damage—not stop it."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-l-4 border-l-brand-orange space-y-4"
                        >
                            <h4 className="text-xl font-bold uppercase tracking-widest text-white">The Strike Protocol</h4>
                            <p className="text-white/60 leading-relaxed">
                                Targeted thermal interference prevents the "locking" of rotation between the mid-level
                                mesocyclone and the surface boundary layer. We dismantle the conduit.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                            <h5 className="font-bold uppercase text-brand-red text-sm tracking-[0.3em]">Formation Dynamics</h5>
                            <p className="text-sm text-white/40 leading-relaxed uppercase font-medium">
                                Storm Defender® focuses on top-down disruption: engage formation dynamics early,
                                reduce coherence, and force dissipation pathways before impact.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold uppercase text-brand-orange text-sm tracking-[0.3em]">Atmospheric Locking</h5>
                            <p className="text-sm text-white/40 leading-relaxed uppercase font-medium">
                                Our payloads induce rapid temperature differentials within the core,
                                shattering the pressure gradient required to sustain surface-level touchdown.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
