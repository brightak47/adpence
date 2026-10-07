import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import EcosystemVisualization from "@/components/EcosystemVisualization";
import MissionSection from "@/components/MissionSection";
import AfricaGlobalVision from "@/components/AfricaGlobalVision";
import CompanyValues from "@/components/CompanyValues";
import AboutAdpence from "@/components/AboutAdpence";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05070B] text-slate-100 flex flex-col selection:bg-purple-600/30 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Dynamic Numbers / Impact Metrics */}
        <ImpactMetrics />

        {/* 3. Core Portfolio / What We're Building */}
        <ProjectPortfolio />

        {/* 4. The Adpence Ecosystem */}
        <EcosystemVisualization />

        {/* 5. Mission Section (Build. Learn. Create. Scale.) */}
        <MissionSection />

        {/* 6. Africa + Global Vision */}
        <AfricaGlobalVision />

        {/* 7. Company Values */}
        <CompanyValues />

        {/* 8. Corporate Narrative: About Adpence */}
        <AboutAdpence />

        {/* 9. Interactive Contact & Inquiries */}
        <ContactSection />

        {/* 10. Dramatic Closing Call To Action */}
        <CtaBanner />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
