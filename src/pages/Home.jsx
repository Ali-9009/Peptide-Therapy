import { CheckCircle } from "lucide-react";

import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import ImageLoader from "../components/ImageLoader";
import Products from "../components/Products";

const benefits = [
    {
        title: "Wound and tissue support",
        desc: "Often discussed for its potential role in tissue recovery and repair signaling pathways.",
    },
    {
        title: "Gastrointestinal health",
        desc: "Research interest includes support for digestive tract lining and gut-related balance.",
    },
    {
        title: "Muscle and tendon recovery",
        desc: "Commonly explored in recovery contexts for physical training and strain support.",
    },
    {
        title: "Neurological protection",
        desc: "Early discussions suggest possible neuro-supportive signaling effects.",
    },
    {
        title: "Cardiovascular potential",
        desc: "Investigated in preclinical studies for vascular and healing-related responses.",
    },
    {
        title: "Inflammation response",
        desc: "May be associated with modulation of inflammatory repair pathways.",
    },
];

const points = [
    "Struggle with recovery consistency (training or daily activity)",
    "Deal with recurring soft-tissue irritation patterns",
    "Want a structured approach rather than internet protocol",
    "They are open to being realistic about outcomes and using safety-first decision making",
];

const items = [
    "High-quality product standards (consistent sourcing expectations)",
    "Clear instructions and usage guidance provided at checkout (avoid detailed dosing claims on-page)",
    "Support resources for safe use considerations and next steps",
    "Option to add labs/medical review separately if you want more personalized oversight",
];
export default function Home() {

    return (
        <>
            <section className="relative overflow-hidden bg-white">
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl" />
                    <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
                    <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
                </div>

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:py-20 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            Advanced Peptide Research Collection
                        </span>

                        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                            Peptides For
                            <span className="mt-2 block bg-linear-to-r from-cyan-500 via-blue-600 to-teal-500 bg-clip-text text-transparent">
                                Recovery & Performance.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Explore a powerful collection of research peptides including
                            <span className="font-semibold text-gray-900"> BPC-157</span>,
                            <span className="font-semibold text-gray-900"> TB-500</span>,
                            <span className="font-semibold text-gray-900"> Semaglutide</span>,
                            <span className="font-semibold text-gray-900"> Tirzepatide</span>, and more
                            crafted for advanced research, recovery support, metabolism,
                            longevity, and performance optimization.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button text="Contact Us" />

                            <a
                                href="#products"
                                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 hover:shadow-md"
                            >
                                View Collection
                            </a>
                        </div>

                        {/* Trust Row */}
                        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                            <div className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm">
                                <p className="text-2xl font-bold text-gray-950">99%</p>
                                <p className="text-sm text-gray-500">Purity Focused</p>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm">
                                <p className="text-2xl font-bold text-gray-950">Lab</p>
                                <p className="text-sm text-gray-500">Research Grade</p>
                            </div>

                            <div className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm">
                                <p className="text-2xl font-bold text-gray-950">Fast</p>
                                <p className="text-sm text-gray-500">Support 24/7</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Product Showcase */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-cyan-200/40 blur-3xl" />

                        <div className="relative mx-auto max-w-md rounded-4xl border border-gray-100 bg-white/70 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur">
                            <div className="absolute -right-6 -top-6 rounded-2xl bg-white px-4 py-3 shadow-xl">
                                <p className="text-xs font-medium text-gray-500">Featured</p>
                                <p className="text-sm font-bold text-gray-900">BPC-157</p>
                            </div>

                            <img
                                src="assets/bpc-2.png"
                                alt="Premium peptide product"
                                className="mx-auto w-full drop-shadow-2xl"
                            />

                            <div className="mt-6 rounded-2xl bg-gray-50 p-4">
                                <p className="text-sm font-semibold text-gray-900">
                                    Premium Research Peptides
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Designed for advanced research, wellness, and performance studies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Products />

            <section className="hidden py-12 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* TOP SECTION */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Left content */}
                        <div className="max-w-2xl">
                            <h2 className="heading">
                                Key Potential Benefits of BPC-157
                            </h2>

                            <p className="text mt-4">
                                BPC-157 is being studied in early research for its role in tissue
                                repair, digestive support, and recovery-related signaling pathways.
                                These findings are not confirmed medical claims and remain investigational.
                            </p>
                        </div>

                        {/* Right image */}
                        <div className="shrink-0">
                            <ImageLoader
                                src="assets/bpc-1.jpg"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
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
                        <Button
                            text="Purchase BPC-157 Now"
                            onClick={() => {
                                addToCart(product);
                                navigate("/cart");
                            }}
                        />
                    </div>

                </div>
            </section>

            <section className="hidden md:py-12 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="heading">
                            Who may be a candidate
                        </h2>

                        <p className="text my-4">
                            You may be a good fit to consider BPC-157 if you:
                        </p>

                        <div className="space-y-6">

                            {points.map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <p className="text wrap-break-words">
                                        {text}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex justify-center">
                        <ImageLoader
                            src="assets/bpc-2.png"
                            alt="cover image"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                </div>
            </section>

            <section className="hidden py-12 px-6">
                <div className="max-w-6xl mx-auto border border-gray-300 rounded-2xl shadow-sm p-8 md:p-12">

                    <h2 className="heading text-center mb-4">
                        What you get with your purchase
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        <div className="flex justify-center">
                            <ImageLoader
                                src="assets/bpc-3.jpg"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="space-y-5">

                            {items.map((text, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <CheckCircle
                                        className="text-green-500 shrink-0 mt-0.5"
                                        size={20}
                                    />
                                    <p className="text wrap-break-words">
                                        {text}
                                    </p>
                                </div>
                            ))}

                            <Button
                                text="Purchase BPC-157 Now"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/cart");
                                }}
                            />

                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>

    );
}