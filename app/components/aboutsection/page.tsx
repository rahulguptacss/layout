"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const features = [
    "Deep Cleaning Service",
    "Fully Equipment",
    "Disinfecting Service",
    "Professional Sanitizing",
];

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-28">

            <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 xl:gap-24">

                    {/* ================= LEFT ================= */}

                    <div className="relative mx-auto w-full max-w-[560px]">

                        {/* Green Border */}

                        <div className="hidden lg:block absolute top-7 left-7 w-full h-full border-[8px] border-[#22A46D]"></div>

                        {/* Image */}

                        <div className="relative z-10 overflow-hidden">

                            <Image
                                src="/banner/aboutimg.png"
                                alt="About"
                                width={560}
                                height={700}
                                priority
                                className="relative z-10 w-full h-auto object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                            />

                            {/* Bottom White Shape */}

                            <div className="absolute bottom-0 left-0 w-full h-28 bg-white"
                                style={{
                                    clipPath: "polygon(0 100%,100% 25%,100% 100%)",
                                }}
                            ></div>

                        </div>

                        {/* Experience */}

                        <div className="absolute top-1/2 right-2 md:right-4 lg:-right-10 -translate-y-1/2 z-20">

                            <div className="relative bg-[#22A46D] text-white w-[135px] lg:w-[155px] h-[170px] lg:h-[190px] flex flex-col justify-center items-center shadow-[0_15px_40px_rgba(34,164,109,.35)]">

                                <h2 className="text-5xl lg:text-6xl font-bold leading-none">
                                    30
                                </h2>

                                <p className="text-lg font-semibold mt-2">
                                    Years
                                </p>

                                <div
                                    className="absolute bottom-0 left-0 w-full h-10 bg-[#22A46D]"
                                    style={{
                                        clipPath: "polygon(0 0,100% 0,70% 100%,0 100%)",
                                    }}
                                ></div>

                            </div>

                        </div>

                        {/* Dot Pattern */}

                        <div className="hidden lg:block absolute bottom-5 right-6">

                            <div className="grid grid-cols-7 gap-[7px]">

                                {Array.from({ length: 49 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="w-[6px] h-[6px] rounded-full bg-[#D7D7D7]"
                                    ></span>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="max-w-[620px]">

                        <span className="inline-block text-[#22A46D] font-semibold text-lg tracking-wide">
                            OUR FEATURES
                        </span>

                        <h2 className="mt-4 text-[#0B2942] font-extrabold leading-tight text-[32px] sm:text-[42px] lg:text-[58px]">
                            We Offer A Wide
                            <br />
                            Range Of
                            <br />
                            Disinfection &
                            <br />
                            Cleaning Services
                        </h2>

                        <p className="mt-6 text-[#6B7280] text-[16px] leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida.
                        </p>

                        <p className="mt-6 text-[#6B7280] text-[16px] leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* Feature Boxes */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

                            {features.map((item, index) => (

                                <div
                                    key={index}
                                    className="group flex items-center gap-4 bg-[#EDF8F2] rounded-full px-5 py-4 hover:bg-[#22A46D] transition-all duration-300 cursor-pointer"
                                >

                                    <div className="w-11 h-11 rounded-full bg-[#22A46D] group-hover:bg-white flex items-center justify-center transition">

                                        <Check
                                            size={20}
                                            className="text-white group-hover:text-[#22A46D]"
                                        />

                                    </div>

                                    <span className="font-semibold text-[#0B2942] group-hover:text-white transition">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                        {/* Read More Button */}

                        <button className="group mt-12 inline-flex items-center rounded-full overflow-hidden shadow-xl">

                            <span className="bg-[#22A46D] text-white font-semibold px-8 py-4">
                                Read More
                            </span>

                            <span className="w-14 h-14 bg-[#EDF8F2] flex items-center justify-center transition-all duration-300 group-hover:bg-[#22A46D]">

                                <ArrowRight
                                    size={20}
                                    className="text-[#22A46D] group-hover:text-white"
                                />

                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}