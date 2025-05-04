import DemoSection from "../components/DemoSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import WhyInteloop from "../components/WhyInteloop";
import BookDemo from "../components/BookDemo";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="font-sora text-sm">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <WhyInteloop />
            <DemoSection />
            <BookDemo />
            <Footer />
        </div>
    )
}

export default LandingPage;