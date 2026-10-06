import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProjectsSection from "@/components/ProjectsSection";
import DSASection from "@/components/DSASection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProjectsSection />
      <DSASection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
