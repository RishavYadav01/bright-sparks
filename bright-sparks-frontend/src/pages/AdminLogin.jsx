import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800">

        <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md"
        >

            <h2 className="text-4xl font-bold text-center mb-8">
                Admin Login
            </h2>

            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl mb-4"
                required
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl mb-4"
                required
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
            >
                Login
            </button>

            {error && (
                <p className="text-red-500 mt-4 text-center">
                    {error}
                </p>
            )}

        </form>

    </div>
);


}

export default AdminLogin;
