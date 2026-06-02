import { useState } from "react";

import QuestionnaireLayout from "./QuestionnaireLayout";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

export default function Questionnaire() {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        complaints: [],
        symptoms: [],
        sexualWellness: {},
        socialLifestyle: {},
        allergiesMedication: {},
        medicalIllnesses: [],
        familyMedical: [],
        pastMedical: {
            conditions: [],
            medicalCondition: "",
        },

        step9: {
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            language: "",
            dob: "",
            gender: "",
            address: "",
            apartment: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            source: "",
            password: "",
            confirmPassword: "",
        },
    });

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <Step1
                        value={formData.complaints}
                        onChange={(complaints) =>
                            setFormData((prev) => ({
                                ...prev,
                                complaints,
                            }))
                        }
                    />
                );

            case 2:
                return (
                    <Step2
                        value={formData.symptoms}
                        onChange={(symptoms) =>
                            setFormData((prev) => ({
                                ...prev,
                                symptoms,
                            }))
                        }
                    />
                );

            case 3:
                return (
                    <Step3
                        value={formData.sexualWellness}
                        onChange={(sexualWellness) =>
                            setFormData((prev) => ({
                                ...prev,
                                sexualWellness,
                            }))
                        }
                    />
                );

            case 4:
                return (
                    <Step4
                        value={formData.socialLifestyle}
                        onChange={(socialLifestyle) =>
                            setFormData((prev) => ({
                                ...prev,
                                socialLifestyle,
                            }))
                        }
                    />
                );

            case 5:
                return (
                    <Step5
                        value={formData.allergiesMedication}
                        onChange={(allergiesMedication) =>
                            setFormData((prev) => ({
                                ...prev,
                                allergiesMedication,
                            }))
                        }
                    />
                );


            case 6:
                return (
                    <Step6
                        value={formData.medicalIllnesses}
                        onChange={(medicalIllnesses) =>
                            setFormData((prev) => ({
                                ...prev,
                                medicalIllnesses,
                            }))
                        }
                    />
                );

            case 7:
                return (
                    <Step7
                        value={formData.familyMedical}
                        onChange={(familyMedical) =>
                            setFormData((prev) => ({
                                ...prev,
                                familyMedical,
                            }))
                        }
                    />
                );

            case 8:
                return (
                    <Step8
                        value={formData.pastMedical}
                        onChange={(pastMedical) =>
                            setFormData((prev) => ({
                                ...prev,
                                pastMedical,
                            }))
                        }
                    />
                );

            case 9:
                return (
                    <Step9
                        value={formData.step9}
                        onChange={(step9) =>
                            setFormData((prev) => ({
                                ...prev,
                                step9,
                            }))
                        }
                    />
                );

            default:
                return (
                    <Step1
                        value={formData.complaints}
                        onChange={(complaints) =>
                            setFormData((prev) => ({
                                ...prev,
                                complaints,
                            }))
                        }
                    />
                );
        }
    };

    return (
        <QuestionnaireLayout
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            totalSteps={9}
        >
            {renderStep()}
        </QuestionnaireLayout>
    );
}