import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

function AdminCourses() {


const [courses, setCourses] = useState([]);
const [editingCourse, setEditingCourse] = useState(null);

const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    duration: "",
    fee: ""
});

const fetchCourses = () => {
    API.get("/courses")
        .then((response) => {
            setCourses(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

useEffect(() => {
    fetchCourses();
}, []);

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const addCourse = async (e) => {

    e.preventDefault();

    try {

        await API.post("/courses", formData);

        setFormData({
            courseName: "",
            description: "",
            duration: "",
            fee: ""
        });

        fetchCourses();

    } catch (error) {
        console.error(error);
    }
};

const deleteCourse = async (id) => {

    if (!window.confirm("Delete this course?")) {
        return;
    }

    try {

        await API.delete(`/courses/${id}`);

        fetchCourses();

    } catch (error) {
        console.error(error);
    }
};

const updateCourse = async () => {

        try {

            await API.put(
                `/courses/${editingCourse.courseId}`,
                editingCourse
            );

            setEditingCourse(null);

            fetchCourses();

        } catch (error) {

            console.error(error);

        }
};

return (
    <div className="flex min-h-screen bg-slate-100">

        <AdminSidebar />

        <div className="flex-1 p-10">

            <h1 className="text-5xl font-bold mb-8">
                Course Management
            </h1>

            <form
                onSubmit={addCourse}
                className="bg-white p-8 rounded-3xl shadow-xl mb-10"
            >

                <h2 className="text-2xl font-bold mb-6">
                    Add New Course
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        type="text"
                        name="courseName"
                        placeholder="Course Name"
                        value={formData.courseName}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        type="number"
                        name="fee"
                        placeholder="Fee"
                        value={formData.fee}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
                >
                    Add Course
                </button>

            </form>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-600 text-white">

                    <tr>
                        <th className="p-4 text-left">
                            Course Name
                        </th>

                        <th className="p-4 text-left">
                            Duration
                        </th>

                        <th className="p-4 text-left">
                            Fee
                        </th>

                        <th className="p-4 text-left">
                            Actions
                        </th>
                    </tr>

                    </thead>

                    <tbody>

                    {courses.map((course) => (

                        <tr
                            key={course.courseId}
                            className="border-b"
                        >

                            <td className="p-4">
                                {course.courseName}
                            </td>

                            <td className="p-4">
                                {course.duration}
                            </td>

                            <td className="p-4">
                                ₹{course.fee}
                            </td>

                            <td className="p-4">

                                <div className="flex gap-2">

                                    <button
                                        onClick={() => setEditingCourse(course)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteCourse(course.courseId)
                                        }
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>

                                    {editingCourse && (

                                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                                            <div className="bg-white p-8 rounded-3xl w-[500px]">

                                                <h2 className="text-3xl font-bold mb-6">
                                                    Edit Course
                                                </h2>

                                                <input
                                                    type="text"
                                                    value={editingCourse.courseName}
                                                    onChange={(e) =>
                                                        setEditingCourse({
                                                            ...editingCourse,
                                                            courseName: e.target.value
                                                        })
                                                    }
                                                    className="w-full p-4 border rounded-xl mb-4"
                                                />

                                                <input
                                                    type="text"
                                                    value={editingCourse.duration}
                                                    onChange={(e) =>
                                                        setEditingCourse({
                                                            ...editingCourse,
                                                            duration: e.target.value
                                                        })
                                                    }
                                                    className="w-full p-4 border rounded-xl mb-4"
                                                />

                                                <input
                                                    type="number"
                                                    value={editingCourse.fee}
                                                    onChange={(e) =>
                                                        setEditingCourse({
                                                            ...editingCourse,
                                                            fee: e.target.value
                                                        })
                                                    }
                                                    className="w-full p-4 border rounded-xl mb-4"
                                                />

                                                <textarea
                                                    value={editingCourse.description}
                                                    onChange={(e) =>
                                                        setEditingCourse({
                                                            ...editingCourse,
                                                            description: e.target.value
                                                        })
                                                    }
                                                    className="w-full p-4 border rounded-xl mb-4"
                                                    rows="4"
                                                />

                                                <div className="flex gap-4">

                                                    <button
                                                        onClick={updateCourse}
                                                        className="bg-green-600 text-white px-6 py-3 rounded-xl"
                                                    >
                                                        Save Changes
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            setEditingCourse(null)
                                                        }
                                                        className="bg-gray-500 text-white px-6 py-3 rounded-xl"
                                                    >
                                                        Cancel
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    )}

                                </div>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </div>

    </div>
);


}

export default AdminCourses;
