import { useState } from 'react';
import { Trophy, Medal, Award, Crown, BarChart3 } from 'lucide-react';
import { Abhi, Abin, Adhi, Alen, Alex, Anvar, Asaf, AthulVok, Febin, Grizzy, Jibin, Mirfash, Murshid, Prince, Rizwan, Sheheer, Shiraz, Sohal, Sreejith, Sulthan, Nizam, PwkLogo, Varun, Bee, Unni, Ajin, Sarath, Gokul, Subin, Sreenath, AthulPD, Hari, Neeraj, Basim, Abrar, Afuve, Zain, Ghost, Adhilvk, Naveen, Aflah, Pranavpr, GokulJs, Akash, Ram, Ameen, Shamal, Arju, Alfin, Afnas, Bipin, Kaushik, Shabith, MB, Hafez, Sachin, Bilal, Mishal, Aslam, Sabin, Dilshad, Rockey, Fazil, Nevin, Shijin, Sathwik, Vyshnav, Alwin } from '../images';
import ImageWithFallback from './ImageWithFallback';

const Rankings = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);

  // Hardcoded rankings data for top 100 players
const allRankings = [
  { rank: 1, name: 'SREEJITH', rating: 874, image: Sreejith },
  { rank: 2, name: 'GRIZZY', rating: 815, image: Grizzy },
  { rank: 3, name: 'SHIRAZ', rating: 737, image: Shiraz },
  { rank: 4, name: 'MURSHID', rating: 658, image: Murshid },
  { rank: 5, name: 'ALEN', rating: 624, image: Alen },
  { rank: 6, name: 'VOK', rating: 582, image: AthulVok },
  { rank: 7, name: 'ANVAR', rating: 572, image: Anvar },
  { rank: 8, name: 'BASIM', rating: 557, image: Basim },
  { rank: 9, name: 'ASAF', rating: 531, image: Asaf },
  { rank: 10, name: 'VARUN', rating: 503, image: Varun },
  { rank: 11, name: 'ALEX', rating: 462, image: Alex },
  { rank: 12, name: 'JIBIN', rating: 452, image: Jibin },
  { rank: 13, name: 'ABHI', rating: 450, image: Abhi },
  { rank: 14, name: 'SULTHAN', rating: 446, image: Sulthan },
  { rank: 15, name: 'ABRAR', rating: 438, image: Abrar },
  { rank: 16, name: 'SHEHEER', rating: 437, image: Sheheer },
  { rank: 17, name: 'AFUVE', rating: 435, image: Afuve },
  { rank: 18, name: 'BEE', rating: 429, image: Bee },
  { rank: 19, name: 'ABIN', rating: 418, image: Abin },
  { rank: 20, name: 'ZAIN', rating: 417, image: Zain },
  { rank: 21, name: 'GHOST', rating: 415, image: Ghost },
  { rank: 22, name: 'NAVEEN', rating: 380, image: Naveen },
  { rank: 23, name: 'ADHIL', rating: 377, image: Adhilvk },
  { rank: 24, name: 'UNNI', rating: 375, image: Unni },
  { rank: 25, name: 'AJIN', rating: 366, image: Ajin },
  { rank: 26, name: 'MIRFASH', rating: 364, image: Mirfash },
  { rank: 27, name: 'ROCKY', rating: 363, image: Rockey },
  { rank: 28, name: 'AFLAH', rating: 356, image: Aflah },
  { rank: 29, name: 'PRANAV PR', rating: 353, image: Pranavpr },
  { rank: 30, name: 'GOKUL JS', rating: 345, image: GokulJs },
  { rank: 31, name: 'NIZAM', rating: 308, image: Nizam },
  { rank: 32, name: 'RIZWAN', rating: 307, image: Rizwan },
  { rank: 33, name: 'ALFIN', rating: 306, image: Alfin },
  { rank: 34, name: 'AKASH', rating: 304, image: Akash },
  { rank: 35, name: 'RAM', rating: 297, image: Ram },
  { rank: 36, name: 'AMEEN', rating: 289, image: Ameen },
  { rank: 37, name: 'ARJU', rating: 270, image: Arju },
  { rank: 38, name: 'SHAMAL', rating: 252, image: Shamal },
  { rank: 39, name: 'ADHI', rating: 252, image: Adhi },
  { rank: 40, name: 'AFNAS', rating: 247, image: Afnas },
  { rank: 41, name: 'BIPIN', rating: 223, image: Bipin },
  { rank: 42, name: 'KAUSHIK', rating: 223, image: Kaushik },
  { rank: 43, name: 'SARATH', rating: 220, image: Sarath },
  { rank: 44, name: 'SHABITH', rating: 219, image: Shabith },
  { rank: 45, name: 'GOKUL', rating: 215, image: Gokul },
  { rank: 46, name: 'SACHIN', rating: 213, image: Sachin },
  { rank: 47, name: 'HAFEZ', rating: 206, image: Hafez },
  { rank: 48, name: 'PRINCE', rating: 205, image: Prince },
  { rank: 49, name: 'MB', rating: 203, image: MB },
  { rank: 50, name: 'NEERAJ', rating: 201, image: Neeraj },
  { rank: 51, name: 'FEBIN', rating: 200, image: Febin },
  { rank: 52, name: 'BILAL', rating: 190, image: Bilal },
  { rank: 53, name: 'MISHAL', rating: 185, image: Mishal },
  { rank: 54, name: 'SOHAL', rating: 172, image: Sohal },
  { rank: 55, name: 'DILSHAD', rating: 168, image: Dilshad },
  { rank: 56, name: 'SREENATH', rating: 162, image: Sreenath },
  { rank: 57, name: 'ATHUL PD', rating: 151, image: AthulPD },
  { rank: 58, name: 'HARI', rating: 138, image: Hari },
  { rank: 59, name: 'ASLAM', rating: 134, image: Aslam },
  { rank: 60, name: 'SABIN', rating: 129, image: Sabin },
  { rank: 61, name: 'VYSHNAV', rating: 124, image: Vyshnav },
  { rank: 62, name: 'SATHWIK', rating: 122, image: Sathwik },
  { rank: 63, name: 'SHIJIN', rating: 118, image: Shijin },
  { rank: 64, name: 'ALWIN', rating: 102, image: Alwin },
  { rank: 65, name: 'NEVIN', rating: 101, image: Nevin },
  { rank: 66, name: 'FAZIL', rating: 100, image: Fazil },


  { rank: 67, name: 'VIVEK', rating: 97, image: PwkLogo },
  { rank: 68, name: 'RIZWAN VP', rating: 73, image: PwkLogo },
  { rank: 69, name: 'ANZIL', rating: 69, image: PwkLogo },
  { rank: 70, name: 'SUBIN', rating: 68, image: Subin },
  { rank: 71, name: 'SREEJITH P', rating: 67, image: PwkLogo },
  { rank: 72, name: 'RISHORE', rating: 66, image: PwkLogo },
  { rank: 73, name: 'ALI', rating: 57, image: PwkLogo },
  { rank: 74, name: 'APPUTTAN', rating: 55, image: PwkLogo },
  { rank: 75, name: 'ROHIT', rating: 53, image: PwkLogo },
  { rank: 76, name: 'ABHISHEK', rating: 43, image: PwkLogo },
  { rank: 77, name: 'ANTO', rating: 38, image: PwkLogo },
  { rank: 78, name: 'DEVADOOTH', rating: 28, image: PwkLogo },
  { rank: 79, name: 'AFTHAB', rating: 15, image: PwkLogo },
  { rank: 80, name: 'MANU', rating: -15, image: PwkLogo },
  { rank: 81, name: 'ZIDAN', rating: -23, image: PwkLogo },
  { rank: 82, name: 'AMAL08', rating: -25, image: PwkLogo },
  { rank: 83, name: 'KB', rating: -33, image: PwkLogo },
  { rank: 84, name: 'DANI', rating: -38, image: PwkLogo },
  { rank: 85, name: 'DECRUZ', rating: -40, image: PwkLogo },
  { rank: 86, name: 'SHABEER', rating: -41, image: PwkLogo },
  { rank: 87, name: 'RANEESH', rating: -46, image: PwkLogo },
  { rank: 88, name: 'AJMAL', rating: -47, image: PwkLogo },
  { rank: 89, name: 'VIZ', rating: -47, image: PwkLogo },
  { rank: 90, name: 'PRTHVI', rating: -54, image: PwkLogo },
  { rank: 91, name: 'RICHARD', rating: -55, image: PwkLogo },
  { rank: 92, name: 'ANCEL', rating: -65, image: PwkLogo },
  { rank: 93, name: 'NIKHIL', rating: -67, image: PwkLogo },
  { rank: 94, name: 'SHABAZ', rating: -70, image: PwkLogo },
  { rank: 95, name: 'ARSHAD  b', rating: -80, image: PwkLogo },
  { rank: 96, name: 'ALAN S', rating: -92, image: PwkLogo },
  { rank: 97, name: 'SOORAJ', rating: -105, image: PwkLogo },
  { rank: 98, name: 'NADHEEM', rating: -107, image: PwkLogo },
  { rank: 99, name: 'NUZEER', rating: -112, image: PwkLogo },
  { rank: 100, name: 'SURAJ', rating: -118, image: PwkLogo },
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
  if (rating >= 850) return 'text-yellow-400'; 
  if (rating >= 700) return 'text-green-400'; 
  if (rating >= 500) return 'text-purple-400'; 
  if (rating >= 300) return 'text-cyan-400'; 
  if (rating >= 0) return 'text-orange-400'; 
  return 'text-red-500'; 
  };

  const getGroupRankings = (groupNumber: number) => {
    const startIndex = (groupNumber - 1) * 10;
    const endIndex = startIndex + 10;
    const rankings = allRankings.slice(startIndex, endIndex);
    
    // If no data available for this group (ranks 21-100), show updation message
    if (rankings.length === 0) {
      return [];
    }
    
    return rankings;
  };

  const groups = Array.from({ length: 10 }, (_, i) => i + 1); // Show all groups 1-10 (ranks 1-100)


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
            {getGroupRankings(selectedGroup).length > 0 ? (
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Player</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Rating</th>
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
                            <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-700 flex-shrink-0">
                              <ImageWithFallback
                                src={player.image}
                                alt={player.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-white font-semibold text-lg">{player.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`font-bold text-lg ${getRatingColor(player.rating)}`}>{player.rating}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-6">
                <BarChart3 className="h-16 w-16 text-gray-600 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Updation in Progress</h3>
                <p className="text-gray-400 text-center max-w-md">
                  Rankings for positions {(selectedGroup - 1) * 10 + 1}-{selectedGroup * 10} are currently being updated. 
                  Please check back soon for the latest standings.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Rankings are updated based on player performance in matches.
          </p>  </div>
      </div>
    </section>
  );
};

export default Rankings;