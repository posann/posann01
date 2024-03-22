"use client";
import React from "react";

import { motion, useAnimation } from "framer-motion";
import Experience from "@/components/ui/experience";
import EXPERIENCES from "@/app/utils/constant/experiences";
import Education from "@/components/ui/education";
import Project from "@/components/ui/project";

function page() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-fit mx-2"
    >
      <div className=" md:w-80 w-full rounded-md h-fit sticky my-2">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-md p-4 my-2 border border-neutral-800 h-fit">
            <h1 className="font-RubikBold text-2xl text-neutral-200">Educations</h1>
            <Education />
            <div className="border border-neutral-700 my-4" />
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-md p-4 border border-neutral-800 my-4 ">
          <div className="text-neutral-400">
            <h1 className="font-RubikBold text-2xl text-neutral-200">Skills</h1>
            {
              EXPERIENCES.map((item, index) => {
                return (
                  <Experience key={index} name={item.name} skill={item.skill} />
                )
              })
            }
            <div className="border border-neutral-700 mt-5" />
          </div>
        </div>

        <Project />
      </div>
    </motion.div>
  );
}

export default page;
