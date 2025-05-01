import Image from "next/image";
import Link from "next/link";
import { GiToothbrush } from "react-icons/gi";
import { FaTooth, FaUserShield } from "react-icons/fa";


const AboutSection = () => {

    const helps = [
        {
            icon: <GiToothbrush className="text-[#17BFE3] text-3xl" />,
            title: "Comprehensive Care",
            description: "From routine check-ups to advanced treatments, we offer a full range of dental services tailored to your needs.",
        },
        {
            icon: <FaTooth className="text-[#17BFE3] text-3xl" />,
            title: "Patient-Centric Approach",
            description: "Your comfort and satisfaction are our top priorities. We take the time to listen to your concerns and provide personalized care.",
        },
        {
            icon: <FaUserShield className="text-[#17BFE3] text-3xl" />,
            title: "Experienced Team",
            description: "Our skilled professionals are dedicated to delivering exceptional dental care with compassion and expertise.",
        },
    ];
    return (
        <section className="relative bg-gradient-to-r from-blue-50 to-white overflow-x-hidden">
            {/* Hero Section */}
            <div
                className="w-full absolute left-0 top-0 h-[75vh] bg-no-repeat bg-center bg-cover flex items-center justify-center text-left px-4"
                style={{ backgroundImage: "url('/hero_bg_2.jpeg')" }}
            >
                <div className="bg-gray-900 absolute opacity-50 w-full h-full"></div>
                <div className="relative z-10 max-w-6xl mx-auto text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
                        Building Healthy Smiles Through Compassion and Excellence
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl">
                        Meet the dedicated professionals who put your comfort first.
                    </p>
                    <hr className="bg-white border-white h-[2px] w-1/3 my-5" />
                    <Link
                        href="/appointment"
                        className="bg-white relative top-10 text-blue-800 mb-10 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-900 hover:text-white transition duration-300"
                    >
                        Schedule Now
                    </Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 pt-[90vh] py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Text Section */}
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-blue-400 mb-6">Our <span className="sm:text-7xl text-blue-900">Story</span></h2>
                        <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
                            <p>
                                At OM Dental Clinic, we're passionate about helping you discover the confidence and joy of a healthy, radiant smile.
                            </p>
                            <p>
                                Founded with a vision to transform the traditional dental experience, our clinic was built on the values of compassion, innovation, and personalized care.
                                We believe that visiting the dentist should feel reassuring and empowering — not stressful.
                                That's why we've created a welcoming environment where patients of all ages feel at ease.
                            </p>
                            <p>
                                With advanced technology, a dedicated team, and a gentle approach to every treatment, OM Dental Clinic delivers exceptional dental care — and just a little extra to make you smile.
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div>
                        <Image
                            src="/dr_img_1.jpeg"
                            width={400}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl shadow-lg"
                            alt="Doctor at OM Dental Clinic"
                        />
                    </div>
                </div>
            </div>

            {/* how we help you  */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900">
                        <span className="text-[#17BFE3] twxt-2xl font-light">How</span> We Help You
                    </h2>
                    <div className="w-[3px] h-20 mx-auto mt-4 border bg-[#17BFE3] border-[#17BFE3]"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 py-10">
                    {helps.map((help, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[300px] text-center border border-gray-200 shadow-md p-6 flex flex-col items-center transition hover:shadow-xl transform hover:-translate-y-5"
                        >
                            <div className="bg-blue-100 p-4 rounded-full shadow-lg mb-4">
                                {help.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">{help.title}</h3>
                            <p className="text-gray-700">{help.description}</p>
                        </div>
                    ))}
                </div>

            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white py-16" style={{ backgroundImage: "url('/clinic_1.jpeg')" }}>
                <div className="max-w-7xl mx-auto px-4 text-center bg-black/30 p-14 backdrop-blur-sm rounded-lg">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h2>
                    <p className="text-lg mb-8">Experience the difference at OM Dental Clinic.</p>
                    <Link
                        href="/appointment"
                        className="bg-[#17BFE3] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
                    >
                        Book Your Appointment Today
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;
