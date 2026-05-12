import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What is used for?",
            a: "It is primarily used to support recovery and natural growth hormone signaling for improved sleep and recovery balance.",
        },
        {
            q: "How is it taken?",
            a: "It is typically administered via injection according to a structured protocol provided by a professional.",
        },
        {
            q: "Is it safe?",
            a: "Safety depends on proper use, dosage, and individual health conditions. Always follow professional guidance.",
        },
        {
            q: "How long does it take to see results?",
            a: "Results vary, but most users report noticeable changes within a few weeks of consistent use.",
        },
    ];

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-10">

            <h2 className="heading text-center mb-6">
                Frequently Asked Questions
            </h2>

            <div className="space-y-3">

                {faqs.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-300 rounded-lg overflow-hidden"
                    >

                        {/* Question */}
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-gray-50 transition"
                        >
                            <span className="font-medium">{item.q}</span>

                            <span className="text-xl">
                                {openIndex === i ? "−" : "+"}
                            </span>
                        </button>

                        {/* Answer */}
                        <div
                            className={`px-4 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${openIndex === i
                                    ? "max-h-40 py-3 opacity-100"
                                    : "max-h-0 py-0 opacity-0 overflow-hidden"
                                }`}
                        >
                            {item.a}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}