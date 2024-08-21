"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

import portfolioImg from '../Assets/portfolioImg.png'
import projectImg from '../Assets/project.png'
import shoppingImg from '../Assets/shopping.png'
const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "PortFolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur sed cupiditate veniam sit quam cumque excepturi quibusdam totam nobis",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "NextJS" },
    ],
    image: portfolioImg,
    live: "",
    github: "https://www.github.com/bijayofficial",
  },
  {
    num: "02",
    category: "Front-end",
    title: "Tinder Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur sed cupiditate veniam sit quam cumque excepturi quibusdam totam nobis",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "Express.js" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
    ],
    image: projectImg,
    live: "",
    github: "https://www.github.com/bijayofficial",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Online Shopping Platform",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur sed cupiditate veniam sit quam cumque excepturi quibusdam totam nobis",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    image: shoppingImg,
    live: "",
    github: "https://www.github.com/bijayofficial",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Product Shipping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur sed cupiditate veniam sit quam cumque excepturi quibusdam totam nobis",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "NextJS" },
      { name: "TailwindCSS" },
    ],
    image: projectImg,
    live: "",
    github: "https://www.github.com/bijayofficial",
  },
  {
    num: "05",
    category: "Machine Learning",
    title: "Stock Market Prediction",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur sed cupiditate veniam sit quam cumque excepturi quibusdam totam nobis",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "NextJS" },
      { name: "TradingView API" },
      { name: "Matplotlib" },
      { name: "Numpy" },
      { name: "Pandas" },
      { name: "BERT" },
      { name: "LMV2" },
    ],
    image: portfolioImg,
    live: "",
    github: "https://www.github.com/bijayofficial",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]); // Initializes the state with the first project

  const handleSlideChange = (swiper) => {
    // Get the current slide index
    const currentIndex = swiper.activeIndex;
    console.log(currentIndex); // Debugging: logs the current slide index

    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: .24, duration:0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-slate-300">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl  text-accent">
                      {item.name}
                      {/* remove  the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              <div className="flex justify-start gap-4">
                {/* live project buttons */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                bg-white/5 flex justify-center items-center group "
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project buttons */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                bg-white/5 flex justify-center items-center group "
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex 
                  justify-center items-center bg-pink-50/20"
                  >{/* overlay */}
                    <div  className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>{/* image  */}
                    <div className="relative w-full h-full">
                      {/* Parent container */}
                      <Image
                        src={project.image}
                        width="100%"
                        className="object-cover"
                        alt={`Image of ${project.title}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 right-0 
              bottom-[calc(50% - 22px)]  lg-bottom-0 z-20 w-full 
              justify-between lg:w-max lg:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary
               text-[22px] w-[44px] h-[44px] flex justify-center 
               items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
