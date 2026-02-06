"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendBriefing } from "@/app/actions/sendBriefing";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const result = await sendBriefing(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            setErrorMessage(result.error || "An error occurred.");
        }
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
            >
                <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="text-brand-red w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">Briefing Requested</h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                    Your request has been securely transmitted. We will respond via official agency channels after reviewing your credentials.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-brand-red font-bold uppercase tracking-widest text-sm hover:underline"
                >
                    Send Another Request
                </button>
            </motion.div>
        );
    }

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
                        Secure Briefing Request
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
                        Use the form to request a technical overview, integration requirements, and current readiness status.
                        All requests are subject to verification.
                    </p>
                </div>

                <div className="glass-card p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot */}
                        <input type="text" name="honeypot" className="hidden" aria-hidden="true" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Full Name</label>
                                <input
                                    required
                                    name="full_name"
                                    type="text"
                                    placeholder="e.g. Director Sarah Jensen"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Official Email</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="s.jensen@agency.gov"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Organization</label>
                                <input
                                    required
                                    name="organization"
                                    type="text"
                                    placeholder="Department / Agency / Institute"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Role / Department</label>
                                <input
                                    name="role"
                                    type="text"
                                    placeholder="Manager / Lead Analyst"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-brand-red/50 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Interest Area</label>
                            <select
                                name="interest_area"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-red/50 focus:outline-none transition-colors appearance-none"
                            >
                                <option value="Tornado Defense" className="bg-black">Tornado Defense</option>
                                <option value="Hurricane Defense" className="bg-black">Hurricane Defense</option>
                                <option value="Deployment" className="bg-black">Deployment Logistics</option>
                                <option value="Research" className="bg-black">Technical Research</option>
                                <option value="Partnership" className="bg-black">Strategic Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Message / Context</label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                placeholder="Briefly describe your interest and specific briefing requirements (min 30 characters)..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:border-brand-red/50 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4 flex flex-col items-center gap-6">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-brand-red hover:bg-brand-red/90 disabled:opacity-50 text-white py-4 rounded-xl text-lg font-bold uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-xl shadow-brand-red/20 flex items-center justify-center gap-3"
                            >
                                {status === "loading" ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : "Submit Request"}
                            </button>

                            <AnimatePresence>
                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 text-brand-red border border-brand-red/20 bg-brand-red/5 px-4 py-2 rounded-lg"
                                    >
                                        <AlertTriangle size={16} />
                                        <span className="text-xs font-bold uppercase">{errorMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <p className="text-[10px] text-white/30 text-center leading-relaxed">
                                DISCLAIMER: Storm Defender® materials are provided for research and evaluation purposes.
                                No claims of guaranteed outcomes are made on this public site. Operational deployment,
                                if any, is subject to regulatory review, safety constraints, and partner authorization.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
