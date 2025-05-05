import DemoSection from "../components/landing-page-components/DemoSection";
import Features from "../components/landing-page-components/Features";
import Hero from "../components/landing-page-components/Hero";
import HowItWorks from "../components/landing-page-components/HowItWorks";
import Navbar from "../components/landing-page-components/Navbar";
import WhyInteloop from "../components/landing-page-components/WhyInteloop";
import BookDemo from "../components/landing-page-components/BookDemo";
import Footer from "../components/landing-page-components/Footer";

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