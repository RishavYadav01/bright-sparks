import { motion } from "framer-motion";
import {
    GraduationCap,
    Users,
    Trophy,
    BookOpen
} from "lucide-react";

function WhyChooseUs() {


const features = [
    {
        icon: <Users size={36} />,
        title: "Student-Centered Learning",
        description:
            "Personalized attention and mentorship designed for every student's success."
    },
    {
        icon: <GraduationCap size={36} />,
        title: "Expert Faculty",
        description:
            "Highly experienced educators committed to academic excellence."
    },
    {
        icon: <Trophy size={36} />,
        title: "Proven Results",
        description:
            "Consistent achievements in board examinations and competitive exams."
    },
    {
        icon: <BookOpen size={36} />,
        title: "Comprehensive Material",
        description:
            "Structured notes, mock tests, revision modules and study plans."
    }
];

return (
    <section
        className="
        py-28
        bg-gradient-to-b
        from-slate-50
        to-white
        relative
        overflow-hidden
        "
    >

        {/* Glow Background */}

        <div
            className="
            absolute
            right-0
            top-0
            w-[500px]
            h-[500px]
            bg-purple-500/10
            blur-3xl
            rounded-full
            "
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Header */}

            <div className="text-center mb-16">

                <span
                    className="
                    px-4 py-2
                    rounded-full
                    bg-purple-100
                    text-purple-700
                    font-medium
                    "
                >
                    Why Bright Sparks
                </span>

                <h2
                    className="
                    mt-6
                    text-4xl
                    md:text-5xl
                    font-extrabold
                    text-slate-900
                    "
                >
                    Why Students
                    <span
                        className="
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        "
                    >
                        {" "}Choose Us
                    </span>
                </h2>

                <p
                    className="
                    mt-4
                    text-lg
                    text-slate-600
                    max-w-2xl
                    mx-auto
                    "
                >
                    Building confidence, knowledge and success through
                    expert mentorship and innovative learning.
                </p>

            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {features.map((feature, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            y: -10,
                            scale: 1.03
                        }}
                        className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-lg
                        border
                        border-slate-100
                        hover:shadow-2xl
                        transition-all
                        duration-300
                        "
                    >

                        <div
                            className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-600
                            to-purple-600
                            flex
                            items-center
                            justify-center
                            text-white
                            mb-6
                            "
                        >
                            {feature.icon}
                        </div>

                        <h3
                            className="
                            text-xl
                            font-bold
                            text-slate-900
                            mb-4
                            "
                        >
                            {feature.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                        </p>

                    </motion.div>

                ))}

            </div>

        </div>

    </section>
);


}

export default WhyChooseUs;
