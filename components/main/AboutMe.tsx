"use client";

import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[80dvh] w-full h-full px-20 sm:px-20" id="about-me">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <div className="text-[20px] sm:text-[40px]  font-medium text-center text-gray-200 relative lg:bottom-[-80px]"
        >
          Обо
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" Мне "}
          </span>
        </div>
      </div>

      <div className="flex w-full h-auto mt-20 lg:mt-0">
        <div className="flex flex-col items-center justify-around w-full h-auto lg:flex-row lg:mt-[100px]">
            <div className="w-auto h-full flex justify-center items-center py-10 lg:pr-10"
            >
                <Image
                src="/Proger-min.png"
                alt="photo"
                height={420}
                width={420} 
                className="opacity-[0.8]"
                />
            </div>

            <div className="text-sm text-gray-400 my-5 max-w-[600px] h-auto text-center break-words lg:text-right lg:text-lg"
            style={{wordBreak: "break-word"}}
            >
              Привет! Меня зовут Илларион, мне 28 лет, и я Full Stack разработчик.
              Я занимаюсь веб-разработкой почти 5 лет, за это время было создано множество проектов различной сложности, начиная от одностраничника с использованием Gulp и заканчивая интернет-магазином с использованием: React, Redux, Redux-toolkit, Redux-persist, React-router-dom, Axios, MySQL, Sequelize, Passport-google-oauth20.
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
