import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSections";
import { CompanySection } from "../components/CompanySection";
import { ServicesSection } from "../components/ServicesSection";
import { WhySolarSection } from "../components/WhySolarSections";
import { ContactSection } from "../components/ContactSection";

const Index = () => {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <CompanySection language={language} />
      <ServicesSection language={language} />
      <WhySolarSection language={language} />
      <ContactSection language={language} />
    </div>
  );
};

export default Index;
