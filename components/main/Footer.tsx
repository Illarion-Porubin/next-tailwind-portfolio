import Image from "next/image";
import React from "react";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-20">
          <div className="w-[600px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Контакты</div>
            <div className="flex flex-col items-center md:flex-row w-full h-auto justify-around my-10">
              <a
                className="flex flex-row items-center my-[15px] cursor-pointer"
                href="http://t.me/illarion123"
                target="_blank"
              >
                <Image
                  src="/Telegram.svg"
                  alt="telegram"
                  height={20}
                  width={20}
                  className="opacity-[0.8]"
                />
                <span className="text-[15px] ml-[6px]">Telegram</span>
              </a>
              <a
                className="flex flex-row items-center my-[15px] cursor-pointer"
                href="https://github.com/Illarion-Porubin"
                target="_blank"
              >
                <Image
                  src="/GitHub.svg"
                  alt="github"
                  height={20}
                  width={20}
                  className="opacity-[0.8]"
                />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
              <a
                className="flex flex-row items-center my-[15px] cursor-pointer"
                href="mailto:lars.mywork@gmail.com"
                target="_blank"
              >
                <Image
                  src="/Post.svg"
                  alt="Post"
                  height={20}
                  width={20}
                  className="opacity-[0.8]"
                />
                <span className="text-[15px] ml-[6px]">lars.mywork@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy;Portfolio 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
