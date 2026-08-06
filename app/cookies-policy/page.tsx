import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import CookiesContent from '../components/cookiescontent/page';

export default function CookiesPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Cookies Policy" breadcrumb="Home / Cookies Policy" />
            
            {/* Main Content */}
            <CookiesContent />

            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
