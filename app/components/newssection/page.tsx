"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const newsItems = [
    {
        title: "How To Clean And Spread Disinfect Home & Office",
        date: "20 Mar 2024",
        image: "/news/1.jpg",
        link: "/blog/detail"
    },
    {
        title: "Superior Clean Through Our Trained Cleaning Staff",
        date: "21 Mar 2024",
        image: "/news/2.jpg",
        link: "/blog/detail"
    },
    {
        title: "Corona Virus Infection Prevention Everywhere",
        date: "22 Mar 2024",
        image: "/news/3.jpg",
        link: "/blog/detail"
    },
    {
        title: "How To Clean And Spread Disinfect Home & Office",
        date: "20 Mar 2024",
        image: "/news/1.jpg",
        link: "/blog/detail"
    },
    {
        title: "Superior Clean Through Our Trained Cleaning Staff",
        date: "21 Mar 2024",
        image: "/news/2.jpg",
        link: "/blog/detail"
    },
    {
        title: "Corona Virus Infection Prevention Everywhere",
        date: "22 Mar 2024",
        image: "/news/3.jpg",
        link: "/blog/detail"
    }
];

interface NewsSectionProps {
    limit?: number;
    layout?: 'grid' | 'slider';
}

export default function NewsSection({ limit = 6, layout = 'grid' }: NewsSectionProps) {
    return (
        <section className={`${layout === 'slider' ? 'bg-white pb-4 md:pb-6' : 'bg-[#F8F9FA] pb-16 md:pb-24'} pt-8 md:pt-12 overflow-hidden relative`}>
            {layout === 'slider' && (
                <style jsx global>{`
                    .news-slider .swiper-pagination-bullet-active {
                        background-color: #1FA463 !important;
                    }
                    .news-slider .swiper-slide {
                        height: auto;
                        display: flex;
                    }
                `}</style>
            )}
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-2"
                    >
                        <span className="text-[#1FA463] font-bold text-[14px] tracking-wide block mb-3">
                            News
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#0D2235] text-[32px] md:text-[44px] font-extrabold leading-[1.2] tracking-tight"
                    >
                        Our Latest News
                    </motion.h2>
                </div>

                {/* Content */}
                {layout === 'slider' ? (
                    <div className="news-slider">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={28}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="!pb-10 !px-2"
                        >
                            {newsItems.slice(0, limit).map((news, index) => (
                                <SwiperSlide key={index}>
                                    <NewsCard news={news} index={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {newsItems.slice(0, limit).map((news, index) => (
                            <NewsCard key={index} news={news} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function NewsCard({ news, index }: { news: any, index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.15 }}
            className="bg-white border border-gray-100 shadow-[0_5px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col hover:-translate-y-2 rounded-md overflow-hidden p-3 w-full h-full"
        >
            {/* Image Container */}
            <div className="relative w-full h-[240px] overflow-hidden rounded-sm">
                <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Date Badge */}
                <div className="absolute top-0 left-0 bg-[#1FA463] text-white text-[13px] font-bold px-4 py-2 rounded-br-sm">
                    {news.date}
                </div>
            </div>

            {/* Content */}
            <div className="pt-6 pb-4 px-2 flex flex-col grow">
                <h4 className="text-[#0D2235] text-[20px] md:text-[22px] font-bold leading-[1.4] mb-6 hover:text-[#1FA463] transition-colors cursor-pointer">
                    {news.title}
                </h4>
                
                <div className="mt-auto">
                    <a 
                        href={news.link}
                        className="inline-block bg-[#1FA463] hover:bg-[#138A56] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-colors duration-300 shadow-sm"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
