"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import NewsSection from '../components/newssection/page';
import CalculateCTA from '../components/calculatecta/page';

export default function BlogPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Blogs" breadcrumb="Blogs" />
            
            {/* The NewsSection displays 6 items by default, which is perfect for the Blog page */}
            <NewsSection />
            
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
