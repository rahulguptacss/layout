"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
        },
    };

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-110px)] min-h-[600px] max-h-[850px] flex items-center overflow-hidden"
            style={{
                backgroundImage: "url('/banner/herobanner.png')",
            }}
        >
            {/* White Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[1320px] mx-auto w-full px-5 lg:px-8">
                <motion.div
                    className="max-w-[600px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-[#1FA463] text-lg font-semibold mb-4"
                    >
                        Reliable house cleaning professionals
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-[50px] lg:text-[85px] leading-none font-extrabold text-[#0D2235]"
                    >
                        Consider it
                        <br />
                        <span className="text-[#1FA463]">
                            Done
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-8 text-gray-600 leading-8 text-lg"
                    >
                        We understand that maintaining a spotless home can be a
                        challenge in the hustle and bustle of daily life.
                        That&apos;s why we&apos;ve made it our specialty to know the ins
                        and outs of house cleaning, so you don&apos;t have to.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <button className="mt-10 flex items-center bg-[#1FA463] rounded-full overflow-hidden hover:bg-green-700 transition group">
                            <span className="px-10 py-4 text-white font-semibold">
                                Book Now
                            </span>
                            <span className="w-14 h-14 bg-white flex justify-center items-center">
                                <ArrowRight className="text-[#1FA463] group-hover:translate-x-1.5 transition-transform duration-300" />
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}