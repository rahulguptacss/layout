"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Briefcase, TrendingUp, DollarSign, BookOpen, 
    MapPin, ChevronRight, CheckCircle, Users, 
    Heart, Shield, Award, Smile,
    Target, ArrowUpRight, CircleDollarSign, GraduationCap, User,
    Map, UserCog, UserCheck, Settings, Headset,
    AlarmClock, ShieldCheck, HeartHandshake
} from 'lucide-react';

const jobOpenings = [
    { title: "Housekeeping Staff", location: "Las Vegas, NV", type: "Full Time", icon: <Map size={22} className="text-[#1FA463]" strokeWidth={1.5} /> },
    { title: "Cleaning Supervisor", location: "Las Vegas, NV", type: "Full Time", icon: <UserCog size={22} className="text-[#1FA463]" strokeWidth={1.5} /> },
    { title: "Office Cleaner", location: "Las Vegas, NV", type: "Part Time", icon: <UserCheck size={22} className="text-[#1FA463]" strokeWidth={1.5} /> },
    { title: "Floor Technician", location: "Las Vegas, NV", type: "Full Time", icon: <Settings size={22} className="text-[#1FA463]" strokeWidth={1.5} /> },
    { title: "Customer Service Executive", location: "Las Vegas, NV", type: "Full Time", icon: <Headset size={22} className="text-[#1FA463]" strokeWidth={1.5} /> },
];

