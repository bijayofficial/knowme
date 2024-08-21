"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const serv = [
  {
    num: "01",
    title: "Web Development ",
    Description:
      "Lorem ipsum adipisicing elitdem voluptate ullam amet saepe maiores atque dolorem necessitatibus.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    Description:
      "Lorem ipsum adipisicing elitdem voluptate ullam amet saepe maiores atque dolorem necessitatibus.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design ",
    Description:
      "Lorem ipsum adipisicing elitdem voluptate ullam amet saepe maiores atque dolorem necessitatibus.",
    href: "",
  },
  {
    num: "04",
    title: "Cloud Engineering ",
    Description:
      "Lorem ipsum adipisicing elitdem voluptate ullam amet saepe maiores atque dolorem necessitatibus.",
    href: "",
  },
];

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0 ">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.14, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {serv.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold  text-outline group-hover:text-accent">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all 
                  duration-300 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl text-semibold" />
                  </Link>
                </div>
                {/* Heading */}
                <h2
                  className="text-[45px] font-semibold leading-none text-white
                 tracking-tight group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.Description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default services;
