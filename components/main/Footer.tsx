import React from "react";
import { RxGithubLogo } from "react-icons/rx";

import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] px-[200px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">
                                @jaimetn6
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <LiaLinkedin />
                            <span className="text-[15px] ml-[6px]">
                                www.linkedin.com/in/jaime-andrés-torres-navarro-0b05922a8
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">
                                https://github.com/JaimeTN
                            </span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact Me</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                jaimeandrestorresnavarro@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
