import { useState } from "react";
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
            alert("Something went wrong");
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-100">
            <div className="max-w-3xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center mb-4">
                    Contact Us
                </h2>

                <p className="text-center text-gray-600 mb-10">
                    Get admission guidance from our experts.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-3xl shadow-xl space-y-5"
                >

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-4 border rounded-xl"
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 border rounded-xl"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 border rounded-xl"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-4 border rounded-xl"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
                    >
                        Submit Enquiry
                    </button>

                    {success && (
                        <p className="text-green-600 text-center font-semibold">
                            Enquiry Submitted Successfully!
                        </p>
                    )}

                </form>

            </div>
        </section>
    );
}

export default ContactForm;