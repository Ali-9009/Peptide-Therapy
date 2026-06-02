import { useState } from "react";
import Button from "../../components/PrimaryBtn";
import FloatingInput from "../../components/FloatingInput";

export default function VerifyCode() {
    const [form, setForm] = useState({
        code: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-105 border border-gray-300 rounded-xl shadow-md p-8">

                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                    Verify code
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                    An authentication code has been sent to your email.
                </p>

                <FloatingInput
                    className="tracking-widest text-center text-lg"
                    label="OTP Code"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                />

                <Button to="/setNew" className="w-full text-center" text="Verify" />

            </div>
        </div>
    );
}