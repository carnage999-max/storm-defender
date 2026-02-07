import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="bg-black min-h-screen">
            <Header />
            <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
                <div className="space-y-12">
                    <header className="border-b border-white/10 pb-8">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-gradient">
                            Terms of Service
                        </h1>
                        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">
                            Operational Protocol // Last Updated: February 7, 2026
                        </p>
                    </header>

                    <div className="prose prose-invert prose-red max-w-none space-y-10">
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">1. Acceptance of Protocol</h2>
                            <p className="text-white/60 leading-relaxed">
                                By accessing the Storm Defender® platform (the “Platform”), you agree to be bound by these Terms of Service.
                                These terms constitute a legally binding agreement between you and Storm Defender® regarding the use of
                                our atmospheric defense research, evaluations, and informational services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">2. Intellectual Property & Tactical Assets</h2>
                            <p className="text-white/60 leading-relaxed">
                                All content on this Platform, including but not limited to the Storm Defender® trademark, computational
                                visualizations, satellite imagery, tactical engagement photography, and proprietary atmospheric
                                dismantling logic, is the exclusive property of Storm Defender®. Unauthorized reproduction,
                                extraction, or reverse engineering of any mechanical or digital asset is strictly prohibited.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">3. System Disclaimer</h2>
                            <p className="text-white/60 leading-relaxed">
                                STORM DEFENDER® MATERIALS ARE PROVIDED FOR RESEARCH, EVALUATION, AND INFORMATIONAL PURPOSES.
                                NO CLAIMS OF GUARANTEED ATMOSPHERIC OUTCOMES ARE MADE ON THIS PUBLIC SITE. OPERATIONAL DEPLOYMENT
                                IS SUBJECT TO REGULATORY REVIEW, FEDERAL SAFETY CONSTRAINTS, AND SPECIFIC PARTNER AUTHORIZATION.
                                USE OF INFORMATION IS AT THE USER'S OWN RISK.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">4. Restriction of Use</h2>
                            <p className="text-white/60 leading-relaxed">
                                Users agree not to: (a) attempt to disrupt the Platform's operational integrity; (b) use automated
                                bots to scrape tactical data; (c) misrepresent their organizational affiliation when requesting
                                secure briefings; or (d) imply that they have operational control over Storm Defender® assets
                                without a signed Deployment Agreement.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">5. Secure Briefings & Communications</h2>
                            <p className="text-white/60 leading-relaxed">
                                Requesting a "Secure Briefing" does not establish an operational partnership. All inquiries are subject
                                to vetting. Storm Defender® reserves the right to deny disclosure of tactical data to any party
                                deemed a risk to atmospheric security or public interest.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">6. Limitation of Liability</h2>
                            <p className="text-white/60 leading-relaxed">
                                To the maximum extent permitted by law, Storm Defender® and its affiliates shall not be liable for
                                any direct, indirect, incidental, or consequential damages resulting from the use or inability
                                to use our informational materials, regardless of the predictability of weather events.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">7. Governing Law</h2>
                            <p className="text-white/60 leading-relaxed">
                                These terms are governed by and construed in accordance with the laws of the State of Florida, USA,
                                without regard to its conflict of law principles. Any legal action arising under these terms
                                shall be brought exclusively in the courts located in Florida.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-white">8. Modifications</h2>
                            <p className="text-white/60 leading-relaxed">
                                We reserve the right to modify these protocols at any time. Continued interaction with the
                                Platform following updates constitutes acceptance of the revised terms.
                            </p>
                        </section>

                        <p className="text-xs uppercase tracking-widest text-white/20 pt-10">
                            © 2026 Storm Defender®. All rights reserved. Operational Headquarters: Florida, USA.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
