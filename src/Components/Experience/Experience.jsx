

import React from "react";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full min-h-screen bg-[#0b1120] text-white px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold">
            Experience
          </h1>

          <p className="text-gray-400 mt-4">
            Learn → Build → Improve → Repeat.
          </p>
        </div>

        {/* Experience Card */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Academic Experience */}
          <div className="experience-card bg-[#111827] border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Academic Projects
            </h2>

            <p className="text-gray-300 leading-7">
              Developed academic projects using HTML, CSS, Java, and
              PostgreSQL. Built responsive and user-friendly web interfaces
              while applying Java programming and Object-Oriented Programming
              concepts.
            </p>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✓ Java programming and OOP concepts</li>
              <li>✓ PostgreSQL database connectivity</li>
              <li>✓ CRUD operations</li>
              <li>✓ Problem-solving and debugging</li>
              <li>✓ Git and GitHub version control</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="experience-card bg-[#111827] border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Web Development
            </h2>

            <p className="text-gray-300 leading-7">
              Building modern and responsive web applications while improving
              frontend and backend development skills through continuous
              learning and practical projects.
            </p>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>✓ HTML & CSS</li>
              <li>✓ JavaScript</li>
              <li>✓ React.js</li>
              <li>✓ Java & Spring Boot</li>
              <li>✓ MySQL & PostgreSQL</li>
            </ul>
          </div>

        </div>

        {/* Technology Badges */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Technologies
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
          
            <img
              src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"
              alt="Spring Boot"
            />
            <img
              src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="Java"
            />

            <img
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
