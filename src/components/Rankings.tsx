import { useState } from 'react';
import { Trophy, Medal, Award, Crown, BarChart3 } from 'lucide-react';
import { Abhi, Abin, Adhi, Alen, Alex, Anvar, Asaf, AthulVok, Febin, Grizzy, Jibin, Mirfash, Murshid, Prince, Rizwan, Sheheer, Shiraz, Sohal, Sreejith, Sulthan } from '../images'; // Adjust the import path as necessary

const Rankings = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);

  // Hardcoded rankings data for top 100 players
 const allRankings = [
  { rank: 1, name: 'Grizzy', rating: 985, image: Grizzy },
  { rank: 2, name: 'Shiraz', rating: 978, image: Shiraz },
  { rank: 3, name: 'Murshid', rating: 972, image: Murshid },
  { rank: 4, name: 'Abin', rating: 968, image: Abin },
  { rank: 5, name: 'Sohal', rating: 965, image: Sohal },
  { rank: 6, name: 'Febin', rating: 962, image: Febin },
  { rank: 7, name: 'Sheheer', rating: 958, image: Sheheer },
  { rank: 8, name: 'Abhi', rating: 955, image: Abhi },
  { rank: 9, name: 'Anvar', rating: 952, image: Anvar },
  { rank: 10, name: 'Sreejith', rating: 949, image: Sreejith },
  { rank: 11, name: 'Sulthan', rating: 946, image: Sulthan },
  { rank: 12, name: 'Asaf', rating: 943, image: Asaf },
  { rank: 13, name: 'Rizwan', rating: 940, image: Rizwan },
  { rank: 14, name: 'Alen', rating: 937, image: Alen },
  { rank: 15, name: 'Athul VOK', rating: 934, image: AthulVok },
  { rank: 16, name: 'Adhi', rating: 931, image: Adhi },
  { rank: 17, name: 'Jibin', rating: 928, image: Jibin },
  { rank: 18, name: 'Alex', rating: 925, image: Alex },
  { rank: 19, name: 'Prince', rating: 922, image: Prince },
  { rank: 20, name: 'Mirfash', rating: 919, image: Mirfash },
  // ...Array.from({ length: 80 }, (_, i) => {
  //     const rank = i + 21;
  //     const names = [
  //       'James Wilson', 'Sarah Lee', 'Michael Chang', 'Anna Rodriguez', 'Kevin Park',
  //       'Lisa Thompson', 'Daniel Kim', 'Rachel Martinez', 'Tyler Johnson', 'Ashley Chen',
  //       'Brandon Lee', 'Jessica Wang', 'Andrew Davis', 'Samantha Brown', 'Justin Garcia',
  //       'Amanda Miller', 'Christopher Wilson', 'Nicole Anderson', 'Matthew Taylor', 'Stephanie Thomas',
  //       'Joshua Jackson', 'Michelle White', 'Ryan Harris', 'Jennifer Martin', 'Nicholas Thompson',
  //       'Kimberly Garcia', 'Anthony Martinez', 'Elizabeth Robinson', 'Jacob Clark', 'Melissa Rodriguez',
  //       'William Lewis', 'Amy Lee', 'Alexander Walker', 'Laura Hall', 'Benjamin Allen',
  //       'Rebecca Young', 'Samuel Hernandez', 'Sharon King', 'Joseph Wright', 'Donna Lopez',
  //       'Nathan Hill', 'Carol Scott', 'Zachary Green', 'Ruth Adams', 'Aaron Baker',
  //       'Helen Gonzalez', 'Jose Nelson', 'Maria Carter', 'Adam Mitchell', 'Sandra Perez',
  //       'Eric Roberts', 'Betty Turner', 'Brian Phillips', 'Dorothy Campbell', 'Sean Parker',
  //       'Lisa Evans', 'Carl Edwards', 'Nancy Collins', 'Keith Stewart', 'Karen Sanchez',
  //       'Patrick Morris', 'Susan Rogers', 'Jeremy Reed', 'Linda Cook', 'Marcus Bailey',
  //       'Deborah Rivera', 'Victor Cooper', 'Barbara Richardson', 'Gabriel Cox', 'Julie Ward',
  //       'Isaac Torres', 'Christina Peterson', 'Luke Gray', 'Frances Ramirez', 'Mason James',
  //       'Diana Watson', 'Owen Brooks', 'Marie Kelly', 'Caleb Sanders', 'Janet Price'
  //     ];
  //     const images = [
  //       'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
  //       'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  //     ];
      
  //     return {
  //       rank,
  //       name: names[(rank - 21) % names.length],
  //       rating: Math.max(800, 916 - (rank - 21) * 2),
  //       image: images[(rank - 21) % images.length],
  //     };
  //   })
  ];
  
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

  return (
    <section id="rankings" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Current Season Rankings</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Top 100 players in our competitive eFootball league. Rankings are updated weekly based on performance.
          </p>
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {getGroupRankings(selectedGroup).map((player) => {
                  const RankIcon = getRankIcon(player.rank);
                  return (
                    <tr key={player.rank} className={`hover:bg-gray-800 transition-colors duration-200}`}>
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
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Season Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100</div>
            <div className="text-gray-400">Total Players</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">80+</div>
            <div className="text-gray-400">Matches Won</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
            <div className="text-gray-400">Tournaments</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rankings;