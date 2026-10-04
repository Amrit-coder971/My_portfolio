
import React from "react";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">

    <div className="text-center">
  <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
    Experience
  </h1>
</div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10">

<div className="w-full md:w-1/2 flex justify-center items-center py-10">

  <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">

    <div
      className="
        absolute inset-0
        rounded-full
        border-2 border-cyan-400/30
        animate-[spin_15s_linear_infinite]
      "
    ></div>

    <div
      className="
        absolute inset-10
        rounded-full
        border border-cyan-400/20
        animate-[spin_10s_linear_infinite_reverse]
      "
    ></div>

    {/* Center Circle */}
    <div
      className="
        absolute
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-24 h-24
        rounded-full
        bg-slate-950
        border-2 border-cyan-400
        flex items-center justify-center
        text-white
        font-bold
        text-center
        shadow-lg shadow-cyan-400/30
        animate-pulse
      "
    >
      Skills
    </div>



    <div className="
      absolute top-1/2 left-1/2
      w-[120px] h-px
      bg-cyan-400/30
      -translate-x-1/2
    "></div>

    <div className="
      absolute top-1/2 left-1/2
      w-[120px] h-px
      bg-cyan-400/30
      -translate-x-1/2
      rotate-45
    "></div>

    <div className="
      absolute top-1/2 left-1/2
      w-[120px] h-px
      bg-cyan-400/30
      -translate-x-1/2
      rotate-90
    "></div>

    <div className="
      absolute top-1/2 left-1/2
      w-[120px] h-px
      bg-cyan-400/30
      -translate-x-1/2
      rotate-[135deg]
    "></div>


    {/* ================= BADGES ================= */}

    {/* C */}
    <img
      className="
        absolute top-0 left-1/2
        -translate-x-1/2
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
      alt="C"
    />

    {/* Java */}
    <img
      className="
        absolute top-[18%] right-0
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
      alt="Java"
    />

    {/* JavaScript */}
    <img
      className="
        absolute top-[50%] right-[-20px]
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
      alt="JavaScript"
    />

    {/* Python */}
    <img
      className="
        absolute bottom-[18%] right-0
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
      alt="Python"
    />

    {/* C# */}
    <img
      className="
        absolute bottom-0 left-1/2
        -translate-x-1/2
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white"
      alt="C#"
    />

    {/* HTML */}
    <img
      className="
        absolute bottom-[18%] left-0
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"
      alt="HTML"
    />

    {/* CSS */}
    <img
      className="
        absolute top-[50%] left-[-20px]
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"
      alt="CSS"
    />

    {/* React */}
    <img
      className="
        absolute top-[18%] left-0
        animate-[float_3s_ease-in-out_infinite]
        hover:scale-125
        transition duration-300
      "
      src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
      alt="React"
    />

  </div>
</div>




        <div className="w-full md:w-1/2">

          <div
            className="
              flex gap-10
              bg-slate-950 bg-opacity-45
              mt-4 rounded-lg p-5 items-center
              text-white
              transform translate-x-10 opacity-0
              animate-[slideIn_0.8s_ease-out_forwards]
              hover:scale-105
              transition duration-300
            "
          >
            <span>

              <h2 className="leading-tight text-lg font-semibold">
                Nepathya IOT and Robotics Union
              </h2>

              <p className="text-sm leading-tight font-thin mt-1">Sep 2024 - Dec 2025              </p>

              <ul className="text-sm p-2">
                <li>- Executive Member</li>
              </ul>

            </span>
          </div>


          <div
            className="
              flex gap-10
              bg-slate-950 bg-opacity-45
              mt-4 rounded-lg p-5 items-center
              text-white
              transform translate-x-10 opacity-0
              animate-[slideIn_0.8s_0.3s_ease-out_forwards]
              hover:scale-105
              transition duration-300
            "
          >
            <span>

              <h2 className="leading-tight text-lg font-semibold">
                Spring Boot
              </h2>

              <p className="text-sm leading-tight font-thin mt-1">
                2025 - Present
              </p>

              <ul className="text-sm p-2">
                <li>- Work as Full Stack Developer</li>
                <li>- Project Development</li>
              </ul>

            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Experience;