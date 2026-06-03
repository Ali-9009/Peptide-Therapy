import { useMemo, useState } from "react";
import { ShieldCheck, Truck, Tag, ShoppingBag } from "lucide-react";
import Button from "../components/PrimaryBtn";
import { useCart } from "../context/CartContext";
import CheckoutSteps from "../components/CheckoutSteps";

export default function Checkout2() {
    const { cartItems } = useCart();

    const [coupon, setCoupon] = useState("");
    const [applied, setApplied] = useState(false);

    const subtotal = useMemo(
        () =>
            cartItems.reduce(
                (sum, item) => sum + item.price * item.qty,
                0
            ),
        [cartItems]
    );

    const discount = applied ? Math.round(subtotal * 0.12) : 0;
    const shipping = subtotal > 120 ? 0 : 12;
    const total = subtotal - discount + shipping;
    
    return (
        <main className="min-h-screen px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <nav className="mb-8 flex items-center justify-between rounded-xl border border-gray-200 px-5 py-4 shadow-sm ">
                    <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-linear-to-br from-blue-600 to-emerald-500 text-white shadow-lg shadow-blue-500/20">
                            <ShoppingBag size={22} />
                        </div>
                        <div>
                            <p className="text-lg font-bold tracking-tight">Prolongevity</p>
                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">Peptides</p>
                        </div>
                    </div>

                    <Button to="/" className="hidden sm:block" text="Continue Shopping" />
                </nav>

                <section className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">Secure checkout</p>
                    <h1 className="heading">Checkout</h1>
                </section>

                <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
                    <section className="space-y-4">
                        <CheckoutSteps />
                    </section>

                    <aside className="lg:sticky lg:top-22 lg:self-start">
                        <div className="rounded-xl p-4 shadow-md ring-1 ring-gray-200">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="md:text-2xl text-xl font-semibold">Order Summary</h2>
                                <span className="rounded-full px-3 py-1 text-xs font-bold bg-lime-300/30 text-lime-500">Protected</span>
                            </div>

                            <div className="space-y-4 border-b border-white/10 pb-5 text-sm">
                                <SummaryRow label="Subtotal" value={`$${subtotal}`} />
                                <SummaryRow label="Discount" value={`-$${discount}`} muted={discount === 0} />
                                <SummaryRow label="Shipping" value={shipping === 0 ? "Free" : `$${shipping}`} />
                            </div>

                            <div className="my-5 flex items-center justify-between">
                                <span className="text-base font-semibold">Total</span>
                                <span className="text-4xl font-black">${total}</span>
                            </div>

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
            <span className="">{label}</span>
            <span className={`font-bold ${muted ? "text-gray-800" : "text-black"}`}>{value}</span>
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
