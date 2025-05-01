"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Teeth Cleaning",
    description:
      "Regular teeth cleaning helps maintain oral hygiene by removing plaque and tartar buildup.",
    image: "/images/services/cleaning.jpg",
  },
  {
    title: "Braces & Orthodontics",
    description:
      "We provide modern orthodontic treatments, including metal and invisible braces.",
    image: "/images/services/braces.jpg",
  },
  {
    title: "Dental Implants",
    description:
      "Get natural-looking and durable implants to replace missing teeth effectively.",
    image: "/images/services/implants.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with whitening, veneers, and other cosmetic treatments.",
    image: "/images/services/cosmetic.jpg",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Save infected teeth and relieve pain with advanced root canal treatment.",
    image: "/images/services/root-canal.jpg",
  },
  {
    title: "Tooth Extraction",
    description:
      "We perform safe and painless tooth extractions, including wisdom teeth removal.",
    image: "/images/services/extraction.jpg",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-700">
            We provide a wide range of dental services tailored to your needs using modern techniques and a caring approach.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for a brighter smile?</h2>
        <p className="mb-6 text-lg">
          Book your appointment today and experience expert dental care with a personal touch.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
