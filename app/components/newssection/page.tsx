"use client";

import { motion } from "framer-motion";

const newsItems = [
    {
        title: "How To Clean And Spread Disinfect Home & Office",
        date: "20 Mar 2024",
        image: "/news/1.jpg",
        link: "#"
    },
    {
        title: "Superior Clean Through Our Trained Cleaning Staff",
        date: "21 Mar 2024",
        image: "/news/2.jpg",
        link: "#"
    },
    {
        title: "Corona Virus Infection Prevention Everywhere",
        date: "22 Mar 2024",
        image: "/news/3.jpg",
        link: "#"
    }
];

export default function NewsSection() {
    return (
        <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden relative">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-2"
                    >
                        <span className="text-[#16A361] font-semibold text-[15px] tracking-wide">
                            News
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#0D2235] text-[32px] md:text-[42px] font-extrabold leading-[1.2] tracking-tight"
                    >
                        Our Latest News
                    </motion.h2>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {newsItems.map((news, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white shadow-[0_5px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[250px] overflow-hidden">
                                <img 
                                    src={news.image} 
                                    alt={news.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Date Badge */}
                                <div className="absolute top-0 left-0 bg-[#16A361] text-white text-[12px] font-semibold px-3 py-2">
                                    {news.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-7 flex flex-col grow">
                                <h4 className="text-[#0D2235] text-[20px] font-bold leading-[1.4] mb-6 hover:text-[#16A361] transition-colors cursor-pointer pr-2">
                                    {news.title}
                                </h4>
                                
                                <div className="mt-auto">
                                    <a 
                                        href={news.link}
                                        className="inline-block bg-[#16A361] hover:bg-[#0D2235] text-white text-[14px] font-semibold px-6 py-2 rounded-full transition-colors duration-300"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
