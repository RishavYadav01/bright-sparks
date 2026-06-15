import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

function AdminTeachers() {

    
const [teachers, setTeachers] = useState([]);

const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    qualification: "",
    experienceYears: "",
    phone: "",
    email: "",
    bio: ""
});

const [editingTeacher, setEditingTeacher] =
    useState(null);

const fetchTeachers = () => {
    API.get("/teachers")
        .then((response) => {
            setTeachers(response.data);
        });
};

useEffect(() => {
    fetchTeachers();
}, []);

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const addTeacher = async (e) => {

    e.preventDefault();

    await API.post("/teachers", formData);

    setFormData({
        fullName: "",
        subject: "",
        qualification: "",
        experienceYears: "",
        phone: "",
        email: "",
        bio: ""
    });

    fetchTeachers();
};

const deleteTeacher = async (id) => {

    if (!window.confirm("Delete Teacher?")) {
        return;
    }

    await API.delete(`/teachers/${id}`);

    fetchTeachers();
};

const updateTeacher = async () => {

    await API.put(
        `/teachers/${editingTeacher.teacherId}`,
        editingTeacher
    );

    setEditingTeacher(null);

    fetchTeachers();
};

return (
    <div className="flex min-h-screen bg-slate-100">

        <AdminSidebar />

        <div className="flex-1 p-10">

            <h1 className="text-5xl font-bold mb-8">
                Teacher Management
            </h1>

            <form
                onSubmit={addTeacher}
                className="bg-white p-8 rounded-3xl shadow-xl mb-10"
            >

                <h2 className="text-2xl font-bold mb-6">
                    Add Teacher
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        name="qualification"
                        placeholder="Qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        type="number"
                        name="experienceYears"
                        placeholder="Experience"
                        value={formData.experienceYears}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 border rounded-xl"
                    />

                </div>

                <textarea
                    name="bio"
                    placeholder="Teacher Bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl mt-4"
                    rows="4"
                />

                <button
                    type="submit"
                    className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl"
                >
                    Add Teacher
                </button>

            </form>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-600 text-white">

                    <tr>
                        <th className="p-4">Name</th>
                        <th className="p-4">Subject</th>
                        <th className="p-4">Experience</th>
                        <th className="p-4">Actions</th>
                    </tr>

                    </thead>

                    <tbody>

                    {teachers.map((teacher) => (

                        <tr
                            key={teacher.teacherId}
                            className="border-b"
                        >
                            <td className="p-4">
                                {teacher.fullName}
                            </td>

                            <td className="p-4">
                                {teacher.subject}
                            </td>

                            <td className="p-4">
                                {teacher.experienceYears} Years
                            </td>

                            <td className="p-4">

                                <div className="flex gap-2">

                                    <button
                                        onClick={() =>
                                            setEditingTeacher(
                                                teacher
                                            )
                                        }
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteTeacher(
                                                teacher.teacherId
                                            )
                                        }
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

            {editingTeacher && (

                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white p-8 rounded-3xl w-[600px]">

                        <h2 className="text-3xl font-bold mb-6">
                            Edit Teacher
                        </h2>

                        <input
                            value={editingTeacher.fullName}
                            onChange={(e) =>
                                setEditingTeacher({
                                    ...editingTeacher,
                                    fullName:
                                        e.target.value
                                })
                            }
                            className="w-full p-4 border rounded-xl mb-4"
                        />

                        <input
                            value={editingTeacher.subject}
                            onChange={(e) =>
                                setEditingTeacher({
                                    ...editingTeacher,
                                    subject:
                                        e.target.value
                                })
                            }
                            className="w-full p-4 border rounded-xl mb-4"
                        />

                        <input
                            value={
                                editingTeacher.qualification
                            }
                            onChange={(e) =>
                                setEditingTeacher({
                                    ...editingTeacher,
                                    qualification:
                                        e.target.value
                                })
                            }
                            className="w-full p-4 border rounded-xl mb-4"
                        />

                        <textarea
                            value={editingTeacher.bio}
                            onChange={(e) =>
                                setEditingTeacher({
                                    ...editingTeacher,
                                    bio:
                                        e.target.value
                                })
                            }
                            rows="4"
                            className="w-full p-4 border rounded-xl mb-4"
                        />

                        <div className="flex gap-4">

                            <button
                                onClick={updateTeacher}
                                className="bg-green-600 text-white px-6 py-3 rounded-xl"
                            >
                                Save
                            </button>

                            <button
                                onClick={() =>
                                    setEditingTeacher(null)
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

    </div>
);


}

export default AdminTeachers;
