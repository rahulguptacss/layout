import React from 'react';
import { notFound } from 'next/navigation';
import PageBanner from '@/app/components/pagebanner/page';
import JobDetailContent from '@/app/components/jobdetailcontent/page';
import Header from '@/app/components/header/page';
import Footer from '@/app/components/footer/page';
import CalculateCTASection from '@/app/components/calculatecta/page';
import siteData from "@/src/data/data.json";

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { career } = siteData;
    const resolvedParams = await params;
    
    // Find the specific job by slug
    const job = career.jobs.find(j => j.slug === resolvedParams.slug);
    
    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <PageBanner 
                title={job.title} 
                breadcrumb={`Home / Career / ${job.title}`} 
            />
            
            <JobDetailContent job={job} allJobs={career.jobs} />

            <CalculateCTASection />
            <Footer />
        </main>
    );
}
