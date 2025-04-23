import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Lucien Lu
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Full Stack Developer
        </h2>
        <p className="text-lg max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          I build elegant, responsive, and performant web applications with
          modern technologies. Specializing in React, TypeScript, and Node.js.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button size="lg" variant="outline" onClick={scrollToAbout}>
            Learn More
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToProjects}>
            View Projects
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </Button>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10" />
    </section>
  );
}
