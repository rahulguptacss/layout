import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import TermsContent from '../components/termscontent/page';

export default function TermsConditionsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Terms & Conditions" breadcrumb="Home / Terms & Conditions" />
            
            {/* Main Content */}
            <TermsContent />

            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
