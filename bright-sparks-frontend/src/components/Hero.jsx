import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

            <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl bottom-10 right-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-5xl text-center px-6"
            >
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
          🚀 Ranchi's Trusted Coaching Institute
        </span>

                <h1 className="mt-6 text-6xl md:text-8xl font-extrabold leading-tight">
                    BRIGHT
                    <span className="text-cyan-300"> SPARKS</span>
                </h1>

                <p className="mt-6 text-xl md:text-2xl text-gray-200">
                    Empowering Students for Academic Excellence,
                    Competitive Exams and Future Success.
                </p>

                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                    <button
                        onClick={() =>
                            document
                                .getElementById("courses")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
                    >
                        Explore Courses
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition"
                    >
                        Book Free Demo
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                        <h3 className="text-3xl font-bold">500+</h3>
                        <p>Students</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                        <h3 className="text-3xl font-bold">95%</h3>
                        <p>Success Rate</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                        <h3 className="text-3xl font-bold">10+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p>Courses</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;