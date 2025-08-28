import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, ArrowRight, ArrowLeft } from 'lucide-react';

const tournaments = [
  { 
    id: 'districtTour', 
    name: 'District Tournament',
    description: 'Regional championship featuring top local teams'
  },
//   { 
//     id: 'stateCup', 
//     name: 'State Cup',
//     description: 'State-level competition with elite teams'
//   },
//   { 
//     id: 'nationalLeague', 
//     name: 'National League',
//     description: 'Premier national tournament championship'
//   }
];

const Results: React.FC = () => {
  const navigate = useNavigate();
  const topRef = React.useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.focus();
    }
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#059669]/20 to-[#059669]/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* Back to Home Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-200 focus:outline-none"
            ref={topRef}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent break-words max-w-full">
            Tournament Results
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore championship results, standings, and tournament highlights. 
            Select a tournament to view detailed results and team performances.
          </p>
        </div>
      </div>

      {/* Tournaments Grid */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#059669]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/results/${tournament.id}`)}
            >
              <div className="flex items-center justify-between mb-4">
                <Trophy className="w-8 h-8 text-[#059669] group-hover:text-[#059669]/80 transition-colors duration-200" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#059669] transition-colors duration-200">
                {tournament.name}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {tournament.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <span className="text-[#059669] text-sm font-medium group-hover:text-[#059669]/80 transition-colors duration-200">
                  View Results
                </span>
                <ArrowRight className="w-4 h-4 text-[#059669] group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <Trophy className="w-12 h-12 text-[#059669] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Championship Glory Awaits</h3>
          <p className="text-gray-400">
            Follow your favorite teams and witness their journey to tournament victory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;