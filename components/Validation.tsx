"use client";

import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Microscope } from "lucide-react";
import ZoomableImage from "./ZoomableImage";

export default function Validation() {
    return (
        <section id="validation" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
                        System Validation
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto uppercase text-xs tracking-[0.3em] font-bold">
                        Phased readiness & operational modeling
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Readiness Card */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 border border-white/5 bg-gradient-to-br from-white/5 to-transparent"
                        >
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-white flex items-center gap-2">
                                <ShieldCheck size={20} /> Readiness Roadmap
                            </h3>
                            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                                {[
                                    { label: "Phase 1: Computational", status: "Validated", desc: "Supercomputer modeling and atmospheric fluid dynamic simulations." },
                                    { label: "Phase 2: Tactical Trial", status: "In Progress", desc: "Controlled releases within small-scale organized weather cells." },
                                    { label: "Phase 3: Agency Review", status: "Scheduled", desc: "Full-scale inter-agency operational evaluation and safety audit." }
                                ].map((item, idx) => (
                                    <div key={item.label} className="relative pl-10">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-black border-2 border-brand-red z-10" />
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-sm uppercase text-white">{item.label}</h4>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white/80">{item.status}</span>
                                        </div>
                                        <p className="text-xs text-white/90 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Metrics & Context */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <BarChart3 className="text-brand-red w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold uppercase tracking-tight text-white">Energy Dissipation Rate</h4>
                                </div>
                                <div className="h-32 flex items-end gap-2 mb-6">
                                    {[30, 45, 60, 40, 75, 90, 85].map((h, i) => (
                                        <div key={i} className="flex-1 bg-white/10 rounded-t-sm group-hover:bg-brand-red/20 transition-all" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                                <p className="text-xs text-white/90 leading-relaxed italic">
                                    "Measured impact on organized rotation coherence during Stage 3 modeling runs. Consistent 42% reduction in peak velocity observed."
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass-card p-8"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                        <Microscope className="text-brand-red w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold uppercase tracking-tight text-white">Material Integrity</h4>
                                        <p className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">Manufacturing Validation</p>
                                    </div>
                                </div>
                                <div className="aspect-video relative rounded-lg overflow-hidden border border-white/5 mb-6">
                                    <ZoomableImage
                                        src="/images/stormdef_factory_canisters_packout_03.png"
                                        alt="Manufacturing Validation"
                                        className="object-cover"
                                        containerClassName="h-full w-full"
                                    />
                                </div>
                                <p className="text-xs text-white/90 leading-relaxed">
                                    All disruption payloads are manufactured under Grade-A safety specifications within hardened domestic facilities.
                                </p>
                            </motion.div>
                        </div>

                        <div className="glass-card p-6 border-l-4 border-l-white/10 bg-white/[0.02]">
                            <p className="text-sm text-white/60 leading-relaxed italic font-light">
                                "Validation is approached as a phased readiness program: modeling → controlled trials → operational review.
                                This site presents high-level capability and integration intent; detailed data is available under briefing to qualified parties."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
