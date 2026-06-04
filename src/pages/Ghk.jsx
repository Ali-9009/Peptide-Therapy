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
        title: "Who May Be a Good Candidate:",
        desc: "You purchase through a secure checkout and confirm key basics.",
    },
    {
        title: "Clear Guidance",
        desc: "You receive safety considerations and usage guidance at checkout (without relying on random online protocols).",
    },
    {
        title: "Optional Upgrade for Deeper Support",
        desc: "For a more personalized approach, you can opt for advanced guidance or screening as separate options.",
    },
];


const items = [
    "Smoother texture and more even-looking tone",
    "Firmer-looking skin and improved elasticity",
    "Reduced appearance of fine lines",
    "Better-looking recovery after irritation or “stressed” skin",
    "Scalp and hair support (for fuller-looking, healthier hair routines)",
];

const items2 = [
    "Collagen-support pathways tied to firmer-looking skin",
    "Skin texture and elasticity (a smoother, more resilient look)",
    "Appearance of fine lines (softening the look over time)",
    "Barrier and recovery support after visible stress or irritation",
    "Antioxidant and inflammation-related support for calmer-looking skin",
    "Improved look of skin quality (overall “healthier” appearance)",
    "Scalp and hair routine support for fuller-looking hair (evidence varies)",
];

const items3 = [
    "Not an FDA-approved medication for treating diseases",
    "If used topically, some people may experience irritation, redness, or sensitivity",
    "Copper sensitivity/allergy: avoid if you’ve reacted to copper compounds before",
    "Copper metabolism conditions: if you have conditions involving copper accumulation (or significant liver concerns), avoid unless cleared by a clinician",
    "Avoid self-experimentation with non-topical routes—quality and oversight matter",
    "Individual response varies based on skin type, routine, and health history",
];

export default function GHK_CU() {

    const navigate = useNavigate();
    const { addToCart } = useCart();
    // const product = products.ghk;
    const product = products.find(
        p => p.slug === "ghk-cu"
    );

    return (
        <>
            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4">

                        {/* TEXT */}
                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                {product.name}
                            </h1>

                            <p className="text font-semibold mt-2">
                                Aesthetic recovery for skin and hair available for direct purchase.
                            </p>
                            <p className="text mt-2">
                                GHK-Cu is primarily used to support skin renewal and visible skin quality especially firmness, texture, and the appearance of fine lines by supporting collagen-related pathways and overall skin recovery. It’s widely recognized in advanced skincare for its “repair forward” positioning and is often chosen when you want results that look natural, not overdone.
                            </p>
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
                                    navigate("/checkout");
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

                    {/* TITLE */}
                    <h2 className="heading text-center mb-10">
                        What GHK-Cu is (and what it isn’t)
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
                                        GHK-Cu is a copper-binding tripeptide (often called “Copper Peptide” or “Copper Tripeptide-1” in skincare)
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Studied for its role in skin repair signaling, antioxidant support, and tissue remodeling pathways
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
                                        A filler, a toxin, or a hormone
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Positioned as a skin-recovery peptide, not an instant cosmetic procedure
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-1 flex justify-center">
                            <ImageLoader
                                src="assets/ghk-2.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="order-2 lg:order-2">
                            <h1 className="heading">
                                Why do people choose GHK-Cu
                            </h1>
                            <p className="text font-semibold mt-2">Most customers aren’t searching for a peptide—they’re searching for improvements like:</p>

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


                            <p className="text">
                                GHK-Cu is often chosen when your skincare routine feels “stuck” and you want a more regenerative, recovery-based approach.
                            </p>
                            <Button
                                text="Purchase GHK-Cu Now"
                                className="mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/checkout");
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
                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-2 flex justify-center">
                            <ImageLoader
                                src="assets/ghk-3.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="order-2 lg:order-1">
                            <h1 className="heading">
                                Potential Benefits of GHK-Cu
                            </h1>
                            <p className="text font-semibold mt-2">These are common goals people associate with GHK-Cu. Outcomes vary and are not guaranteed. GHK-Cu may be explored to support:</p>

                            <div className="py-2">
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


                            <p className="text">
                                Important: These are potential benefits based on available research and cosmetic/clinical discussion—not guaranteed outcomes.
                            </p>
                            
                            <Button
                                text="Purchase GHK-Cu Now"
                                className="mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/checkout");
                                }}
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                        <div className="order-1 lg:order-1 flex justify-center">
                            <ImageLoader
                                src="assets/ghk-4.png"
                                alt="cover image"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="order-2 lg:order-2">
                            <h1 className="heading">
                                Safety & What to Know Before You Buy
                            </h1>
                            <p className="text font-semibold mt-2">We keep this section clear because it builds trust and reduces chargebacks. Practical safety considerations include:</p>

                            <div className="py-2">
                                {items3.map((text, i) => (
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


                            <p className="text">
                                Tested athletes: GHK-Cu isn’t positioned as a performance drug, but if you’re tested, it’s still smart to check your governing body’s current rules and ingredient policies.
                            </p>
                            <Button
                                text="Purchase GHK-Cu Now"
                                className="mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    navigate("/checkout");
                                }}
                            />
                        </div>

                    </div>

                </div>
            </section>

            <section className="md:py-12 py-6 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* TITLE */}
                    <h2 className="heading text-center mb-10">
                        Who may be a good candidate & who should avoid It
                    </h2>

                    {/* CARDS WRAPPER */}
                    <div className="grid md:grid-cols-2 gap-6 items-stretch">

                        {/* LEFT CARD */}
                        <div className="bg-white shadow-sm rounded-xl p-6 h-full">
                            <h3 className="font-semibold text-sm mb-4 border-b pb-2 w-fit">
                                Who May Be a Good Candidate:
                            </h3>

                            <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Want firmer-looking, healthier-looking skin with a natural finish
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Are focused on recovery-based skincare, not harsh “strip and peel” cycles
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Want support for texture, fine lines, and overall skin quality
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Want a scalp/hair-support option as part of a broader routine
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="bg-white shadow-sm rounded-xl p-6 h-full">
                            <h3 className="font-semibold text-sm mb-4 border-b pb-2 w-fit">
                                Who Should Avoid It (or Require Strict Medical Oversight):
                            </h3>

                            <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Pregnant or breastfeeding
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Under 18
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Known copper metabolism disorders or significant liver concerns (clinician clearance recommended)
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Known allergy to copper compounds or severe sensitivity-prone skin (unless cleared)
                                    </span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle className="text-blue-600 w-4 h-4 mt-1 shrink-0" />
                                    <span className="text">
                                        Anyone planning to self-source unverified products online
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <FAQ />

            <CTA />
        </>
    )
}