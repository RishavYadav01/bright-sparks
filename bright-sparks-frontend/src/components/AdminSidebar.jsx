import { useNavigate, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    MessageSquare,
    Mail,
    LogOut,
    Sparkles
} from "lucide-react";

function AdminSidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin");
    };

    const menuItems = [
        {
            name: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            path: "/admin/dashboard"
        },
        {
            name: "Courses",
            icon: <BookOpen size={20} />,
            path: "/admin/courses"
        },
        {
            name: "Teachers",
            icon: <GraduationCap size={20} />,
            path: "/admin/teachers"
        },
        {
            name: "Testimonials",
            icon: <MessageSquare size={20} />,
            path: "/admin/testimonials"
        },
        {
            name: "Enquiries",
            icon: <Mail size={20} />,
            path: "/admin/enquiries"
        }
    ];

    return (
        <aside
            className="
            w-72
            min-h-screen
            bg-white/80
            backdrop-blur-xl
            border-r
            border-slate-200
            shadow-xl
            flex
            flex-col
            "
        >

            {/* Logo */}

            <div className="p-6 border-b border-slate-200">

                <div className="flex items-center gap-4">

                    <div
                        className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        "
                    >
                        <Sparkles className="text-white" size={24} />
                    </div>

                    <div>

                        <h1
                            className="
                            text-xl
                            font-extrabold
                            text-slate-900
                            "
                        >
                            Bright Sparks
                        </h1>

                        <p className="text-sm text-slate-500">
                            Admin Portal
                        </p>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <div className="flex-1 p-4">

                <div className="space-y-3">

                    {menuItems.map((item) => (

                        <button
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            className={`
                                w-full
                                flex
                                items-center
                                gap-4
                                px-5
                                py-4
                                rounded-2xl
                                font-medium
                                transition-all
                                duration-300

                                ${
                                location.pathname === item.path
                                    ? `
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-purple-600
                                        text-white
                                        shadow-lg
                                        scale-[1.02]
                                        `
                                    : `
                                        text-slate-700
                                        hover:bg-slate-100
                                        hover:text-blue-600
                                        `
                            }
                            `}
                        >

                            {item.icon}

                            {item.name}

                        </button>

                    ))}

                </div>

            </div>

            {/* Bottom Card */}

            <div className="p-4">

                <div
                    className="
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    rounded-3xl
                    p-5
                    text-white
                    mb-4
                    shadow-lg
                    "
                >

                    <h3 className="font-bold text-lg">
                        Bright Sparks
                    </h3>

                    <p className="text-sm text-blue-100 mt-2">
                        Empowering students through excellence.
                    </p>

                </div>

                <button
                    onClick={handleLogout}
                    className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-5
                    py-4
                    rounded-2xl
                    bg-red-50
                    text-red-600
                    hover:bg-red-500
                    hover:text-white
                    transition-all
                    duration-300
                    "
                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>
    );
}

export default AdminSidebar;