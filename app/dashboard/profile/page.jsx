"use client";
import React, { useState } from "react";
import {
  PiDownload,
  PiShapesThin,
} from "react-icons/pi";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SOCIAL_MEDIA from "@/app/utils/constant/socialmedia";
import MYPROFILE from "@/app/utils/constant/profile";
import Work from "@/components/ui/work";
import Certificate from "@/components/ui/certificate";

function Homepage() {
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="block w-fit md:w-[28rem] sticky md:my-2 mx-2"
      >
        <div className="w-full p-4 border border-neutral-800 rounded-md h-full ">
          <div className="flex relative">
            <div className="w-full">
            <div className="flex flex-row justify-start items-center">
              <Image
                  width={500}
                  height={500}
                  className="w-32 h-32 rounded-md object-cover"
                  src="/photo.jpg"
                  alt=""
                />
              <div className="flex flex-col h-100 ml-4 gap-y-2">
                <h1 className="font-RubikBold text-3xl text-neutral-300">
                  {MYPROFILE.name}
                </h1>
                <p className="-mt-1 text-xl font-RubikMedium text-neutral-400">
                  {MYPROFILE.position}
                </p>
                <Link href={"ahmadfauzan.pdf"} className="w-fit p-1 border border-neutral-600 rounded-md">
                  <div className="flex flex-row gap-x-2 font-RubikRegular text-[14px] text-neutral-400 items-center">
                    <PiDownload />
                    <p>Resume</p>
                  </div>
                </Link>
              </div>
            </div>
              
              <div className="flex w-full">
                <div className="flex gap-x-3 mt-4">
                  {
                    SOCIAL_MEDIA.map((item, index) => {
                      return (
                        <Link key={item.name} href={item.url}>
                          <div className="bg-neutral-700/50 p-2 rounded-md flex items-center justify-center">
                            {item.icon}
                          </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#282828] text-neutral-300 my-4" />
      
          <div className="w-full mt-2 text-neutral-400">
            <div className="text-[16px]  font-RubikRegular my-3">
              <p>
                {MYPROFILE.bio1}
              </p> <br />
              <p>
                {MYPROFILE.bio2}
              </p>
            </div>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin className="text-neutral-100" />
                <span className="text-[12px] text-neutral-100 font-RubikRegular">
                {new Date().getUTCFullYear() - 2021}+ Years as a Developer
                </span>
              </div>
              
            </div>

            <div className="border border-[#282828] text-neutral-300 my-4" />

            <Work />

            <div className="border border-[#282828] text-neutral-300 my-4" />

            <Certificate />

            <div className="border border-[#282828] text-neutral-300 mb-4 mt-6" />

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Homepage;
