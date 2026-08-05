import React from 'react'
import Header from '../../components/header/page'
import Footer from '../../components/footer/page'
import PageBanner from '../../components/pagebanner/page'
import { Search, ChevronRight, FileText, CheckCircle2, Download } from 'lucide-react'

export default function ServiceDetail() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Service Details" breadcrumb="Service Details" />

            <section className="py-20 bg-white">
                <div className="max-w-[1320px] mx-auto px-5 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                                    alt="Plumbing Services"
                                    className="w-full h-[350px] md:h-[450px] object-cover rounded-md"
                                />
                            </div>

                            <h2 className="text-[#0D2235] text-3xl md:text-[36px] font-bold mb-5">Plumbing Services</h2>
                            <p className="text-[#6B7280] leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className="text-[#6B7280] leading-relaxed mb-10">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>

                            {/* Inner Images Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" alt="Detail 1" className="w-full h-[180px] object-cover rounded-md" />
                                <img src="https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=800&auto=format&fit=crop" alt="Detail 2" className="w-full h-[180px] object-cover rounded-md" />
                                <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=800&auto=format&fit=crop" alt="Detail 3" className="w-full h-[180px] object-cover rounded-md" />
                            </div>

                            <h3 className="text-[#0D2235] text-2xl font-bold mb-5">Service Overview</h3>
                            <ul className="space-y-4 mb-10">
                                {["High quality services with professional tools and equipments.", "Expert team ready to help you anywhere anytime.", "100% satisfaction guarantee with our standard cleaning process."].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#078B55] shrink-0 mt-1" size={20} />
                                        <span className="text-[#6B7280]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-[#0D2235] text-2xl font-bold mb-5">We give the Best Services</h3>
                            <p className="text-[#6B7280] leading-relaxed mb-10">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                            </p>

                            <h3 className="text-[#0D2235] text-2xl font-bold mb-5">Have you Any Question?</h3>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3 space-y-8">

                            {/* Search Widget */}
                            <div className="bg-[#F8F9FA] p-8 rounded-md">
                                <h4 className="text-[#0D2235] text-xl font-bold mb-6">Search Here</h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full bg-white border border-gray-200 py-3 px-4 pr-12 rounded-sm focus:outline-none focus:border-[#078B55] transition-colors"
                                    />
                                    <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#078B55] text-white rounded-r-sm hover:bg-[#067246] transition-colors">
                                        <Search size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Categories Widget */}
                            <div className="bg-[#F8F9FA] p-8 rounded-md">
                                <h4 className="text-[#0D2235] text-xl font-bold mb-6">Service Categories</h4>
                                <ul className="space-y-3">
                                    {["Home Cleaning", "Indoor Cleaning", "Window Cleaning", "House Cleaning", "Commercial Cleaning", "Factory Cleaning", "Room Cleaning"].map((cat, i) => (
                                        <li key={i}>
                                            <a href="#" className="flex items-center justify-between bg-white px-5 py-3.5 rounded-sm group hover:bg-[#078B55] transition-colors border border-gray-100 shadow-sm">
                                                <span className="text-[#6B7280] font-medium group-hover:text-white transition-colors">{cat}</span>
                                                <ChevronRight className="text-[#078B55] group-hover:text-white transition-colors" size={18} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Download Brochures Widget */}
                            <div className="bg-[#F8F9FA] p-8 rounded-md">
                                <h4 className="text-[#0D2235] text-xl font-bold mb-6">Download Brochures</h4>
                                <div className="space-y-4">
                                    <a href="#" className="flex items-center justify-between bg-white px-5 py-4 rounded-sm hover:border-[#078B55] border border-gray-100 transition-colors shadow-sm group">
                                        <div className="flex items-center gap-3">
                                            <FileText className="text-[#078B55]" size={24} />
                                            <span className="text-[#0D2235] font-semibold group-hover:text-[#078B55] transition-colors">Company Brochure</span>
                                        </div>
                                        <Download className="text-gray-400 group-hover:text-[#078B55] transition-colors" size={20} />
                                    </a>
                                    <a href="#" className="flex items-center justify-between bg-white px-5 py-4 rounded-sm hover:border-[#078B55] border border-gray-100 transition-colors shadow-sm group">
                                        <div className="flex items-center gap-3">
                                            <FileText className="text-[#078B55]" size={24} />
                                            <span className="text-[#0D2235] font-semibold group-hover:text-[#078B55] transition-colors">Service Details</span>
                                        </div>
                                        <Download className="text-gray-400 group-hover:text-[#078B55] transition-colors" size={20} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
