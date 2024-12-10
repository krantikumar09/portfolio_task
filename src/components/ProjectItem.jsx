import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../assets/assets.js"

gsap.registerPlugin(ScrollTrigger);
const ProjectItem = ({ limit }) => {

  const projectRefs = useRef([]);
  const [projects] = useState(projectsData);
 

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024; 

    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: isLargeScreen ? 0 : 40, opacity: isLargeScreen ? 1 : 0 }, // Initial position (bottom and hidden)
        {
          y: 0, // Final position (aligned)
          opacity: 1, // Visible
          duration: 1, // Animation duration
          delay: index * 0.3, // Staggering effect for each project
          scrollTrigger: {
            trigger: project,
            start: "top 85%", // When the top of the project hits 75% of the viewport
            end: "top 25%", // When to start animation (80% of the viewport)
            toggleActions: "play none none reverse", // Plays on scroll, reverse on scroll up
          },
        }
      );
    });
  }, [projects]);

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="flex flex-col gap-6">
      {displayedProjects.map((project, index) => (
        <div
          key={project._id}
          className="project-item sm:p-4 rounded cursor-pointer  transition-all group"
          ref={(el) => (projectRefs.current[index] = el)}
        >
          <a
            className="flex items-start flex-col md:flex-row gap-4"
            href={project.url}
            target="_blank"
          >
            <div className="w-[120px] h-[80px]">
              <img
                className="w-full h-full rounded object-cover"
                src={project.image}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <h5 className="text-md font-semibold text-priText group-hover:text-green transition-all mb-2">
                {project.name}
                <FontAwesomeIcon
                  icon={faArrowTurnUp}
                  className="text-priText ms-4 text-xs group-hover:text-green group-hover:-translate-y-1 transition-all"
                />
              </h5>
              <p className="text-sm leading-normal font-medium text-secText">
                {project.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
