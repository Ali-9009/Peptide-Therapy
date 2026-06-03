import { useState } from "react";

import FloatingInput from "../../components/FloatingInput";
import Button from "../../components/PrimaryBtn"
import { Link } from "react-router-dom";

export default function SetNew() {

    const [form, setForm] = useState({
        password: "",
        confirmPassword: "",
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
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Set a password</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Your previous password has been reseted. Please set a new password for your account.
                </p>

                <FloatingInput
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />

                <FloatingInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />

                <Button text="Set password" className="w-full text-center" to="/" />
            </div>
        </div>
    );
}
