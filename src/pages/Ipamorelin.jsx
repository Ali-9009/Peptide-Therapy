import { CheckCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { products } from "../product/data";

import Button from "../components/PrimaryBtn";
import CTA from "../components/Cta";
import FAQ from "../components/Faq";
import ImageLoader from "../components/ImageLoader";

import {
    ShieldCheck,
    Truck,
    RotateCcw,
    Lock,
} from "lucide-react";


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

    const navigate = useNavigate();
    const { addToCart } = useCart();
    // const product = products.ipa;
    const product = products.find(
        p => p.slug === "ipamorelin"
    );

    return (
        <>
            <section className="md:py-12 py-6 px-4">
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
                            <Button
                                text="Purchase Ipamorelin Now"
                                className="mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/cart");
                                }}
                            />
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center w-full">
                            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-300">
                                {/* Product Image */}
                                <div className="overflow-hidden rounded-xl mb-4">
                                    <ImageLoader
                                        src={product.image}
                                        alt={product.name}
                                        className="w-90 h-auto"
                                    />
                                </div>

                                {/* Price Section */}
                                <div className="flex items-center justify-between mb-5 gap-4">
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">
                                            {product.name}
                                        </p>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <div className="flex items-end justify-end gap-1">
                                            <span className="text-xl font-bold text-slate-900">
                                                ${product.price}
                                            </span>
                                            <span className="text-sm text-slate-500 mb-0.5">
                                                USD
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <button onClick={() => {
                                    addToCart(product);
                                    navigate("/cart");
                                }}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold flex items-center justify-center gap-2 transition">
                                    <Lock size={18} />
                                    Add To Cart
                                </button>

                                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-500">
                                    <ShieldCheck size={14} />
                                    <span>100% Secure Checkout</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

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
                            text="Purchase Ipamorelin Now"
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

                            <Button
                                text="Purchase Ipamorelin Now"
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

            <FAQ />

            <CTA />
        </>
    )
}