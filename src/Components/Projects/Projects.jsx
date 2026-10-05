
import React from "react";
import ProjectCard from "./ProjectCard";

import bannerImg1 from "../../assets/Portrait.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-10 md:p-24 text-white overflow-hidden"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Projects
      </h1>

      <div className="py-12">
        <div className="flex justify-center gap-5">

          <ProjectCard
            image={bannerImg1}
            title="Personal Portfolio Website"
            main="My personal portfolio website with full-stack development concepts, responsive design, and modern UI."
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
