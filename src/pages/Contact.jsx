import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";


export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <main className="min-h-screen text-zinc-950">
            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:py-24">
                <div className="flex flex-col justify-between gap-10">
                    <div>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
                            Contact us
                        </p>
                        <h1 className="heading">
                            Let’s Grab.
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600">
                            Have a project, partnership, or question in mind? Send a note and
                            we’ll get back with a clear next step.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <InfoItem icon={<Mail size={18} />} label="Email" value="info@gmail.com" />
                        <InfoItem icon={<Phone size={18} />} label="Phone" value="+1 (555) 240-0188" />
                        <InfoItem icon={<MapPin size={18} />} label="Office" value="125 Mercer Street, New York" />
                        <InfoItem icon={<Clock size={18} />} label="Hours" value="Mon–Fri, 9:00 AM – 6:00 PM" />
                    </div>
                </div>

                <div className="rounded-3xl border border-zinc-200/80 bg-white shadow-[0_24px_80px_rgba(24,24,27,0.08)]">
                    <div className="p-6 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <Field
                                    label="First Name"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="Jane"
                                />

                                <Field
                                    label="Last Name"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Cooper"
                                />

                                <Field
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@email.com"
                                />

                                <Field
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+1 234 567 890"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-zinc-800">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={7}
                                    placeholder="Tell us a little about what you need..."
                                    className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-zinc-100"
                                />
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm leading-6 text-zinc-500">
                                    We usually reply within one business day.
                                </p>
                                <button
                                    type="submit"
                                    className="flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
                                >
                                    Send message
                                    <Send className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-zinc-800">
                {label}
            </label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400"
            />
        </div>
    );
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-4 rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-sm backdrop-blur">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-zinc-950">{label}</p>
                <p className="mt-1 text-sm text-zinc-600">{value}</p>
            </div>
        </div>
    );
}