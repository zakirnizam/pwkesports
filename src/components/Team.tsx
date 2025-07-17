import { useState } from 'react';
import { Crown, Users, Star, Shield, Target, Zap, Trophy, Award, Gamepad2 } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('Management');

  const teamCategories = {
    Management: [
      {
        name: "Haris",
        role: "Founder & CEO",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Team Vision & Strategy",
        achievements: "Founded PWK Esports in 2018"
      },
      {
        name: "Nizam",
        role: "Manager",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Operations & Development",
        achievements: "Led 15+ successful tournaments"
      },
      {
        name: "Sreenath",
        role: "Head Coach",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Training & Development",
        achievements: "Improved team performance by 40%"
      }
    ],
    Leaders: [
      {
        name: "Prince",
        role: "Co-Founder",
        image: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Strategic Leadership",
        achievements: "Co-founded PWK Esports"
      },
      {
        name: "Akshay",
        role: "Team Captain",
        image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Team Coordination",
        achievements: "Led team to 3 championship wins"
      },
      {
        name: "Alex",
        role: "Vice Captain",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Performance Analysis",
        achievements: "Strategic mastermind behind victories"
      }
    ],
    "Star Player's": [
      {
        name: "Grizzy",
        role: "Top Striker",
        image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Offensive Gameplay",
        achievements: "Rank #1 with 985 rating"
      },
      {
        name: "Shiraz",
        role: "Elite Midfielder",
        image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Playmaking & Control",
        achievements: "Rank #2 with 978 rating"
      },
      {
        name: "Murshid",
        role: "Defensive Specialist",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Defense & Tactics",
        achievements: "Rank #3 with 972 rating"
      },
      {
        name: "Abin",
        role: "Versatile Player",
        image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "All-Round Excellence",
        achievements: "Rank #4 with 968 rating"
      }
    ],
    "Next Gen": [
      {
        name: "Sohal",
        role: "Rising Star",
        image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Emerging Talent",
        achievements: "Rank #5 with 965 rating"
      },
      {
        name: "Febin",
        role: "Young Prodigy",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Future Champion",
        achievements: "Rank #6 with 962 rating"
      },
      {
        name: "Sheheer",
        role: "Upcoming Talent",
        image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Rapid Improvement",
        achievements: "Rank #7 with 958 rating"
      }
    ],
    Pioneers: [
      {
        name: "Abhi",
        role: "Veteran Player",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Experience & Wisdom",
        achievements: "Original founding member"
      },
      {
        name: "Anvar",
        role: "Legacy Player",
        image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Mentorship",
        achievements: "5+ years with PWK"
      },
      {
        name: "Sreejith",
        role: "Foundation Member",
        image: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
        specialty: "Team Building",
        achievements: "Helped establish clan culture"
      }
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Management': return Users;
      case 'Leaders': return Crown;
      case "Star Player's": return Star;
      case 'Next Gen': return Trophy;
      case 'Pioneers': return Award;
      default: return Gamepad2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Management': return 'text-purple-400 border-purple-400 bg-purple-400/10';
      case 'Leaders': return 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
      case "Star Player's": return 'text-emerald-400 border-emerald-400 bg-emerald-400/10';
      case 'Next Gen': return 'text-blue-400 border-blue-400 bg-blue-400/10';
      case 'Pioneers': return 'text-orange-400 border-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 border-gray-400 bg-gray-400/10';
    }
  };

  const getActiveColor = (category: string) => {
    switch (category) {
      case 'Management': return 'bg-purple-600 text-white border-purple-600';
      case 'Leaders': return 'bg-yellow-600 text-white border-yellow-600';
      case "Star Player's": return 'bg-emerald-600 text-white border-emerald-600';
      case 'Next Gen': return 'bg-blue-600 text-white border-blue-600';
      case 'Pioneers': return 'bg-orange-600 text-white border-orange-600';
      default: return 'bg-gray-600 text-white border-gray-600';
    }
  };

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the diverse talent that drives PWK Esports to excellence across all levels of competitive eFootball.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(teamCategories).map((category) => {
              const CategoryIcon = getCategoryIcon(category);
              const isActive = activeTab === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 flex items-center space-x-2 ${
                    isActive 
                      ? getActiveColor(category)
                      : `${getCategoryColor(category)} hover:scale-105`
                  }`}
                >
                  <CategoryIcon className="h-5 w-5" />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamCategories[activeTab as keyof typeof teamCategories].map((player, index) => {
            const CategoryIcon = getCategoryIcon(activeTab);
            return (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="relative">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full p-2">
                    <CategoryIcon className={`h-5 w-5 ${getCategoryColor(activeTab).split(' ')[0]}`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{player.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 border ${getCategoryColor(activeTab)}`}>
                    {player.role}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{player.specialty}</p>
                  <p className="text-emerald-400 text-xs font-medium">{player.achievements}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {teamCategories[activeTab as keyof typeof teamCategories].length}
            </div>
            <div className="text-gray-400">Members in {activeTab}</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-gray-400">Total Team Members</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">6</div>
            <div className="text-gray-400">Team Categories</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto">
            <Users className="h-5 w-5" />
            <span>Join Our Team</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;