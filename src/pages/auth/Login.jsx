import { useState } from "react";
import { Link } from "react-router-dom";

import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/PrimaryBtn"

export default function Login() {

    const [form, setForm] = useState({
        email: "",
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
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Login</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Login to access your travelwise account
                </p>

                {/* Email */}
                <FloatingInput
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                {/* Password */}
                <FloatingInput
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="w-4 h-4" />
                        Remember me
                    </label>

                    <Link
                        to="/forgotPassword"
                        className="text-sm text-red-500 cursor-pointer hover:underline"
                    >
                        Forgot Password
                    </Link>
                </div>

                {/* Button */}
                <Button className="w-full text-center" text="Login" to="/account" />

                {/* Signup */}
                <p className="text-sm text-center mt-4 text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-red-500 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-400">Or login with</span>
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
