function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl font-bold text-blue-600">
                    BRIGHT SPARKS
                </h1>

                <div className="hidden md:flex gap-8 font-medium">
                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }
                        className="hover:text-blue-600"
                    >
                        Home
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("courses")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="hover:text-blue-600"
                    >
                        Courses
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("teachers")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="hover:text-blue-600"
                    >
                        Teachers
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="hover:text-blue-600"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;