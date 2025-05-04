import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div className="font-sora text-sm">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
        </div>
    )
}

export default LandingPage;