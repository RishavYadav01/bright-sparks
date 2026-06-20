import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import {
    BookOpen,
    Users,
    MessageSquare,
    GraduationCap
} from "lucide-react";

function AdminDashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({
        courses: 0,
        teachers: 0,
        testimonials: 0,
        totalEnquiries: 0,
        newEnquiries: 0,
        contacted: 0,
        admitted: 0
    });

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/admin");
        }

    }, [navigate]);

    useEffect(() => {

        API.get("/dashboard/stats")
            .then((response) => {
                setStats(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    const chartData = [
        {
            name: "Courses",
            value: stats.courses || 0
        },
        {
            name: "Teachers",
            value: stats.teachers || 0
        },
        {
            name: "Enquiries",
            value: stats.totalEnquiries || 0
        },
        {
            name: "Admitted",
            value: stats.admitted || 0
        }
    ];

    const COLORS = [
        "#2563eb",
        "#7c3aed",
        "#16a34a",
        "#ea580c"
    ];

    const conversionRate =
        stats.totalEnquiries > 0
            ? Math.round(
                (stats.admitted /
                    stats.totalEnquiries) *
                100
            )
            : 0;

    return (

        <div
            className="
            flex
            min-h-screen
            bg-gradient-to-br
            from-slate-50
            via-blue-50
            to-purple-50
            "
        >

            <AdminSidebar />

            <div className="flex-1 p-6 md:p-10">

                {/* Header */}

                <div className="mb-10">

                    <h1
                        className="
                        text-4xl
                        md:text-5xl
                        font-extrabold
                        text-slate-900
                        "
                    >
                        Dashboard
                    </h1>

                    <p className="text-slate-600 mt-3 text-lg">
                        Welcome back, Admin 👋
                    </p>

                </div>

                {/* Stat Cards */}

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div
                        className="
                        bg-gradient-to-r
                        from-blue-600
                        to-blue-700
                        text-white
                        p-8
                        rounded-3xl
                        shadow-xl
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-blue-100">
                                    Courses
                                </p>

                                <h2 className="text-5xl font-bold mt-3">
                                    {stats.courses}
                                </h2>

                            </div>

                            <BookOpen size={42} />

                        </div>

                    </div>

                    <div
                        className="
                        bg-gradient-to-r
                        from-purple-600
                        to-purple-700
                        text-white
                        p-8
                        rounded-3xl
                        shadow-xl
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-purple-100">
                                    Teachers
                                </p>

                                <h2 className="text-5xl font-bold mt-3">
                                    {stats.teachers}
                                </h2>

                            </div>

                            <Users size={42} />

                        </div>

                    </div>

                    <div
                        className="
                        bg-gradient-to-r
                        from-orange-500
                        to-red-500
                        text-white
                        p-8
                        rounded-3xl
                        shadow-xl
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-orange-100">
                                    New Enquiries
                                </p>

                                <h2 className="text-5xl font-bold mt-3">
                                    {stats.newEnquiries}
                                </h2>

                            </div>

                            <MessageSquare size={42} />

                        </div>

                    </div>

                    <div
                        className="
                        bg-gradient-to-r
                        from-green-500
                        to-emerald-600
                        text-white
                        p-8
                        rounded-3xl
                        shadow-xl
                        "
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-green-100">
                                    Admitted
                                </p>

                                <h2 className="text-5xl font-bold mt-3">
                                    {stats.admitted}
                                </h2>

                            </div>

                            <GraduationCap size={42} />

                        </div>

                    </div>

                </div>

                {/* Charts Section */}

                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    {/* Admission Funnel */}

                    <div
                        className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-xl
                        border
                        border-slate-100
                        "
                    >

                        <h2
                            className="
                            text-2xl
                            font-bold
                            text-slate-900
                            mb-8
                            "
                        >
                            Admission Funnel
                        </h2>

                        <div className="space-y-8">

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium">
                                        New Enquiries
                                    </span>

                                    <span>
                                        {stats.newEnquiries}
                                    </span>

                                </div>

                                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">

                                    <div
                                        className="
                                        h-full
                                        bg-blue-600
                                        rounded-full
                                        "
                                        style={{
                                            width: `${Math.min(
                                                stats.newEnquiries * 10,
                                                100
                                            )}%`
                                        }}
                                    />

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium">
                                        Contacted
                                    </span>

                                    <span>
                                        {stats.contacted}
                                    </span>

                                </div>

                                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">

                                    <div
                                        className="
                                        h-full
                                        bg-yellow-500
                                        rounded-full
                                        "
                                        style={{
                                            width: `${Math.min(
                                                stats.contacted * 10,
                                                100
                                            )}%`
                                        }}
                                    />

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium">
                                        Admitted
                                    </span>

                                    <span>
                                        {stats.admitted}
                                    </span>

                                </div>

                                <div className="h-4 bg-slate-200 rounded-full overflow-hidden">

                                    <div
                                        className="
                                        h-full
                                        bg-green-500
                                        rounded-full
                                        "
                                        style={{
                                            width: `${Math.min(
                                                stats.admitted * 10,
                                                100
                                            )}%`
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                        <div
                            className="
                            mt-8
                            p-6
                            rounded-2xl
                            bg-gradient-to-r
                            from-green-50
                            to-green-100
                            "
                        >

                            <p className="text-slate-600">
                                Conversion Rate
                            </p>

                            <h3
                                className="
                                text-5xl
                                font-bold
                                text-green-600
                                mt-2
                                "
                            >
                                {conversionRate}%
                            </h3>

                        </div>

                    </div>

                    {/* Analytics */}

                    <div
                        className="
                        bg-white
                        rounded-3xl
                        p-8
                        shadow-xl
                        border
                        border-slate-100
                        "
                    >

                        <h2
                            className="
                            text-2xl
                            font-bold
                            text-slate-900
                            mb-6
                            "
                        >
                            Institute Analytics
                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={380}
                        >

                            <PieChart>

                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={130}
                                    innerRadius={70}
                                    dataKey="value"
                                    label
                                >

                                    {chartData.map((entry, index) => (

                                        <Cell
                                            key={index}
                                            fill={
                                                COLORS[
                                                index %
                                                COLORS.length
                                                    ]
                                            }
                                        />

                                    ))}

                                </Pie>

                                <Tooltip />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default AdminDashboard;