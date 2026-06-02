export default function Step2({ value, onChange }) {
    const symptoms = [
        "Nervousness",
        "Anxiety",
        "Depressed mood",
        "Exhaustion/lacking vitality",

        "Declining Mental / Ability / Focus / Concentration Feeling you have passed your peak",
        "Decreased muscle strength",

        "Weight Gain/Belly Fat/inability to Lose Weight",
        "Breast Development",
        "Feeling burned out/hit rock bottom",

        "New Migraine Headaches",
        "Decreased ability to perform sexually",
        "Rapid Hair Loss",

        "No Results from E.D. Medications",
        "Sweats",
        "Mood changes/Irritability",

        "Tension",
        "Vaginal Dryness",
        "Dry and wrinkled skin",

        "Swelling all over the body",
        "Mental confusion",
        "Bloating",

        "Cold all the time",
        "Hot flashes",
        "Memory loss",

        "Sleep problems",
        "Joint pain",
        "Hair is falling out",

        "Difficult to climax sexually",
        "Breast tenderness",
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
                    Experiencing following Symptoms
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {symptoms.map((symptom) => {
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