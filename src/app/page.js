// src/pages/Home.jsx
"use client";
import Image from 'next/image';
import React from 'react';
import { FaTooth, FaUserShield, FaSmile, FaChild, FaTools } from 'react-icons/fa';
import { GiToothbrush } from "react-icons/gi";



// const services = [
//   { icon: <FaTooth />, title: 'Cleaning & Prevention', desc: 'Maintain a healthy smile with regular cleanings and checkups.' },
//   { icon: <FaSmileBeam />, title: 'Teeth Whitening', desc: 'Brighten your smile with our safe and effective whitening treatments.' },
//   { icon: <FaTeethOpen />, title: 'Braces & Aligners', desc: 'Straighten your teeth with modern, comfortable orthodontic options.' },
//   { icon: <FaUserMd />, title: 'Expert Consultation', desc: 'Professional advice and tailored dental care plans just for you.' }
// ];

const Home = () => {
  return (
    <div className="font-sans bg-blue-50 overflow-x-hidden">

      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row items-end justify-center bg-gradient-to-br from-blue-100 to-blue-50 pt-28 pb-20 text-center bg-no-repeat bg-cover bg-center h-auto min-h-[75vh] gap-10 px-4"
        style={{ backgroundImage: `url('/hero_bg_1.jpeg')` }}
      >
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-blue-900">
            DENTAL CLINIC
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-semibold text-blue-600 mb-8">
            Providing Exceptional Dental Care with Compassion in Denver Tech Center
          </p>
        </div>

        <form className="w-full max-w-md bg-white/30 backdrop-blur-md py-6 px-6 sm:px-10 rounded-lg shadow-lg text-black">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="w-full p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Book Appointment
          </button>
        </form>
      </section>



      {/* About Denrtist */}
      <section className="py-20 bg-blue-50 sm:mt-10 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-10 sm:space-y-0 sm:space-x-8">
            {/* Dentist Image */}
            <div className="w-full sm:w-1/3 flex justify-center">
              <div className="relative w-96 h-95 sm:w-full sm:h-96">
                <Image
                  src="/testimonials/tetimonial_5.jpeg"
                  alt="Dr. Jesse Jackson"
                  fill
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
            </div>

            {/* Dentist Info */}
            <div className="w-full sm:w-1/2 text-left">
              <h2 className="text-3xl sm:text-5xl font-semibold text-blue-600 mb-6">
                Meet Our Experienced Dentists
              </h2>
              <p className="text-lg sm:text-xl font-light mb-8">
                DENTAL CLINIC Top-Rated Liberty Dentists. We are a compassionate team, committed to providing the best care.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Dr. Umesh Chandra
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our dentists are highly skilled and supported by a compassionate clinical team. We always strive to find the best solutions for our patients, making sure to prioritize your comfort and health every step of the way.
              </p>
              <a
                href="#meet-us"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Meet Us
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-600">
            Premium dental care backed by modern tech and experienced professionals.
          </p>
          <div className="w-[3px] h-20 mx-auto my-5 border bg-[#17BFE3] border-[#17BFE3]"></div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Cosmetic Dentistry */}
            <div className="bg-blue-50 p-10 rounded-bl-3xl rounded-tr-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left">
              <FaSmile className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Cosmetic Dentistry</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Transform your smile with advanced whitening, veneers, and contouring treatments.
              </p>
            </div>

            {/* Preventive Care */}
            <div className="bg-blue-50 p-10 rounded-bl-3xl rounded-tr-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left">
              <FaUserShield className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Preventive Care</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Routine cleanings, checkups, and personalized guidance to prevent dental issues.
              </p>
            </div>

            {/* Restorative Dentistry */}
            <div className="bg-blue-50 p-10 rounded-bl-3xl rounded-tr-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left">
              <FaTools className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Restorative Dentistry</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Restore your teeth with crowns, bridges, fillings, and expert craftsmanship.
              </p>
            </div>

            {/* Orthodontics */}
            <div className="bg-blue-50 p-10 rounded-bl-3xl rounded-tr-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left">
              <GiToothbrush className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Orthodontics</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Clear aligners and braces to straighten your smile with precision.
              </p>
            </div>

            {/* Oral Surgery */}
            <div className="bg-blue-50 p-10 rounded-bl-3xl rounded-tr-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left">
              <FaTooth className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Oral Surgery</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Safe procedures like extractions, implants, and surgical care done with ease.
              </p>
            </div>

            {/* Pediatric Dentistry */}
            <div className="bg-blue-50 p-10 rounded-bl-3xl rounded-tr-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left">
              <FaChild className="text-blue-600 text-6xl mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Pediatric Dentistry</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Gentle care for children, ensuring a positive and friendly dental experience.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800">What Our Patients Say</h2>
          <div className="w-[3px] h-20 mx-auto my-10 border bg-[#17BFE3] border-[#17BFE3]"></div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Riya Patel",
                image: "/testimonials/tetimonial_1.jpeg",
                feedback: "Dr. Sharma and the OM Dental team are amazing! They made me feel comfortable and the results of my smile makeover exceeded expectations."
              },
              {
                name: "Aman Verma",
                image: "/testimonials/tetimonial_5.jpeg",
                feedback: "I’ve never felt so taken care of at a dental office. The environment is calming, the team is professional, and my teeth have never felt better."
              },
              {
                name: "Harsh Sharma",
                image: "/testimonials/tetimonial_3.jpeg",
                feedback: "From the reception to the dental chair, every experience at DENTAL CLINIC is top-notch. Highly recommend for all your dental needs!"
              },
              {
                name: "Sarthak Joshi",
                image: "/testimonials/tetimonial_4.jpeg",
                feedback: "State-of-the-art technology and a staff that truly listens. I’ve never been this confident in my dental health."
              },
              {
                name: "Meera Iyer",
                image: "/testimonials/tetimonial_2.jpeg",
                feedback: "Every visit is a delight. Friendly faces, luxury amenities, and expert care—this clinic sets a new standard for dental service."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-bl-3xl rounded-tr-3xl p-8 shadow-2xl hover:shadow-blue-200 transition duration-300 text-left flex flex-col items-center">
                <div className="w-24 h-24 relative mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-4 border-blue-100"
                  />
                </div>
                <p className="text-gray-700 text-lg italic mb-4 text-center">“{testimonial.feedback}”</p>
                <p className="text-blue-800 font-bold text-md text-center">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Preview */}
      {/* <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Smile Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Image src="/images/gallery1.jpg" alt="Smile 1" className="rounded-xl shadow" />
          <Image src="/images/gallery2.jpg" alt="Smile 2" className="rounded-xl shadow" />
          <Image src="/images/gallery3.jpg" alt="Smile 3" className="rounded-xl shadow" />
          <Image src="/images/gallery4.jpg" alt="Smile 4" className="rounded-xl shadow" />
        </div>
        <div className="text-center mt-6">
          <a href="/gallery" className="text-blue-600 font-medium hover:underline">View Full Gallery →</a>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 tracking-wide">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-8 text-blue-100">Book an in-clinic or video consultation today and experience expert dental care from the comfort of your home or at our state-of-the-art clinic.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/appointment"
              className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Book In-Clinic Visit
            </a>

            <a
              href="/video-consultation"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-800 transition duration-300"
            >
              Book Video Consultation
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200">We&rsquo;re here for you — wherever you are.</p>
        </div>
      </section>


    </div>
  );
};

export default Home;
