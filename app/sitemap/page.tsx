import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTA from '../components/calculatecta/page';
import SitemapContent from '../components/sitemapcontent/page';

export default function SitemapPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Sitemap" breadcrumb="Home / Sitemap" />
            
            {/* Main Content */}
            <SitemapContent />

            <CalculateCTA />
            
            <Footer />
        </main>
    );
}
