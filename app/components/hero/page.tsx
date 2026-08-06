"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
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
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-[1320px] mx-auto w-full px-5 md:px-12 lg:px-24 xl:px-32">
                <motion.div
                    className="max-w-[600px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-[#1FA463] text-[18px] font-medium mb-4"
                    >
                        Reliable house cleaning professionals
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-[50px] lg:text-[80px] leading-[1.05] tracking-tight font-extrabold text-[#0D2235]"
                    >
                        Consider it
                        <br />
                        <span className="text-[#1FA463]">
                            Done
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-6 text-[#4A5568] leading-[1.7] text-[16px] max-w-[500px]"
                    >
                        We understand that maintaining a spotless home can be a
                        challenge in the hustle and bustle of daily life.
                        That's why we've made it our specialty to know the ins
                        and outs of house cleaning, so you don't have to.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <button className="mt-8 flex items-center bg-[#1FA463] rounded-full pl-10 pr-2 py-2 hover:bg-[#188c52] transition-colors group">
                            <span className="text-white font-bold mr-6 text-[16px]">
                                Book Now
                            </span>
                            <span className="w-[44px] h-[44px] bg-white rounded-full flex justify-center items-center shadow-sm">
                                <ArrowRight className="text-[#1FA463] w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}