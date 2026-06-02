import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Step8({ value = {}, onChange }) {
    const [openMedical, setOpenMedical] = useState(false);

    const pastMedical = [
        "HIV",
        "HERPES",
        "SYPHILLIS",
        "HEPATITIS B",
        "HEPATITIS C",
        "None",
    ];

    const medicalOptions = ["Yes", "No"];

    const conditions = value.conditions || [];
    const medicalCondition = value.medicalCondition || "";

    const toggleSymptom = (symptom) => {
        if (symptom === "None") {
            onChange({
                ...value,
                conditions: ["None"],
            });
            return;
        }

        let updated;

        if (conditions.includes(symptom)) {
            updated = conditions.filter(
                (item) => item !== symptom
            );
        } else {
            updated = [
                ...conditions.filter(
                    (item) => item !== "None"
                ),
                symptom,
            ];
        }

        onChange({
            ...value,
            conditions: updated,
        });
    };

    const handleMedicalCondition = (option) => {
        onChange({
            ...value,
            medicalCondition: option,
        });
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-(--primary-color)">
                    Past Medical History / Medical Condition
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {pastMedical.map((symptom) => {
                    const selected =
                        conditions.includes(symptom);

                    return (
                        <button
                            key={symptom}
                            type="button"
                            onClick={() =>
                                toggleSymptom(symptom)
                            }
                            className={`
                                rounded-lg
                                px-4
                                py-4
                                text-left
                                font-medium
                                border
                                transition-all
                                duration-200
                                ${selected
                                    ? "bg-(--primary-color) text-white border-(--primary-color)"
                                    : "bg-[#F2F2F2] text-gray-800 border-transparent hover:border-(--primary-color)"
                                }
                            `}
                        >
                            {symptom}
                        </button>
                    );
                })}
            </div>

            <div className="mt-6 relative max-w-85">
                <label className="block mb-3 font-medium">
                    Do you have any medical condition?
                </label>

                <button
                    type="button"
                    onClick={() =>
                        setOpenMedical(!openMedical)
                    }
                    className="w-full bg-[#F4F4F4] rounded-md px-5 py-4 flex items-center justify-between text-sm"
                >
                    <span
                        className={
                            medicalCondition
                                ? "text-gray-800"
                                : "text-gray-400"
                        }
                    >
                        {medicalCondition ||
                            "Choose Option.."}
                    </span>

                    <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${openMedical
                                ? "rotate-180"
                                : ""
                            }`}
                    />
                </button>

                {openMedical && (
                    <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
                        {medicalOptions.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    handleMedicalCondition(
                                        option
                                    );
                                    setOpenMedical(false);
                                }}
                                className={`w-full text-left px-5 py-3 hover:bg-gray-100 ${medicalCondition ===
                                        option
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
        </div>
    );
}