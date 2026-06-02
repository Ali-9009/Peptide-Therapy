import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Step3({ value, onChange }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const sexualWellness = [
        "Are you sexually active?",
        "Do you lack sexual drive?",
        "Are you currently trying to have children?",
        "Have you developed a lack of attraction toward your partner?",
    ];

    const handleChange = (question, answer) => {
        onChange({
            ...value,
            [question]: answer,
        });
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold text-(--primary-color)">
                    Sexual Wellness
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sexualWellness.map((question) => (
                    <div key={question} className="relative">
                        <label className="block mb-3">
                            {question}
                        </label>

                        <button
                            type="button"
                            onClick={() =>
                                setOpenDropdown(
                                    openDropdown === question
                                        ? null
                                        : question
                                )
                            }
                            className="w-full bg-[#F4F4F4] rounded-md px-5 py-4 flex items-center justify-between text-sm"
                        >
                            <span
                                className={
                                    value?.[question]
                                        ? "text-gray-800"
                                        : "text-gray-400"
                                }
                            >
                                {value?.[question] ||
                                    "Choose Option.."}
                            </span>

                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-200 ${openDropdown === question
                                        ? "rotate-180"
                                        : ""
                                    }`}
                            />
                        </button>

                        {openDropdown === question && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
                                {["Yes", "No"].map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => {
                                            handleChange(
                                                question,
                                                option
                                            );
                                            setOpenDropdown(
                                                null
                                            );
                                        }}
                                        className={`w-full text-left px-5 py-3 hover:bg-gray-100 transition ${value?.[
                                                question
                                            ] === option
                                                ? "bg-gray-100 font-medium"
                                                : ""
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}