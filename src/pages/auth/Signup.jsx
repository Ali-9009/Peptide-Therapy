import { useState } from "react";
import { Link } from "react-router-dom";

import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/PrimaryBtn";

    
export default function Signup() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <Link to="/">
                <img
                    src="/assets/logo.png"
                    alt="Logo"
                    className="w-50 mb-8"
                />
            </Link>
            <div className="w-full max-w-105 border border-gray-300 rounded-xl shadow-md p-6 md:p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign up</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Let’s get you all set up so you can access your personal account.
                </p>

                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <FloatingInput
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                    />

                    <FloatingInput
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                    </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <FloatingInput
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <FloatingInput
                        label="Phone"
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <FloatingInput
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                {/* Terms */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <input type="checkbox" />
                    <span>
                        I agree to all the <span className="text-red-500">Terms</span> and{" "}
                        <span className="text-red-500">Privacy Policies</span>
                    </span>
                </div>

                {/* Button */}
                <Button className="w-full" text="Create account" to="/account" />

                {/* Login */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-red-500 font-medium hover:underline">
                        Login
                    </Link>
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-400">Or Sign up with</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Social */}
                <div className="grid grid-cols-3 gap-4">
                    <button className="border border-blue-500 rounded-md py-2 flex items-center justify-center text-(--primary-color)">
                        <i className="ri-facebook-fill text-xl"></i>
                    </button>

                    <button className="border border-blue-500 rounded-md py-2 flex items-center justify-center text-(--primary-color)">
                        <i className="ri-google-fill text-xl"></i>
                    </button>

                    <button className="border border-blue-500 rounded-md py-2 flex items-center justify-center text-(--primary-color)">
                        <i className="ri-apple-fill text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
