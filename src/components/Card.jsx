import { useState } from "react";
import { CreditCard, Bitcoin, Copy } from "lucide-react";
import Button from "../components/PrimaryBtn"

export default function Card() {
    const [paymentType, setPaymentType] = useState("crypto");

    return (
        <main className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-6 text-lg font-bold text-gray-600">
                Please Select Payment Method
            </h2>

            <div className="mb-10 flex gap-10">
                <label className="flex cursor-pointer items-center gap-3">
                    <input
                        type="radio"
                        checked={paymentType === "crypto"}
                        onChange={() => setPaymentType("crypto")}
                    />
                    <Bitcoin className="text-orange-500" size={34} />
                    <span className="font-semibold text-sm text-gray-600">Cryptocurrency</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                    <input
                        type="radio"
                        checked={paymentType === "card"}
                        onChange={() => setPaymentType("card")}
                    />
                    <CreditCard className="text-blue-600" size={34} />
                    <span className="font-semibold text-sm text-gray-600">Card</span>
                </label>
            </div>

            {paymentType === "crypto" ? <CryptoPayment /> : <CardPayment />}
        </main>
    );
}

function CryptoPayment() {
    const walletAddress = "cGIsPPKwqazBuESModAtCjesZXGTLyu";

    return (
        <>
            <div className="mb-10 grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-600">
                        Please Send to Address
                    </h3>

                    <div className="flex items-center gap-3">
                        <p className="border-b border-gray-400 pb-2 text-sm font-semibold text-purple-700">
                            {walletAddress}
                        </p>

                        <button
                            onClick={() => navigator.clipboard.writeText(walletAddress)}
                            className="flex items-center gap-1 text-sm text-gray-500"
                        >
                            <Copy size={16} />
                            Copy
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 text-lg font-bold text-gray-600">
                        Payment Frequency
                    </h3>

                    <select className="w-full border border-gray-300 px-4 py-3 text-gray-600">
                        <option>Monthly</option>
                        <option>One Time</option>
                        <option>Weekly</option>
                    </select>
                </div>
            </div>

            <div className="grid items-start md:gap-6  md:grid-cols-2">
                <div>
                    <h3 className="mb-5 text-lg font-bold text-gray-600">
                        Or Scan QR Code
                    </h3>

                    <div className="relative flex h-72 w-72 items-center justify-center bg-white">
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=bitcoin:cGIsPPKwqazBuESModAtCjesZXGTLyu"
                            alt="Crypto QR Code"
                            className="h-64 w-64"
                        />

                        <div className="absolute rounded-full bg-orange-400 p-4 text-white">
                            <Bitcoin size={44} />
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="bg-blue-50 p-8">
                        <p className="mb-2 text-lg font-bold text-gray-600">Total</p>
                        <p className="mb-10 text-2xl font-bold text-gray-700">50.00 GBP</p>

                        <p className="mb-2 text-lg font-bold text-gray-600">Amount</p>
                        <p className="text-2xl font-bold text-gray-700">
                            0.00118497 BTC
                        </p>
                    </div>

                    <button className="w-full bg-purple-800 py-4 text-lg font-bold text-white">
                        Open in Wallet
                    </button>
                </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-blue-50 px-8 py-4 text-lg font-bold text-gray-600">
                <Button text="Checkout" />

                <span>Time Remaining: 15:32</span>

                <span>1 BTC = 42,142.11 GBP</span>
            </div>
        </>
    );
}

function CardPayment() {
    return (
        <div className="mx-auto max-w-xl">
            <h3 className="mb-5 text-lg font-bold text-gray-600">
                Card Payment
            </h3>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full rounded border border-gray-300 px-4 py-3 outline-none"
                />

                <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full rounded border border-gray-300 px-4 py-3 outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full rounded border border-gray-300 px-4 py-3 outline-none"
                    />

                    <input
                        type="text"
                        placeholder="CVV"
                        className="w-full rounded border border-gray-300 px-4 py-3 outline-none"
                    />
                </div>

                <button className="w-full rounded bg-blue-600 py-4 font-bold text-white">
                    Pay Now
                </button>
            </div>
        </div>
    );
}