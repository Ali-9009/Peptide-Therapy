import { CheckCircle } from "lucide-react";

import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";
import ImageLoader from "../components/ImageLoader";

const benefits = [
    {
        title: "Ideal For:",
        desc: "Individuals focused on recovery, mobility, and active lifestyle support",
    },
    {
        title: "Helpful Information",
        desc: "Support materials are provided to encourage informed and responsible use",
    },
    {
        title: "Additional Support Options",
        desc: "Users looking for a more tailored experience may choose expanded wellness guidance or optional consultation support",
    },
];

const items = [
    "Want support for recovery consistency after training or daily physical activity",
    "Experience recurring mobility or soft-tissue stress concerns",
    "Prefer a structured, guidance-based approach instead of random online protocols",
    "Value realistic expectations and a safety-focused wellness strategy",
];

const items2 = [
    "Recovery and mobility support for active lifestyles",
    "Assistance with tissue repair and resilience pathways",
    "Support for flexibility, performance, and physical recovery",
    "Wellness-focused recovery optimization for training and daily activity",
    "Studied for its role in regenerative and repair-related processes",
    "May help support overall recovery consistency and physical maintenance",
];

export default function TB_500() {
    return (
        <>
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">

                        {/* TEXT */}
                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                TB500
                            </h1>
                            <p className="text font-semibold mt-2">
                                Recovery-focused peptide support designed to assist mobility, repair, and resilience.
                            </p>
                            <p className="text mt-2">
                                TB500 is researched for its role in supporting recovery processes, tissue repair signaling, and overall physical resilience. Rather than forcing unnatural stimulation, the focus is on helping the body maintain efficient recovery, flexibility, and performance support through regenerative and recovery-oriented pathways.
                            </p>
                            <Button text="Purchase TB500 Now" className="mt-4" />
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <ImageLoader
                                src="assets/tb-1.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">

                    <h2 className="heading text-center mb-10">
                        Who May Benefit from TB500 Support
                    </h2>

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
                        <Button text="Purchase TB500 Now " />
                    </div>

                </div>
            </section>

            <section className="py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-1 flex justify-center">
                            <ImageLoader
                                src="assets/tb-2.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="order-2 lg:order-2">
                            <h1 className="heading">
                                Who May Be a Good Candidate for TB500?
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

                            <Button text="Purchase TB500 Now" className="mt-4" />
                        </div>

                    </div>

                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">

                        {/* TEXT */}
                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                Potential Benefits
                            </h1>
                            <div className="my-4">
                                {items2.map((text, i) => (
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
                            <Button text="Purchase TB500 Now" className="mt-4" />
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <ImageLoader
                                src="assets/tb-3.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <FAQ />

            <CTA />
        </>
    )
}