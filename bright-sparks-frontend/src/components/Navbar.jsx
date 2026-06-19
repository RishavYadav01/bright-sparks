import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

function Navbar() {

    const scrollTo = (id) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y:-80 }}
            animate={{ y:0 }}
            transition={{ duration:0.5 }}
            className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20"
        >

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">


                <div className="flex items-center gap-3">

                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                        <GraduationCap className="text-white"/>
                    </div>

                    <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">
                        BRIGHT <span className="text-blue-600">SPARKS</span>
                    </h1>

                </div>



                <div className="hidden md:flex gap-8 font-medium text-slate-700">


                    {[
                        ["Home","top"],
                        ["Courses","courses"],
                        ["Teachers","teachers"],
                        ["Contact","contact"]
                    ].map(([name,id])=>(

                        <button
                            key={name}
                            onClick={()=> id==="top"
                                ? window.scrollTo({top:0,behavior:"smooth"})
                                : scrollTo(id)}
                            className="hover:text-blue-600 transition"
                        >

                            {name}

                        </button>

                    ))}


                </div>


                <button
                    onClick={()=>scrollTo("contact")}
                    className="
                hidden md:block
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                text-white
                px-5 py-2.5
                rounded-full
                font-semibold
                shadow-lg
                hover:scale-105
                transition
                "
                >
                    Join Now
                </button>


            </div>

        </motion.nav>
    )
}


export default Navbar;