"use client";

import React from 'react';
import Header from '../../components/header/page';
import Footer from '../../components/footer/page';
import PageBanner from '../../components/pagebanner/page';
import BlogSidebar from '../../components/blogsidebar/page';
import CalculateCTA from '../../components/calculatecta/page';
import { Calendar, User, MessageSquare, Quote } from 'lucide-react';

export default function BlogDetail() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Blog Detail" breadcrumb="Blog Detail" />

            <section className="py-20 bg-white">
                <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Main Content */}
                        <div className="lg:w-[68%]">
                            {/* Hero Image */}
                            <div className="mb-6 rounded-sm overflow-hidden">
                                <img
                                    src="/news/1.jpg" // Using an existing news image as placeholder
                                    alt="Blog Hero"
                                    className="w-full h-[450px] object-cover"
                                />
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-2 text-[#555555] text-[13px] font-medium">
                                    <Calendar size={14} className="text-[#555555]" />
                                    January 15, 2021
                                </div>
                                <div className="flex items-center gap-2 text-[#555555] text-[13px] font-medium">
                                    <User size={14} className="text-[#555555]" />
                                    Klenar
                                </div>
                                <div className="flex items-center gap-2 text-[#555555] text-[13px] font-medium">
                                    <MessageSquare size={14} className="text-[#555555]" />
                                    No Comments
                                </div>
                            </div>

                            {/* Main Title */}
                            <h2 className="text-[#0B4F2F] text-[28px] md:text-[30px] font-extrabold mb-6 leading-[1.25]">
                                Businesses Are Thriving, Societies Are Not. Time for Urgent Change
                            </h2>

                            <p className="text-[#555555] text-[14px] leading-[1.8] mb-10">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                            </p>

                            {/* Blockquote */}
                            <div className="bg-[#F9FAFB] p-8 md:p-10 mb-10">
                                <Quote size={32} className="text-[#1FA463] mb-6" strokeWidth={1.5} />
                                <p className="text-[#555555] text-[14px] leading-[1.8] mb-6">
                                    Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don't get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blog horse.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-[30px] h-[1.5px] bg-[#333333]"></div>
                                    <span className="text-[#333333] text-[14px]">Shane Watson</span>
                                </div>
                            </div>

                            <p className="text-[#555555] text-[14px] leading-[1.8] mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            {/* Inner Image */}
                            <div className="mb-8 overflow-hidden">
                                <img
                                    src="/news/2.jpg"
                                    alt="Inner Image"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>

                            <h3 className="text-[#0B4F2F] text-[22px] font-extrabold mb-5">
                                Klenar is the only theme you will ever need
                            </h3>

                            <p className="text-[#555555] text-[14px] leading-[1.8] mb-5">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>
                            <p className="text-[#555555] text-[14px] leading-[1.8]">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                            </p>

                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-[32%]">
                            <BlogSidebar />
                        </div>

                    </div>
                </div>
            </section>

            <CalculateCTA />
            <Footer />
        </main>
    );
}
