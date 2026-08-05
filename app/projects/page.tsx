"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';

const projects = [
    {
        title: "Sanitizing Home",
        category: "Home",
        image: "/services/service-1.png", 
        link: "/projects/detail" // Linking to the detail page as placeholder
    },
    {
        title: "Office Cleaning",
        category: "Office",
        image: "/services/service-2.png",
        link: "/projects/detail"
    },
    {
        title: "Kitchen Cleaning",
        category: "Kitchen",
        image: "/services/service-3.png",
        link: "/projects/detail"
    },
    {
        title: "Hospital Disinfection",
        category: "Hospital",
        image: "/services/service-4.png",
        link: "/projects/detail"
    },
    {
        title: "Lift Cleaning",
        category: "Lift",
        image: "/services/service-1.png",
        link: "/projects/detail"
    },
    {
        title: "Social Awareness",
        category: "Social",
        image: "/services/service-2.png",
        link: "/projects/detail"
    }
];

export default function Projects() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Projects" breadcrumb="Projects" />

            <section className="py-20 bg-[#F8F9FA]">
                <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 3) * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <Link href={project.link} className="block h-full">
                                    <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                                        {/* Image Container */}
                                        <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden">
                                            <Image 
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        
                                        {/* Content Area */}
                                        <div className="p-6 relative grow flex flex-col justify-center">
                                            {/* Green square button overlaying image/content border */}
                                            <div className="absolute right-6 -top-5 w-10 h-10 rounded-[4px] bg-[#1FA463] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                                                <ArrowRight size={20} className="text-white" strokeWidth={2.5} />
                                            </div>

                                            <h3 className="text-[#0D2235] font-extrabold text-[20px] mb-1.5 transition-colors group-hover:text-[#1FA463]">
                                                {project.title}
                                            </h3>
                                            <p className="text-[#1FA463] text-[14px] font-bold">
                                                {project.category}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CalculateCTA />
            <Footer />
        </main>
    );
}
