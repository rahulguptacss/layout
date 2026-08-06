import React from 'react'
import Header from '../components/header/page'
import Footer from '../components/footer/page'
import PageBanner from '../components/pagebanner/page'
import AboutSection from '../components/aboutsection/page'
import WorkProcess from '../components/workprocess/page'
import TeamSection from '../components/teamsection/page'
import FeedbackSection from '../components/feedbacksection/page'
import AchievementSection from '../components/achievementsection/page'
import CalculateCTA from '../components/calculatecta/page'

function About() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="About" breadcrumb="About" />
            <AboutSection />
            <WorkProcess />
            <TeamSection layout="slider" />
            <FeedbackSection />
            <AchievementSection />
            <CalculateCTA />
            <Footer />
        </main>
    )
}

export default About