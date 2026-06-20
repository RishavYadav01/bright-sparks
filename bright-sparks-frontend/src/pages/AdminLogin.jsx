import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { GraduationCap, ShieldCheck } from "lucide-react";

function AdminLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin/dashboard");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const response = await API.post(
                "/admin/login",
                formData
            );

            if (response.data.success) {
                localStorage.setItem(
                    "token",
                    response.data.token
                );

                navigate("/admin/dashboard");
            } else {
                setError("Invalid Credentials");
            }
        } catch (error) {
            setError("Login Failed");
        }
    };

    return (
        <div
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-purple-700
            relative
            overflow-hidden
            "
        >
            {/* Background Glows */}

            <div
                className="
                absolute
                top-10
                left-10
                w-96
                h-96
                bg-white/10
                rounded-full
                blur-3xl
                "
            />

            <div
                className="
                absolute
                bottom-10
                right-10
                w-96
                h-96
                bg-cyan-400/10
                rounded-full
                blur-3xl
                "
            />

            {/* Login Card */}

            <div
                className="
                bg-white/15
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                shadow-2xl
                p-10
                w-full
                max-w-md
                "
            >
                {/* Logo */}

                <div className="flex justify-center mb-6">
                    <div
                        className="
                        w-20
                        h-20
                        rounded-3xl
                        bg-white/20
                        flex
                        items-center
                        justify-center
                        "
                    >
                        <GraduationCap
                            size={42}
                            className="text-white"
                        />
                    </div>
                </div>

                <h1
                    className="
                    text-3xl
                    font-extrabold
                    text-center
                    text-white
                    "
                >
                    Bright Sparks
                </h1>

                <p
                    className="
                    text-center
                    text-white/80
                    mt-2
                    mb-8
                    "
                >
                    Admin Control Center
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="
                        w-full
                        p-4
                        rounded-2xl
                        bg-white/10
                        border
                        border-white/20
                        text-white
                        placeholder-white/60
                        outline-none
                        focus:border-cyan-300
                        "
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="
                        w-full
                        p-4
                        rounded-2xl
                        bg-white/10
                        border
                        border-white/20
                        text-white
                        placeholder-white/60
                        outline-none
                        focus:border-cyan-300
                        "
                    />

                    <button
                        type="submit"
                        className="
                        w-full
                        py-4
                        rounded-2xl
                        font-bold
                        text-white
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500
                        hover:scale-105
                        transition
                        shadow-xl
                        "
                    >
                        Login to Dashboard
                    </button>
                </form>

                {error && (
                    <div
                        className="
                        mt-5
                        text-center
                        text-red-300
                        font-medium
                        "
                    >
                        {error}
                    </div>
                )}

                <div
                    className="
                    mt-8
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-white/70
                    text-sm
                    "
                >
                    <ShieldCheck size={16} />
                    Secure Admin Access
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;