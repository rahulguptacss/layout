"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import FaqAccordion from '../components/faqaccordion/page';
import CalculateCTA from '../components/calculatecta/page';

export default function FaqsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Faqs" breadcrumb="Faqs" />
            
            <FaqAccordion />
            
            <CalculateCTA />
            <Footer />
        </main>
    );
}
