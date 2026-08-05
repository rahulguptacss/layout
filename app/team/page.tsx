"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import TeamSection from '../components/teamsection/page';
import PartnersSection from '../components/partnerssection/page';
import CalculateCTA from '../components/calculatecta/page';

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Our Team" breadcrumb="Our Team" />
            
            <TeamSection />
            <PartnersSection />
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
