"use client";

import { motion } from "framer-motion";
import ZoomableImage from "./ZoomableImage";

interface SectionImageProps {
    src: string;
    alt: string;
    caption?: string;
    description?: string;
}

export default function SectionImage({ src, alt }: SectionImageProps) {
    return (
        <section className="py-8 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/5"
                >
                    <ZoomableImage
                        src={src}
                        alt={alt}
                        className="object-cover"
                        containerClassName="aspect-[21/9] md:aspect-[21/7] w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
