import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send
} from "lucide-react";

import API from "../services/api";

function ContactForm() {


const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
});

const [success, setSuccess] = useState(false);

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        await API.post("/enquiries", formData);

        setSuccess(true);

        setFormData({
            fullName: "",
            phone: "",
            email: "",
            message: ""
        });

    } catch (error) {

        console.error(error);

        setSuccess(false);

        alert("Unable to submit enquiry. Please try again.");
    }
};

return (
    <section
        id="contact"
        className="
        py-28
        bg-gradient-to-b
        from-slate-50
        to-white
        relative
        overflow-hidden
        "
    >

        {/* Background Glow */}
        <div
            className="
            absolute
            left-1/2
            -translate-x-1/2
            top-0
            w-[700px]
            h-[700px]
            bg-blue-500/10
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
                    Get In Touch
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
                    Let's Build Your
                    <span
                        className="
                        text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        "
                    >
                        {" "}Future Together
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
                    Connect with our academic experts and get
                    personalized guidance for your educational journey.
                </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* Contact Information */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >

                    {/* Phone */}

                    <div className="bg-white p-6 rounded-3xl shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="bg-blue-100 p-4 rounded-2xl">
                                <Phone className="text-blue-600" />
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Phone
                                </h3>

                                <a
                                    href="tel:+919123283373"
                                    className="
                                    text-slate-600
                                    hover:text-blue-600
                                    transition
                                    "
                                >
                                    +91 91232 83373
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Email */}

                    <div className="bg-white p-6 rounded-3xl shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="bg-purple-100 p-4 rounded-2xl">
                                <Mail className="text-purple-600" />
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Email
                                </h3>

                                <a
                                    href="mailto:brightsparks.rnc.edu@gmail.com"
                                    className="
                                    text-slate-600
                                    hover:text-purple-600
                                    transition
                                    break-all
                                    "
                                >
                                    brightsparks.rnc.edu@gmail.com
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Location */}

                    <div className="bg-white p-6 rounded-3xl shadow-lg">

                        <div className="flex items-center gap-4">

                            <div className="bg-green-100 p-4 rounded-2xl">
                                <MapPin className="text-green-600" />
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Campus Location
                                </h3>

                                <p className="text-slate-600">
                                    Ranchi, Jharkhand - 834010
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* Contact Form */}

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="
                    bg-white/80
                    backdrop-blur-xl
                    p-8
                    rounded-3xl
                    shadow-2xl
                    border
                    border-white/50
                    "
                >

                    <div className="space-y-5">

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            border
                            rounded-2xl
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                            required
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            border
                            rounded-2xl
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            border
                            rounded-2xl
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                            required
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Tell us how we can help..."
                            value={formData.message}
                            onChange={handleChange}
                            className="
                            w-full
                            p-4
                            border
                            rounded-2xl
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                            required
                        />

                        <button
                            type="submit"
                            className="
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2
                            py-4
                            rounded-2xl
                            font-bold
                            text-white
                            bg-gradient-to-r
                            from-blue-600
                            to-purple-600
                            hover:scale-[1.02]
                            transition
                            "
                        >
                            <Send size={18} />
                            Submit Enquiry
                        </button>

                        {success && (
                            <p className="text-green-600 text-center font-semibold">
                                Enquiry Submitted Successfully!
                            </p>
                        )}

                    </div>

                </motion.form>

            </div>

        </div>

    </section>
);


}

export default ContactForm;
