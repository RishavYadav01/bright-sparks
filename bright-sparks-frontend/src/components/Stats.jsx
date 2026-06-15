function Stats() {
    const stats = [
        { number: "500+", label: "Students" },
        { number: "95%", label: "Success Rate" },
        { number: "10+", label: "Years Experience" },
        { number: "20+", label: "Courses Offered" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                        >
                            <h2 className="text-4xl font-bold text-blue-600">
                                {stat.number}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;