import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            BRIGHT SPARKS
                        </h2>

                        <p className="text-gray-300">
                            Empowering students for academic excellence and
                            competitive exam success.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-300">

                            <p className="flex items-center gap-3">
                                <FaPhone />
                                9123283373
                            </p>

                            <p className="flex items-center gap-3">
                                <FaEnvelope />
                                brightsparks@gmail.com
                            </p>

                            <p className="flex items-center gap-3">
                                <FaMapMarkerAlt />
                                Namkum, Ranchi
                            </p>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Quick Links
                        </h3>

                        <div className="space-y-2 text-gray-300">
                            <p>Courses</p>
                            <p>Faculty</p>
                            <p>Testimonials</p>
                            <p>Contact</p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
                    © 2026 Bright Sparks. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;