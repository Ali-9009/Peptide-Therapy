export default function Step9({ value = {}, onChange }) {
    const handleChange = (field, val) => {
        onChange({
            ...value,
            [field]: val,
        });
    };

    return (
        <div className="space-y-10">

            {/* PERSONAL DETAILS */}
            <div>
                <h2 className="text-xl font-bold text-(--primary-color) mb-5">
                    Personal Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        type="email"
                        placeholder="Email"
                        value={value.email || ""}
                        onChange={(e) =>
                            handleChange("email", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        type="text"
                        placeholder="Phone"
                        value={value.phone || ""}
                        onChange={(e) =>
                            handleChange("phone", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        type="text"
                        placeholder="First Name"
                        value={value.firstName || ""}
                        onChange={(e) =>
                            handleChange("firstName", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        value={value.lastName || ""}
                        onChange={(e) =>
                            handleChange("lastName", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        type="text"
                        placeholder="Language"
                        value={value.language || ""}
                        onChange={(e) =>
                            handleChange("language", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        type="date"
                        placeholder="Date of Birth"
                        value={value.dob || ""}
                        onChange={(e) =>
                            handleChange("dob", e.target.value)
                        }
                        className="input"
                    />
                </div>

                {/* GENDER */}
                <div className="flex gap-3 mt-4">
                    {["Male", "Female"].map((g) => (
                        <button
                            key={g}
                            type="button"
                            onClick={() =>
                                handleChange("gender", g)
                            }
                            className={`px-6 py-2 rounded-md border ${value.gender === g
                                    ? "bg-(--primary-color) text-white"
                                    : "bg-gray-100"
                                }`}
                        >
                            {g}
                        </button>
                    ))}
                </div>
            </div>

            {/* CONTACT DETAILS */}
            <div>
                <h2 className="text-xl font-bold text-(--primary-color) mb-5">
                    Contact Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        placeholder="Address"
                        value={value.address || ""}
                        onChange={(e) =>
                            handleChange("address", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        placeholder="Apartment, Suite"
                        value={value.apartment || ""}
                        onChange={(e) =>
                            handleChange("apartment", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        placeholder="City"
                        value={value.city || ""}
                        onChange={(e) =>
                            handleChange("city", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        placeholder="State"
                        value={value.state || ""}
                        onChange={(e) =>
                            handleChange("state", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        placeholder="Zip"
                        value={value.zip || ""}
                        onChange={(e) =>
                            handleChange("zip", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        placeholder="Country"
                        value={value.country || ""}
                        onChange={(e) =>
                            handleChange("country", e.target.value)
                        }
                        className="input"
                    />
                </div>
            </div>

            {/* LOGIN */}
            <div>
                <h2 className="text-xl font-bold text-(--primary-color) mb-5">
                    Create Your Login Credentials
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <select
                        value={value.source || ""}
                        onChange={(e) =>
                            handleChange("source", e.target.value)
                        }
                        className="input"
                    >
                        <option value="">
                            How did you hear about us?
                        </option>
                        <option>Google</option>
                        <option>Facebook</option>
                        <option>Friend</option>
                    </select>

                    <input
                        type="password"
                        placeholder="Password"
                        value={value.password || ""}
                        onChange={(e) =>
                            handleChange("password", e.target.value)
                        }
                        className="input"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={value.confirmPassword || ""}
                        onChange={(e) =>
                            handleChange(
                                "confirmPassword",
                                e.target.value
                            )
                        }
                        className="input"
                    />
                </div>
            </div>
        </div>
    );
}