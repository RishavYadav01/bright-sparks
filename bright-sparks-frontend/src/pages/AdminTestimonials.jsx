import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

function AdminTestimonials() {

    
const [testimonials, setTestimonials] = useState([]);

const [formData, setFormData] = useState({
    studentName: "",
    review: "",
    rating: 5,
    isFeatured: false
});

const [editingTestimonial, setEditingTestimonial] =
    useState(null);

const fetchTestimonials = () => {
    API.get("/testimonials")
        .then((response) => {
            setTestimonials(response.data);
        });
};

useEffect(() => {
    fetchTestimonials();
}, []);

const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
        ...formData,
        [name]:
            type === "checkbox"
                ? checked
                : value
    });
};

const addTestimonial = async (e) => {

    e.preventDefault();

    await API.post(
        "/testimonials",
        formData
    );

    setFormData({
        studentName: "",
        review: "",
        rating: 5,
        isFeatured: false
    });

    fetchTestimonials();
};

const deleteTestimonial = async (id) => {

    if (
        !window.confirm(
            "Delete this testimonial?"
        )
    ) {
        return;
    }

    await API.delete(
        `/testimonials/${id}`
    );

    fetchTestimonials();
};

const updateTestimonial = async () => {

    await API.put(
        `/testimonials/${editingTestimonial.testimonialId}`,
        editingTestimonial
    );

    setEditingTestimonial(null);

    fetchTestimonials();
};

return (
    <div className="flex min-h-screen bg-slate-100">

        <AdminSidebar />

        <div className="flex-1 p-10">

            <h1 className="text-5xl font-bold mb-8">
                Testimonial Management
            </h1>

            <form
                onSubmit={addTestimonial}
                className="bg-white p-8 rounded-3xl shadow-xl mb-10"
            >

                <h2 className="text-2xl font-bold mb-6">
                    Add Testimonial
                </h2>

                <input
                    type="text"
                    name="studentName"
                    placeholder="Student Name"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl mb-4"
                    required
                />

                <textarea
                    name="review"
                    placeholder="Review"
                    value={formData.review}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-4 border rounded-xl mb-4"
                    required
                />

                <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl mb-4"
                >
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>

                <label className="flex items-center gap-3 mb-4">

                    <input
                        type="checkbox"
                        name="isFeatured"
                        checked={formData.isFeatured}
                        onChange={handleChange}
                    />

                    Featured Testimonial

                </label>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl"
                >
                    Add Testimonial
                </button>

            </form>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-600 text-white">

                    <tr>
                        <th className="p-4">
                            Student
                        </th>

                        <th className="p-4">
                            Rating
                        </th>

                        <th className="p-4">
                            Featured
                        </th>

                        <th className="p-4">
                            Actions
                        </th>
                    </tr>

                    </thead>

                    <tbody>

                    {testimonials.map(
                        (testimonial) => (

                            <tr
                                key={
                                    testimonial.testimonialId
                                }
                                className="border-b"
                            >

                                <td className="p-4">
                                    {
                                        testimonial.studentName
                                    }
                                </td>

                                <td className="p-4">
                                    {"⭐".repeat(
                                        testimonial.rating
                                    )}
                                </td>

                                <td className="p-4">

                                    {testimonial.isFeatured
                                        ? "Yes"
                                        : "No"}

                                </td>

                                <td className="p-4">

                                    <div className="flex gap-2">

                                        <button
                                            onClick={() =>
                                                setEditingTestimonial(
                                                    testimonial
                                                )
                                            }
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                deleteTestimonial(
                                                    testimonial.testimonialId
                                                )
                                            }
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        )
                    )}

                    </tbody>

                </table>

            </div>

        </div>

    </div>
);


}

export default AdminTestimonials;
