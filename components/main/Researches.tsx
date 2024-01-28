import React from "react";
import ResearchItem from "../sub/ResearchItem";

const Researches = () => {
    return (
        <section
            id="researches"
            className="flex flex-col items-center justify-center py-20"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Researches
            </h1>
            <div>
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] text-gray-200">
                    <div className="flex flex-col w-auto h-auto">
                        <ResearchItem
                            src="google.com"
                            title="The Nilpotent Graph of non-nilpotent finite groups"
                            topic="Group and Graph Theory"
                            status="To be published"
                        ></ResearchItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Researches;
