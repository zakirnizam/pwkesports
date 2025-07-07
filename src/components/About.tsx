import React from 'react';
import { Trophy, Target, Users, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Division Champions",
      description: "Winners of the 2024 eFootball Division Championship",
      year: "2024"
    },
    {
      icon: Award,
      title: "Top Clan Ranking",
      description: "Achieved top 10 clan ranking in global leaderboards",
      year: "2023"
    },
    {
      icon: Target,
      title: "Tournament Victory",
      description: "First place in the International eFootball Cup",
      year: "2024"
    },
    {
      icon: Users,
      title: "Community Choice",
      description: "Voted best esports clan by eFootball community",
      year: "2023"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About PWK Esports</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2018, PWK Esports has grown from a small group of passionate gamers to one of the most respected esports clans in the eFootball community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              We're dedicated to creating a competitive yet supportive environment where players can improve their digital football skills, compete at the highest level, and build lasting friendships within the eFootball esports community.
            </p>
            <p className="text-gray-300 mb-6">
              Our clan focuses on strategic gameplay, team coordination, and continuous skill development in the digital arena. We believe that every player has the potential to excel when given the right support and guidance.
            </p>
          </div>

          <div className="bg-black p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Clan Requirements</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <span>Minimum Division 3 ranking in eFootball</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <span>Active participation in clan tournaments</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <span>Positive attitude and team-first mentality</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <span>WhatsApp for communication and coordination</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-gray-800 hover:border-emerald-400 transition-colors duration-200">
                <achievement.icon className="h-10 w-10 text-emerald-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                <span className="text-emerald-400 font-semibold text-sm">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;