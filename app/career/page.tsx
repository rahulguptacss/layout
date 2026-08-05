"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CareerContent from '../components/careercontent/page';
import CalculateCTA from '../components/calculatecta/page';

export default function CareerPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Career" breadcrumb="Career" />
            
            <CareerContent />
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
