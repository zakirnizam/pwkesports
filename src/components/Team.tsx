import React from 'react';
import { Crown, Users, Star, Shield, Target, Zap } from 'lucide-react';

const Team = () => {
  const players = [
    {
      name: "Alex Martinez",
      role: "Founder",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialty: "Team Leader & Vision"
    },
    {
      name: "Jordan Kim",
      role: "Co-Founder",
      image: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialty: "Strategy & Operations"
    },
    {
      name: "Marcus Johnson",
      role: "Captain",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialty: "Team Captain & Defender"
    },
    {
      name: "Sofia Rodriguez",
      role: "Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialty: "Team Management"
    },
    {
      name: "Chen Wei",
      role: "Coach",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialty: "Training & Development"
    },
    {
      name: "Isabella Santos",
      role: "Analyst",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      specialty: "Performance Analysis"
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Founder': return Crown;
      case 'Co-Founder': return Crown;
      case 'Captain': return Shield;
      case 'Manager': return Users;
      case 'Coach': return Target;
      case 'Analyst': return Zap;
      default: return Star;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Founder': return 'text-yellow-400';
      case 'Co-Founder': return 'text-yellow-300';
      case 'Captain': return 'text-emerald-400';
      case 'Manager': return 'text-purple-400';
      case 'Coach': return 'text-blue-400';
      case 'Analyst': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getRoleBackground = (role: string) => {
    switch (role) {
      case 'Founder': return 'bg-yellow-400/20 border-yellow-400/30';
      case 'Co-Founder': return 'bg-yellow-300/20 border-yellow-300/30';
      case 'Captain': return 'bg-emerald-400/20 border-emerald-400/30';
      case 'Manager': return 'bg-purple-400/20 border-purple-400/30';
      case 'Coach': return 'bg-blue-400/20 border-blue-400/30';
      case 'Analyst': return 'bg-orange-400/20 border-orange-400/30';
      default: return 'bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the leadership and core members who drive PWK Esports to excellence in competitive eFootball.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => {
            const RoleIcon = getRoleIcon(player.role);
            return (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full p-2">
                    <RoleIcon className={`h-5 w-5 ${getRoleColor(player.role)}`} />
                  </div>
                  {(player.role === 'Founder' || player.role === 'Co-Founder') && (
                    <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-1">
                      <Crown className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{player.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 border ${getRoleBackground(player.role)} ${getRoleColor(player.role)}`}>
                    {player.role}
                  </div>
                  <p className="text-gray-400 text-sm">{player.specialty}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;