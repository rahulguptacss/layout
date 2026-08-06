"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Sparkles, Briefcase, FileText, Edit, PhoneCall } from 'lucide-react';

const sitemapData = [
    {
        title: "About Us",
        subtitle: "Know more about us",
        Icon: Users,
        items: ["Our Story", "Our Mission", "Our Team", "Certifications", "Careers"]
    },
    {
        title: "Services",
        subtitle: "What we offer",
        Icon: Sparkles,
        items: ["House Cleaning", "Office Cleaning", "Deep Cleaning", "Carpet Cleaning", "Sanitization", "Pest Control", "Window Cleaning"]
    },
    {
        title: "Projects",
        subtitle: "Our completed work",
        Icon: Briefcase,
        items: ["Residential Projects", "Commercial Projects", "Gallery", "Case Studies"]
    },
    {
        title: "Pages",
        subtitle: "Important pages",
        Icon: FileText,
        items: ["Testimonials", "FAQs", "Pricing", "Sitemap", "Terms & Conditions", "Privacy Policy", "Request a Quote"]
    },
    {
        title: "Blog",
        subtitle: "Latest updates",
        Icon: Edit,
        items: ["Cleaning Tips", "Industry News", "Our Blog"]
    },
    {
        title: "Contact Us",
        subtitle: "Get in touch",
        Icon: PhoneCall,
        items: ["Contact Form", "Our Location", "Support"]
    }
];

export default function SitemapContent() {
    return (
        <section className="pt-8 md:pt-12 pb-4 md:pb-6 bg-[#F9F9F9] overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-8"
                >
                    <h5 className="text-[#1FA463] font-bold text-[14px] uppercase tracking-wider mb-2">
                        FIND YOUR WAY
                    </h5>
                    <h2 className="text-[#14231E] text-[32px] md:text-[40px] font-extrabold mb-4">
                        Website <span className="text-[#1FA463]">Sitemap</span>
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-[1.8]">
                        Explore all pages of CleanPro Cleaning Services website to find the information you need quickly and easily.
                    </p>
                </motion.div>

                {/* Sitemap Tree View */}
                <div className="flex flex-col items-center">
                    
                    {/* Home Node */}
                    <div className="relative flex flex-col items-center z-20">
                        <div className="flex items-center gap-3 border border-gray-200 shadow-sm rounded-lg p-3 bg-white w-[200px] hover:border-[#1FA463] transition-colors group cursor-pointer">
                            <div className="w-10 h-10 rounded-md bg-[#eaf6f0] text-[#1FA463] flex items-center justify-center shrink-0 group-hover:bg-[#1FA463] group-hover:text-white transition-colors">
                                <Home size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#14231E] text-[14px] leading-tight group-hover:text-[#1FA463] transition-colors">Home</h4>
                                <p className="text-gray-500 text-[11px] mt-0.5 whitespace-nowrap">Go to Homepage</p>
                            </div>
                        </div>
                        {/* Vertical line dropping from Home */}
                        <div className="w-px h-8 bg-[#1FA463]"></div>
                    </div>

                    {/* Desktop Tree View (hidden on very small screens, scrolls horizontally if needed) */}
                    <div className="w-full overflow-x-auto pb-2 hide-scrollbar">
                        <div className="min-w-[1100px] relative">
                            {/* Horizontal Line connecting columns */}
                            {/* Calculated left and right to start from the center of the first column to the center of the last column */}
                            <div className="absolute top-0 left-[8.33%] right-[8.33%] h-px bg-[#1FA463]"></div>
                            
                            <div className="grid grid-cols-6 gap-4 relative mt-[1px]">
                                {sitemapData.map((col, index) => (
                                    <div key={index} className="flex flex-col items-center relative">
                                        
                                        {/* Top vertical line to the card */}
                                        <div className="w-px h-8 bg-[#1FA463] -mt-[1px]"></div>
                                        
                                        {/* Column Content Wrapper */}
                                        <div className="w-[180px] relative">
                                            {/* Category Header Card */}
                                            <div className="flex items-center gap-3 border border-gray-200 shadow-sm rounded-lg p-3 bg-white relative z-10 hover:border-[#1FA463] transition-colors group cursor-pointer">
                                                <div className="w-10 h-10 rounded-md bg-[#eaf6f0] text-[#1FA463] flex items-center justify-center shrink-0 group-hover:bg-[#1FA463] group-hover:text-white transition-colors">
                                                    <col.Icon size={18} />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <h4 className="font-bold text-[#14231E] text-[13px] leading-tight group-hover:text-[#1FA463] transition-colors truncate">{col.title}</h4>
                                                    <p className="text-gray-500 text-[10px] mt-0.5 truncate">{col.subtitle}</p>
                                                </div>
                                            </div>

                                            {/* Vertical line for sub-items */}
                                            <div className="absolute left-[31px] top-[100%] bottom-6 w-px bg-[#1FA463] z-0"></div>

                                            {/* Sub Items List */}
                                            <div className="pl-[52px] pt-4 space-y-3 relative z-10 pb-2">
                                                {col.items.map((item, i) => (
                                                    <div key={i} className="relative py-2 px-3 border border-gray-200 rounded-md bg-white shadow-sm hover:border-[#1FA463] transition-colors cursor-pointer group/item">
                                                        {/* Horizontal Connector */}
                                                        <div className="absolute right-full top-1/2 -translate-y-1/2 w-[21px] h-px bg-[#1FA463]"></div>
                                                        {/* Connector Dot */}
                                                        <div className="absolute right-full top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1FA463] translate-x-[-19.5px]"></div>
                                                        
                                                        <span className="text-[12px] text-gray-500 font-medium group-hover/item:text-[#1FA463] block truncate">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
