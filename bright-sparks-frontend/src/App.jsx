import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <WhyChooseUs />
            <Courses />
            <Teachers />
            <Testimonials />
            <ContactForm />
            <Footer />
            <WhatsAppButton />
        </>
    );
}

export default App;