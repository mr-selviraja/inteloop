import Button from "../Button"
import { FaPlay } from "react-icons/fa"
import { LuLightbulb, LuFileImage } from "react-icons/lu"

const DemoSection = () => {
  return (
    <section className="py-16 md:py-24 px-4" id="demo">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-sora">
            See <span className="text-primary">Inteloop</span> in Action
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-sora">
            Watch how easy it is to collect feedback, attach images, and generate AI insights.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gray-100 aspect-video bg-gray-100">
            {/* Video placeholder - would be replaced with actual video player once the video is ready */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-gray-500 text-lg mb-4 font-sora">
                Demo Video Coming Soon
              </div>
              
              <Button 
                className="hover:cursor-pointer bg-white rounded-full w-16 h-16 flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              >
                <FaPlay className="text-teal-500" />
              </Button>
            </div>

            {/* Overlay items to show UI elements */}
            <div className="absolute bottom-8 left-8 bg-teal-500 text-white backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100 max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <LuLightbulb size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium font-sora text-primary">AI Insight</h4>
                  <p className="text-xs text-white font-sora">
                    40% of users mentioned navigation issues in their feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-8 bg-teal-500 text-white backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-2">
                <LuFileImage size={18} className="text-primary" />
                <span className="text-xs font-medium font-sora">3 Screenshots Attached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;