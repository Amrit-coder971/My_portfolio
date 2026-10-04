import React from "react";

const ProjectCard = ({ title, main, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 min-w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">

      <img
        className="p-4 w-full h-48 object-cover rounded-xl"
        src={image}
        alt={title}
      />

      <h3 className="px-4 text-xl md:text-2xl font-bold">
        {title}
      </h3>

      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {main}
      </p>

      <div className="mt-2 p-2 md:p-4 flex gap-3">
        <button className="text-white py-2 px-4 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>

        <button className="text-white py-2 px-4 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div> 

    </div>
  );
};

export default ProjectCard;