import { MessageSquare, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Join PWK Esports</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your eFootball skills to the next level? Connect with us through our social channels.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 text-center">
              <div className="bg-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Join our WhatsApp group for real-time communication, match coordination, and team updates.
              </p>
              <a 
                href="https://wa.me/919037122605?text=Hey%2C%20could%20you%20please%20add%20me%20to%20the%20PWK%20WhatsApp%20group%20for%20real-time%20communication%2C%20match%20coordination%2C%20and%20team%20updates%3F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Join WhatsApp</span>
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-black p-8 rounded-xl border border-gray-800 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instagram</h3>
              <p className="text-gray-300 mb-6">
                Follow us on Instagram for highlights, behind-the-scenes content, and tournament updates.
              </p>
              <a 
                href="https://instagram.com/pwkesports" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;