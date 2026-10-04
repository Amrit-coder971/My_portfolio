import React from "react";
import ProjectCard from "./ProjectCard";

import bannerImg2 from "../../assets/s.png";
import bannerImg5 from "../../assets/portifoli.png";


const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-10 md:p-24 text-white overflow-hidden"
    >
     <h1 className="text-2xl md:text-4xl font-bold text-center">
  Projects
 </h1>

      <div className="py-12 overflow-hidden">
        <div className="flex gap-5 w-max animate-slide">

          

          <ProjectCard
            image={bannerImg2}
            title="Student Attendance Management System"
            main="Developed a student attendance system using Java, Spring Boot, PostgreSQL, HTML and CSS."
          />



 <ProjectCard
            image={bannerImg5}
            title="Personal Portfolio Website"
            main="My personal portfolio website with (full-stack website)."
/>
          
         

          {/* <ProjectCard
            image={bannerImg2}
            title="Weather App"
            main="Developed a weather application that displays weather information using a modern web interface."
          /> */}

          {/* <ProjectCard
            image={bannerImg3}
            title="Calculator App"
            main="Built a calculator application using JavaScript with basic arithmetic operations."
          /> */}

          {/* <ProjectCard
            image={bannerImg1}
            title="Library Management System"
            main="Developed a library management system for managing books, students and borrowing records."
          /> */}

          {/* <ProjectCard
            image={bannerImg2}
            title="Employee Management System"
            main="Created an employee management application with employee records and database operations."
          /> */}

          {/* <ProjectCard
            image={bannerImg3}
            title="Blog Website"
            main="Designed a responsive blog website for publishing and displaying articles and posts."
          /> */}

          {/* <ProjectCard
            image={bannerImg1}
            title="Coming Soon"
            main="More exciting projects are coming soon."
          /> */}

        </div>
      </div>
    </div>
  );
};

export default Projects;