import React from 'react'
import Header from '../components/header/page'
import Footer from '../components/footer/page'
import PageBanner from '../components/pagebanner/page'
import ServicesSection from '../components/servicessection/page'
import FeedbackSection from '../components/feedbacksection/page'
import CalculateCTA from '../components/calculatecta/page'

function Services() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Services" breadcrumb="Services" />
            <ServicesSection />
            <FeedbackSection />
            <CalculateCTA />
            <Footer />
        </main>
    )
}

export default Services
