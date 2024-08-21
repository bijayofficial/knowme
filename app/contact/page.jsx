"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8910619522",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bijayghosh.email@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "15/B Nabadiganta, P.O: Panchasayar,  Kolkata, West Bengal, India",
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.24, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]  ">
          {/* form */}
          <div className="lg:h-[54%] order-2 lg:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl
          "
              action=""
            >
              <h3 className="text-4xl text-accent">
                {" "}
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident nisi, iure deserunt at atque voluptatibus vel officiis
                voluptates soluta sit nam numquam minima sequi tempora
                doloremque enim suscipit culpa porro.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="LastName" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>

                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                    <SelectItem value="sst">Cloud Engineering</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}

              <Textarea
                className="h-[200px] "
                placeholder="Type your message here."
              />
              <Button className="max-w-40" size="lg">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col  gap-10">
              {info.map((item, index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] lg:h-[72px] lg:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
