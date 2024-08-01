import Navbar from "@/components/Navbar/Navbar";
import { projectsData } from "./ProjectsData";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[8rem]">
        <h2 className="text-[24px] lg:text-[30px] text-[#014c90] text-center font-medium mx-auto mb-[0.5rem]">
          OUR PROJECTS
        </h2>
        <div
          className="grid grid-cols-2 gap-[12px] sm:gap-[15px] lg:gap-[25px] p-[1rem] sm:p-[2rem] lg:p-[5rem]"
          style={{ backgroundImage: "url(/images/projects-background.png)" }}
        >
          {projectsData.map((project, index) => (
            <div key={index}>
              <p className="font-medium text-[#4E843A] text-[18px] sm:text-[22px] lg:text-[32px] uppercase mb-[1rem]">
                {project.projectName}
              </p>
              <ul className="list-disc mb-[1rem] pl-[2rem]">
                {project?.projectDetails?.map((projectDetail) => (
                  <li className="text-[14px]" key={projectDetail}>
                    {projectDetail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
