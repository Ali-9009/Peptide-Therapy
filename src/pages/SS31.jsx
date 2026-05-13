import { CheckCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products } from "../product/data";

import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";
import ImageLoader from "../components/ImageLoader";

const benefits = [
    {
        title: "Who May Be a Good Candidate:",
        desc: "People seeking research-backed peptide support for recovery and vitality goals",
    },
    {
        title: "Clear Guidance",
        desc: "Guidance is designed to support informed, responsible use without relying on random online protocols",
    },
    {
        title: "Optional Upgrade for Deeper Support",
        desc: "For a more personalized approach, you can opt for advanced guidance or additional wellness support options separately",
    },
];

const items = [
    "Sleep quality & overnight recovery support",
    "Cellular energy and recovery optimization",
    "Resilience against oxidative stress and fatigue",
    "Healthy-aging and longevity-focused wellness goals",
    "Mitochondrial function and performance support",
    "Studied for its role in tissue protection and recovery pathways",
];

export default function SS_31() {

    const navigate = useNavigate();
    const { addToCart } = useCart();
    const product = products.ss31;

    return (
        <>
            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">

                        {/* TEXT */}
                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                SS:31
                            </h1>
                            <p className="text font-semibold mt-2">
                                Mitochondrial support designed to help optimize cellular energy and recovery.
                            </p>
                            <p className="text mt-2">
                                SS:31 is researched for its role in supporting mitochondrial function — the energy-producing systems inside your cells. Rather than overstimulating the body, the focus is on improving cellular efficiency, resilience, and recovery support through targeted mitochondrial protection and performance optimization.
                            </p>
                            <Button
                                text="Purchase SS:31 Now"
                                className="mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/cart");
                                }}
                            />
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center">
                            <ImageLoader
                                src="assets/ss-1.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* TITLE */}
                    <h2 className="heading text-center mb-10">
                        What SS:31 is (and what it isn’t)
                    </h2>

                    {/* CARDS WRAPPER */}
                    <div className="grid md:grid-cols-2 gap-6 items-stretch">

                        {/* LEFT CARD */}
                        <div className="bg-white shadow-sm rounded-xl p-6 h-full">
                            <h3 className="font-semibold text-sm mb-4 border-b pb-2 w-fit">
                                What it is:
                            </h3>

                            <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        A mitochondria-targeting peptide studied for cellular energy and recovery support
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Positioned as a wellness and resilience-focused peptide, not a stimulant or quick-fix compound
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="bg-white shadow-sm rounded-xl p-6 h-full">
                            <h3 className="font-semibold text-sm mb-4 border-b pb-2 w-fit">
                                What it isn’t:
                            </h3>

                            <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        A hormone, steroid, or cosmetic filler
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        An instant “anti-aging” solution or overnight transformation product
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="flex justify-center mt-8">
                        <Button
                            text="Purchase SS:31 Now"
                            className="mt-4"
                            onClick={() => {
                                addToCart(product);
                                navigate("/cart");
                            }}
                        />
                    </div>

                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-1 flex justify-center">
                            <ImageLoader
                                src="assets/ss-2.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="order-2 lg:order-2">
                            <h1 className="heading">
                                Potential Benefits
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

                            <Button
                                text="Purchase SS:31 Now"
                                className="mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/cart");
                                }}
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <h2 className="heading text-center mb-10">
                        Who May Be a Good Candidate & Who Should Avoid It
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
                        <Button
                            text="Purchase SS:31 Now"
                            className="mt-4"
                            onClick={() => {
                                addToCart(product);
                                navigate("/cart");
                            }}
                        />
                    </div>

                </div>
            </section>

            <FAQ />

            <CTA />
        </>
    )
}