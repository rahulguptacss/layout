"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import PricingSection from '../components/pricingsection/page';
import FeedbackSection from '../components/feedbacksection/page';
import CalculateCTA from '../components/calculatecta/page';

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Pricing" breadcrumb="Pricing" />
            
            <PricingSection />
            <FeedbackSection />
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
