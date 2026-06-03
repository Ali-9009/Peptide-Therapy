import { Minus } from "lucide-react";
import { useState } from "react";
import Card from "./Card";

const consents = [
    {
        title: "Compounding Pharmacy Disclaimer",
        description:
            "I understand that the medications I am ordering are compounded medications prepared by a licensed compounding pharmacy, and that compounded medications are not FDA-approved.",
    },
    {
        title: "Telehealth Consent",
        description:
            "I consent to receiving telehealth services and understand that a qualified healthcare provider may review my order.",
    },
    {
        title: "HIPAA Acknowledgment",
        description:
            "I acknowledge that I have read and understand the Notice of Privacy Practices (HIPAA) and consent to the use and disclosure of my health information as described.",
    },
    {
        title: "Terms of Service",
        description:
            "I agree to the Terms of Service and understand the policies regarding orders, shipping, returns, and refunds.",
    },
];

const questions = [
    ["Do you currently have cancer?", "Including any active diagnosis or ongoing treatment"],
    ["Do you have a thyroid condition?", "Hypothyroidism, hyperthyroidism, Hashimoto's, Graves' disease, or other"],
    ["Are you currently taking any medications?", "Prescription, over-the-counter, or supplements"],
    ["Is this your first time taking peptides?", "Including any prior peptide therapy or self-administered use"],
    ["Do you have any known allergies?", "Medications, foods, substances, or environmental"],
];

export default function CheckoutSteps() {
    const [step, setStep] = useState(1);

    const steps = [
        "Verify Phone",
        "Your Info",
        "Health Screening",
        "Review & Pay",
    ];

    return (
        <div className="max-w-5xl mx-auto">

            {/* Stepper */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
                {steps.map((label, index) => {
                    const current = index + 1;
                    const active = current === step;
                    const completed = current < step;

                    return (
                        <div key={label} className="flex items-center">
                            <div
                                className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium transition
                                ${active
                                        ? "bg-blue-100 text-blue-600"
                                        : completed
                                            ? "bg-green-100 text-green-600"
                                            : "text-gray-500"
                                    }`}
                            >
                                <span>{current}.</span>
                                <span>{label}</span>
                            </div>

                            {current !== steps.length && (
                                <span className="mx-2 text-gray-400"><Minus /></span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Order Summary */}
            {/* <div className="rounded-2xl border border-gray-200 p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">
                    Order Summary
                </h2>

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="font-medium">
                            Retatrutide Injectable 20mg/mL (1mL vial)
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Qty: 1
                        </p>
                    </div>

                    <p className="font-semibold">$230.00</p>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between text-gray-600 mb-2">
                    <span>Subtotal</span>
                    <span>$230.00</span>
                </div>

                <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>$230.00</span>
                </div>
            </div> */}

            {/* STEP 1 */}
            {step === 1 && (
                <div className="rounded-xl border border-gray-200 md:p-6 p-4">
                    <h2 className="md:text-2xl text-xl font-bold mb-2">
                        Verify Your Phone
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Enter your phone number to continue.
                    </p>

                    <label className="block text-sm font-medium mb-2">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
                    />

                    <button
                        onClick={() => setStep(2)}
                        className="w-full rounded-lg bg-blue-500 py-3 text-white font-semibold"
                    >
                        Send Verification Code
                    </button>
                </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <>
                    <div className="rounded-xl border border-gray-200 md:p-6 p-4 mb-8">
                        <h2 className="md:text-2xl text-xl font-bold mb-6">
                            Personal Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                placeholder="First Name"
                                className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />

                            <input
                                placeholder="Last Name"
                                className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />

                            <input
                                placeholder="Email Address"
                                className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />

                            <input
                                placeholder="Date of Birth"
                                className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 md:p-6 p-4 mb-8">
                        <h2 className="md:text-2xl text-xl font-bold mb-6">
                            Shipping Address
                        </h2>

                        <div className="grid gap-4">
                            <input
                                placeholder="Street Address"
                                className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />

                            <input
                                placeholder="Apartment, Suite, Unit, etc. (Optional)"
                                className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                            />

                            <div className="grid md:grid-cols-3 gap-4">
                                <input
                                    placeholder="City"
                                    className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                                />

                                <input
                                    placeholder="State / Province"
                                    className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                                />

                                <input
                                    placeholder="ZIP / Postal Code"
                                    className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 md:p-6 p-4">
                        <h2 className="md:text-2xl text-xl font-bold mb-6">
                            Required Consents
                        </h2>

                        <div className="space-y-4">
                            {consents.map((consent, index) => (
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        className="mt-1 w-4 h-4 shrink-0"
                                    />

                                    <div>
                                        <div className="text-md font-medium text-gray-800">
                                            {consent.title}
                                        </div>

                                        <p className="mt-1 text-sm leading-5 text-gray-500">
                                            {consent.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between mt-6">
                            <button
                                onClick={() => setStep(1)}
                                className="px-5 py-3 border border-gray-300 rounded-lg"
                            >
                                Back
                            </button>

                            <button
                                onClick={() => setStep(3)}
                                className="px-5 py-3 bg-blue-500 text-white rounded-lg"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <div className="rounded-2xl border border-gray-200 md:p-6 p-4">
                    <h2 className="md:text-2xl text-xl font-bold mb-6">Health Screening</h2>

                    <div className="mt-5 space-y-5">
                        <div>
                            <label className="mb-2 block text-md text-gray-700">
                                Biological sex
                            </label>

                            <div className="grid grid-cols-2 gap-3">
                                <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-md font-medium text-gray-700">
                                    Male
                                </button>
                                <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-md font-medium text-gray-700">
                                    Female
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="mb-2 block text-md text-gray-700">
                                    Height
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    <select className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-md text-gray-500">
                                        <option>ft</option>
                                    </select>
                                    <select className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-md text-gray-500">
                                        <option>in</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-md text-gray-700">
                                    Weight (lbs)
                                </label>
                                <input
                                    type="number"
                                    placeholder="165"
                                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-md text-gray-700 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {questions.map(([title, description]) => (
                                <div
                                    key={title}
                                    className="flex items-center justify-between gap-4 py-4"
                                >
                                    <div>
                                        <p className="text-md font-semibold text-gray-800">{title}</p>
                                        <p className="mt-1 text-sm text-gray-500">{description}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-500">
                                            Yes
                                        </button>
                                        <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-500">
                                            No
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={() => setStep(2)}
                            className="px-5 py-3 border border-gray-300 rounded-lg"
                        >
                            Back
                        </button>

                        <button
                            onClick={() => setStep(4)}
                            className="px-5 py-3 bg-blue-500 text-white rounded-lg"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 4 */}
            {step === 4 && <Card /> }
        </div>
    );
}