import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Star,
    ArrowRight
} from "lucide-react";

import API from "../services/api";

function Teachers() {
    const [teachers, setTeachers] = useState([]);


useEffect(() => {
    API.get("/teachers")
        .then((response) => {
            setTeachers(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

return (
    <section
        id="teachers"
        className="
        py-28
        bg-gradient-to-b
        from-slate-50
        to-white
        relative
        overflow-hidden
        "
    >

        {/* Background Glow */}
        <div
            className="
            absolute
            left-0
            top-20
            w-[500px]
            h-[500px]
            bg-blue-500/10
            blur-3xl
            rounded-full
            "
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Heading */}
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
                    Meet Our Experts
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
                    Learn From
                    <span
                        className="
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        "
                    >
                        {" "}Top Educators
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
                    Experienced mentors dedicated to helping
                    every student achieve academic excellence.
                </p>

            </div>

            {/* Teacher Cards */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {teachers.map((teacher) => (

                    <motion.div
                        key={teacher.teacherId}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            y: -12,
                            scale: 1.02
                        }}
                        className="
                        group
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-lg
                        border
                        border-slate-100
                        hover:shadow-2xl
                        transition-all
                        duration-300
                        relative
                        overflow-hidden
                        "
                    >

                        {/* Card Glow */}
                        <div
                            className="
                            absolute
                            top-0
                            right-0
                            w-32
                            h-32
                            bg-gradient-to-r
                            from-blue-500/10
                            to-purple-500/10
                            rounded-full
                            blur-2xl
                            "
                        />

                        {/* Teacher Icon */}

                        <div className="flex justify-center mb-6">

                            <div
                                className="
                                w-20
                                h-20
                                rounded-3xl
                                bg-gradient-to-r
                                from-blue-600
                                to-purple-600
                                flex
                                items-center
                                justify-center
                                text-white
                                "
                            >
                                <GraduationCap size={38} />
                            </div>

                        </div>

                        {/* Name */}

                        <h3
                            className="
                            text-2xl
                            font-bold
                            text-center
                            text-slate-900
                            "
                        >
                            {teacher.fullName}
                        </h3>

                        {/* Subject Badge */}

                        <div className="flex justify-center mt-4">

                            <span
                                className="
                                px-4
                                py-2
                                rounded-full
                                bg-blue-100
                                text-blue-700
                                text-sm
                                font-medium
                                "
                            >
                                {teacher.subject}
                            </span>

                        </div>

                        {/* Qualification */}

                        <p
                            className="
                            mt-6
                            text-slate-600
                            text-center
                            "
                        >
                            {teacher.qualification}
                        </p>

                        {/* Experience */}

                        <div
                            className="
                            mt-6
                            bg-slate-100
                            rounded-2xl
                            p-4
                            text-center
                            "
                        >
                            <p className="text-sm text-slate-500">
                                Experience
                            </p>

                            <p
                                className="
                                text-xl
                                font-bold
                                text-slate-900
                                "
                            >
                                {teacher.experienceYears}+ Years
                            </p>
                        </div>

                        {/* Rating */}

                        <div
                            className="
                            mt-5
                            flex
                            justify-center
                            items-center
                            gap-2
                            text-yellow-500
                            "
                        >
                            <Star fill="currentColor" size={18} />
                            <span className="font-semibold text-slate-700">
                                4.9 Rating
                            </span>
                        </div>

                        {/* CTA */}

                        <div className="mt-6 flex justify-center">

                            <button
                                className="
                                flex
                                items-center
                                gap-2
                                text-blue-600
                                font-semibold
                                group-hover:translate-x-1
                                transition
                                "
                            >
                                View Profile
                                <ArrowRight size={18} />
                            </button>

                        </div>

                    </motion.div>

                ))}

            </div>

        </div>

    </section>
);


}

export default Teachers;
