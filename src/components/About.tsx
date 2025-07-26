const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-900">
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
  <h3 className="text-2xl font-bold text-white mb-6">Minimum Requirements</h3>
  <ul className="space-y-4 text-gray-300">
    <li className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
      <span>Minimum Division 1 ranking in eFootball league</span>
    </li>
    <li className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
      <span>Consistent online activity and availability for matches</span>
    </li>
    <li className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
      <span>Active participation in clan events and tournaments</span>
    </li>
    <li className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
      <span>Respect towards teammates and opponents</span>
    </li>
    <li className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
      <span>Team-first mindset with willingness to learn and improve</span>
    </li>
    <li className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
      <span>WhatsApp for clan communication and updates</span>
    </li>
  </ul>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;