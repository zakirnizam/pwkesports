import { useState } from 'react';
import { MessageSquare, Instagram, X } from 'lucide-react';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', age: '', reason: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseMsg =
      'Hey, could you please add me to the PWK WhatsApp group for real-time communication, match coordination, and team updates?';
    const details = `\nName: ${form.name}\nAge: ${form.age}\nReason: ${form.reason}`;
    const fullMsg = encodeURIComponent(baseMsg + details);
    window.open(`https://wa.me/919037122605?text=${fullMsg}`, '_blank');
    setForm({ name: '', age: '', reason: '' });
    setShowForm(false);
  };

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
              <button
                onClick={() => setShowForm(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                type="button"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Join WhatsApp</span>
              </button>
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

      {/* Modal for WhatsApp form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          />
          
          {/* Modal content */}
          <div className="relative bg-gray-900 rounded-xl p-8 w-full max-w-md shadow-2xl border border-emerald-600">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Join WhatsApp Group</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close form"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="age" className="block text-gray-300 font-semibold mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  min="10"
                  max="99"
                  placeholder="Enter your age"
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-gray-300 font-semibold mb-2">
                  Why do you want to join? *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Tell us why you want to join PWK Esports..."
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent placeholder-gray-400 resize-none transition-all duration-200"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Send to WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;