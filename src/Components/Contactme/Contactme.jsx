
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contactme = () => {
  return (
    <section
      id="Contact"
      className="w-full min-h-screen bg-[#0b1120] text-white px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 animate-pulse">
          <h1 className="text-3xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to contact me for any project, collaboration, or
            opportunity. I would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-800
                          hover:border-cyan-400 transition duration-500">

            <h2 className="text-2xl font-bold mb-8">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">cbro1799@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+977 98XXXXXXXX</p>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Butwal, Rupandehi, Nepal</p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/Amrit-coder971"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-cyan-400
                           hover:scale-125 transition duration-300"
              >
                <FaGithub />
              </a>
                <p className="text-white">Amrit-coder971</p>

              <a
                href="https://www.linkedin.com/in/ashik-rana-7546b22a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-cyan-400
                           hover:scale-125 transition duration-300"
              >
                <FaLinkedin />
              </a>
                <p className="text-white">AShik Rana</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-[#111827] rounded-2xl p-8 shadow-lg border border-gray-800
                       hover:border-cyan-400 transition duration-500"
          >
            <h2 className="text-2xl font-bold mb-8">
              Send Me a <span className="text-cyan-400">Message</span>
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-lg
                           px-4 py-3 outline-none focus:border-cyan-400
                           transition duration-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-lg
                           px-4 py-3 outline-none focus:border-cyan-400
                           transition duration-300"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-lg
                           px-4 py-3 outline-none focus:border-cyan-400
                           transition duration-300"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-[#0b1120] border border-gray-700 rounded-lg
                           px-4 py-3 outline-none focus:border-cyan-400
                           transition duration-300 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black
                           font-bold py-3 rounded-lg transition duration-300
                           hover:scale-[1.02]"
              >
                Send Message
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contactme;