export default function CareerContent() {
    return (
        <section className="pt-8 pb-14 md:pt-10 md:pb-16 bg-white">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center mb-5"
                    >
                        <span className="text-[#1FA463] font-bold text-[14px] tracking-widest uppercase mb-2">
                            JOIN OUR TEAM
                        </span>
                        <div className="w-[40px] h-[2px] bg-[#1FA463]"></div>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#222222] text-[32px] md:text-[44px] font-semibold leading-[1.2] mb-6"
                    >
                        Build Your Career with <span className="text-[#1FA463]">CleanPro</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#666666] text-[16px] md:text-[17px] leading-[1.8] max-w-2xl mx-auto"
                    >
                        We are always looking for dedicated, passionate, and hardworking individuals 
                        to join our growing team and help us create cleaner, healthier spaces.
                    </motion.p>
                </div>

                {/* Benefits Row 1 */}
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20 mb-28">
                    {[
                        { 
                            icon: (
                                <div className="relative flex items-center justify-center w-[32px] h-[32px]">
                                    <Users size={28} className="text-[#1FA463]" strokeWidth={1.5} />
                                    <div className="absolute -top-1 -right-1 bg-[#EAF5EB] rounded-full p-[2px]">
                                        <Heart size={10} className="text-[#1FA463]" fill="#1FA463" strokeWidth={0} />
                                    </div>
                                </div>
                            ), 
                            title: "Great Work\nEnvironment" 
                        },
                        { 
                            icon: (
                                <div className="relative flex items-center justify-center w-[32px] h-[32px]">
                                    <Target size={28} className="text-[#1FA463]" strokeWidth={1.5} />
                                    <div className="absolute top-0 right-0 bg-[#EAF5EB] rounded-full p-[1px]">
                                        <ArrowUpRight size={14} className="text-[#1FA463]" strokeWidth={2.5} />
                                    </div>
                                </div>
                            ), 
                            title: "Growth & Career\nOpportunities" 
                        },
                        { 
                            icon: (
                                <div className="relative flex items-center justify-center w-[32px] h-[32px]">
                                    <CircleDollarSign size={28} className="text-[#1FA463]" strokeWidth={1.5} />
                                    <div className="absolute bottom-0 right-0 bg-[#EAF5EB] rounded-full p-[1px]">
                                        <TrendingUp size={14} className="text-[#1FA463]" strokeWidth={2.5} />
                                    </div>
                                </div>
                            ), 
                            title: "Competitive\nSalary" 
                        },
                        { 
                            icon: (
                                <div className="relative flex items-center justify-center w-[32px] h-[32px]">
                                    <User size={28} className="text-[#1FA463]" strokeWidth={1.5} />
                                    <div className="absolute bottom-0 right-0 bg-[#EAF5EB] rounded-full">
                                        <Shield size={14} className="text-[#1FA463]" strokeWidth={1.5} fill="#EAF5EB" />
                                    </div>
                                </div>
                            ), 
                            title: "Training & Skill\nDevelopment" 
                        },
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 bg-white group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="w-[60px] h-[60px] rounded-full bg-[#EAF5EB] flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                                {item.icon}
                            </div>
                            <h4 className="text-[#333333] text-[16px] font-extrabold leading-tight whitespace-pre-line text-left">
                                {item.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                {/* Main Content: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-24 max-w-[1100px] mx-auto">
                    
                    {/* Left Col: Current Openings */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-[#222222] text-[26px] font-extrabold mb-2">Current Openings</h3>
                            <p className="text-[#666666] text-[15px] mb-6">Find the right opportunity and grow your career with us.</p>
                            
                            <div className="space-y-2.5">
                                {jobOpenings.map((job, idx) => (
                                    <div key={idx} className="border border-[#EAEAEA] rounded-md py-2.5 px-4 flex items-center justify-between hover:border-[#1FA463] hover:shadow-sm transition-all duration-300 cursor-pointer group bg-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[38px] h-[38px] rounded-lg bg-[#EAF5EB] flex items-center justify-center shrink-0">
                                                {job.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-[#222222] text-[14px] font-bold mb-0.5 group-hover:text-[#1FA463] transition-colors">{job.title}</h4>
                                                <div className="flex items-center gap-1 text-[#666666] text-[11px]">
                                                    <MapPin size={12} className="text-[#1FA463]" strokeWidth={2} />
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#EAF5EB] text-[#1FA463]">
                                                {job.type}
                                            </span>
                                            <ChevronRight size={16} className="text-[#1FA463]" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-3 border-2 border-[#1FA463] text-[#1FA463] bg-white hover:bg-[#1FA463] hover:text-white px-4 py-1.5 rounded-md font-bold transition-colors text-[12px]">
                                View All Openings
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Col: Application Form */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-[#EAEAEA] shadow-[0_5px_30px_rgba(0,0,0,0.02)] rounded-xl p-4 lg:p-5"
                        >
                            <h3 className="text-[#222222] text-[22px] font-extrabold mb-1">Apply for a Position</h3>
                            <p className="text-[#666666] mb-4 text-[13px]">Fill out the form below and our HR team will get back to you.</p>
                            
                            <form className="space-y-2.5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#333333] mb-1">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter your full name" className="w-full h-[36px] px-3 rounded-md border border-[#EAEAEA] focus:outline-none focus:border-[#1FA463] bg-white text-[12px] text-[#666666] placeholder:text-[#999999]" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#333333] mb-1">Email Address <span className="text-red-500">*</span></label>
                                        <input type="email" placeholder="Enter your email" className="w-full h-[36px] px-3 rounded-md border border-[#EAEAEA] focus:outline-none focus:border-[#1FA463] bg-white text-[12px] text-[#666666] placeholder:text-[#999999]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#333333] mb-1">Phone Number <span className="text-red-500">*</span></label>
                                        <input type="tel" placeholder="Enter your phone number" onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }} className="w-full h-[36px] px-3 rounded-md border border-[#EAEAEA] focus:outline-none focus:border-[#1FA463] bg-white text-[12px] text-[#666666] placeholder:text-[#999999]" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-[#333333] mb-1">Position Applying For <span className="text-red-500">*</span></label>
                                        <select className="w-full h-[36px] px-3 rounded-md border border-[#EAEAEA] focus:outline-none focus:border-[#1FA463] bg-white text-[12px] text-[#666666]">
                                            <option>Select Position</option>
                                            <option>Housekeeping Staff</option>
                                            <option>Cleaning Supervisor</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[11px] font-bold text-[#333333] mb-1">Experience <span className="text-red-500">*</span></label>
                                    <select className="w-full h-[36px] px-3 rounded-md border border-[#EAEAEA] focus:outline-none focus:border-[#1FA463] bg-white text-[12px] text-[#666666]">
                                        <option>Select Experience</option>
                                        <option>0-1 Years</option>
                                        <option>1-3 Years</option>
                                        <option>3+ Years</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-[#333333] mb-1">Upload Resume <span className="text-red-500">*</span></label>
                                    <div className="w-full h-[36px] px-2 rounded-md border border-[#EAEAEA] bg-white flex items-center gap-2 overflow-hidden">
                                        <button type="button" className="bg-[#F5F5F5] text-[#333333] px-2.5 py-1 text-[11px] font-bold rounded border border-[#DDDDDD] hover:bg-gray-200 transition-colors">Choose File</button>
                                        <span className="text-[#666666] text-[11px]">No file chosen</span>
                                    </div>
                                    <p className="text-[10px] text-[#888888] mt-1 font-medium">PDF, DOC, DOCX (Max. 5MB)</p>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-[#333333] mb-1">Additional Message</label>
                                    <textarea placeholder="Write your message here..." rows={3} className="w-full py-2 px-3 rounded-md border border-[#EAEAEA] focus:outline-none focus:border-[#1FA463] bg-white text-[12px] text-[#666666] placeholder:text-[#999999] resize-none"></textarea>
                                </div>

                                <button type="button" className="w-full bg-[#1FA463] hover:bg-[#18804d] text-white py-2 rounded-md font-extrabold transition-colors text-[12px]">
                                    Submit Application
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>

                {/* Why Work With Us - Premium Theme Bento Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#1FA463] rounded-3xl p-10 lg:p-16 max-w-[1200px] mx-auto overflow-hidden shadow-2xl"
                >
                    {/* Abstract glowing background blobs */}
                    <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-white rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-white rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center mb-14 text-center">
                        <h3 className="text-white text-[32px] md:text-[38px] font-extrabold mb-5 tracking-tight">Why Work With Us?</h3>
                        <div className="w-[50px] h-[4px] bg-white/50 rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                        {/* Top Row: 3 Items */}
                        {[
                            { icon: <Users size={28} className="text-white" />, title: "Supportive Team", desc: "Join a family of passionate professionals who help each other thrive.", span: "lg:col-span-4" },
                            { icon: <AlarmClock size={28} className="text-white" />, title: "Work-Life Balance", desc: "Flexible schedules designed to keep you refreshed and energized.", span: "lg:col-span-4" },
                            { icon: <ShieldCheck size={28} className="text-white" />, title: "Safe & Healthy", desc: "We prioritize your physical and mental well-being above all else.", span: "lg:col-span-4" },
                        ].map((item, i) => (
                            <div key={i} className={`group ${item.span} bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-start`}>
                                <div className="w-[60px] h-[60px] rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-white text-[18px] font-bold mb-3">{item.title}</h4>
                                <p className="text-white/80 text-[14px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}

                        {/* Bottom Row: 2 Items */}
                        {[
                            { icon: <Award size={32} className="text-white" />, title: "Recognition & Rewards", desc: "Your hard work never goes unnoticed. Enjoy competitive bonuses and regular milestone celebrations.", span: "lg:col-span-6" },
                            { icon: <HeartHandshake size={32} className="text-white" />, title: "Make a Positive Impact", desc: "Be part of a company that gives back to the community and champions sustainable practices.", span: "lg:col-span-6" },
                        ].map((item, i) => (
                            <div key={i} className={`group ${item.span} bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-start md:items-center gap-6`}>
                                <div className="w-[70px] h-[70px] rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-white text-[20px] font-bold mb-3">{item.title}</h4>
                                    <p className="text-white/80 text-[15px] leading-relaxed max-w-[400px]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
