import Header from "./components/header/page";
import Footer from "./components/footer/page";
import StatsSection from "./components/statsection/page";
import AboutSection from "./components/aboutsection/page";
import Hero from "./components/hero/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsSection />
      <AboutSection />


      <Footer />

    </main>
  );
}
