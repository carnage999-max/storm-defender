"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StormScene from "./StormScene";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/stormdef_tornado_tanks_usflag_05.png"
                    alt="Storm Defender Active Engagement"
                    fill
                    priority
                    className="object-contain object-top md:object-cover md:object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
            </div>

            {/* Three.js Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <StormScene />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-[20vh] md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 uppercase text-gradient leading-[0.9]">
                        Storm Defender® <br />
                        <span className="text-white/90">Active Atmospheric Threat Dismantling</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
                        A proactive system engineered to disrupt tornadoes and hurricanes before impact. Targeting the energy pathways of catastrophic weather.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-orange hover:to-brand-red text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
                        >
                            Request Briefing
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
                        >
                            View Technology
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
