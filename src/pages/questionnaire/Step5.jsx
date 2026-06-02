import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Step5({ value = {}, onChange }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const allergiesMedication = [
        {
            question: "Allergies: Are you allergic to any drugs",
            options: ["Yes", "No"],
        },
        {
            question: "Are you currently taking any medication",
            options: ["Yes", "No"],
        },
    ];

    const handleChange = (question, answer) => {
        onChange({
            ...value,
            [question]: answer,
        });
    };

    return (
        <div>
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-(--primary-color)">
                    Allergies Medication
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allergiesMedication.map((item) => (
                    <div
                        key={item.question}
                        className="relative"
                    >
                        <label className="block mb-3">
                            {item.question}
                        </label>

                        <button
                            type="button"
                            onClick={() =>
                                setOpenDropdown(
                                    openDropdown === item.question
                                        ? null
                                        : item.question
                                )
                            }
                            className="w-full bg-[#F4F4F4] rounded-md px-5 py-4 flex items-center justify-between text-sm"
                        >
                            <span
                                className={
                                    value?.[item.question]
                                        ? "text-gray-800"
                                        : "text-gray-400"
                                }
                            >
                                {value?.[item.question] ||
                                    "Choose Option.."}
                            </span>

                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-200 ${openDropdown === item.question
                                        ? "rotate-180"
                                        : ""
                                    }`}
                            />
                        </button>

                        {openDropdown === item.question && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
                                <div className="max-h-60 overflow-y-auto">
                                    {item.options.map(
                                        (option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => {
                                                    handleChange(
                                                        item.question,
                                                        option
                                                    );
                                                    setOpenDropdown(
                                                        null
                                                    );
                                                }}
                                                className={`w-full text-left px-5 py-3 hover:bg-gray-100 transition ${value?.[
                                                        item
                                                            .question
                                                    ] ===
                                                        option
                                                        ? "bg-gray-100 font-medium"
                                                        : ""
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}