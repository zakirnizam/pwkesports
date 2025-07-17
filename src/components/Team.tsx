import { useState } from 'react';
import { Crown, Users, Star, Shield, Target, Zap, Trophy, Award, Gamepad2 } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('Management');

  const teamCategories = {
    Management: [
      {
        name: "AKSHAY",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "HARIS",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "PRINCE",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      }
    ],
    Leaders: [
      {
        name: "Sreenath",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Sreejith",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Hari",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Subin",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Sarath",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Athul Vok",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Athul PD",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Zidan",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Gokul",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Varun",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      }
    ],
    "Star Player's": [
      {
        name: "Anvar",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Febin",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Alex",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Sulthan",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Grizzy",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Abhi",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Adhi",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Shiraz",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Murshid",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Jibin",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Sheheer",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Unni",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      }
    ],
    "Next Gen": [
      {
        name: "Sohal",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Alen",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Rizwan",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      }
    ],
    Pioneers: [
      {
        name: "Abin",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Asaf",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
      },
      {
        name: "Mirfash",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamCategories[activeTab as keyof typeof teamCategories].map((player, index) => {
            const CategoryIcon = getCategoryIcon(activeTab);
            return (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full p-2">
                    <CategoryIcon className={`h-5 w-5 ${getCategoryColor(activeTab).split(' ')[0]}`} />
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white">{player.name}</h3>
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
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {Object.values(teamCategories).reduce((total, category) => total + category.length, 0)}
            </div>
            <div className="text-gray-400">Total Team Members</div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
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