import Image from "next/image";
import { Youtube, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL || "info@se7eninc.com";

    return (
        <footer className="bg-black py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-bold tracking-tighter uppercase text-white leading-none">Storm Defender®</span>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed font-light">
                            Engineering proactive atmospheric intervention systems for global threat dismantling. Target, disrupt, dissipate.
                        </p>
                        <div className="flex items-center gap-5 pt-2">
                            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors w-5 h-5 relative grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100" aria-label="Liberty Social">
                                <Image
                                    src="/icon/liberty-social.png"
                                    alt="Liberty Social"
                                    fill
                                    className="object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Contact Info</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Mailing Address</p>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    PO Box 52,<br />
                                    Detroit, ME 04929
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Phone</p>
                                <p className="text-sm text-white/80 font-mono">207-947-1999</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Email</p>
                                <p className="text-sm text-white/80 font-mono">info@stormdefender.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Disclaimer</h4>
                        <p className="text-[11px] text-white/60 leading-relaxed uppercase font-medium">
                            Storm Defender® materials are provided for research and evaluation purposes.
                            No claims of guaranteed outcomes are made on this public site. Operational deployment,
                            if any, is subject to regulatory review, safety constraints, and partner authorization.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                        © {new Date().getFullYear()} Storm Defender® All Rights Reserved
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold cursor-pointer hover:text-white transition-colors">Privacy Protocol</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold cursor-pointer hover:text-white transition-colors">Usage Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
