import { Users, Target, ShieldHalf } from "lucide-react";
import pwkLogo from "../images/pwklogo.jpg";
import ImageWithFallback from './ImageWithFallback';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="pt-28 sm:pt-32 mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gray-800 border-4 border-emerald-400 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={pwkLogo}
              alt="PWK Esports Logo"
              className="w-full h-full object-contain min-w-0 min-h-0"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            onClick={() => (window.location.href = "#contact")}
          >
            <Users className="h-5 w-5" />
            <span>Join Our Clan</span>
          </button>
          <button
            className="border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            onClick={() => (window.location.href = "#team")}
          >
            <ShieldHalf className="h-5 w-5" />
            <span>View Team</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">300+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">10+</div>
            <div className="text-gray-400">Tournaments Won</div>
          </div>
                    <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">7+</div>
            <div className="text-gray-400">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
