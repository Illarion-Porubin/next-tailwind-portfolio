"use client";

import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full px-10 sm:px-20" id="about-me">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <div className="text-[40px] font-medium text-center text-gray-200 relative lg:bottom-[-80px]"
        >
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" Me "}
          </span>
        </div>
      </div>

      <div className="flex w-full h-auto mt-20 lg:mt-0">
        <div className="flex flex-col items-center justify-center w-full h-auto lg:flex-row lg:mt-[100px]">
            <div className="w-full h-full flex justify-center items-center py-10 lg:pr-10"
            >
                <Image
                src="/proger5.png"
                alt="photo"
                height={420}
                width={420} 
                className="opacity-[0.8]"
                />
            </div>

            <div className="text-sm text-gray-400 my-5 max-w-[600px] h-auto text-center break-words lg:text-right lg:text-lg"
            >
                Hello! My name is Lars, I&apos;m 28 and I&apos;m a Full Stack Developer.
                I have been engaged in web development for 4 years now, during this time many projects of varying complexity have been created, ranging from a single-page using Gulp and ending with an online store using: React, Redux, Redux-toolkit, Redux-persist, React-router-dom, Axios, MySQL, Sequelize, Passport-google-oauth20.
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
