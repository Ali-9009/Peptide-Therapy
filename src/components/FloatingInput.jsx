import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FloatingInput({
    label,
    type = "text",
    value,
    onChange,
    name,
    ...rest 
}) {
    const [show, setShow] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="relative mb-5">

            <input
                type={isPassword ? (show ? "text" : "password") : type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder=" "
                {...rest}
                className="
                    peer w-full px-4 pt-3 pb-2 
                    pr-10 bg-white border border-gray-300 
                    rounded-md text-sm shadow-sm 
                    focus:outline-none focus:border-(--primary-color)
                "
            />

            {/* Floating Label */}
            <label className="
                absolute left-3 -top-2 z-10
                text-gray-500 text-xs bg-white px-1
                transition-all duration-200

                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-sm
                peer-placeholder-shown:text-gray-400

                peer-focus:-top-2
                peer-focus:text-xs
                peer-focus:text-(--primary-color)
            ">
                {label}
            </label>

            {/* Password Toggle */}
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-3.5 text-gray-400"
                >
                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}

        </div>
    );
}