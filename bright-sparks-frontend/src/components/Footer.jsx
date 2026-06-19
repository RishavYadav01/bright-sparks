import {
    Phone,
    Mail,
    MapPin,
    GraduationCap
} from "lucide-react";

function Footer() {


const scrollTo = (id) => {
    document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
};

return (
    <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid md:grid-cols-3 gap-12">

                {/* Brand */}

                <div>

                    <div className="flex items-center gap-3 mb-5">

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                            <GraduationCap />
                        </div>

                        <h2 className="text-3xl font-extrabold">
                            BRIGHT SPARKS
                        </h2>

                    </div>

                    <p className="text-slate-400 leading-relaxed">
                        Empowering students with quality education,
                        expert mentorship, and a pathway to academic
                        excellence.
                    </p>

                </div>

                {/* Quick Links */}

                <div>

                    <h3 className="text-xl font-bold mb-5">
                        Quick Links
                    </h3>

                    <div className="space-y-3 text-slate-400">

                        <button
                            onClick={() => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })}
                            className="block hover:text-white transition"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => scrollTo("courses")}
                            className="block hover:text-white transition"
                        >
                            Courses
                        </button>

                        <button
                            onClick={() => scrollTo("teachers")}
                            className="block hover:text-white transition"
                        >
                            Faculty
                        </button>

                        <button
                            onClick={() => scrollTo("contact")}
                            className="block hover:text-white transition"
                        >
                            Contact
                        </button>

                    </div>

                </div>

                {/* Contact */}

                <div>

                    <h3 className="text-xl font-bold mb-5">
                        Contact Us
                    </h3>

                    <div className="space-y-4 text-slate-400">

                        <a
                            href="tel:+919123283373"
                            className="flex items-center gap-3 hover:text-white transition"
                        >
                            <Phone size={18} />
                            +91 91232 83373
                        </a>

                        <a
                            href="mailto:brightsparks.rnc.edu@gmail.com"
                            className="flex items-center gap-3 hover:text-white transition break-all"
                        >
                            <Mail size={18} />
                            brightsparks.rnc.edu@gmail.com
                        </a>

                        <div className="flex items-center gap-3">
                            <MapPin size={18} />
                            Ranchi, Jharkhand - 834010
                        </div>

                    </div>

                </div>

            </div>

            <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">

                © 2026 Bright Sparks. All Rights Reserved.

            </div>

        </div>

    </footer>
);


}

export default Footer;
