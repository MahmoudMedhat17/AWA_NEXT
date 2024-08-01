import Navbar from "@/components/Navbar/Navbar";

interface Iprojects {
  projectName: string;
  projectDetails: string[];
}

const Projects = () => {
  const projects: Iprojects[] = [
    {
      projectName: "Ezz Steel (Al- Shanab ) ",
      projectDetails: ["Security camera (CCTV)", "Fire Alarm System "],
    },
    {
      projectName: "EL-Shark mall",
      projectDetails: ["parking system ( 6 entrance gates )"],
    },
    { projectName: "zezenya compound", projectDetails: ["security camera"] },
    {
      projectName: "Cairo First Mall (New Cairo) ",
      projectDetails: ["Security camera", "Fire Fighting water system "],
    },
    {
      projectName: "Pepsi (Naser city factory) ",
      projectDetails: ["Security camera (CCTV)", "Fire Alarm System "],
    },
    {
      projectName: "Unilever Egypt (6 of October) ",
      projectDetails: [
        "Security cam(21 CCTV camera with 2 DVR)",
        "Fire alarm system ",
        "Fire Fighting Dry and wet stand pipe system ",
        "Time attendance",
      ],
    },
    {
      projectName: "Cotton Nile ",
      projectDetails: [
        "Security system. fire alarm system (Mokattam Branch/ maadi branch/ naser city branch/ new cairo branch)",
      ],
    },
    {
      projectName: "VFS",
      projectDetails: [
        "Complete MEP fit‐out project for 3 branches all over Egypt ",
        "Light current system (Fire alarm, data network complete with termination) ",
        "(Consultant: Pacer)",
      ],
    },
    {
      projectName: "DuPont",
      projectDetails: [
        "F.F. system (Supply & install F.F. pipes with sprinklers)",
        "Light current system (Fire alarm, data network complete with termination, Access control)",
        "(Consultant: CEC)",
      ],
    },
    {
      projectName: "GALLERIA",
      projectDetails: [
        "40 Light current systems (Siemens Supplier)",
        "Video surveillance system",
        "Public address system with speakers, integrated with fire alarm system on the same speakers",
        "Fire alarm systems integrated with HVAC and fire fighting",
        "Access control system",
        "Turnstile integrated with access control system",
        "Cisco data passive & active",
        "Pro Audio system",
      ],
    },
    {
      projectName: "General Authority for Educational Buildings",
      projectDetails: ["Supply of data network system"],
    },
    {
      projectName: "Arma factory Extension 10th of October",
      projectDetails: [
        "Supply and install fire alarm system for 5 new buildings on 35000 m2",
      ],
    },
    {
      projectName: "Mountain view I city I city compound, Fifth settlement ",
      projectDetails: [
        "Supply and install HVAC works of mock-up villa, town hose and apartment",
      ],
    },
    {
      projectName:
        "Brand Molly Maadi Branch - Wadi Degla Club - 6th of October",
      projectDetails: [],
    },
    {
      projectName: "Mountain View (Soukna Compound) ",
      projectDetails: ["Security Camera (CCTV, Barriers) "],
    },
    {
      projectName: "Greene plaza Alexandria",
      projectDetails: ["Security Camera (40 camera)", "fire alarm system"],
    },
    {
      projectName: "G4S Head office (Mohandseen)",
      projectDetails: ["security camera ( 16 IP camera )"],
    },
    {
      projectName: "Zina Mall (New Cairo) ",
      projectDetails: ["Security camera", "Fire Fighting water system "],
    },
    {
      projectName: "Cairo festival city ",
      projectDetails: ["Firefighting", "three electricity room CO2 system"],
    },
    {
      projectName: "Mercedes service center - ALEX NORTH COAST",
      projectDetails: ["security camera", "fire alarm system"],
    },
    {
      projectName: "Raya",
      projectDetails: [
        "Raya Offices Light current works (JC Supplier) ",
        "Video surveillance system",
        "Public address system with speakers, integrated with fire alarm system on the same speakers",
        "Fire alarm systems integrated with HVAC and fire fighting ",
        "Access control system ",
        "Turnstile integrated with access control system ",
      ],
    },
    {
      projectName: "International Environmental technologies (Intech)",
      projectDetails: [
        " EL mashtal Station (Fire Fighting, Fire alarm) ",
        "Dar Salam Station (Fire Fighting, Fire alarm) ",
        "EL Azab Station (Fire Fighting, Fire alarm) ",
      ],
    },
    {
      projectName: "Department of Moral Affairs of the Armed Forces ",
      projectDetails: [
        "Supply of sound system  ",
        "Supply of nurse call system  ",
      ],
    },
    {
      projectName: "Home town head office Fifth settlement",
      projectDetails: [
        "Supply and install mechanical and fire alarm works of 420m2",
      ],
    },
    {
      projectName: "Mountain view headquarter (DMG)  Fifth settlement",
      projectDetails: [
        "Supply and install HVAC and firefighting works of 750m2 roof floor",
      ],
    },
    {
      projectName: "Clinart head office Fifth settlement- Egypt",
      projectDetails: [
        " Design, supply and install HVAC, firefighting and fire alarm works of 330m2",
      ],
    },
    {
      projectName:
        "Cilantro Brand, Haram Branch - Hyper One - Cairo Festival - Sheraton Residences",
      projectDetails: [],
    },
  ];

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
          {projects.map((project, index) => (
            <div key={index}>
              <p className="font-medium text-[#4E843A] text-[18px] sm:text-[22px] lg:text-[32px] uppercase mb-[1rem]">
                {project.projectName}
              </p>
              <ul className="list-disc mb-[1rem] pl-[2rem]">
                {project?.projectDetails?.map((projectDetail) => (
                  <li className="text-[14px]" key={projectDetail}>{projectDetail}</li>
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
