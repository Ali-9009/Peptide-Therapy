import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact" },
        // { name: "Cart", path: "/cart" },
        { name: "Questionnaire", path: "/questionnaire" },
        { name: "My Account", path: "/account" },
    ];

    const policy = [
        { name: "Privacy Policy", path: "/privacy-Policy" },
        { name: "Terms of Service", path: "/termServices" },
        { name: "Disclaimer", path: "/disclaimer" },
        { name: "Shipping Policy", path: "/shipping" },
        { name: "Return Policy", path: "/return" },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
                    {/* BRAND */}
                    <div>
                        <Link to="/" className="inline-flex items-center">
                            <img src="/assets/logo.png" alt="logo" className="h-12 object-contain" />
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
                            Premium peptide collection crafted with a focus on quality,
                            consistency, and a simple customer experience.
                        </p>

                        <div className="mt-6 flex items-center gap-3 text-lg text-gray-700">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
                            >
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                            >
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-(--primary-color) hover:text-white hover:border-(--primary-color) transition"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-base font-semibold text-gray-900">Company</h3>
                        <ul className="mt-5 space-y-3">
                            {links.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="group inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-gray-900">Policies</h3>
                        <ul className="mt-5 space-y-3">
                            {policy.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="group inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
                                    >
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT CARD */}
                    <div className="">
                        <h3 className="text-base font-semibold text-gray-900">Get in touch</h3>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Questions about orders, products, or support? Reach out and our team
                            will help you with the next step.
                        </p>

                        <div className="mt-6 space-y-4">
                            <a
                                href="tel:3052656226"
                                className="flex gap-3 text-sm text-gray-600 hover:text-black transition"
                            >
                                <Phone size={18} className="mt-0.5 text-(--primary-color)" />
                                <span>+1 (555) 240-0188</span>
                            </a>

                            <a
                                href="mailto:info@gmail.com"
                                className="flex gap-3 text-sm text-gray-600 hover:text-black transition"
                            >
                                <Mail size={18} className="mt-0.5 text-(--primary-color)" />
                                <span>info@gmail.com</span>
                            </a>

                            {/* <div className="flex gap-3 text-sm text-gray-600">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-(--primary-color)" />
                                <span>125 Mercer Street, New York</span>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="md:mt-12 mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                        © {new Date().getFullYear()} Peptide. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}