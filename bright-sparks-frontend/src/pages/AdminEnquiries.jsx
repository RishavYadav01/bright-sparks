import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

function AdminEnquiries() {


const [enquiries, setEnquiries] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("ALL");

const fetchEnquiries = () => {

    API.get("/enquiries")
        .then((response) => {

            setEnquiries(
                response.data.sort(
                    (a, b) =>
                        new Date(b.createdAt) -
                        new Date(a.createdAt)
                )
            );

        })
        .catch((error) => {
            console.error(error);
        });
};

useEffect(() => {
    fetchEnquiries();
}, []);

const updateStatus = async (id, status) => {

    try {

        await API.put(
            `/enquiries/${id}/status?status=${status}`
);

    fetchEnquiries();

} catch (error) {
    console.error(error);
}
};

const deleteEnquiry = async (id) => {

    if (!window.confirm("Delete this enquiry?")) {
        return;
    }

    try {

        await API.delete(`/enquiries/${id}`);

        fetchEnquiries();

    } catch (error) {
        console.error(error);
    }
};

const filteredEnquiries = enquiries.filter((enquiry) => {

    const matchesSearch =
        enquiry.fullName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||

        enquiry.phone
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||

        enquiry.email
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    const matchesStatus =
        statusFilter === "ALL" ||
        enquiry.status === statusFilter;

    return matchesSearch && matchesStatus;
});

const totalCount = enquiries.length;

const newCount = enquiries.filter(
    (e) => e.status === "NEW"
).length;

const contactedCount = enquiries.filter(
    (e) => e.status === "CONTACTED"
).length;

const admittedCount = enquiries.filter(
    (e) => e.status === "ADMITTED"
).length;

return (

    <div className="flex min-h-screen bg-slate-100">

        <AdminSidebar />

        <div className="flex-1 p-10">

            <h1 className="text-4xl font-bold mb-8">
                Enquiry Management
            </h1>

            <div className="grid md:grid-cols-4 gap-6 mb-8">

                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg">
                        Total Enquiries
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {totalCount}
                    </p>
                </div>

                <div className="bg-cyan-500 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg">
                        New
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {newCount}
                    </p>
                </div>

                <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg">
                        Contacted
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {contactedCount}
                    </p>
                </div>

                <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg">
                        Admitted
                    </h3>

                    <p className="text-4xl font-bold mt-2">
                        {admittedCount}
                    </p>
                </div>

            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">

                <input
                    type="text"
                    placeholder="Search by name, phone or email..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    className="flex-1 p-3 border rounded-xl"
                />

                <select
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                    className="p-3 border rounded-xl"
                >
                    <option value="ALL">
                        All Status
                    </option>

                    <option value="NEW">
                        NEW
                    </option>

                    <option value="CONTACTED">
                        CONTACTED
                    </option>

                    <option value="ADMITTED">
                        ADMITTED
                    </option>
                </select>

            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-600 text-white">

                    <tr>
                        <th className="p-4 text-left">
                            Name
                        </th>

                        <th className="p-4 text-left">
                            Phone
                        </th>

                        <th className="p-4 text-left">
                            Email
                        </th>

                        <th className="p-4 text-left">
                            Created At
                        </th>

                        <th className="p-4 text-left">
                            Message
                        </th>

                        <th className="p-4 text-left">
                            Status
                        </th>

                        <th className="p-4 text-left">
                            Actions
                        </th>
                    </tr>

                    </thead>

                    <tbody>

                    {filteredEnquiries.map((enquiry) => (

                        <tr
                            key={enquiry.enquiryId}
                            className="border-b hover:bg-slate-50"
                        >

                            <td className="p-4">
                                {enquiry.fullName}
                            </td>

                            <td className="p-4">
                                {enquiry.phone}
                            </td>

                            <td className="p-4">
                                {enquiry.email}
                            </td>

                            <td className="p-4">
                                {
                                    enquiry.createdAt
                                        ? new Date(
                                            enquiry.createdAt
                                        ).toLocaleString()
                                        : "-"
                                }
                            </td>

                            <td className="p-4 max-w-xs">
                                {enquiry.message}
                            </td>

                            <td className="p-4">

                                    <span
                                        className={`px-3 py-1 rounded-full text-white ${
                                            enquiry.status === "NEW"
                                                ? "bg-blue-500"
                                                : enquiry.status === "CONTACTED"
                                                    ? "bg-yellow-500"
                                                    : "bg-green-600"
                                        }`}
                                    >
                                        {enquiry.status}
                                    </span>

                            </td>

                            <td className="p-4 flex gap-2 items-center">

                                <select
                                    value={enquiry.status}
                                    onChange={(e) =>
                                        updateStatus(
                                            enquiry.enquiryId,
                                            e.target.value
                                        )
                                    }
                                    className="border rounded-lg p-2"
                                >
                                    <option value="NEW">
                                        NEW
                                    </option>

                                    <option value="CONTACTED">
                                        CONTACTED
                                    </option>

                                    <option value="ADMITTED">
                                        ADMITTED
                                    </option>
                                </select>

                                <button
                                    onClick={() =>
                                        deleteEnquiry(
                                            enquiry.enquiryId
                                        )
                                    }
                                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                                >
                                    Delete
                                </button>

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

export default AdminEnquiries;


