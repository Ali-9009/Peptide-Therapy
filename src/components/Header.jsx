import { useState, useEffect, useRef } from "react";
import {
    X,
    Phone,
    Mail,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Logs,
    ShoppingCart
} from "lucide-react";
import { LogIn } from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { products } from "../product/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import Button from "./PrimaryBtn";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    const langRef = useRef(null);

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
            name: "Contact Us",
            path: "/contact",
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

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);

    return (
        <header className="w-full relative z-50">

            {/* ================= TOP BAR ================= */}
            <div className="bg-(--primary-color) text-white text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

                    {/* LEFT */}
                    <div className="flex items-center md:gap-4 gap-4">

                        <a
                            href="tel:3052656226"
                            className="flex items-center gap-2 text-xs hover:opacity-80 transition"
                        >
                            <Phone size={15} />

                            <span>
                                +1 (555) 240-0188
                            </span>
                        </a>

                        <a href="mailto:info@gmail.com" className="flex text-xs items-center gap-2 hover:opacity-80 transition">
                            <Mail size={15} />
                            <span>
                                info@gmail.com
                            </span>
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center md:gap-4 gap-2 text-lg">

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

                                        <div className="relative w-280 bg-white border border-gray-200 shadow-[0_10px_60px_rgba(0,0,0,0.08)] rounded-3xl p-7">

                                            {/* HEADER */}
                                            <div className="flex items-center justify-between mb-7">

                                                <div>
                                                    <p className="text-2xl font-semibold text-gray-900">
                                                        Featured Peptides
                                                    </p>

                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Explore our premium peptide collection
                                                    </p>
                                                </div>

                                                {/* ARROWS */}
                                                <div className="flex items-center gap-3">

                                                    <button
                                                        className="
                        mega-prev
                        w-11 h-11 rounded-full
                        border border-gray-200
                        flex items-center justify-center
                        hover:bg-gray-100
                        transition
                    "
                                                    >
                                                        <ChevronLeft size={20} />
                                                    </button>

                                                    <button
                                                        className="
                        mega-next
                        w-11 h-11 rounded-full
                        border border-gray-200
                        flex items-center justify-center
                        hover:bg-gray-100
                        transition
                    "
                                                    >
                                                        <ChevronRight size={20} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* SWIPER */}
                                            <Swiper
                                                modules={[Navigation, Grid]}
                                                navigation={{
                                                    prevEl: ".mega-prev",
                                                    nextEl: ".mega-next",
                                                }}
                                                spaceBetween={18}
                                                slidesPerView={3}
                                                grid={{
                                                    rows: 3,
                                                    fill: "row",
                                                }}
                                                className="mega-swiper `!pb-1`"
                                            >

                                                {products.map((p, idx) => (
                                                    <SwiperSlide key={p.id}>

                                                        <Link
                                                            to={`/${p.slug}`}
                                                            className="
                            group
                            flex items-center gap-4
                            p-4 rounded-2xl
                            border border-gray-100
                            hover:border-gray-300
                            hover:bg-gray-50
                            transition-all duration-300
                            h-27
                        "
                                                        >

                                                            {/* IMAGE */}
                                                            <div className="overflow-hidden rounded-2xl shrink-0 bg-gray-100 p-2">

                                                                <img
                                                                    src={p.image}
                                                                    alt={p.name}
                                                                    className="
                                    w-16 h-16
                                    object-cover
                                    rounded-xl
                                    group-hover:scale-105
                                    transition duration-300
                                "
                                                                />
                                                            </div>

                                                            {/* TEXT */}
                                                            <div>

                                                                <p className="text-[15px] font-semibold text-gray-900">
                                                                    {p.name}
                                                                </p>

                                                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                                                    {p.desc}
                                                                </p>
                                                            </div>
                                                        </Link>

                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
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

                    {/* ================= RIGHT SIDE ================= */}
                  

                    <div className="flex items-center gap-3">

                        {/* Login Button */}
                        <Button
                            to="/login"
                            className="p-3! rounded-full flex items-center justify-center"
                            text={<LogIn size={20} />}
                        />

                        {/* Cart Button */}
                        <Button
                            to="/cart"
                            className="p-3! rounded-full flex items-center justify-center"
                            text={<ShoppingCart size={20} />}
                        />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="lg:hidden"
                        >
                            <Logs size={28} />
                        </button>

                    </div>
                </div>
            </div>

            {/* ================= MOBILE SIDEBAR ================= */}
            <div
                className={`
        fixed top-0 right-0 h-full w-[320px]
        bg-white z-110
        shadow-2xl
        transition-transform duration-300
        overflow-y-auto
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
                            {link.mega ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setMobileProductsOpen(!mobileProductsOpen)
                                        }
                                        className="w-full flex items-center justify-between text-gray-800 font-medium"
                                    >
                                        {link.name}

                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {mobileProductsOpen && (
                                        <div className="mt-4 grid grid-cols-2 gap-3">
                                            {products.map((p, idx) => (
                                                <Link
                                                    key={p.id}
                                                    to={`/${p.slug}`}
                                                    onClick={() => setOpen(false)}
                                                    className="
                                    group
                                    flex flex-col items-center
                                    text-center
                                    p-3
                                    rounded-2xl
                                    border border-gray-100
                                    bg-white
                                    hover:border-gray-300
                                    transition
                                "
                                                >
                                                    <div className="w-16 h-16 rounded-xl bg-gray-50 overflow-hidden mb-2">
                                                        <img
                                                            src={p.image}
                                                            alt={p.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    <p className="text-[13px] font-medium">
                                                        {p.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between text-gray-800 font-medium"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    {/* <div
                        className="mt-6"
                        onClick={() => setOpen(false)}
                    >

                        <Button
                            to="/cart"
                            text="Cart"
                            className="w-full text-center"
                        />
                    </div> */}
                </div>
            </div>

            {/* ================= OVERLAY ================= */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-90"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}