
import React from "react";

const ProjectCard = ({ title, main, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 min-w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 border border-gray-700">

      <img
        className="p-4 w-full h-48 object-cover"
        src={image}
        alt={title}
      />

      <h3 className="px-4 text-xl md:text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      <div className="mt-2 p-2 md:p-4 flex gap-3">

        {/* Demo Button */}
      <a
  href="https://ashikrana.com.np/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-white py-2 px-5 hover:scale-105 transition duration-300 font-semibold bg-[#465697]"
>
  Demo
</a>
        {/* Source Code */}
        <a
          href="https://github.com/Amrit-coder971/Test"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-5 hover:scale-105 transition duration-300 font-semibold bg-[#465697]"
        >
          Source Code
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;

