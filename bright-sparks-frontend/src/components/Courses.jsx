import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    Clock,
    ArrowRight
} from "lucide-react";

import API from "../services/api";
import CourseModal from "./CourseModal";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        API.get("/courses")
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section
            id="courses"
            className="
            py-28
            bg-gradient-to-b
            from-white
            to-slate-50
            relative
            overflow-hidden
            "
        >
            <div
                className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-[700px]
                h-[700px]
                bg-purple-400/10
                blur-3xl
                rounded-full
                "
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">

                    <span
                        className="
                        px-4 py-2
                        rounded-full
                        bg-blue-100
                        text-blue-700
                        font-medium
                        "
                    >
                        Explore Programs
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
                        Designed For

                        <span
                            className="
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-blue-600
                            to-purple-600
                            "
                        >
                            {" "}Academic Excellence
                        </span>
                    </h2>

                    <p
                        className="
                        mt-4
                        text-slate-600
                        max-w-2xl
                        mx-auto
                        text-lg
                        "
                    >
                        Industry-leading coaching programs crafted to help
                        students achieve outstanding academic results and
                        build confidence for future success.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {courses.map((course) => (

                        <motion.div
                            key={course.courseId}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{
                                y: -10,
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

                            <div
                                className="
                                w-14
                                h-14
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
                                <BookOpen size={26} />
                            </div>

                            <h3
                                className="
                                text-2xl
                                font-bold
                                text-slate-900
                                mb-3
                                "
                            >
                                {course.courseName}
                            </h3>

                            <p
                                className="
                                text-slate-600
                                mb-6
                                leading-relaxed
                                "
                            >
                                {course.description}
                            </p>

                            <div className="flex items-center gap-2 text-slate-600 mb-6">
                                <Clock size={18} />
                                <span>{course.duration}</span>
                            </div>

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Course Fee
                                    </p>

                                    <p
                                        className="
                                        text-2xl
                                        font-bold
                                        text-blue-600
                                        "
                                    >
                                        ₹{course.fee}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedCourse(course)}
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
                                    Learn More
                                    <ArrowRight size={18} />
                                </button>

                            </div>

                        </motion.div>

                    ))}

                </div>

                <CourseModal
                    course={selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                />

            </div>
        </section>
    );
}

export default Courses;