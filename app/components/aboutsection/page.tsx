"use client";

/* ===============================
   Imports
================================ */

import Image from "next/image";
import { Check } from "lucide-react";

/* ===============================
   Features Data
================================ */

const features = [
    "Deep Cleaning Service",
    "Fully Equipment",
    "Disinfecting Service",
    "Professional Sanitizing",
];

/* ===============================
   Main Component
================================ */

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 xl:gap-20">
                    
                    {/* ================= LEFT (Image Side) ================= */}
                    <div className="relative mx-auto w-full max-w-[560px] pl-4 pt-4 lg:pl-8 lg:pt-8">
                        
                        {/* Green Border offset to the top-left */}
                        <div className="hidden lg:block absolute top-0 left-0 w-[85%] h-[85%] border-t-[8px] border-l-[8px] border-[#0A7A51] z-0"></div>

                        {/* Dot Pattern - behind image at bottom right */}
                        <div className="hidden lg:block absolute bottom-0 right-8 z-0">
                            <div className="grid grid-cols-6 gap-[8px]">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="w-[5px] h-[5px] rounded-full bg-[#D7D7D7]"
                                    ></span>
                                ))}
                            </div>
                        </div>

                        {/* Image Container with Diagonal Cut at Bottom */}
                        <div 
                            className="relative z-10 w-full h-[550px] overflow-hidden"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)" }}
                        >
                            <Image
                                src="/banner/aboutimg.png"
                                alt="About Cleaning Service"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-w-768px) 100vw, 560px"
                            />
                        </div>

                        {/* Experience Badge ("30 Years") */}
                        <div className="absolute top-[48%] -right-4 md:-right-8 -translate-y-1/2 z-30">
                            <div 
                                className="bg-[#0A7A51] text-white w-[105px] h-[135px] flex flex-col justify-center items-center shadow-lg"
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                                }}
                            >
                                <h2 className="text-[44px] font-bold leading-none tracking-tight">
                                    30
                                </h2>
                                <p className="text-[15px] font-semibold tracking-wide mt-1">
                                    Years
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* ================= RIGHT (Content Side) ================= */}
                    <div className="max-w-[620px] lg:pl-6">
                        
                        <span className="inline-block text-[#0A7A51] font-bold text-[16px] tracking-wide">
                            Our Features
                        </span>

                        {/* Heading exactly split like the target design */}
                        <h2 className="mt-2 text-[#0B2942] font-extrabold leading-[1.25] text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] tracking-tight">
                            <span className="whitespace-nowrap">We Offer A Wide Range Of</span> <br className="hidden sm:block" />
                            Disinfection & Cleaning Services
                        </h2>

                        <p className="mt-6 text-[#6B7280] text-[15px] leading-[26px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrice.
                        </p>

                        <p className="mt-4 text-[#6B7280] text-[15px] leading-[26px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida. 
                            commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        {/* Feature Boxes exactly matching the target design */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-3 bg-[#EAF2EE] rounded-full px-5 py-3.5 hover:bg-[#0A7A51] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    {/* Small circle icon with white Check */}
                                    <div className="w-7 h-7 rounded-full bg-[#0A7A51] group-hover:bg-white flex items-center justify-center transition-colors duration-300 shrink-0">
                                        <Check
                                            size={16}
                                            className="text-white group-hover:text-[#0A7A51] stroke-[3]"
                                        />
                                    </div>

                                    <span className="font-semibold text-[#0A7A51] group-hover:text-white transition-colors duration-300 text-[14px]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Read More Button with matching padding and font */}
                        <button className="mt-10 bg-[#0A7A51] hover:bg-[#0B2942] text-white font-bold text-[15px] py-3.5 px-9 rounded-[8px] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer hover:scale-105 active:scale-95">
                            Read More
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}