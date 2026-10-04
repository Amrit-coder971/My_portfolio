
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Ashik <span className="text-cyan-400">Rana</span>
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Building, Learning & Improving Every Day.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-5">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-cyan-400
                         hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-cyan-400
                         hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-cyan-400
                         hover:scale-125 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-cyan-400
                         hover:scale-125 transition duration-300"
            >
              <FaFacebook />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ashik Rana. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


