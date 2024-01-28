"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <motion.div
                variants={slideInFromTop}
                className="text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500">
                    Skills
                </span>
            </motion.div>
        </div>
    );
};

export default SkillText;
