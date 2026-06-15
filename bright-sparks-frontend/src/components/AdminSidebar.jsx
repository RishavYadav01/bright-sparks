import { useNavigate } from "react-router-dom";
import {
    FaHome,
    FaBook,
    FaChalkboardTeacher,
    FaComment,
    FaEnvelope,
    FaSignOutAlt
} from "react-icons/fa";

function AdminSidebar() {

    
const navigate = useNavigate();

const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/admin");
};

return (
    <div className="w-72 min-h-screen bg-slate-900 text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
            BRIGHT SPARKS
        </h1>

        <div className="space-y-4">

            <button
                onClick={() => navigate("/admin/dashboard")}
                className="w-full text-left p-4 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
            >
                <FaHome className="inline mr-3" />
                Dashboard
            </button>

            <button
                onClick={() => navigate("/admin/courses")}
                className="w-full text-left p-4 rounded-xl hover:bg-slate-800 transition"
            >
                <FaBook className="inline mr-3" />
                Courses
            </button>

            <button
                onClick={() => navigate("/admin/teachers")}
                className="w-full text-left p-4 rounded-xl hover:bg-slate-800 transition"
            >
                <FaChalkboardTeacher className="inline mr-3" />
                Teachers
            </button>

            <button
                onClick={() => navigate("/admin/testimonials")}
                className="w-full text-left p-4 rounded-xl hover:bg-slate-800 transition"
            >
                <FaComment className="inline mr-3" />
                Testimonials
            </button>

            <button
                onClick={() => navigate("/admin/enquiries")}
                className="w-full text-left p-4 rounded-xl hover:bg-slate-800 transition"
            >
                <FaEnvelope className="inline mr-3" />
                Enquiries
            </button>

            <button
                onClick={handleLogout}
                className="w-full text-left p-4 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition"
            >
                <FaSignOutAlt className="inline mr-3" />
                Logout
            </button>

        </div>

    </div>
);


}

export default AdminSidebar;
