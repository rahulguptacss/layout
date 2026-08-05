import Header from "./components/header/page";
import Footer from "./components/footer/page";
import AchievementSection from "./components/achievementsection/page";
import StatsSection from "./components/statsection/page";
import AboutSection from "./components/aboutsection/page";
import ServicesSection from "./components/servicessection/page";
import WorkProcess from "./components/workprocess/page";
import PartnersSection from "./components/partnerssection/page";
import ProjectSection from "./components/projectsection/page";
import FeedbackSection from "./components/feedbacksection/page";
import NewsSection from "./components/newssection/page";
import CalculateCTASection from "./components/calculatecta/page";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WorkProcess />
      <PartnersSection />
      <ProjectSection />
      <AchievementSection />
      <FeedbackSection />
      <NewsSection />
      <CalculateCTASection />
      <Footer />
    </main>
  );
}
