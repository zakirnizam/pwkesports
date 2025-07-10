import { Trophy, Target, Users, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Division Champions",
      description: "Winners of the 2024 eFootball Division Championship",
      year: "2024",
    },
    {
      icon: Award,
      title: "Top Clan Ranking",
      description: "Achieved top 10 clan ranking in global leaderboards",
      year: "2023",
    },
    {
      icon: Target,
      title: "Tournament Victory",
      description: "First place in the International eFootball Cup",
      year: "2024",
    },
    {
      icon: Users,
      title: "Community Choice",
      description: "Voted best esports clan by eFootball community",
      year: "2023",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-emerald-400 transition-colors duration-200"
              >
                <achievement.icon className="h-10 w-10 text-emerald-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  {achievement.description}
                </p>
                <span className="text-emerald-400 font-semibold text-sm">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Achievements;
