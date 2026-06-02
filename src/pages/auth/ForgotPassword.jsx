import { useState } from "react";

import Button from "../../components/PrimaryBtn"
import FloatingInput from "../../components/FloatingInput";


export default function ForgotPassword() {

    const [form, setForm] = useState({
        email: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-105 border border-gray-300 rounded-xl shadow-md p-8">
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
