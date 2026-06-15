import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import App from "./App";
import "./index.css";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminEnquiries from "./pages/AdminEnquiries";
import AdminCourses from "./pages/AdminCourses";
import AdminTeachers from "./pages/AdminTeachers";
import AdminTestimonials from "./pages/AdminTestimonials";
import ProtectedRoute from "./components/ProtectedRoute";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<App />} />

                <Route
                    path="/admin"
                    element={<AdminLogin />}
                />

                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/enquiries"
                    element={
                        <ProtectedRoute>
                            <AdminEnquiries />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/courses"
                    element={
                        <ProtectedRoute>
                            <AdminCourses />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/teachers"
                    element={
                        <ProtectedRoute>
                            <AdminTeachers />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/testimonials"
                    element={
                        <ProtectedRoute>
                            <AdminTestimonials />
                        </ProtectedRoute>
                    }
                />


            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
