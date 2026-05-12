import Button from "./PrimaryBtn";

export default function CTA() {
    return (
        <section className="w-full flex items-center justify-center bg-blue-100 py-16 px-6">
            <div className="text-center max-w-xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to get started?
                </h2>

                <p className="text-gray-700 font-md mb-6">
                    Join now and unlock full access in just a few clicks.
                </p>

                <div className="flex gap-4 justify-center">
                    <Button text="Purchase BPC-157 Now" />
                </div>

            </div>
        </section>
    );
}