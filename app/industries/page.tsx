"use client";

import React from 'react'
import Header from '../components/header/page'
import Footer from '../components/footer/page'
import PageBanner from '../components/pagebanner/page'
import CalculateCTA from '../components/calculatecta/page'
import IndustriesContent from '../components/industriescontent/page'

export default function IndustriesWeServePage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Industries We Serve" breadcrumb="Industries We Serve" />
            <IndustriesContent />
            <CalculateCTA />
            <Footer />
        </main>
    )
}
