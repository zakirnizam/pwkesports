import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Trophy, Calendar, ArrowLeft, Medal, Star } from 'lucide-react';
import { AlappuzhaFC, Anvar, Aslam, DarkTriad, ErnakulamFC } from '../images';

const tournamentDetails: Record<string, { 
  name: string; 
  description: string;
  date: string;
  location: string;
  participants: number;
  status: 'completed' | 'ongoing' | 'upcoming';
  winner?: string;
  results: Array<{
    position: number;
    team: string;
    logo: string; // path to logo image
  }>;
  individualStats?: Array<{
    name: string;
    stat: string;
    value: string | number;
    image?: string;
  }>;
}> = {
  districtTour: {
    name: 'District Championship',
    description: 'The premier district-level tournament featuring the best teams from across the region.',
    date: 'March 15-17, 2024',
    location: 'Central Sports Complex',
    participants: 16,
    status: 'completed',
    winner: 'The Dark Triad',
    results: [
      { position: 1, team: 'The Dark Triad', logo: DarkTriad },
      { position: 2, team: 'Ernakulam Titans', logo: ErnakulamFC },
      { position: 3, team: 'Alappuzha FC', logo: AlappuzhaFC},
    ],
    individualStats: [
      { name: 'Anvar', stat: 'Top Scorer', value: 34, image: Anvar },
      { name: 'Aslam', stat: 'Golden Glove', value: '', image: Aslam },
    ]
  },
  stateCup: {
    name: 'State Cup Championship',
    description: 'The ultimate state-level competition bringing together champions from all districts.',
    date: 'April 20-22, 2024',
    location: 'Metropolitan Arena',
    participants: 32,
    status: 'ongoing',
    results: [
      { position: 1, team: 'Golden Warriors', logo: '/src/images/distWinners.png' },
      { position: 2, team: 'Silver Sharks', logo: '/src/images/distRunners.png' },
      { position: 3, team: 'Bronze Tigers', logo: '/src/images/distThird.png' },
    ],
    individualStats: [
      { name: 'Bilal', stat: 'Top Scorer', value: 9, image: '/src/images/Bilal.jpg' },
      { name: 'Hari', stat: 'Best Defender', value: '-', image: '/src/images/Hari.png' },
    ]
  },
  nationalLeague: {
    name: 'National Premier League',
    description: 'The most prestigious tournament in the country, featuring elite teams from every state.',
    date: 'May 10-15, 2024',
    location: 'National Stadium',
    participants: 64,
    status: 'upcoming',
    results: [],
    individualStats: []
  }
};


const TournamentResult: React.FC = () => {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const tournament = tournamentDetails[tournamentId || ''];
  const topRef = React.useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.focus();
    }
  }, []);

  if (!tournament) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <Trophy className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-300">Tournament Not Found</h1>
          <p className="text-gray-400 mb-8">The tournament you are looking for does not exist.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:outline-none"
            ref={topRef}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1: return <Trophy className="w-6 h-6 text-emerald-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-300" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <Star className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-500/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <Link 
            to="/results" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-200 focus:outline-none"
            ref={topRef}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Tournaments
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {tournament.name}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {tournament.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Winner Announcement */}
        {tournament.winner && (
          <div className="bg-gradient-to-r from-[#059669]/20 to-[#059669]/20 rounded-xl p-8 mb-12 border border-[#059669]/30">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Champions</h2>
              <p className="text-2xl text-emerald-400 font-semibold">{tournament.winner}</p>
            </div>
          </div>
        )}

        {/* Top 3 Teams Section */}
        {tournament.results.length > 0 && (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden mb-12">
            <div className="px-6 py-4 border-b border-gray-700/50">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="w-7 h-7 mr-3 text-emerald-400" />
                Top 3 Teams
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center py-8 gap-8">
              {tournament.results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-900/60 rounded-lg p-6 shadow-md w-64">
                  <div className="mb-4">{getPositionIcon(result.position)}</div>
                  <img src={result.logo} alt={result.team + ' logo'} className="w-36 h-36 object-cover rounded-lg border-4 border-emerald-400 mb-4 bg-white" />
                  <div className="text-xl font-bold text-white mb-2">{result.team}</div>
                  <div className="text-lg text-gray-400">{result.position === 1 ? 'Winners' : result.position === 2 ? 'Runners' : 'Third Place'}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Individual Stats Section */}
        {tournament.individualStats && tournament.individualStats.length > 0 && (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden mb-12">
            <div className="px-6 py-4 border-b border-gray-700/50">
              <h2 className="text-2xl font-bold flex items-center">
                <Star className="w-7 h-7 mr-3 text-yellow-400" />
                Individual Stats
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center py-8 gap-8">
              {tournament.individualStats.map((player, idx) => (
                <div key={idx} className="flex flex-col items-center bg-gray-900/60 rounded-lg p-6 shadow-md w-64">
                  {player.image && <img src={player.image} alt={player.name} className="w-36 h-36 object-cover rounded-lg border-4 border-yellow-400 mb-4 bg-white" />}
                  <div className="text-xl font-bold text-white mb-2">{player.name}</div>
                  <div className="text-lg text-gray-400">{player.stat}</div>
                  <div className="text-lg text-emerald-400 font-semibold">{player.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Tournament Message */}
        {tournament.status === 'upcoming' && (
          <div className="text-center py-16">
            <Calendar className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-300">Tournament Coming Soon</h2>
            <p className="text-gray-400 text-lg">
              Results will be available once the tournament begins on {tournament.date.split(',')[0]}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentResult;