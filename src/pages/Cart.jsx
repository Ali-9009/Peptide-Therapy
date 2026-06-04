import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Minus,
    Plus,
    Trash2,
    ShieldCheck,
    Truck,
    Tag,
    ShoppingBag,
    Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/PrimaryBtn";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cartItems, removeFromCart, updateQty, } = useCart();
    const navigate = useNavigate();

    const items = cartItems;

    const [coupon, setCoupon] = useState("");
    const [applied, setApplied] = useState(false);

    const [phone, setPhone] = useState("");
    const [verificationError, setVerificationError] = useState("");

    const subtotal = useMemo(
        () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
        [items]
    );

    const discount = applied ? Math.round(subtotal * 0.12) : 0;
    const shipping = subtotal > 120 ? 0 : 12;
    const total = subtotal - discount + shipping;

    const validatePhone = (value) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(value);
    };

    const handleSendCode = () => {
        setVerificationError("");

        const cleanPhone = phone.trim();

        if (!cleanPhone) {
            setVerificationError("Please enter your phone number.");
            return;
        }

        if (!validatePhone(cleanPhone)) {
            setVerificationError("Enter a valid phone number, 10 to 15 digits only.");
            return;
        }

        navigate("/checkout2");
    };

    return (
        <main className="min-h-screen px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <nav className="mb-8 flex items-center justify-between rounded-xl border border-gray-200 px-5 py-4 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br from-blue-600 to-emerald-500 text-white shadow-lg shadow-blue-500/20">
                            <ShoppingBag size={22} />
                        </div>
                        <div>
                            <p className="text-lg font-bold tracking-tight">Prolongevity</p>
                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                                Peptides
                            </p>
                        </div>
                    </div>

                    <Button to="/" className="hidden sm:block" text="Continue Shopping" />
                </nav>

                <section className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                        Secure checkout
                    </p>
                    <h1 className="heading">Your Cart</h1>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Review your selected products, apply a promo code, verify your phone
                        number, and checkout securely.
                    </p>
                </section>

                <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
                    <section className="space-y-4">
                        {items.length === 0 ? (
                            <div className="rounded-xl border border-gray-200 p-10 text-center shadow-sm hover:shadow-md duration-300">
                                <ShoppingBag className="mx-auto mb-4 text-slate-400" size={44} />
                                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                                <p className="mt-2 text-slate-500">Add products to see them here.</p>
                            </div>
                        ) : (
                            items.map((item, index) => (
                                <motion.article
                                    key={item.id}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    className="group overflow-hidden rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md duration-300 sm:p-5"
                                >
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                        <div className="relative h-46 w-full overflow-hidden rounded-xl bg-slate-100 sm:h-38 sm:w-38">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                <div>
                                                    <h2 className="text-xl font-extrabold tracking-tight">
                                                        {item.name}
                                                    </h2>
                                                    <p className="mt-1 text-sm text-slate-500">
                                                        {item.subtitle}
                                                    </p>
                                                    <span className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                                                        In stock
                                                    </span>
                                                </div>
                                                <p className="text-2xl font-black text-slate-950">
                                                    ${item.price}
                                                </p>
                                            </div>

                                            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                                                    <button
                                                        onClick={() => updateQty(item.id, -1)}
                                                        className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100"
                                                    >
                                                        <Minus size={16} />
                                                    </button>

                                                    <span className="w-10 text-center text-sm font-bold">
                                                        {item.qty}
                                                    </span>

                                                    <button
                                                        onClick={() => updateQty(item.id, 1)}
                                                        className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-slate-100"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
                                                >
                                                    <Trash2 size={16} /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))
                        )}
                    </section>

                    <aside className="lg:sticky lg:top-22 lg:self-start">

                        <div className="rounded-xl p-4 shadow-md ring-1 ring-gray-200">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Order Summary</h2>
                                <span className="rounded-full px-3 py-1 text-xs font-bold bg-lime-300/30 text-lime-500">
                                    Protected
                                </span>
                            </div>

                            <div className="my-6 space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-20 w-20 rounded-2xl object-cover ring-1 ring-gray-200"
                                        />

                                        <div className="flex flex-1 justify-between gap-3">
                                            <div>
                                                <h3 className="font-medium leading-snug">{item.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500">{item.variant}</p>

                                                <div className="mt-3 flex items-center gap-3">
                                                    <div className="flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                                                        <button
                                                            onClick={() => updateQty(item.id, -1)}
                                                            className="grid h-7 w-7 place-items-center rounded-full transition hover:bg-slate-100"
                                                        >
                                                            <Minus size={14} />
                                                        </button>

                                                        <span className="w-8 text-center text-sm font-bold">
                                                            {item.qty}
                                                        </span>

                                                        <button
                                                            onClick={() => updateQty(item.id, 1)}
                                                            className="grid h-7 w-7 place-items-center rounded-full transition hover:bg-slate-100"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-rose-600 transition hover:text-rose-700"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>

                                            <p className="font-semibold">${item.price * item.qty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 border-b border-gray-300 pb-5 text-sm">
                                <SummaryRow label="Subtotal" value={`$${subtotal}`} />
                                <SummaryRow label="Discount" value={`-$${discount}`} muted={discount === 0} />
                                <SummaryRow label="Shipping" value={shipping === 0 ? "Free" : `$${shipping}`} />
                            </div>

                            <div className="my-5 flex items-center justify-between">
                                <span className="text-base font-semibold">Total</span>
                                <span className="text-4xl font-black">${total}</span>
                            </div>

                            <div className="mb-4 rounded-2xl p-2">
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Tag className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <input
                                            value={coupon}
                                            onChange={(event) => setCoupon(event.target.value)}
                                            placeholder="Promo code"
                                            className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 pl-10 text-sm outline-none placeholder:text-gray-400"
                                        />
                                    </div>
                                    <button
                                        onClick={() => setApplied(Boolean(coupon.trim()))}
                                        className="rounded-md bg-slate-800 px-4 py-3 text-sm font-bold text-white"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="mb-5 rounded-2xl border border-gray-200 p-3">
                                <p className="mb-3 text-sm font-bold">Phone Verification</p>

                                <div className="mb-3 flex gap-2">
                                    <div className="relative flex-1">
                                        <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value.replace(/\D/g, ""));
                                            }}
                                            placeholder="Enter phone number"
                                            className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 pl-10 text-sm outline-none placeholder:text-gray-400"
                                        />
                                    </div>

                                    <button
                                        onClick={handleSendCode}
                                        className="rounded-md bg-blue-600 px-4 py-3 text-sm font-bold text-white"
                                    >
                                        Send
                                    </button>
                                </div>

                                {verificationError && (
                                    <p className="text-sm font-semibold text-rose-600">
                                        {verificationError}
                                    </p>
                                )}
                            </div>

                            {items.length === 0 ? (
                                <button
                                    disabled
                                    className="w-full rounded-md bg-gray-300 px-4 py-3 font-bold text-gray-600"
                                >
                                    Cart is Empty
                                </button>
                            ) : (
                                <Button to="/checkout2" text="Checkout Now" />
                            )}

                            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                <TrustItem icon={ShieldCheck} title="Secure payment" text="Encrypted checkout experience." />
                                <TrustItem icon={Truck} title="Fast fulfillment" text="Packed carefully for delivery." />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

function SummaryRow({ label, value, muted }) {
    return (
        <div className="flex items-center justify-between">
            <span>{label}</span>
            <span className={`font-bold ${muted ? "text-gray-800" : "text-black"}`}>
                {value}
            </span>
        </div>
    );
}

function TrustItem({ icon: Icon, title, text }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime-300/30 text-lime-500">
                <Icon size={20} />
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p className="mt-1 text-sm text-gray-700">{text}</p>
            </div>
        </div>
    );
}