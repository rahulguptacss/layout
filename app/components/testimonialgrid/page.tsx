"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Briten Stark",
        role: "Founder of Drove",
        content: "Aenean sollicitudin lorem bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sedo odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum and many velit.",
    },
    {
        name: "Johan Albas",
        role: "Sales Manager",
        content: "Aenean sollicitudin lorem bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sedo odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum and many velit.",
    },
    {
        name: "Jems Barlin",
        role: "Director",
        content: "Aenean sollicitudin lorem bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sedo odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum and many velit.",
    },
    {
        name: "Julian Nehar",
        role: "Founder of Drove",
        content: "Aenean sollicitudin lorem bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sedo odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum and many velit.",
    },
    {
        name: "Bril Hanc",
        role: "Sales Manager",
        content: "Aenean sollicitudin lorem bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sedo odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum and many velit.",
    },
    {
        name: "ANJ Carlos",
        role: "Director",
        content: "Aenean sollicitudin lorem bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit duis sedo odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum and many velit.",
    }
];

export default function TestimonialGrid() {
    return (
        <section className="pt-8 pb-14 md:pt-10 md:pb-16 bg-white relative">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#1FA463] font-bold text-[14px] tracking-wide block mb-3">
                            Testimonials
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#0D2235] text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-tight relative inline-block"
                    >
                        What Our Clients Says
                        {/* Swirly underline simulation */}
                        <svg className="absolute -bottom-4 right-0 w-[120px] h-auto text-[#F3C2A3] -z-10 opacity-70" viewBox="0 0 100 20" fill="none">
                            <path d="M0 15 C 20 5, 50 20, 100 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="transparent" />
                        </svg>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-[#F9FAFB] p-10 rounded-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:bg-white transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
                                ))}
                            </div>
                            
                            <p className="text-[#666666] text-[14.5px] leading-[1.8] mb-8 group-hover:text-[#555] transition-colors">
                                {testimonial.content}
                            </p>
                            
                            <div>
                                <h4 className="text-[#0D2235] text-[18px] font-bold mb-1 group-hover:text-[#1FA463] transition-colors">
                                    {testimonial.name}
                                </h4>
                                <p className="text-[#888888] text-[13px] font-medium">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center items-center gap-3"
                >
                    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F9FAFB] text-[#0D2235] hover:bg-[#1FA463] hover:text-white transition-colors">
                        <ChevronLeft size={18} strokeWidth={2.5} />
                    </button>
                    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#1FA463] text-white font-bold transition-colors">
                        1
                    </button>
                    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F9FAFB] text-[#0D2235] font-bold hover:bg-[#1FA463] hover:text-white transition-colors">
                        2
                    </button>
                    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F9FAFB] text-[#0D2235] font-bold hover:bg-[#1FA463] hover:text-white transition-colors">
                        3
                    </button>
                    <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F9FAFB] text-[#0D2235] hover:bg-[#1FA463] hover:text-white transition-colors">
                        <ChevronRight size={18} strokeWidth={2.5} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
