import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SurveySection from "@/components/SurveySection";
import ResultsSection from "@/components/ResultsSection";
import EducationSection from "@/components/EducationSection";
import AnalysisSection from "@/components/AnalysisSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSurveyClick = () => {
    scrollToSection("survey");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-16">
        <section id="home">
          <HeroSection onSurveyClick={handleSurveyClick} />
        </section>
        
        <section id="survey">
          <SurveySection />
        </section>
        
        <section id="results">
          <ResultsSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="analysis">
          <AnalysisSection />
        </section>
      </div>
    </div>
  );
};

export default Index;
