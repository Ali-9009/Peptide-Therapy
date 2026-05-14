import React, { useMemo, useState } from "react";
import { CreditCard, Lock, MapPin, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";
import Button from "../components/PrimaryBtn";

export default function Checkout() {


    const [delivery, setDelivery] = useState("standard");

    const {
        cartItems,
        removeFromCart,
        updateQty
    } = useCart();

    const items = cartItems;

    const [coupon, setCoupon] = useState("");
    const [applied, setApplied] = useState(false);

    const subtotal = useMemo(
        () =>
            items.reduce(
                (sum, item) => sum + item.price * item.qty,
                0
            ),
        [items]
    );

    const discount = applied ? Math.round(subtotal * 0.12) : 0;
    const shipping = subtotal > 120 ? 0 : 12;
    const total = subtotal - discount + shipping;

    return (
        <div className="px-4 py-8 text-gray-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-white">
                            <ShoppingBag className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Secure checkout</p>
                            <h1 className="text-2xl font-bold tracking-tight">Complete your order</h1>
                        </div>
                    </div>
                    <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm sm:flex">
                        <Lock className="h-4 w-4" />
                        SSL secured
                    </div>
                </header>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    <main className="space-y-6">
                        <CheckoutCard icon={<MapPin className="h-5 w-5" />} title="Shipping information">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="First name" placeholder="Ali" />
                                <Field label="Last name" placeholder="Hasan" />
                                <Field className="sm:col-span-2" label="Email address" placeholder="ali@example.com" type="email" />
                                <Field className="sm:col-span-2" label="Address" placeholder="Street address" />
                                <Field label="City" placeholder="Karachi" />
                                <Field label="Postal code" placeholder="74000" />
                                <Field label="Country" placeholder="Pakistan" />
                                <Field label="Phone" placeholder="+92 300 0000000" />
                            </div>
                        </CheckoutCard>

                        <CheckoutCard icon={<Truck className="h-5 w-5" />} title="Delivery method">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <DeliveryOption
                                    title="Standard"
                                    description="3-5 business days"
                                    price="$5"
                                    active={delivery === "standard"}
                                    onClick={() => setDelivery("standard")}
                                />
                                <DeliveryOption
                                    title="Express"
                                    description="1-2 business days"
                                    price="$14"
                                    active={delivery === "express"}
                                    onClick={() => setDelivery("express")}
                                />
                            </div>
                        </CheckoutCard>

                        <CheckoutCard icon={<CreditCard className="h-5 w-5" />} title="Payment details">
                            <div className="grid gap-4">
                                <Field label="Name on card" placeholder="Ali Hasan" />
                                <Field label="Card number" placeholder="4242 4242 4242 4242" />
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="Expiry" placeholder="MM/YY" />
                                    <Field label="CVC" placeholder="123" />
                                </div>
                            </div>
                        </CheckoutCard>
                    </main>

                    <aside className="sticky top-24 h-fit rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                        <h2 className="text-lg font-semibold">Order summary</h2>

                        <div className="mt-5 space-y-4">
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
                                            <p className="mt-1 text-sm text-gray-500">Qty {item.qty}</p>
                                        </div>
                                        <p className="font-semibold">${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-3 border-t border-gray-200 pt-5 text-sm">
                            <PriceRow label="Subtotal" value={`$${subtotal}`} />
                            <PriceRow label="Shipping" value={`$${shipping}`} />
                            <PriceRow label="Discount" value={`-$${discount}`} muted={discount === 0} />
                            <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-bold">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                        </div>

                        
                        <Button className="mt-4" text="Place order" to="/" />

                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <ShieldCheck className="h-4 w-4" />
                            Safe and encrypted payment
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

function CheckoutCard({ icon, title, children }) {
    return (
        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100 text-gray-700">
                    {icon}
                </div>
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            {children}
        </section>
    );
}

function Field({ label, placeholder, type = "text", className = "" }) {
    return (
        <label className={`block ${className}`}>
            <span className="mb-2 block text-sm font-medium text-gray-700">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400"
            />
        </label>
    );
}

function DeliveryOption({ title, description, price, active, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-2xl border p-4 text-left transition ${active
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                }`}
        >
            <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">{title}</span>
                <span className="font-semibold">{price}</span>
            </div>
            <p className={`mt-1 text-sm ${active ? "text-gray-300" : "text-gray-500"}`}>{description}</p>
        </button>
    );
}

function PriceRow({ label, value }) {
    return (
        <div className="flex justify-between text-gray-600">
            <span>{label}</span>
            <span className="font-medium text-gray-900">{value}</span>
        </div>
    );
}
