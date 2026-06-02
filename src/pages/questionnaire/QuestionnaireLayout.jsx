import { useNavigate } from "react-router-dom";

export default function QuestionnaireLayout({
    currentStep,
    setCurrentStep,
    totalSteps,
    children,
}) {
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentStep === totalSteps) {
            navigate("/"); // Home page
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-center text-3xl font-bold text-(--primary-color) mb-8">
                Life Questionnaire
            </h1>

            {/* Steps */}
            <div className="flex justify-center items-center gap-3 mb-10">
                {Array.from({ length: totalSteps }, (_, i) => (
                    <div
                        key={i}
                        className={`w-8 h-8 rounded-full flex items-center justify-center
                        ${currentStep >= i + 1
                                ? "bg-(--primary-color) text-white"
                                : "border border-gray-400 text-gray-500"
                            }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>

            {/* Content Box */}
            <div className="bg-white rounded-2xl shadow p-8 min-h-90">
                {children}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    disabled={currentStep === 1}
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="border border-(--primary-color) px-6 py-3 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>

                <button
                    onClick={handleNext}
                    className="bg-(--primary-color) text-white px-6 py-3 rounded-lg"
                >
                    {currentStep === totalSteps ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
}