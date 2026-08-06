"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CalculateCTASection() {
    return (
        <div className="relative z-20 max-w-[1140px] mx-auto px-4 lg:px-6 -mb-24 md:-mb-28 mt-4 md:mt-8">
            
            <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[30px] shadow-[0_0_60px_rgba(0,0,0,0.06)] p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    {/* Faint Background Wave Decoration */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M0,100 C200,200 400,0 600,100 C800,200 1000,50 1000,50 L1000,200 L0,200 Z" fill="none" stroke="#F0ECE4" strokeWidth="2" />
                        <path d="M0,150 C300,-50 500,250 1000,100" fill="none" stroke="#F0ECE4" strokeWidth="2" />
                    </svg>

                    {/* Left: Titles */}
                    <div className="relative z-10 shrink-0 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                            <div className="w-8 h-[2px] bg-[#16A361]"></div>
                            <span className="text-[#16A361] font-semibold text-[13px] tracking-widest uppercase">
                                Your Cleaning Cost
                            </span>
                        </div>
                        <h2 className="text-[#1A1A1A] text-[36px] md:text-[40px] font-semibold leading-none tracking-tight">
                            Calculate
                        </h2>
                    </div>

                    {/* Right: Form Elements */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 w-full lg:w-auto">
                        
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full md:w-[240px] xl:w-[260px] bg-white border border-[#EDEDED] rounded-full px-7 py-4 text-[15px] text-[#777] placeholder:text-[#999] outline-none focus:border-[#138A56] transition-colors"
                        />

                        <div className="relative w-full md:w-[240px] xl:w-[260px]">
                            <select className="w-full bg-white border border-[#EDEDED] rounded-full px-7 py-4 text-[15px] text-[#555] outline-none focus:border-[#138A56] transition-colors appearance-none cursor-pointer">
                                <option value="">Square Meters</option>
                                <option value="50">50 - 100 sq m</option>
                                <option value="100">100 - 200 sq m</option>
                                <option value="200">200+ sq m</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#777] pointer-events-none" />
                        </div>

                        <button className="w-full md:w-[160px] lg:w-[180px] bg-[#138A56] hover:bg-[#0D2235] text-white text-[15px] font-bold px-8 py-4 rounded-full transition-colors duration-300 whitespace-nowrap">
                            Calculate
                        </button>

                    </div>

                </motion.div>
                
        </div>
    );
}
