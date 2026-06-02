import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LanguageModal() {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [disclaimerOpen, setDisclaimerOpen] = useState(false);
    const [offerOpen, setOfferOpen] = useState(false);
    const [email, setEmail] = useState("");

    const [is18Plus, setIs18Plus] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const canContinue = is18Plus && acceptedTerms;

    useEffect(() => {
        const language = localStorage.getItem("language");
        const disclaimer = localStorage.getItem("disclaimerAccepted");
        const offerShown = localStorage.getItem("offerShown");

        if (!language) {
            setLanguageOpen(true);
        } else if (!disclaimer) {
            setDisclaimerOpen(true);
        } else if (!offerShown) {
            setOfferOpen(true);
        }
    }, []);

    const selectLanguage = (lang) => {
        localStorage.setItem("language", lang);

        setLanguageOpen(false);

        if (!localStorage.getItem("disclaimerAccepted")) {
            setDisclaimerOpen(true);
        }
    };

    const acceptDisclaimer = () => {
        localStorage.setItem("disclaimerAccepted", "true");
        setDisclaimerOpen(false);

        if (!localStorage.getItem("offerShown")) {
            setOfferOpen(true);
        }
    };

    const closeOffer = () => {
        localStorage.setItem("offerShown", "true");
        setOfferOpen(false);
    };

    const handleGetCode = () => {
        localStorage.setItem("offerShown", "true");

        // Submit email to API here

        setOfferOpen(false);
    };

    return (
        <>
            {languageOpen && (
                <div className="fixed inset-0 z-52 bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-4">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="w-72 mb-16"
                    />

                    <h2 className="text-(--primary-color) text-xs tracking-[0.5em] mb-10">
                        SELECT YOUR LANGUAGE
                    </h2>

                    <Link
                        to="/"
                        onClick={() => selectLanguage("en")}
                        className="w-full max-w-sm py-4 rounded-full border-2 border-zinc-800 flex items-center justify-center gap-2 mb-4 hover:border-zinc-600 transition"
                    >
                        <span className="font-bold">English</span>
                        <span className="text-zinc-400">
                            — for US visitors
                        </span>
                    </Link>

                    <Link
                        to="/"
                        onClick={() => selectLanguage("es")}
                        className="w-full max-w-sm py-4 rounded-full border-2 border-zinc-800 flex items-center justify-center gap-2 hover:border-zinc-600 transition"
                    >
                        <span className="font-bold">Español</span>
                        <span className="text-zinc-400">
                            — for LATAM visitors
                        </span>
                    </Link>
                </div>
            )}

            {disclaimerOpen && (
                <div className="fixed inset-0 z-52 bg-black/80 flex items-center justify-center px-4">
                    <div className="bg-white text-black max-w-lg w-full rounded-2xl p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Website Access & Product Use Disclaimer
                        </h2>

                        <p className="text-gray-600 mb-6">
                            All products listed, sold, or advertised on this website are intended strictly for laboratory research purposes only. These products are not intended for human or animal consumption, medical use, or for use in any diagnostic, therapeutic, or clinical applications.
                        </p>

                        <p className="text-gray-600 mb-6">
                            Longevity Peptides makes no claims regarding the safety, efficacy, or suitability of any products for any use outside of research purposes.
                        </p>

                        <p className="text-gray-600 mb-6 font-bold">
                            If you do not agree with these terms, please exit this website immediately.
                        </p>

                        <label className="flex items-start gap-3 mb-4 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={is18Plus}
                                onChange={(e) => setIs18Plus(e.target.checked)}
                                className="mt-1 h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                                I confirm I am 18 years of age or older
                            </span>
                        </label>

                        <label className="flex items-start gap-3 mb-6 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={acceptedTerms}
                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                className="mt-1 h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                                I have read and agree to the terms above
                            </span>
                        </label>

                        <button
                            onClick={acceptDisclaimer}
                            disabled={!canContinue}
                            className={`w-full py-3 rounded-full transition ${canContinue
                                    ? "bg-black text-white hover:opacity-90"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            I Accept
                        </button>
                    </div>
                </div>
            )}

            {offerOpen && (
                <div className="fixed inset-0 z-52 bg-black/80 flex items-center justify-center px-4">
                    <div className="relative bg-white max-w-md w-full rounded-3xl p-8 text-center">

                        <button
                            onClick={closeOffer}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl leading-none"
                        >
                            ×
                        </button>

                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            className="w-50 mx-auto mb-4"
                        />

                        <p className="text-[#d4a84f] font-semibold tracking-wider uppercase mb-3">
                            Exclusive Offer
                        </p>

                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Get 5% Off Your First Order
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Enter your email to receive your personal discount code.
                        </p>

                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-200 rounded-full px-6 py-4 mb-4 outline-none"
                        />

                        <button
                            onClick={handleGetCode}
                            className="w-full bg-(--primary-color) hover:opacity-90 text-black font-bold py-4 rounded-full transition"
                        >
                            Get My Code
                        </button>

                        <p className="text-sm text-gray-400 mt-6">
                            One-time use. Valid on your first order only.
                            <br />
                            We respect your privacy. No spam.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}