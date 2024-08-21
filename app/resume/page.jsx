"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql   } from "react-icons/si";

// about data

const about = 
  {
    title: "About Me",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam iste voluptatibus quibusdam laborum suscipit quo, in ",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Bijay Ghosh",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+91) 8910619522",
      },
      {
        fieldName: "Experience",
        fieldValue: "5+ years ",
      },
      {
        fieldName: "Email",
        fieldValue: "bijayghoshofficial@gmail.com",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indian",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Language",
        fieldValue: "English, Hindi, Bengali",
      },
    ],
  }

// experience data

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam iste voluptatibus quibusdam laborum suscipit quo, in ",
  items: [
    {
      company: "RCCIIT - MeitY",
      position: "Cloud Computing",
      duration: "2024 - present",
    },
    {
      company: "markcos Agency",
      position: "Full Stack Developer",
      duration: "2024",
    },
    {
      company: "Out of the Box Solutions",
      position: "Web Developer",
      duration: "2022",
    },
    {
      company: "Ardent Computect Pvt Ltd.",
      position: "Machine Learning Intern",
      duration: "2021",
    },
  ],
};

// education data

const education = {
  icon: "",
  title: "My Educations",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam iste voluptatibus quibusdam laborum suscipit quo, in ",
  items: [
    {
      institution: "Kalyani Govt. Engineering College",
      degree: "Master of Computer Applications",
      duration: " 2024",
    },
    {
      institution: "Coursera IBM",
      degree: "AI and Data Science",
      duration: " 2024",
    },
    {
      institution: "Future Institute of Engineering and Management ",
      degree: "Bachelor of Computer Applications",
      duration: "2022",
    },
    {
      institution: "Coursera - John Hopkins University",
      degree: "Fundamentals of Web Development",
      duration: "2021",
    },
    {
      institution: "Panchasayar Siksha Niketan(H.S.)",
      degree: "12th - Science (PCMB)",
      duration: "2019",
    },
    {
      institution: "Panchasayar Siksha Niketan(H.S.)",
      degree: "10th - General studies ( STT + Social Science)",
      duration: "2017",
    },
  ],
};

// Skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam iste voluptatibus quibusdam laborum suscipit quo, in ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },

    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python3",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    }
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 0.14, duration: 0.4, ease: "easeIn" },
    }}
      className="min-h-[80vh] flex justify-center items-center py-12 lg:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills </TabsTrigger>
            <TabsTrigger value="about">About Me </TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[50vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 nx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">
                              at `{item.company}`{" "}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 nx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">
                              from `{item.institution}`{" "}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[40px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-lg flex justify-center items-center group ">
                              <div className=" flex flex-col justify-center align-middle gap-[10px]">
                                <h3 className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </h3>
                                <p className="text-accent font-2xl">
                                  {skill.name}
                                </p>
                              </div>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center lg:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 ">{about.description}</p>
                <ul className="grid grid-cols-1  lg:grid-cols-2 gap-y-6 max-w-[420px] mx-auto lg:mx-0">
                  {about.info.map((item, index)=>{
                    return <li key={index} className="flex items-center justify-centerlg:justify-start gap-4">
                        <span className=" text-white/80">{item.fieldName}: </span> 
                        <span className=" text-white/80">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
