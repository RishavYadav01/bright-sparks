import { motion } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    Star,
} from "lucide-react";

import heroImage from "../assets/hero.png";

function Hero() {
    return (
        <section
            className="
            min-h-screen
            pt-32
            pb-20
            overflow-hidden
            relative
            bg-gradient-to-br
            from-slate-50
            via-white
            to-blue-50
            "
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/15 rounded-full blur-3xl" />

            <div
                className="
                max-w-7xl
                mx-auto
                px-6
                grid
                lg:grid-cols-2
                gap-16
                items-center
                "
            >
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-full
                        bg-blue-100
                        text-blue-700
                        font-medium
                        "
                    >
                        <Star size={16} fill="currentColor" />
                        Ranchi's Trusted Coaching Institute
                    </div>

                    <h1
                        className="
                        mt-8
                        text-5xl
                        md:text-7xl
                        font-extrabold
                        leading-tight
                        text-slate-900
                        "
                    >
                        Learn{" "}
                        <span
                            className="
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            "
                        >
                            Better.
                        </span>

                        <br />

                        Achieve{" "}
                        <span
                            className="
                            text-transparent
                            bg-clip-text
                            bg-gradient-to-r
                            from-indigo-600
                            to-purple-600
                            "
                        >
                            Greater.
                        </span>
                    </h1>

                    <p
                        className="
                        mt-6
                        text-lg
                        md:text-xl
                        text-slate-600
                        max-w-xl
                        "
                    >
                        Bright Sparks empowers students with quality
                        education, expert guidance and the confidence
                        to achieve their dreams.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("courses")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                            }
                            className="
                            flex
                            items-center
                            gap-2
                            px-8
                            py-4
                            rounded-2xl
                            text-white
                            font-semibold
                            bg-gradient-to-r
                            from-blue-600
                            to-purple-600
                            shadow-xl
                            hover:scale-105
                            transition
                            "
                        >
                            Explore Courses
                            <ArrowRight size={18} />
                        </button>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                            }
                            className="
                            flex
                            items-center
                            gap-2
                            px-8
                            py-4
                            rounded-2xl
                            border-2
                            border-blue-600
                            text-blue-600
                            font-semibold
                            hover:bg-blue-600
                            hover:text-white
                            transition
                            "
                        >
                            Book Free Demo
                            <Calendar size={18} />
                        </button>
                    </div>

                    {/* Trust Section */}
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-12 h-12 rounded-full bg-blue-300 border-4 border-white"></div>
                            <div className="w-12 h-12 rounded-full bg-indigo-300 border-4 border-white"></div>
                            <div className="w-12 h-12 rounded-full bg-purple-300 border-4 border-white"></div>
                            <div className="w-12 h-12 rounded-full bg-pink-300 border-4 border-white"></div>
                        </div>

                        <div>
                            <div className="flex text-yellow-400 text-lg">
                                ⭐⭐⭐⭐⭐
                            </div>

                            <p className="text-slate-600 text-sm">
                                Trusted by 500+ students & parents
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
                    relative
                    flex
                    justify-center
                    "
                >
                    {/* Glow Behind Students */}
                    <div
                        className="
                        absolute
                        w-[500px]
                        h-[500px]
                        bg-gradient-to-r
                        from-blue-500/20
                        to-purple-500/20
                        rounded-full
                        blur-3xl
                        "
                    />

                    <img
                        src={heroImage}
                        alt="Bright Sparks Students"
                        className="
                        relative
                        z-10
                        w-full
                        max-w-[650px]
                        object-contain
                        drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]
                        -mt-12
                        "
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;