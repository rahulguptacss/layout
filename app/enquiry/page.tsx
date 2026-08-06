import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import EnquiryContent from '../components/enquirycontent/page';

export default function EnquiryPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Enquiry" breadcrumb="Home / Enquiry" />
            
            {/* Main Enquiry Content */}
            <EnquiryContent />

            {/* Reusing existing component as requested */}
            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
