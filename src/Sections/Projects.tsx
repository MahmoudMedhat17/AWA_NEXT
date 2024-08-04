import { projectsData } from "./Data";
const Projects = () => {
  return (
    <div>
      <div className="pt-32">
        <h2 className="text-[24px] lg:text-[30px] text-[#014c90] text-center font-medium mx-auto mb-2">
          OUR PROJECTS
        </h2>
        <div
          className="grid grid-cols-2 gap-[12px] sm:gap-[15px] lg:gap-[25px] p-4 sm:p-8 lg:p-20"
          style={{ backgroundImage: "url(/images/projects-background.png)" }}
        >
          {projectsData.map((project, index) => (
            <div key={index}>
              <p className="font-medium text-[#4E843A] text-[18px] sm:text-[22px] lg:text-[32px] uppercase mb-4">
                {project.projectName}
              </p>
              <ul className="list-disc mb-[1rem] pl-8">
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
