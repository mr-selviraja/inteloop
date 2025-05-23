import Button from '../Button'
import { Link } from 'react-router-dom'
import dashbaordPreviewImg from "../../assets/dashboard-preview.png"
import dotsPattern from "../../assets/dots-pattern.png"
import { IoRocket } from "react-icons/io5"
import { RiVideoFill } from "react-icons/ri";

function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${dotsPattern})` }}
      className="bg-violet-50 bg-repeat pt-28 sm:pt-38 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4 pb-24"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Turn Feedback Into Product Intelligence
        </h1>

        {/* Description hidden on screens <640px */}
        <p className="text-md sm:text-lg text-gray-600 mb-8">
          AI-Powered Feedback Hub for that centralizes, organizes and analyzes product feedback from multiple channels.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/signup" className="w-fit">
            <Button variant="primaryFilled">
                <IoRocket />
                Get Started
            </Button>
          </Link>
          <a
            className="w-fit"
            onClick={() => {
              const el = document.getElementById("book-demo");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Button variant="primaryOutlined">
              <RiVideoFill />
              Request Demo
            </Button>
          </a>
        </div>
      </div>

      {/* Dashboard Image */}
      <img 
        src={dashbaordPreviewImg} 
        alt="Dashboard Preview" 
        className="bg-white mt-10 w-[65] md:w-[60vw] min-w-[300px] h-auto rounded-lg p-5 border border-gray-300"
      />
    </section>
  )
}

export default Hero
