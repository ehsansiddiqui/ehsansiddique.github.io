import React from "react";
import ProjectItem from "./projectItem";

import superchat from "../public/assets/projects/superchat.png";
import malariadetection from "../public/assets/projects/malariadetection.png";
import biographydirector from "../public/assets/projects/boarddirector.webp";



function Projects() {
  return (
    <div id="projects" className="w-full p-2 pt-12">
      <div className="max-w-[80%] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
              image={malariadetection}
              title="Medical Imaging Analysis for Malaria Detection"
              tools={["Python, TensorFlow, WanDB"]}
              url="/projects/superchat"
          />
          {/*<ProjectItem*/}
          {/*    image={biographydirector}*/}
          {/*    title="Medical Imaging Analysis for Malaria Detection"*/}
          {/*    tools={["Python, TensorFlow, WanDB"]}*/}
          {/*    url="/projects/superchat"*/}
          {/*/>*/}
        </div>

      </div>
    </div>
  );
}

export default Projects;
