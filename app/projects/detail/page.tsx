"use client";

import React from 'react';
import Header from '../../components/header/page';
import Footer from '../../components/footer/page';
import PageBanner from '../../components/pagebanner/page';
import Sidebar from '../../components/sidebar/page';
import CalculateCTA from '../../components/calculatecta/page';
import Image from 'next/image';

export default function ProjectDetail() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Project Details" breadcrumb="Project Details" />

            <section className="py-20 bg-[#F8F9FA]">
                <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Main Content */}
                        <div className="lg:w-[68%]">
                            <div className="mb-8">
                                <img
                                    src="/services/service-1.png" // Placeholder
                                    alt="Kitchen Cleaning"
                                    className="w-full h-[350px] md:h-[450px] object-cover rounded-sm"
                                />
                            </div>

                            <h2 className="text-[#0D2235] text-[28px] md:text-[32px] font-bold mb-4">Kitchen Cleaning</h2>
                            <p className="text-[#6B7280] text-[15px] leading-[1.8] mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <h2 className="text-[#0D2235] text-[28px] md:text-[32px] font-bold mb-4">Disinfection Activities</h2>
                            <p className="text-[#6B7280] text-[15px] leading-[1.8] mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className="text-[#6B7280] text-[15px] leading-[1.8] mb-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                            </p>

                            {/* Inner Images Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <img src="/services/service-2.png" alt="Disinfection 1" className="w-full h-[220px] object-cover rounded-sm" />
                                <img src="/services/service-3.png" alt="Disinfection 2" className="w-full h-[220px] object-cover rounded-sm" />
                            </div>

                            <h2 className="text-[#0D2235] text-[24px] md:text-[28px] font-bold mb-4 leading-snug">
                                Office & Home Disinfecting By Using Bacteria Prevent Spray
                            </h2>
                            <p className="text-[#6B7280] text-[15px] leading-[1.8] mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-[#6B7280] text-[15px] leading-[1.8]">
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-[32%]">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <CalculateCTA />
            <Footer />
        </main>
    );
}
