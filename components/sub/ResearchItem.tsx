import React from "react";

interface Props {
    src: string;
    title: string;
    topic: string;
    status: string;
}

const ResearchItem = ({ src, title, topic, status }: Props) => {
    return (
        <div className="flex flex-col text-gray-200 px-[20px] py-[10px] gap-5">
            <h1 className="text-2xl font-semibold text-white">
                <a href={src}>{title}</a>
            </h1>
            <div className="flex flex-row">
                <div className="px-[20px]">{topic}</div>
                <div className="Welcome-box px-[15px] border border-[#7042f88b] opacity-[0.9]">
                    {status}
                </div>
            </div>
        </div>
    );
};

export default ResearchItem;
