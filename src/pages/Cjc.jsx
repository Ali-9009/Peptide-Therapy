import {
    Smile,
    ShieldCheck,
    Dumbbell,
    Bone,
    Stethoscope,
    Flame,
    Brain,
    ShoppingCart,
} from "lucide-react";

import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";

export default function CJC1295() {
    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">

                        {/* TEXT */}
                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                CJC-1295
                            </h1>
                            <p className="text font-semibold mt-2">
                                Sleep-driven recovery and resilience available for direct purchase.
                            </p>
                            <p className="text mt-2">
                                CJC-1295 is primarily used to support overnight recovery by promoting
                                the body’s natural growth hormone (GH) signaling through a GHRH pathway.
                                The goal isn’t “more hormone” it’s better sleep-driven recovery,
                                improved resilience, and consistency with realistic expectations and
                                safety-first decision-making.
                            </p>
                            <Button text="Purchase CJC-1295 Now" className="mt-4" />
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <img
                                src="assets/cjc-1.png"
                                alt="CJC-1295 Peptide"
                                className="rounded"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="px-4 py-6">
                <div className="max-w-6xl mx-auto">

                    {/* TITLE */}
                    <h2 className="heading text-center mb-8">
                        Why people choose it
                    </h2>

                    {/* GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-6">

                        <Card
                            icon={<Smile size={40} />}
                            text="Mood & cognitive support"
                        />

                        <Card
                            icon={<ShieldCheck size={40} />}
                            text="Accelerated wound healing"
                        />

                        <Card
                            icon={<Dumbbell size={40} />}
                            text="Muscle & tendon recovery"
                        />

                        <Card
                            icon={<Bone size={40} />}
                            text="Bone healing support"
                        />

                        <Card
                            icon={<Stethoscope size={40} />}
                            text="Gastrointestinal protection"
                        />

                        <Card
                            icon={<Flame size={40} />}
                            text="Inflammation support"
                        />

                        <Card
                            icon={<Brain size={40} />}
                            text="Neuroprotective / nerve support"
                        />

                    </div>

                    {/* CTA */}
                    <div className="flex justify-center mt-10">
                        <Button text="Purchase CJC-1295 Now" />
                    </div>

                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-1 flex justify-center">
                            <img
                                src="assets/cjc-2.png"
                                alt="CJC-1295 Peptide"
                                className="rounded"
                            />
                        </div>

                        <div className="order-2 lg:order-2">
                            <h1 className="heading">
                                What to expect after purchase
                            </h1>

                            <p className="text mt-4">
                                Secure checkout + basic intake, safety guidance at checkout, optional add-ons (labs/clinician review) if you want deeper oversight.
                            </p>
                            <p className="text mt-2">
                                Avoid/physician oversight if pregnant/breastfeeding, under 18, tested athlete/drug-tested, complex endocrine history, or planning to self-source.
                            </p>
                            <p className="text font-semibold mt-2">
                                Who may be a candidate
                            </p>
                            <p className="text">
                                Good fit if recovery is slowing despite solid habits and you want structured support.
                            </p>
                            <Button text="Purchase CJC-1295 Now" className="mt-4" />
                        </div>

                    </div>

                </div>
            </section>

            <FAQ />

            <CTA />
        </>
    )
}


/* CARD COMPONENT */
function Card({ icon, text }) {
    return (
        <div className="border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-sm transition">
            <div className="mb-2 text-blue-600">{icon}</div>
            <p className="text-md font-medium text-gray-700">{text}</p>
        </div>
    );
}