import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { translations } from "@/data/translation";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/logo.png"; // adjust the path

interface HeaderProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : isMenuOpen
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="NEXTERA Energies" className="h-15 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 
          `}
          >
            <button
              onClick={() => scrollToSection("company")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } text-foreground hover:text-secondary transition-colors font-bold cursor-pointer`}
            >
              {t.nav.company}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } text-foreground hover:text-secondary transition-colors font-bold cursor-pointer`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("why-solar")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } text-foreground hover:text-secondary transition-colors font-bold cursor-pointer`}
            >
              {t.nav.whySolar}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } text-foreground hover:text-secondary transition-colors font-bold cursor-pointer`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
            />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("company")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                {t.nav.company}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("why-solar")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                {t.nav.whySolar}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
