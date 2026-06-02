export default function Step6({ value, onChange }) {
    const medicalIllnesses = [
        "High Blood Pressure",
        "Blood clot and/or a pulmonary emboli",
        "Testicular or prostate cancer",
        "Exhaustion/lacking vitality",
        "Rouble passing Urine or take Flomax or Avodar",
        "Thyroid Disease",
        "High Cholesterol",
        "Hemochromatosis",
        "Diabetes",
        "Athritis",
        "Heart Disease",
        "Depression/ Anxiety",
        "Elevated PSA",
        "Chronic Liver Disease (hepatitis, fatty liver, cirrhosis)",
        "Hemorrhoids",
        "Stroke and/or heart attack",
        "Psychiatric Disorder",
        "Prostate enlargement",
        "Cancer",
        "Other",
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
                    Medical Illnesses or Conditions
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {medicalIllnesses.map((symptom) => {
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