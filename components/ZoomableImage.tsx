"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { Maximize2 } from "lucide-react";

interface ZoomableImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    fill?: boolean;
}

export default function ZoomableImage({ src, alt, className = "", containerClassName = "", fill = true }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`group cursor-zoom-in relative ${containerClassName}`}
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill={fill}
                    className={`${className} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20 transform scale-75 group-hover:scale-100 transition-transform">
                        <Maximize2 size={20} className="text-white" />
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                src={src}
                alt={alt}
            />
        </>
    );
}
