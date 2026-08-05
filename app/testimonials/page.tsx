"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import TestimonialGrid from '../components/testimonialgrid/page';
import PartnersSection from '../components/partnerssection/page';
import CalculateCTA from '../components/calculatecta/page';

export default function TestimonialPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Testimonial" breadcrumb="Testimonial" />
            
            <TestimonialGrid />
            <PartnersSection />
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
