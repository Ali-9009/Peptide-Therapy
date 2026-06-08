import { Minus } from "lucide-react";
import { useState } from "react";
import Card from "./Card";
import { Phone, ShieldCheck } from "lucide-react";
import Button from "./PrimaryBtn";

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

export default function CheckoutSteps({ items = [] }) {

    const [step, setStep] = useState(1);
    const [cartError, setCartError] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [isSending, setIsSending] = useState(false);

    const [codeSent, setCodeSent] = useState(false);
    const [otp, setOtp] = useState("");

    const validatePhone = (value) => {
        const cleanValue = value.replace(/\D/g, "");

        if (!cleanValue) return "Phone number is required.";
        if (cleanValue.length < 10) return "Phone number must be at least 10 digits.";
        if (cleanValue.length > 15) return "Phone number cannot exceed 15 digits.";

        return "";
    };

    const handleSendCode = () => {
        if (items.length === 0) {
            setCartError("Please select at least one product before verifying your phone.");
            return;
        }

        setCartError("");

        const error = validatePhone(phone);

        if (error) {
            setPhoneError(error);
            return;
        }

        setPhoneError("");
        setIsSending(true);

        setTimeout(() => {
            setIsSending(false);
            setCodeSent(true); // show OTP field
        }, 800);
    };

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
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="border-b border-gray-100 p-6">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Verify Your Phone
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            We'll send a one-time verification code to secure your order and keep
                            you updated about shipping.
                        </p>
                    </div>

                    <div className="p-6">
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            Phone Number
                        </label>

                        <div className="relative">
                            <Phone
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    setPhoneError("");
                                }}
                                onBlur={() => setPhoneError(validatePhone(phone))}
                                placeholder="+1 (555) 123-4567"
                                className={`w-full rounded-xl border bg-white py-3 pl-12 pr-4 text-slate-900 outline-none transition-all ${phoneError
                                    ? "border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                                    : "border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                    }`}
                            />
                        </div>

                        {phoneError ? (
                            <p className="mt-2 text-sm font-medium text-rose-600">
                                {phoneError}
                            </p>
                        ) : (
                            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                <ShieldCheck size={16} className="text-emerald-500" />
                                <span>Your information is encrypted and secure.</span>
                            </div>
                        )}
                        {cartError && (
                            <p className="mt-2 text-sm font-medium text-rose-600">
                                {cartError}
                            </p>
                        )}

                        
                        {!codeSent && (
                            <Button
                                text={
                                    items.length === 0
                                        ? "Select Product First"
                                        : isSending
                                            ? "Sending Code..."
                                            : "Send Verification Code"
                                }
                                className="w-full mt-2"
                                onClick={handleSendCode}
                                disabled={isSending || items.length === 0}
                            />
                        )}

                        {codeSent && (
                            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Enter Verification Code
                                </label>

                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="6-digit code"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                />

                                <Button
                                    text="Verify & Continue"
                                    className="w-full mt-3"
                                    onClick={() => setStep(2)}
                                />

                                <button
                                    type="button"
                                    onClick={handleSendCode}
                                    className="mt-3 w-full text-sm font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    Resend code
                                </button>
                            </div>
                        )}

                        

                    </div>
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
                                className="px-5 py-2 border border-gray-300 rounded-full"
                            >
                                Back
                            </button>

                            <Button onClick={() => setStep(3)} text="Continue" />
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
                            className="px-5 py-2 border border-gray-300 rounded-full"
                        >
                            Back
                        </button>

                        <Button onClick={() => setStep(4)} text="Continue" />
                    </div>
                </div>
            )}

            {/* STEP 4 */}
            {step === 4 && <Card />}
        </div>
    );
}