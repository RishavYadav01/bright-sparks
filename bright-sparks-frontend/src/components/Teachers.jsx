import { useEffect, useState } from "react";
import API from "../services/api";
import { FaChalkboardTeacher } from "react-icons/fa";

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
        <section id="teachers" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Our Expert Faculty
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {teachers.map((teacher) => (
                        <div
                            key={teacher.teacherId}
                            className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >
                            <div className="flex justify-center mb-5">
                                <FaChalkboardTeacher
                                    size={60}
                                    className="text-blue-600"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-center">
                                {teacher.fullName}
                            </h3>

                            <p className="text-center text-blue-600 font-semibold mt-2">
                                {teacher.subject}
                            </p>

                            <div className="mt-5 space-y-2 text-gray-600">
                                <p>
                                    <strong>Qualification:</strong>{" "}
                                    {teacher.qualification}
                                </p>

                                <p>
                                    <strong>Experience:</strong>{" "}
                                    {teacher.experienceYears} Years
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Teachers;