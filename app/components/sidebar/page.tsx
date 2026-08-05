"use client";
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="space-y-8">
            {/* Search Widget - No white background wrapper */}
            <div>
                <h4 className="text-[#0D2235] text-[18px] font-bold mb-4">Search</h4>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search In blog"
                        className="w-full bg-white shadow-sm py-3.5 px-4 pr-12 text-[14px] text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1FA463] transition-colors placeholder:text-gray-400"
                    />
                    <button className="absolute right-0 top-0 bottom-0 px-4 text-[#0D2235] hover:text-[#1FA463] transition-colors flex items-center justify-center">
                        <Search size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white shadow-sm p-7">
                <h4 className="text-[#0D2235] text-[18px] font-bold mb-6">Categories</h4>
                <ul className="space-y-4">
                    {["House Cleaning", "Disinfection Services", "Floor Cleaning", "Deep Cleaning", "Kitchen Cleaning"].map((cat, i) => (
                        <li key={i}>
                            <a href="#" className="flex items-center justify-between group transition-colors">
                                <span className="text-[#0D2235] text-[15px] group-hover:text-[#1FA463] transition-colors">{cat}</span>
                                <ChevronRight className="text-[#0D2235] group-hover:text-[#1FA463] transition-colors" size={16} strokeWidth={2} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Related Post Widget */}
            <div className="bg-white shadow-sm p-7">
                <h4 className="text-[#0D2235] text-[18px] font-bold mb-6">Related Post</h4>
                <div className="space-y-5">
                    {[
                        { title: "Disinfection Service", date: "30 August", img: "/services/service-1.png" },
                        { title: "Window Cleaning", date: "1 July", img: "/services/service-2.png" },
                        { title: "Flor Cleaning", date: "18 Dec", img: "/services/service-3.png" },
                    ].map((post, i) => (
                        <a href="#" key={i} className="flex items-center gap-4 group">
                            <div className="w-[70px] h-[70px] bg-gray-200 overflow-hidden shrink-0">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div>
                                <span className="text-gray-500 text-[12px] mb-1 block">{post.date}</span>
                                <h5 className="text-[#0D2235] text-[14px] font-bold group-hover:text-[#1FA463] transition-colors leading-[1.4]">
                                    {post.title}
                                </h5>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
