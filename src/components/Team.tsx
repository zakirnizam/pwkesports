import { useState } from "react";
import {
  Crown,
  Users,
  Star,
  Gamepad2,
  Award,
  RocketIcon,
  Handshake,
} from "lucide-react";
import ImageWithFallback from './ImageWithFallback';

import {
  Abhi,
  Adhi,
  Alex,
  Anvar,
  AthulVok,
  Febin,
  Grizzy,
  Jibin,
  Murshid,
  Sheheer,
  Shiraz,
  Sreejith,
  Sulthan,
  AthulPD,
  Unni,
  Juju,
  Abin,
  Bee,
  Ebbie,
  Neeraj,
  Subin,
  Hari,
  Sarath,
  Zidan,
  Gokul,
  Varun,
  Kose,
  Ajin,
  Manu,
  Viz,
  Acchuz,
  Haris,
  Akshay,
  Prince,
  Nizam,
  Sreenath,
  Syam,
} from "../images";

const Team = () => {
  const [activeTab, setActiveTab] = useState("Management");

  const teamCategories = {
    Management: [
      { name: "Akshay", image: Akshay },
      { name: "Haris", image: Haris },
      { name: "Prince", image: Prince },
    ],
    Leaders: [
      { name: "Subin", image: Subin },
      { name: "Sreenath", image: Sreenath },
      { name: "Sreejith", image: Sreejith },
      { name: "Hari", image: Hari },
      { name: "Sarath", image: Sarath },
      { name: "Athul Vok", image: AthulVok },
      { name: "Athul PD", image: AthulPD },
      { name: "Zidan", image: Zidan },
      { name: "Gokul", image: Gokul },
      { name: "Varun", image: Varun },
    ],
    "Star Player's": [
      { name: "Anvar", image: Anvar },
      { name: "Febin", image: Febin },
      { name: "Alex", image: Alex },
      { name: "Sulthan", image: Sulthan },
      { name: "Grizzy", image: Grizzy },
      { name: "Abhi", image: Abhi },
      { name: "Adhi", image: Adhi },
      { name: "Shiraz", image: Shiraz },
      { name: "Murshid", image: Murshid },
      { name: "Jibin", image: Jibin },
      { name: "Sheheer", image: Sheheer },
      { name: "Unni", image: Unni },
    ],
    "Coordinators": [
      { name: "Nizam", image: Nizam },
      { name: "Juju", image: Juju },
      { name: "Abin", image: Abin },
      { name: "Bumble bee", image: Bee },
    ],
    Pioneers: [
      { name: "Kose", image: Kose },
      { name: "Achooz", image: Acchuz },
      { name: "Ebbie", image: Ebbie },
      { name: "Manu", image: Manu },
      { name: "Ajin", image: Ajin },
      { name: "Neeraj", image: Neeraj },
      { name: "Mr. Viz", image: Viz },
      { name: "Shyam", image: Syam },
    ],
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Management":
        return Users;
      case "Leaders":
        return Crown;
      case "Star Player's":
        return Gamepad2;
      case "Coordinators":
        return Handshake;
      case "Pioneers":
        return Award;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Management":
        return "text-purple-400 border-purple-400 bg-purple-400/10";
      case "Leaders":
        return "text-yellow-400 border-yellow-400 bg-yellow-400/10";
      case "Star Player's":
        return "text-emerald-400 border-emerald-400 bg-emerald-400/10";
      case "Coordinators":
        return "text-blue-400 border-blue-400 bg-blue-400/10";
      case "Pioneers":
        return "text-orange-400 border-orange-400 bg-orange-400/10";
      default:
        return "text-gray-400 border-gray-400 bg-gray-400/10";
    }
  };

  const getActiveColor = (category: string) => {
    switch (category) {
      case "Management":
        return "bg-purple-600 text-white border-purple-600";
      case "Leaders":
        return "bg-yellow-600 text-white border-yellow-600";
      case "Star Player's":
        return "bg-emerald-600 text-white border-emerald-600";
      case "Coordinators":
        return "bg-blue-600 text-white border-blue-600";
      case "Pioneers":
        return "bg-orange-600 text-white border-orange-600";
      default:
        return "bg-gray-600 text-white border-gray-600";
    }
  };

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the diverse talent that drives PWK Esports to excellence across
            all levels of competitive eFootball.
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
          {teamCategories[activeTab as keyof typeof teamCategories].map(
            (player, index) => {
              const CategoryIcon = getCategoryIcon(activeTab);
              return (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={player.image}
                      alt={player.name}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full p-2">
                      <CategoryIcon
                        className={`h-5 w-5 ${
                          getCategoryColor(activeTab).split(" ")[0]
                        }`}
                      />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white">
                      {player.name}
                    </h3>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
