import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Pizza-v2-0-min.png"
          title="Pizza"
          description="This project is dedicated to an online pizzeria. Here you can view the assortment and choose the desired pizza."
        />
        <ProjectCard
          src="/Online-kitchen-min.png"
          title="Online Kitchen"
          description="There are many recipes from different countries collected here, and you can read them or watch them on Youtube."
        />
        <ProjectCard
          src="/Virtual-Library-min.png"
          title="Virtual Library"
          description="An online library with many books where you can find the book you are interested in and learn something interesting about it."
        />
      </div>
    </div>
  );
};

export default Projects;
