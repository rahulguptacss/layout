"use client";
import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default function BlogSidebar() {
    return (
        <div className="space-y-12">
            {/* Search Widget */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-[#F5F5F5] rounded-xl py-4 px-6 pr-12 text-[15px] text-[#333333] focus:outline-none focus:ring-1 focus:ring-[#00B074] transition-colors placeholder:text-[#777777]"
                />
                <button className="absolute right-0 top-0 bottom-0 px-5 text-[#00B074] hover:text-[#054C34] transition-colors flex items-center justify-center">
                    <Search size={18} strokeWidth={2} />
                </button>
            </div>

            {/* Recent News Widget */}
            <div>
                <h4 className="text-[#024933] text-[24px] font-bold mb-1">Recent News</h4>
                <div className="w-[45px] h-[2px] bg-[#00A562] mb-8"></div>
                
                <div className="space-y-6">
                    {[
                        { 
                            title: "Businesses Are Thriving Societies Are Not.", 
                            date: "January 15, 2021", 
                            img: "/news/1.jpg" 
                        },
                        { 
                            title: "The Importance of Instagram Metrics and", 
                            date: "January 15, 2021", 
                            img: "/news/2.jpg" 
                        },
                        { 
                            title: "TikTok Influencer Marketing: How to Work", 
                            date: "January 15, 2021", 
                            img: "/news/3.jpg" 
                        },
                    ].map((post, i) => (
                        <a href="#" key={i} className="flex items-start gap-4 group">
                            <div className="w-[65px] h-[65px] bg-gray-200 overflow-hidden shrink-0 rounded-md">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div className="flex-1 pt-1">
                                <h5 className="text-[#00A562] text-[16px] font-bold leading-[1.3] mb-1.5 group-hover:text-[#024933] transition-colors">
                                    {post.title}
                                </h5>
                                <span className="text-[#055C41] text-[13px] block">
                                    {post.date}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
