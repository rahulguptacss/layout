import React from 'react';
import Header from '@/app/components/header/page';
import PageBanner from '@/app/components/pagebanner/page';
import TeamMemberProfile from '@/app/components/teammemberprofile/page';
import TeamMemberSkills from '@/app/components/teammemberskills/page';
import CalculateCTASection from '@/app/components/calculatecta/page';
import Footer from '@/app/components/footer/page';

export default function TeamDetailPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner title="Team Details" breadcrumb="Team Details" />
            
            <div className="flex-grow bg-[#F3F7F5]">
                <TeamMemberProfile />
                <TeamMemberSkills />
            </div>

            <CalculateCTASection />
            <Footer />
        </main>
    );
}
