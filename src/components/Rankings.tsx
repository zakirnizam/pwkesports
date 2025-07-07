import { useState } from 'react';
import { Trophy, Medal, Award, Crown, BarChart3, Calendar, Filter } from 'lucide-react';

const Rankings = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [selectedSeason, setSelectedSeason] = useState('Season 5');
  const [selectedPhase, setSelectedPhase] = useState('Phase 3');

  const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5'];
  const phases = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'];

  // Generate sample ranking data for top 100 players
  const generateRankings = () => {
    const rankings = [];
    const names = [
      'Alex Martinez', 'Jordan Kim', 'Marcus Johnson', 'Sofia Rodriguez', 'Chen Wei',
      'Isabella Santos', 'David Park', 'Emma Wilson', 'Ryan Chen', 'Maya Patel',
      'Lucas Silva', 'Zoe Adams', 'Kai Tanaka', 'Aria Lopez', 'Noah Brown',
      'Lily Zhang', 'Ethan Davis', 'Chloe Kim', 'Oliver Wang', 'Mia Garcia',
      'James Wilson', 'Sarah Lee', 'Michael Chang', 'Anna Rodriguez', 'Kevin Park'
    ];

    const playerImages = [
      'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    ];
    
    for (let i = 1; i <= 100; i++) {
      rankings.push({
        rank: i,
        name: names[Math.floor(Math.random() * names.length)] + ` ${i}`,
        rating: Math.floor(Math.random() * (999 - 800) + 800),
        image: playerImages[Math.floor(Math.random() * playerImages.length)],
        clan: Math.random() > 0.85 ? 'PWK' : null // 15% chance of being PWK member
      });
    }
    return rankings;
  };

  const allRankings = generateRankings();
  
  const getRankIcon = (rank: number) => {
    if (rank === 1) return Crown;
    if (rank <= 3) return Trophy;
    if (rank <= 10) return Medal;
    return Award;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank <= 3) return 'text-emerald-400';
    if (rank <= 10) return 'text-purple-400';
    return 'text-gray-400';
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 950) return 'text-yellow-400';
    if (rating >= 900) return 'text-emerald-400';
    if (rating >= 850) return 'text-green-400';
    return 'text-gray-400';
  };

  const getGroupRankings = (groupNumber: number) => {
    const startIndex = (groupNumber - 1) * 10;
    const endIndex = startIndex + 10;
    return allRankings.slice(startIndex, endIndex);
  };

  const groups = Array.from({ length: 10 }, (_, i) => i + 1);

  const pwkMembersInTop10 = allRankings.slice(0, 10).filter(player => player.clan === 'PWK').length;
  const pwkMembersInTop50 = allRankings.slice(0, 50).filter(player => player.clan === 'PWK').length;
  const pwkMembersInTop100 = allRankings.filter(player => player.clan === 'PWK').length;

  return (
    <section id="rankings" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Season Rankings</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Top 100 players in our competitive eFootball league. Rankings are updated weekly based on performance.
          </p>
        </div>

        {/* Season and Phase Selection */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-6 w-6 text-emerald-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Filter Rankings</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {/* Season Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Select Season</span>
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors duration-200"
              >
                {seasons.map((season) => (
                  <option key={season} value={season}>{season}</option>
                ))}
              </select>
            </div>

            {/* Phase Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Select Phase</span>
              </label>
              <select
                value={selectedPhase}
                onChange={(e) => setSelectedPhase(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors duration-200"
              >
                {phases.map((phase) => (
                  <option key={phase} value={phase}>{phase}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Current Selection Display */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-gray-900 px-6 py-3 rounded-lg border border-gray-800">
              <span className="text-gray-300">Showing rankings for:</span>
              <span className="text-emerald-400 font-semibold">{selectedSeason}</span>
              <span className="text-gray-500">•</span>
              <span className="text-emerald-400 font-semibold">{selectedPhase}</span>
            </div>
          </div>
        </div>

        {/* Group Selection */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <BarChart3 className="h-6 w-6 text-emerald-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Select Ranking Group</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedGroup === group
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {(group - 1) * 10 + 1}-{group * 10}
              </button>
            ))}
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <div className="bg-black p-6 border-b border-gray-800">
            <h3 className="text-xl font-bold text-white text-center">
              Ranks {(selectedGroup - 1) * 10 + 1} - {selectedGroup * 10}
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Player</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {getGroupRankings(selectedGroup).map((player) => {
                  const RankIcon = getRankIcon(player.rank);
                  return (
                    <tr key={player.rank} className={`hover:bg-gray-800 transition-colors duration-200 ${player.clan === 'PWK' ? 'bg-emerald-900/20' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <RankIcon className={`h-5 w-5 ${getRankColor(player.rank)}`} />
                          <span className={`font-bold text-lg ${getRankColor(player.rank)}`}>
                            #{player.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={player.image} 
                            alt={player.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                          />
                          <div>
                            <div className="text-white font-semibold">{player.name}</div>
                            {player.clan && (
                              <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                {player.clan}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`font-bold text-xl ${getRatingColor(player.rating)}`}>
                          {player.rating}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Season Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{pwkMembersInTop10}</div>
            <div className="text-gray-400">PWK Members in Top 10</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{pwkMembersInTop50}</div>
            <div className="text-gray-400">PWK Members in Top 50</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{pwkMembersInTop100}</div>
            <div className="text-gray-400">PWK Members in Top 100</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">925</div>
            <div className="text-gray-400">Average Clan Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rankings;