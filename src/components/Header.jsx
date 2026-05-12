import { useState, useEffect, useRef } from "react";
import { X, Phone, Mail, ChevronDown, Logs } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Button from "./PrimaryBtn";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);

    const langRef = useRef(null);

    // ================= PRODUCTS =================
    const products = [
        {
            name: "GHK-Cu",
            img: "assets/ghk-1.png",
            link: "/ghk-cu",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "SS-31",
            img: "assets/ss-1.png",
            link: "/ss-31",
            desc: "Mitochondrial support peptide",
        },
        {
            name: "TB-500",
            img: "assets/tb-1.png",
            link: "/tb-500",
            desc: "Recovery & repair peptide",
        },
        {
            name: "Tesamorelin",
            img: "assets/tes-1.png",
            link: "/tesamorelin",
            desc: "Metabolism support peptide",
        },
        {
            name: "SLU-PP-322",
            img: "assets/slu-1.png",
            link: "/slu-pp-322",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Ipamorelin",
            img: "assets/ipa-1.png",
            link: "/ipamorelin",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Thymulin",
            img: "assets/thy-1.png",
            link: "/thymulin",
            desc: "Skin & recovery support peptide",
        },
    ];

    // ================= NAV LINKS =================
    const links = [
        {
            name: "Home",
            path: "/",
        },

        {
            name: "Peptides",
            path: "#",
            mega: true,
        },

        {
            name: "About",
            path: "#",
        },
    ];

    // ================= STICKY =================
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <header className="w-full relative z-50">

            {/* ================= TOP BAR ================= */}
            <div className="bg-(--primary-color) text-white text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

                    {/* LEFT */}
                    <div className="flex items-center gap-6">

                        <a
                            href="tel:3052656226"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            <Phone size={15} />

                            <span>
                                305.265.6226
                            </span>
                        </a>

                        <a href="mailto:info@gmail.com" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition">
                            <Mail size={15} />
                            <span>
                                info@gmail.com
                            </span>
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="hidden md:flex items-center gap-4 text-lg">

                        <a href="#">
                            <i className="ri-facebook-fill"></i>
                        </a>
                        <a href="#">
                            <i className="ri-instagram-line"></i>
                        </a>
                        <a href="#">
                            <i className="ri-linkedin-fill"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= NAVBAR ================= */}
            <div
                className={`
                    w-full
                    border-b border-gray-200
                    bg-white/95 backdrop-blur-xl
                    transition-all duration-300
                    ${sticky
                        ? "fixed top-0 left-0 shadow-lg"
                        : "relative"
                    }
                `}
            >

                <div
                    className={`
                        max-w-7xl mx-auto
                        flex items-center justify-between
                        px-4 transition-all duration-300
                        ${sticky ? "py-3" : "py-5"}
                    `}
                >

                    {/* ================= LOGO ================= */}
                    <Link to="/">
                        <img
                            src="/assets/logo.png"
                            alt="logo"
                            className={`object-contain transition-all duration-300 ${sticky ? "h-10" : "h-12"}`} />
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden lg:flex items-center gap-10 font-medium h-full">

                        {links.map((link, i) =>
                            link.mega ? (
                                <div
                                    key={i}
                                    className="relative flex items-center h-full"
                                    onMouseEnter={() =>
                                        setMegaOpen(true)
                                    }
                                    onMouseLeave={() =>
                                        setMegaOpen(false)
                                    }
                                >

                                    {/* BUTTON */}
                                    <button className="flex items-center gap-1 text-gray-700 hover:text-black transition">

                                        {link.name}

                                        <ChevronDown
                                            size={16}
                                            className={`
                                                transition-transform duration-300
                                                ${megaOpen
                                                    ? "rotate-180"
                                                    : ""
                                                }
                                            `}
                                        />
                                    </button>

                                    {/* ================= MEGA MENU ================= */}
                                    <div
                                        className={`
                                            absolute top-full left-1/2 -translate-x-1/2 pt-6
                                            transition-all duration-300
                                            ${megaOpen
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-3"
                                            }
                                        `}
                                    >

                                        <div className="w-155 bg-white border border-gray-300 shadow-[0_10px_60px_rgba(0,0,0,0.08)] rounded-3xl p-6">

                                            {/* TITLE */}
                                            <div className="mb-6">

                                                <p className="text-xl font-semibold text-gray-900">
                                                    Featured Peptides
                                                </p>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    Explore our premium peptide collection
                                                </p>
                                            </div>

                                            {/* GRID */}
                                            <div className="grid grid-cols-2 gap-4">

                                                {products.map((p, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={p.link}
                                                        className="
                                                            group
                                                            flex items-center gap-3
                                                            p-3 rounded-2xl
                                                            hover:bg-gray-50
                                                            transition-all duration-300
                                                        "
                                                    >

                                                        {/* IMAGE */}
                                                        <div className="overflow-hidden rounded-xl shrink-0">

                                                            <img
                                                                src={p.img}
                                                                alt={p.name}
                                                                className="
                                                                    w-14 h-14
                                                                    rounded-xl
                                                                    object-cover
                                                                    group-hover:scale-105
                                                                    transition duration-300
                                                                "
                                                            />
                                                        </div>

                                                        {/* TEXT */}
                                                        <div>

                                                            <p className="text-sm font-semibold text-gray-900">
                                                                {p.name}
                                                            </p>

                                                            <p className="text-xs text-gray-500 mt-1">
                                                                {p.desc}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    key={i}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `
                                            transition duration-300
                                            ${isActive
                                            ? "text-black font-semibold"
                                            : "text-gray-600 hover:text-black"
                                        }
                                        `
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            )
                        )}
                    </nav>

                    {/* ================= RIGHT BTN ================= */}
                    <div className="hidden lg:flex items-center">

                        <Button
                            to="#"
                            text="Contact"
                        />
                    </div>

                    {/* ================= MOBILE BTN ================= */}
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden"
                    >
                        <Logs size={28} />
                    </button>
                </div>
            </div>

            {/* ================= MOBILE SIDEBAR ================= */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-[320px]
                    bg-white z-110
                    shadow-2xl
                    transition-transform duration-300
                    ${open
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* TOP */}
                <div className="flex items-center justify-between p-5 border-b">

                    <img
                        src="/assets/logo.png"
                        className="h-10"
                        alt=""
                    />

                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                {/* LINKS */}
                <div className="p-5 flex flex-col">

                    {links.map((link, i) => (
                        <div
                            key={i}
                            className="border-b border-gray-100 py-4"
                        >

                            <Link
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className="
                                    flex items-center justify-between
                                    text-gray-800 font-medium
                                "
                            >

                                {link.name}

                                {link.mega && (
                                    <ChevronDown size={16} />
                                )}
                            </Link>

                            {/* MOBILE PRODUCTS */}
                            {link.mega && (
                                <div className="mt-4 pl-2 flex flex-col gap-4">

                                    {products.map((p, idx) => (
                                        <Link
                                            key={idx}
                                            to={p.link}
                                            onClick={() => setOpen(false)}
                                            className="
                                                flex items-center gap-3
                                                rounded-xl
                                            "
                                        >

                                            <img
                                                src={p.img}
                                                alt=""
                                                className="
                                                    w-12 h-12
                                                    rounded-lg
                                                    object-cover
                                                "
                                            />

                                            <div>

                                                <p className="text-sm font-medium">
                                                    {p.name}
                                                </p>

                                                <p className="text-xs text-gray-500 mt-1">
                                                    {p.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* BTN */}
                    <div
                        className="mt-6"
                        onClick={() => setOpen(false)}
                    >

                        <Button
                            to="#"
                            text="Contact"
                            className="w-full text-center"
                        />
                    </div>
                </div>
            </div>

            {/* ================= OVERLAY ================= */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-[90]"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}