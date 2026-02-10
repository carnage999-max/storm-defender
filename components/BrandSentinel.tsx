"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandSentinel() {
    return (
        <section className="py-24 bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.05)_0%,transparent_70%)] pointer-events-none" />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-64 h-64 md:w-96 md:h-96 drop-shadow-[0_0_50px_rgba(230,57,70,0.2)]"
            >
                <Image
                    src="/logo/storm-defender.png"
                    alt="Storm Defender Official Logo"
                    fill
                    className="object-contain"
                />
            </motion.div>
        </section>
    );
}
