"use client";

import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import PageBanner from '../components/pagebanner/page';
import CalculateCTASection from '../components/calculatecta/page';
import ContactContent from '../components/contactcontent/page';

export default function ContactUs() {
    return (
        <main className="bg-[#fcfdfd]">
            <Header />
            
            <PageBanner 
                title="Contact Us"
                breadcrumb="Contact Us"
            />

            <ContactContent />

            <CalculateCTASection />

            <Footer />
        </main>
    );
}
