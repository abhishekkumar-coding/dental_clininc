import React from 'react';

const AppointmentForm = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 my-10">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Book Your Appointment</h2>

        <form className="space-y-6">
          {/* Full Name */}
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

          {/* Service Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>General Checkup</option>
              <option>Cleaning</option>
              <option>Root Canal</option>
              <option>Braces Consultation</option>
              <option>Video Call Appointment</option>
            </select>
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

          {/* Additional Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your dental concerns..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-800 transition"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
    