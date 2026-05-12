import { CheckCircle } from "lucide-react";

import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";
import ImageLoader from "../components/ImageLoader";

const benefits = [
    {
        title: "Mood and cognitive support",
        desc: "Metabolic function support related to body composition pathways",
    },
    {
        title: "Accelerated wound healing",
        desc: "Support for abdominal fat reduction mechanisms (studied in clinical settings)",
    },
    {
        title: "Muscle and tendon recovery",
        desc: "Growth hormone–related signaling support within natural regulatory systems",
    },
    {
        title: "Bone healing support",
        desc: "May assist with lean body composition maintenance when combined with lifestyle habits",
    },
    {
        title: "Gastrointestinal protection",
        desc: "Recovery and vitality support in metabolic wellness contexts",
    },
    {
        title: "Inflammation related support",
        desc: "Studied for effects on lipid metabolism and fat distribution patterns",
    },
];

const items = [
    "Metabolic and body composition support (clinical research context)",
    "Support for natural growth hormone–related signaling pathways",
    "May assist with reduction in abdominal fat stores (studied outcomes)",
    "Support for lean body composition maintenance when paired with healthy lifestyle habits",
    "Recovery and vitality support through metabolic regulation pathways",
    "Studied for effects on lipid metabolism and fat distribution patterns",
];

export default function Ipamorelin() {
    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">

                        {/* TEXT */}
                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                Ipamorelin
                            </h1>
                            <p className="text font-semibold mt-2">
                                Recovery-focused peptide support designed to assist mobility, repair, and resilience.
                            </p>
                            <p className="text mt-2">
                                Ipamorelin is researched for its role in supporting recovery processes, tissue repair signaling, and overall physical resilience. Rather than forcing unnatural stimulation, the focus is on helping the body maintain efficient recovery, flexibility, and performance support through regenerative and recovery-oriented pathways.
                            </p>
                            <Button text="Purchase Ipamorelin Now" className="mt-4" />
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <ImageLoader
                                src="assets/ipa-1.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* TOP SECTION */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                        {/* Right image */}
                        <div className="shrink-0">
                            <ImageLoader
                                src="assets/ipa-2.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        {/* Left content */}
                        <div className="max-w-xl">
                            <h2 className="heading">
                                Key Potential Benefits of Ipamorelin
                            </h2>

                            <p className="text mt-4">
                                Important: These are potential benefits based on clinical research and discussion — not guaranteed outcomes.
                            </p>
                        </div>

                    </div>

                    {/* CARDS */}
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {benefits.map((item, i) => (
                            <div
                                key={i}
                                className="border border-gray-100 rounded-lg p-5 hover:shadow-sm transition"
                            >
                                <h3 className="font-medium text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text mt-2">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* BUTTON */}
                    <div className="mt-12 flex justify-center">
                        <Button text="Purchase Ipamorelin Now" />
                    </div>

                </div>
            </section>

            <section className="py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-1 flex justify-center">
                            <ImageLoader
                                src="assets/ipa-3.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        <div className="order-2 lg:order-2">
                            <h1 className="heading">
                                Potential Benefits of Ipamorelin
                            </h1>

                            <div className="py-2">
                                {items.map((text, i) => (
                                    <div key={i} className="flex gap-3 space-y-4 items-start">
                                        <CheckCircle
                                            className="text-green-500 shrink-0 mt-0.5"
                                            size={20}
                                        />
                                        <p className="text wrap-break-words">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Button text="Purchase Ipamorelin Now" className="mt-4" />
                        </div>

                    </div>

                </div>
            </section>

            <FAQ />

            <CTA />
        </>
    )
}