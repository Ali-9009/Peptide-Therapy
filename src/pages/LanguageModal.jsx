import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LanguageModal() {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [disclaimerOpen, setDisclaimerOpen] = useState(false);

    useEffect(() => {
        const language = localStorage.getItem("language");
        const disclaimer = localStorage.getItem("disclaimerAccepted");

        if (!language) {
            setLanguageOpen(true);
        } else if (!disclaimer) {
            setDisclaimerOpen(true);
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
    };

    return (
        <>
            {/* LANGUAGE MODAL */}
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

            {/* DISCLAIMER MODAL */}
            {disclaimerOpen && (
                <div className="fixed inset-0 z-52 bg-black/80 flex items-center justify-center px-4">
                    <div className="bg-white text-black max-w-lg w-full rounded-2xl p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Disclaimer
                        </h2>

                        <p className="text-gray-600 mb-6">
                            By using this website, you acknowledge and agree
                            to our terms, conditions, and privacy policy.
                            Please read all information carefully before
                            continuing.
                        </p>

                        <button
                            onClick={acceptDisclaimer}
                            className="w-full bg-black text-white py-3 rounded-full hover:opacity-90 transition"
                        >
                            I Accept
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}