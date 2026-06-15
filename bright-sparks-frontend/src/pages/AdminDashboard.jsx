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

return (
    <div className="flex min-h-screen bg-slate-100">

        <AdminSidebar />

        <div className="flex-1 p-10">

            <h1 className="text-5xl font-bold mb-10">
                Welcome Back Admin 👋
            </h1>

            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl">Courses</h3>
                    <p className="text-5xl font-bold mt-4">
                        {stats.courses}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl">Teachers</h3>
                    <p className="text-5xl font-bold mt-4">
                        {stats.teachers}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl">New Enquiries</h3>
                    <p className="text-5xl font-bold mt-4">
                        {stats.newEnquiries}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-xl">Admitted</h3>
                    <p className="text-5xl font-bold mt-4">
                        {stats.admitted}
                    </p>
                </div>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-white p-8 rounded-3xl shadow-lg">

                    <h2 className="text-2xl font-bold mb-6">
                        Admission Funnel
                    </h2>

                    <div className="space-y-6">

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>NEW</span>
                                <span>{stats.newEnquiries}</span>
                            </div>

                            <div className="h-4 bg-slate-200 rounded-full">
                                <div
                                    className="h-4 bg-blue-500 rounded-full"
                                    style={{
                                        width: `${Math.max(stats.newEnquiries * 40, 10)}px`
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>CONTACTED</span>
                                <span>{stats.contacted}</span>
                            </div>

                            <div className="h-4 bg-slate-200 rounded-full">
                                <div
                                    className="h-4 bg-yellow-500 rounded-full"
                                    style={{
                                        width: `${Math.max(stats.contacted * 40, 10)}px`
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>ADMITTED</span>
                                <span>{stats.admitted}</span>
                            </div>

                            <div className="h-4 bg-slate-200 rounded-full">
                                <div
                                    className="h-4 bg-green-500 rounded-full"
                                    style={{
                                        width: `${Math.max(stats.admitted * 40, 10)}px`
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 p-4 bg-slate-50 rounded-xl">

                        <h3 className="font-bold mb-2">
                            Conversion Rate
                        </h3>

                        <p className="text-3xl font-bold text-green-600">
                            {
                                stats.totalEnquiries > 0
                                    ? Math.round(
                                        (stats.admitted /
                                            stats.totalEnquiries) * 100
                                    )
                                    : 0
                            }%
                        </p>

                    </div>

                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg">

                    <h2 className="text-2xl font-bold mb-6">
                        Institute Analytics
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >
                        <PieChart>

                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                dataKey="value"
                                label
                            >
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={
                                            COLORS[
                                                index % COLORS.length
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
