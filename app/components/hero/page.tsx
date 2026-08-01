"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat min-h-[750px] flex items-center"
            style={{
                backgroundImage: "url('/banner/herobanner.png')",
            }}
        >
            {/* White Gradient Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

            {/* Content */}

            <div className="relative z-10 max-w-[1320px] mx-auto w-full px-5 lg:px-8">

                <div className="max-w-[600px]">

                    <p className="text-[#1FA463] text-lg font-semibold mb-4">
                        Reliable house cleaning professionals
                    </p>

                    <h1 className="text-[50px] lg:text-[85px] leading-none font-extrabold text-[#0D2235]">
                        Consider it
                        <br />
                        <span className="text-[#1FA463]">
                            Done
                        </span>
                    </h1>

                    <p className="mt-8 text-gray-600 leading-8 text-lg">
                        We understand that maintaining a spotless home can be a
                        challenge in the hustle and bustle of daily life.
                        That&apos;s why we&apos;ve made it our specialty to know the ins
                        and outs of house cleaning, so you don&apos;t have to.
                    </p>

                    <button className="mt-10 flex items-center bg-[#1FA463] rounded-full overflow-hidden hover:bg-green-700 transition">

                        <span className="px-10 py-4 text-white font-semibold">
                            Book Now
                        </span>

                        <span className="w-14 h-14 bg-white flex justify-center items-center">
                            <ArrowRight className="text-[#1FA463]" />
                        </span>

                    </button>

                </div>

            </div>

        </section>
    );
}