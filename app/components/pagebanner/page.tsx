import React from 'react';
import Link from 'next/link';

interface PageBannerProps {
    title: string;
    breadcrumb: string;
}

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
    return (
        <section 
            className="relative h-[250px] lg:h-[300px] flex items-center justify-center bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: "url('/pagebanner/banner.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-[#0B4C34]/85"></div>
            
            <div className="relative z-10 text-center px-5">
                <h1 className="text-white text-4xl lg:text-[45px] font-extrabold mb-4">{title}</h1>
                <p className="text-white/90 text-[15px] font-medium flex items-center justify-center gap-2">
                    <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-green-400">{breadcrumb}</span>
                </p>
            </div>
        </section>
    );
}
