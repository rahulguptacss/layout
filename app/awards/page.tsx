"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import AwardsSection from '../components/awardssection/page';
import AchievementSection from '../components/achievementsection/page';
import CalculateCTA from '../components/calculatecta/page';

export default function AwardsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Awards" breadcrumb="Awards" />
            
            <AwardsSection />
            <AchievementSection />
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
