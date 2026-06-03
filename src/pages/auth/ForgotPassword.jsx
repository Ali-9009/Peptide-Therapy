import { useState } from "react";

import Button from "../../components/PrimaryBtn"
import FloatingInput from "../../components/FloatingInput";
import { Link } from "react-router-dom";


export default function ForgotPassword() {

    const [form, setForm] = useState({
        email: "",
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
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Forgot your password?</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Don’t worry, happens to all of us. Enter your email below to recover your password
                </p>

                {/* Email */}
                <FloatingInput
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                {/* Button */}
                <Button to="/verifyCode" className="w-full text-center" text="Submit" />
            </div>
        </div>
    );
}
