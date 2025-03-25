import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {showScrollToTop && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-md"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
