import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import API from "../services/api";

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
    <section
        className="
        py-28
        bg-gradient-to-b
        from-white
        to-slate-50
        relative
        overflow-hidden
        "
    >

        {/* Background Glow */}
        <div
            className="
            absolute
            right-0
            top-20
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
                    bg-blue-100
                    text-blue-700
                    font-medium
                    "
                >
                    Success Stories
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
                    What Our
                    <span
                        className="
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        "
                    >
                        {" "}Students Say
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
                    Real experiences from students who transformed
                    their academic journey with Bright Sparks.
                </p>

            </div>

            {/* Testimonials Grid */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {testimonials.map((testimonial) => (

                    <motion.div
                        key={testimonial.testimonialId}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            y: -10,
                            scale: 1.02
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
                            w-24
                            h-24
                            bg-gradient-to-r
                            from-blue-500/10
                            to-purple-500/10
                            rounded-full
                            blur-2xl
                            "
                        />

                        <Quote
                            size={36}
                            className="text-blue-600 mb-6"
                        />

                        {/* Rating */}

                        <div className="flex gap-1 mb-5 text-yellow-500">

                            {[...Array(testimonial.rating)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={18}
                                    fill="currentColor"
                                />
                            ))}

                        </div>

                        {/* Review */}

                        <p
                            className="
                            text-slate-600
                            italic
                            leading-relaxed
                            mb-6
                            "
                        >
                            "{testimonial.review}"
                        </p>

                        {/* Student */}

                        <div className="border-t pt-4">

                            <h4
                                className="
                                font-bold
                                text-lg
                                text-slate-900
                                "
                            >
                                {testimonial.studentName}
                            </h4>

                            <p className="text-blue-600 text-sm mt-1">
                                Bright Sparks Student
                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>

        </div>

    </section>
);


}

export default Testimonials;
