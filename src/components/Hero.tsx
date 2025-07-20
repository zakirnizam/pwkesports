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

      {/* Animated Smoke Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Smoke particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${30 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-sm animate-bounce"
            style={{
              width: `${20 + (i % 4) * 10}px`,
              height: `${20 + (i % 4) * 10}px`,
              left: `${15 + (i * 10)}%`,
              top: `${25 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 2)}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="pt-28 sm:pt-32 mb-8">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-2xl blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-2xl blur-2xl animate-ping"></div>
            
            {/* Rotating smoke rings */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-emerald-400/40 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-400/40 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute left-0 top-1/2 w-1 h-1 bg-emerald-400/40 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute right-0 top-1/2 w-1 h-1 bg-emerald-400/40 rounded-full transform -translate-y-1/2"></div>
            </div>
            
            {/* Counter-rotating ring */}
            <div className="absolute inset-2 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-green-400/60 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-green-400/60 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute left-0 top-1/2 w-0.5 h-0.5 bg-green-400/60 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute right-0 top-1/2 w-0.5 h-0.5 bg-green-400/60 rounded-full transform -translate-y-1/2"></div>
            </div>
            
            {/* Main logo container */}
            <div className="relative w-full h-full bg-gray-800 border-4 border-emerald-400 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
            <ImageWithFallback
              src={pwkLogo}
              alt="PWK Esports Logo"
              className="w-full h-full object-contain min-w-0 min-h-0"
            />
            </div>
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
