import { Trophy, Target, Users, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "FIPT SEASON 01 CHAMPION",
      description: "Champions of the First International Pro Tournament Season 1",
      year: "S1",
    },
    {
      icon: Award,
      title: "FIPT SEASON 02 2nd Runner up",
      description: "Second runners-up in the First International Pro Tournament Season 2",
      year: "S2",
    },
    {
      icon: Target,
      title: "AKPA Community SHIELD CHAMPION",
      description: "Winners of the AKPA Community Shield Championship",
      year: "Shield",
    },
    {
      icon: Users,
      title: "AKPA Community Champion S3",
      description: "MANU - AKPA Community Championship Season 3 Winner",
      year: "S3",
    },
    {
      icon: Trophy,
      title: "AKPA Community Champion S4",
      description: "ANCEL - AKPA Community Championship Season 4 Winner",
      year: "S4",
    },
    {
      icon: Users,
      title: "PES DUOS CHAMPIONS (PES WOLVERINE)",
      description: "FEBIN & ABHI - PES Wolverine Duos Championship Winners",
      year: "Duos",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating our victories and milestones in competitive eFootball tournaments and championships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
};

export default Achievements;