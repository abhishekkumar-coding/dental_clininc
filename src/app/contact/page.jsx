"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800 over-x-hidden">
      {/* Hero Section */}
      <section
        className="relative flex items-end justify-start h-[70vh] px-6 sm:px-10 py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact_bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg sm:text-xl text-white max-w-xl">
            We're here to help you with all your dental needs. Feel free to reach out or visit our clinic!
          </p>
          <div className="w-24 h-1 bg-white mt-6"></div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center sm:text-left">Our Clinic Location</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.6657536775256!2d78.31710147562578!3d27.850812476100675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974c13f93dc32a9%3A0x481370383df62ee6!2sOm%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1746119789160!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 px-6 sm:px-10 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">Enquiry Form</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
