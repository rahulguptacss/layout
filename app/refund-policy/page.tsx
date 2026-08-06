import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import RefundContent from '../components/refundcontent/page';

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Refund Policy" breadcrumb="Home / Refund Policy" />
            
            {/* Main Content */}
            <RefundContent />

            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
