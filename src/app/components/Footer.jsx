import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-50 to-white text-gray-800 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">OM DENTAL CLINIC</h2>
          <p className="text-sm leading-relaxed">
            Advanced dental care with compassion and precision — because your smile deserves the best.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-600 transition duration-300 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition duration-300 text-xl"><FaInstagram /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline hover:text-blue-600 transition">Home</a></li>
            <li><a href="/about" className="hover:underline hover:text-blue-600 transition">About</a></li>
            <li><a href="/services" className="hover:underline hover:text-blue-600 transition">Services</a></li>
            <li><a href="/appointment" className="hover:underline hover:text-blue-600 transition">Book Appointment</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Opening Hours</h3>
          <ul className="text-sm space-y-1">
            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Contact Us</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-blue-600 mt-1" />
              <span>123 Smile Street, YourCity, India</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-blue-600 mt-1" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-blue-600 mt-1" />
              <span>contact@omdental.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 text-sm text-gray-600 bg-blue-100 border-t">
        &copy; {new Date().getFullYear()} OM DENTAL CLINIC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
