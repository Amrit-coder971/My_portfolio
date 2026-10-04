
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="w-full bg-[#0b1120] text-white border-t border-cyan-400/20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-semibold mb-3">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              Contact <span className="text-cyan-400">Me</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg">
              Feel free to reach out and let's connect!
            </p>
          </div>

          {/* Right Side */}
          <ul className="flex flex-col gap-5 text-gray-300 text-sm md:text-lg">

            {/* Email */}
            <li>
              <a
                href="mailto:cbro1799@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition duration-300"
              >
                <MdOutlineEmail
                  size={24}
                  className="text-cyan-400"
                />
                <span>cbro1799@gmail.com</span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition duration-300"
              >
                <CiLinkedin
                  size={25}
                  className="text-cyan-400"
                />
                <span>LinkedIn</span>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/Amrit-coder971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition duration-300"
              >
                <FaGithub
                  size={23}
                  className="text-cyan-400"
                />
                <span>github.com/Amrit-coder971</span>
              </a>
            </li>

          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ashik Rana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
