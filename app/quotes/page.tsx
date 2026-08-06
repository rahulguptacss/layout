import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import QuotesContent from '../components/quotescontent/page';
import AchievementSection from '../components/achievementsection/page';
import CalculateCTA from '../components/calculatecta/page';

export default function QuotesPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Get A Quotes" breadcrumb="Get A Quotes" />
            <QuotesContent />
            <AchievementSection />
            <CalculateCTA />
            <Footer />
        </main>
    );
}
