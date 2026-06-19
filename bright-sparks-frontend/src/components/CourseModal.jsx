import { motion } from "framer-motion";

function CourseModal({ course, onClose }) {
    if (!course) return null;

    return (
        <div
            className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/50 backdrop-blur-sm
            px-4
            "
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                bg-white
                rounded-3xl
                p-8
                max-w-lg
                w-full
                shadow-2xl
                "
            >
                <h2 className="text-3xl font-bold text-blue-600">
                    {course.courseName}
                </h2>

                <p className="mt-4 text-slate-600">
                    {course.description}
                </p>

                <div className="mt-6 space-y-3">
                    <p>
                        <strong>Duration:</strong> {course.duration}
                    </p>

                    <p>
                        <strong>Fee:</strong> ₹{course.fee}
                    </p>

                    <p>✅ Expert Faculty</p>
                    <p>✅ Weekly Tests</p>
                    <p>✅ Study Material</p>
                    <p>✅ Doubt Sessions</p>
                </div>

                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => {
                            onClose();

                            document
                                .getElementById("contact")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                });
                        }}
                        className="
                        flex-1
                        py-3
                        rounded-xl
                        text-white
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        "
                    >
                        Enquire Now
                    </button>

                    <button
                        onClick={onClose}
                        className="
                        flex-1
                        py-3
                        rounded-xl
                        border
                        "
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default CourseModal;