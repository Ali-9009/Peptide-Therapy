export default function Step7({ value, onChange }) {

    const familyMedical = [
        "Alzheimer’s",
        "High Blood Pressure",
        "Bleeding Disease",
        "Depression/Suicide",
        "Allergies",
        "Tuberculosis",
        "Heart Disease",
        "Stroke",
        "Alcoholism",
        "Asthma",
        "Diabetes",
        "Heart Attack before age 55",
        "Seizures",
        "Mental Disorder",
        "Cancer",
    ];

    const toggleSymptom = (symptom) => {
        // None selected
        if (symptom === "None") {
            onChange(["None"]);
            return;
        }

        let updated;

        if (value.includes(symptom)) {
            updated = value.filter((item) => item !== symptom);
        } else {
            updated = [...value.filter((item) => item !== "None"), symptom];
        }

        onChange(updated);
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-(--primary-color)">
                    Family Medical History
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {familyMedical.map((symptom) => {
                    const selected = value.includes(symptom);

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

                <button
                    type="button"
                    onClick={() => toggleSymptom("None")}
                    className={`
                        rounded-lg
                        px-4
                        py-4
                        text-left
                        font-medium
                        border
                        transition-all
                        duration-200
                        ${value.includes("None")
                            ? "bg-(--primary-color) text-white border-(--primary-color)"
                            : "bg-[#F2F2F2] text-gray-800 border-transparent hover:border-(--primary-color)"
                        }
                    `}
                >
                    None
                </button>
            </div>
        </div>
    );
}