"use client";

import Image from "next/image";
import { Socials } from "@/constants";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[4px] sm:px-[40px]">
        <a href="#main" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-pulse"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="flex h-auto justify-center w-full md:w-[340px] md:h-full md:flex md:flex-row md:items-center md:justify-between">
          <div
            className={`absolute ${
              open ? "top-0 opacity-1" : "top-[-1000%]"
            } left-0 ring-0 flex flex-col 
          justify-around items-center h-80 w-full border-[#7042f861] bg-[#160b4bbf] 
          md:opacity-1 md:flex md:flex-row md:static md:items-center md:justify-between md:w-full md:h-auto md:border
          md:px-[20px] md:py-[10px] md:rounded-full text-gray-200 transition-all`}
          >
            <a href="#projects" className="cursor-pointer">
              Прокты
            </a>
            <a href="#about-me" className="cursor-pointer">
              Обо мне
            </a>
            <a href="#skills" className="cursor-pointer">
              Навыки
            </a>
          </div>
        </div>

        <div className="flex items-center w-auto h-auto justify-between">
          <div className="hidden md:flex flex-row gap-5">
            {Socials.map((social) => (
              <a href={social.href} key={social.name} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
          {open ? (
            <XMarkIcon
              className="text-[#b49bff] h-[30px] w-[30px] flex md:hidden z-30 transi"
              onClick={(e) => setOpen(false)}
            />
          ) : (
            <Bars2Icon
              className="text-[#b49bff] h-[30px] w-[30px] flex md:hidden z-30 transi"
              onClick={(e) => setOpen(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
