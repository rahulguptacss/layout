import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import DisclaimerContent from '../components/disclaimercontent/page';

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Disclaimer" breadcrumb="Home / Disclaimer" />
            
            {/* Main Content */}
            <DisclaimerContent />

            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
