import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div className="font-sora text-sm">
            <Navbar />
            <Hero />
            <Features />
        </div>
    )
}

export default LandingPage;