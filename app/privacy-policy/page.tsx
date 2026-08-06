import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import PrivacyContent from '../components/privacycontent/page';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Privacy Policy" breadcrumb="Home / Privacy Policy" />
            
            {/* Main Content */}
            <PrivacyContent />

            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
