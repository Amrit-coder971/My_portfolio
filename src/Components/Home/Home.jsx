import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
const Home = () => {
  return (
    <section
      id="home"
      className="text-white w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-16 lg:px-20"
    >
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-3/5">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-[#465697]">Hi, I'm Ashik</span>
          </h1>

          <p className="mt-3 text-base md:text-2xl tracking-tight">
            IT Student | Spring Boot | React | Video Editing
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-7">
            <button className="text-white py-2 px-6 text-base md:text-lg font-semibold rounded-full bg-[#465697] hover:opacity-85 hover:scale-105 transition duration-300">
              Contact Me
            </button>

            <button className="text-white py-2 px-6 text-base md:text-lg font-semibold rounded-full border-2 border-[#465697] hover:bg-[#465697] hover:scale-105 transition duration-300">
              View Projects
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end w-full md:w-2/5">
          <img
            src={avatarImg}
            alt="Profile"
            className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] object-cover rounded-full border-4 border-[#465697]"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;