import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";

const About = () => {
  return (
    <section
      id="About"
      className="w-full min-h-screen bg-[#0b1120] text-white px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3">
          {/* <span className="w-10 h-1 bg-cyan-400 rounded-full"></span> */}
{/* 
          <span className="text-cyan-400 text-sm md:text-base font-semibold uppercase tracking-[0.2em]">
            About Me
          </span> */}
        </div>

        {/* Heading */}
       
<div className="flex items-center justify-center">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
    About <span className="text-cyan-400">Me</span>
  </h2>
</div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group w-full max-w-[550px]">

              {/* Glow */}
              <div className="absolute -inset-1 bg-cyan-400/20 blur-xl rounded-3xl"></div>

             <img
  src={AboutImg}
  alt="About me"
  className="
    relative
    w-full
    h-[350px]
    md:h-[450px]
    object-contain
    rounded-2xl
    border border-white/10
    shadow-2xl
    transition duration-500
    group-hover:scale-[1.01]
  "
/>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-7">

            {/* Introduction */}
            <div className="flex gap-5">
              <div className="text-cyan-400 text-2xl md:text-3xl pt-1">
                👤
              </div>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                I'm an{" "}
                <span className="text-white font-semibold">
                  IT student
                </span>
                , currently studying in 6th semester at{" "}
                <span className="text-cyan-400 font-semibold">
                  Tribhuvan University (TU)
                </span>
                . Passionate about Full-Stack Development, technology, and
                building efficient solutions. I love exploring new tools,
                learning, and growing every day.
              </p>
            </div>

            {/* Development */}
            <div className="flex gap-5">
              <div className="text-cyan-400 text-2xl md:text-3xl pt-1">
                {"</>"}
              </div>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                I enjoy learning new technologies, solving problems, and
                turning ideas into real-world projects. I'm continuously
                improving my skills in both{" "}
                <span className="text-white font-semibold">
                  frontend and backend development
                </span>
                , with a focus on writing clean, efficient, and maintainable
                code.
              </p>
            </div>

            {/* Goal */}
            <div className="flex gap-5">
              <div className="text-cyan-400 text-2xl md:text-3xl pt-1">
                📈
              </div>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                I believe in learning by building and improving a little every
                day. My goal is to grow as a developer, work on meaningful
                projects, and build a successful career in the IT industry.
              </p>
            </div>

            {/* Motto */}
            <div className="pt-2">
              {/* <div className="w-12 h-1 bg-cyan-400 rounded-full mb-5"></div> */}

              <p className="text-cyan-400 font-bold text-base md:text-xl tracking-wider">
                LEARN{" "}
                <span className="text-white mx-1">→</span>
                BUILD{" "}
                <span className="text-white mx-1">→</span>
                IMPROVE{" "}
                <span className="text-white mx-1">→</span>
                REPEAT.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;