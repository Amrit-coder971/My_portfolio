
import React from "react";

const Skill = () => {
  return (
    <section
      id="Skills"
      className="w-full min-h-screen bg-[#0b1120] text-white px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* ================= FRONTEND ================= */}
        <div className="mb-14 animate-[fadeIn_1s_ease-in-out]">

          <h2 className="text-2xl md:text-4xl text-white font-bold mb-6">
            Frontend
          </h2>

          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 md:p-8
                          hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                          transition-all duration-500">

            <div className="flex flex-wrap gap-4">

              <img
                src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                alt="React"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
                alt="Tailwind CSS"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="Bootstrap"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

            </div>
          </div>
        </div>


        {/* ================= BACKEND ================= */}
        <div className="mb-14 animate-[fadeIn_1s_ease-in-out]">

          <h2 className="text-2xl md:text-4xl text-white font-bold mb-6">
            Backend
          </h2>

          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 md:p-8
                          hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                          transition-all duration-500">

            <div className="flex flex-wrap gap-4">

              <img
                src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
                alt="C"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
                alt="Java"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                alt="Python"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white"
                alt="C#"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"
                alt="Spring Boot"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"
                alt=".NET"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
                alt="MySQL"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

            </div>
          </div>
        </div>


        {/* ================= TOOLS ================= */}
        <div className="animate-[fadeIn_1s_ease-in-out]">

          <h2 className="text-2xl md:text-4xl text-white font-bold mb-6">
            Tools
          </h2>

          <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 md:p-8
                          hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                          transition-all duration-500">

            <div className="flex flex-wrap gap-4">

              <img
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="VS Code"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"
                alt="Vite"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

              <img
                src="https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=xampp&logoColor=white"
                alt="XAMPP"
                className="h-10 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;

