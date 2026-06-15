import { useEffect, useState } from "react";
import API from "../services/api";
import { FaStar } from "react-icons/fa";

function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        API.get("/testimonials")
            .then((response) => {
                setTestimonials(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4">
                    Student Success Stories
                </h2>

                <p className="text-center text-gray-600 mb-16">
                    Hear what our students say about Bright Sparks
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.testimonialId}
                            className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
                        >

                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(testimonial.rating)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-6">
                                "{testimonial.review}"
                            </p>

                            <h4 className="font-bold text-lg">
                                {testimonial.studentName}
                            </h4>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;