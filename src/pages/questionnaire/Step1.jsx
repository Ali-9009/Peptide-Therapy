export default function Step1({ value, onChange }) {
    const complaints = [
        "Lack of energy and stamina",
        "Decreased sex drive and/or performance",
        "Day/night physical fatigue and always tired",
        "Loss of muscle tone and increased fat",
        "Decrease mental alertness and mood swings",
        "I feel good, But I can be better",
    ];

    const toggleComplaint = (complaint) => {
        const updated = value.includes(complaint)
            ? value.filter((item) => item !== complaint)
            : [...value, complaint];

        onChange(updated);
    };

    return (
        <div>
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-(--primary-color) mb-2">
                    Main Chief Complaint
                </h2>

                <p className="text-gray-500">
                    What medical concerns bring you to our office?
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {complaints.map((complaint) => {
                    const selected = value.includes(complaint);

                    return (
                        <button
                            key={complaint}
                            type="button"
                            onClick={() =>
                                toggleComplaint(complaint)
                            }
                            className={`
                                rounded-xl
                                px-5
                                py-4
                                text-left
                                font-semibold
                                transition-all
                                duration-200
                                border
                                ${selected
                                    ? "bg-(--primary-color) text-white border-(--primary-color)"
                                    : "bg-[#F2F2F2] text-gray-800 border-transparent hover:border-(--primary-color)"
                                }
                            `}
                        >
                            {complaint}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}