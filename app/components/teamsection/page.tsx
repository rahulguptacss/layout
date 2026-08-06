"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const teamMembers = [
    {
        name: "Jack Farnes",
        role: "Head of Cleaner",
        image: "/team/1.jpg"
    },
    {
        name: "Farnej Dev",
        role: "Cleaner",
        image: "/team/2.jpg"
    },
    {
        name: "Jack Moris",
        role: "Assistant",
        image: "/team/3.jpg"
    },
    {
        name: "Emily Stone",
        role: "Housekeeping Expert",
        image: "/team/4.jpg"
    },
    {
        name: "Jack Farnes",
        role: "Head of Cleaner",
        image: "/team/1.jpg"
    },
    {
        name: "Farnej Dev",
        role: "Cleaner",
        image: "/team/2.jpg"
    },
    {
        name: "Jack Moris",
        role: "Assistant",
        image: "/team/3.jpg"
    },
    {
        name: "Emily Stone",
        role: "Housekeeping Expert",
        image: "/team/4.jpg"
    }
];

interface TeamSectionProps {
    limit?: number;
    layout?: 'grid' | 'slider';
}

export default function TeamSection({ limit, layout = 'grid' }: TeamSectionProps) {
    const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;
    
    return (
        <section className="bg-white pt-10 pb-6 md:pt-14 md:pb-10">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-[#078B55] font-bold text-[16px] md:text-[18px] mb-2 block"
                    >
                        Our Team
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="text-[#0D2235] text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight"
                    >
                        Our Expert Team Member
                    </motion.h2>
                </div>

                {/* Team Display */}
                {layout === 'slider' ? (
                    <div className="team-slider">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className="!pb-10"
                        >
                            {displayedMembers.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <TeamCard member={member} index={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <style jsx global>{`
                            .team-slider .swiper-pagination-bullet-active {
                                background-color: #078B55 !important;
                            }
                            .team-slider .swiper-slide {
                                height: auto;
                                display: flex;
                            }
                        `}</style>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {displayedMembers.map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function TeamCard({ member, index }: { member: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative group bg-[#F8F9FA] overflow-hidden rounded-sm w-full"
        >
            <div className="relative h-[380px] lg:h-[420px] w-full overflow-hidden">
                {/* Member Image */}
                <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Green Triangle Background */}
                <div 
                    className="absolute bottom-0 right-0 w-full h-[130px] lg:h-[150px] bg-[#078B55] z-0 transition-all duration-300 group-hover:bg-[#067246] group-hover:h-[140px] lg:group-hover:h-[160px]"
                    style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
                ></div>
                
                {/* Name and Role Text */}
                <div className="absolute bottom-0 right-0 z-10 w-full p-5 lg:p-6 text-right flex flex-col justify-end h-[130px] lg:h-[150px] transition-all duration-300 group-hover:pb-6 lg:group-hover:pb-8">
                    <h3 className="text-white text-[18px] lg:text-[20px] font-bold tracking-wide transition-transform duration-300 group-hover:-translate-y-1">{member.name}</h3>
                    <p className="text-white/90 text-[13px] lg:text-[14px] mt-0.5 lg:mt-1 transition-transform duration-300 group-hover:-translate-y-1 delay-75">{member.role}</p>
                </div>
            </div>
        </motion.div>
    );
}
