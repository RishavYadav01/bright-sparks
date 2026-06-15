import { useEffect, useState } from "react";
import API from "../services/api";



function Courses() {
    const [courses, setCourses] = useState([]);

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
        <section id="courses" className="py-20 bg-slate-100">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Our Courses
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {courses.map((course) => (
                        <div
                            key={course.courseId}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
                        >
                            <h3 className="text-2xl font-bold text-blue-600 mb-3">
                                {course.courseName}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {course.description}
                            </p>

                            <p className="font-semibold">
                                Duration: {course.duration}
                            </p>

                            <p className="font-semibold text-green-600 mt-2">
                                ₹{course.fee}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Courses;