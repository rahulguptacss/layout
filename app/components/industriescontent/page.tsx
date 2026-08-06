"use client";

import React from 'react'
import { motion } from "framer-motion"
import {
    Building2,
    Factory,
    PlusCircle,
    GraduationCap,
    ShoppingCart,
    Building,
    LucideIcon
} from "lucide-react";

interface IndustryItem {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

const industries: IndustryItem[] = [
    {
        id: 1,
        title: "Commercial Offices",
        description: "We keep offices clean, organized, and productive for your team and clients.",
        icon: Building2,
    },
    {
        id: 2,
        title: "Industrial Facilities",
        description: "From factories to warehouses, we handle heavy-duty cleaning with safety and precision.",
        icon: Factory,
    },
    {
        id: 3,
        title: "Healthcare Facilities",
        description: "We follow strict hygiene standards to ensure a safe and healthy environment.",
        icon: PlusCircle,
    },
    {
        id: 4,
        title: "Educational Institutions",
        description: "We maintain clean and hygienic schools, colleges, and universities for better learning.",
        icon: GraduationCap,
    },
    {
        id: 5,
        title: "Retail & Shopping Centers",
        description: "We create clean, welcoming spaces that leave a lasting impression on your customers.",
        icon: ShoppingCart,
    },
    {
        id: 6,
        title: "Hotels & Hospitality",
        description: "We deliver exceptional cleanliness to enhance guest comfort and satisfaction.",
        icon: Building,
    },
];

export default function IndustriesContent() {
    return (
        <section className="pt-10 pb-16 md:pt-14 md:pb-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="w-12 h-[2px] bg-[#0A7A51]"></span>
                        <span className="text-[#0A7A51] font-bold uppercase tracking-wider text-[15px]">
                            Industries We Serve
                        </span>
                        <span className="w-12 h-[2px] bg-[#0A7A51]"></span>
                    </div>
                    <h2 className="text-[#0B2942] text-3xl sm:text-4xl md:text-[45px] font-semibold leading-tight mb-6">
                        Clean Solutions for Every Industry
                    </h2>
                    <p className="text-[#6B7280] text-[16px] leading-[26px] max-w-2xl mx-auto">
                        We provide professional cleaning services tailored to the unique needs of different industries. Our expertise ensures a cleaner, safer and healthier environment.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                                className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <div className="w-[70px] h-[70px] mx-auto bg-[#EAF2EE] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0A7A51] transition-all duration-300">
                                    <Icon size={32} className="text-[#0A7A51] group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Title */}
                                <h3 className="text-[#0B2942] text-[22px] font-bold mb-4 group-hover:text-[#0A7A51] transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Separator */}
                                <div className="w-8 h-[2px] bg-[#0A7A51] mx-auto mb-5 rounded-full opacity-60 group-hover:w-12 transition-all duration-300"></div>

                                {/* Description */}
                                <p className="text-[#6B7280] text-[15px] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
