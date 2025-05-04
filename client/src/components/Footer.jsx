import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 py-12 px-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white font-sora">
                  inteloop
                </span>
              </div>
              <p className="text-gray-300 font-sora max-w-sm">
                Centralize feedback from multiple channels, analyze with AI 
                and transform insights into product decisions.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {/* Twitter */}
                    <FaSquareXTwitter size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {/* GitHub */}
                    <FaSquareGithub size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {/* LinkedIn */}
                    <FaLinkedin size={32} />
                </a>
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-sora">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">Roadmap</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-sora">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">Contact</a></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm font-sora">
              © {currentYear} Inteloop. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm font-sora">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-sora">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-sora">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  