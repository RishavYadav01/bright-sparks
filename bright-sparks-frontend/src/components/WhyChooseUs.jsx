import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaBookOpen } from "react-icons/fa";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaUserGraduate size={40} />,
            title: "Student-Centered Learning",
            description: "Personalized attention and mentorship for every student."
        },
        {
            icon: <FaChalkboardTeacher size={40} />,
            title: "Expert Faculty",
            description: "Experienced teachers dedicated to academic excellence."
        },
        {
            icon: <FaTrophy size={40} />,
            title: "Proven Results",
            description: "Consistent success in board exams and competitive exams."
        },
        {
            icon: <FaBookOpen size={40} />,
            title: "Comprehensive Study Material",
            description: "Well-structured notes, tests and revision modules."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4">
                    Why Choose Bright Sparks?
                </h2>

                <p className="text-center text-gray-600 mb-16">
                    Building confidence, knowledge and success for every student.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >
                            <div className="text-blue-600 mb-5">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;