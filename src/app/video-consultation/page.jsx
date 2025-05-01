import React from 'react';

const VideoCallConsultationForm = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Book a Video Call Consultation
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Connect with our expert dentists from the comfort of your home.
        </p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Consultation Topic */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Consultation Topic</label>
            <input
              type="text"
              placeholder="Toothache, braces, sensitivity..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
            <input
              type="time"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Video Call Platform */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Video Call Platform</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>WhatsApp</option>
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>Phone Call</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
            <textarea
              rows="4"
              placeholder="Briefly describe your concern..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-800 transition"
            >
              Book Video Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VideoCallConsultationForm;
