
import React from "react";

const Skill = () => {
  const frontend = [
    ["https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white", "HTML"],
    ["https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white", "CSS"],
    ["https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", "JavaScript"],
    ["https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black", "React"],
    ["https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white", "Tailwind CSS"],
    ["https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white", "Bootstrap"],
  ];

  const backend = [
    ["https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white", "C"],
    ["https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white", "Java"],
    ["https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white", "Python"],
    ["https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white", "C#"],
    ["https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white", "Spring Boot"],
    ["https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white", ".NET"],
    ["https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white", "MySQL"],
  ];

  const tools = [
    ["https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white", "Git"],
    ["https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white", "GitHub"],
    ["https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white", "VS Code"],
    ["https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white", "Vite"],
    ["https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=xampp&logoColor=white", "XAMPP"],
  ];

  const workflow = [
    "Idea",
    "Requirement",
    "Design",
    "Task Division",
    "Coding",
    "Database",
    "Testing",
    "Documentation",
    "Presentation",
    "Final Demo",
  ];

  const BadgeSlider = ({ skills }) => (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-[slideLeft_16s_linear_infinite] hover:[animation-play-state:paused]">
        
        {[...skills, ...skills].map(([src, alt], index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="h-8 md:h-9 mx-2 flex-shrink-0
                       transition-transform duration-300
                       hover:scale-110"
          />
        ))}

      </div>
    </div>
  );

  return (
    <section
      id="Skills"
      className="w-full min-h-screen bg-[#0b1120] text-white
                 px-5 md:px-10 lg:px-16 py-10 md:py-14"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* FRONTEND */}
          <div className="bg-[#111827] border border-gray-700
                          rounded-xl p-5
                          hover:border-cyan-400
                          transition-all duration-300">

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
              Frontend
            </h2>

            <BadgeSlider skills={frontend} />
          </div>

          {/* BACKEND */}
          <div className="bg-[#111827] border border-gray-700
                          rounded-xl p-5
                          hover:border-cyan-400
                          transition-all duration-300">

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
              Backend
            </h2>

            <BadgeSlider skills={backend} />
          </div>

          {/* TOOLS */}
          <div className="bg-[#111827] border border-gray-700
                          rounded-xl p-5
                          hover:border-cyan-400
                          transition-all duration-300">

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
              Tools
            </h2>

            <BadgeSlider skills={tools} />
          </div>

        </div>

        {/* TEAM WORKFLOW */}
        <div className="mt-7">

          <div className="bg-[#111827] border border-gray-700
                          rounded-xl p-5 md:p-7
                          hover:border-cyan-400
                          transition-all duration-300">

            <h2 className="text-xl md:text-3xl font-bold text-center mb-5">
              📋 Simple Team{" "}
              <span className="text-cyan-400">Workflow</span>
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">

              {workflow.map((step, index) => (
                <React.Fragment key={step}>

                  <div
                    className="px-3 py-2 md:px-4 md:py-2.5
                               bg-[#0b1120]
                               border border-gray-700
                               rounded-lg
                               text-xs md:text-sm
                               font-semibold
                               hover:border-cyan-400
                               hover:text-cyan-400
                               hover:-translate-y-1
                               transition-all duration-300
                               animate-[workflowMove_3s_ease-in-out_infinite]"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {step}
                  </div>

                  {index < workflow.length - 1 && (
                    <span className="text-cyan-400 font-bold">
                      →
                    </span>
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`

        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes workflowMove {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

      `}</style>

    </section>
  );
};

export default Skill;

