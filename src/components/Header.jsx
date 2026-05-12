
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        // { name: "CJC", href: "/cjc-1295" },
        { name: "GHK", href: "/ghk-cu" },
        { name: "SS:31", href: "/ss-31" },
        { name: "TB500", href: "/tb-500" },
        { name: "Tesamorelin", href: "/tesamorelin" },
    ];

    return (
        <header className="w-full bg-white border-b">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-xl font-bold">
                    LOGO
                </div>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-6">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="text-gray-600 hover:text-black transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-4 pb-4 space-y-3">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="block text-gray-600 hover:text-black"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}