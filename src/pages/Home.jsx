import { CheckCircle, ShoppingCart } from "lucide-react";
import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import ImageLoader from "../components/ImageLoader";


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
            <section className="relative min-h-175 flex items-center justify-center text-center text-white overflow-hidden">

                <img
                    src="/assets/hero.jpg"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        BPC-157
                    </h1>
                    <p className="text-xl md:text-3xl mt-3 font-medium">
                        Peptide Therapy in Miami
                    </p>
                    <p className="text-sm md:text-base text-gray-200 mt-6 leading-relaxed">
                        BPC-157 is a synthetic peptide originally identified in gastric juice research and discussed for its potential role in tissue repair, digestive lining support, and recovery-related signaling. Evidence is still emerging, so it's best viewed as investigational and used responsibly with safety in mind.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <Button text="Purchase BPC-157 Now" />
                    </div>

                </div>
            </section>

            <section className="py-12 px-6">
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
                        <Button text="Purchase BPC-157 Now" />
                    </div>

                </div>
            </section>

            <section className="md:py-12 px-6">
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

            <section className="py-12 px-6">
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

                            {/* BUTTON */}
                            <Button text="Purchase BPC-157 Now" />

                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>

    );
}