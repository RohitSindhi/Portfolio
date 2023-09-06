import React from 'react'
import Title from '../layouts/Title'
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import reffer from "../../assets/images/contact/Screenshot (31).png";
import client from "../../assets/images/contact/Screenshot (32).png";
import clint2 from "../../assets/images/contact/Screenshot (33).png";
import hotlist from "../../assets/images/contact/Screenshot (38).png";
import hotlist2 from "../../assets/images/contact/Screenshot (39).png";
import banchpage1 from "../../assets/images/contact/Screenshot (63).png";
import banchpage2 from "../../assets/images/contact/Screenshot (64).png";
import banchpage3 from "../../assets/images/contact/Screenshot (65).png";
import bancho4 from "../../assets/images/contact/Screenshot (66).png";
// import six from "../../assets/images/contact/Screenshot (39).png";
// import first from "../../assets/images/contact/Screenshot (31).png";
// import first from "../../assets/images/contact/Screenshot (31).png";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="REFFER PROGRAM"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={reffer}
        />
        <ProjectsCard
          title="CLIENT MODULE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={client}
        />
        <ProjectsCard
          title="CLIENT MODULE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={clint2}
        />
         <ProjectsCard
          title="HOTLIST"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={hotlist}
        />
         <ProjectsCard
          title="HOTLIST"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={hotlist2}
        />
         <ProjectsCard
          title="BANCHPAGE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banchpage1}
        />
         <ProjectsCard
          title="BANCHPAGE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banchpage2}
        />
         <ProjectsCard
          title="BANCHPAGE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={banchpage3}
        />
         
         <ProjectsCard
          title="BANCHPAGE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={bancho4}
        />
      </div>
    </section>
  );
}

export default Projects