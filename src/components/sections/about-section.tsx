import React from "react";
import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <Avatar className="h-40 w-40 mb-6">
            <AvatarImage src="https://via.placeholder.com/150" alt="Lucien Lu" />
            <AvatarFallback>LL</AvatarFallback>
          </Avatar>
          
          <h3 className="text-2xl font-semibold mb-4">Lucien Lu</h3>
          <p className="text-muted-foreground mb-6">
            Full Stack Developer with 5+ years of experience building web applications.
          </p>
          
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Sydney, Australia</p>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">contact@lucienlu.com</p>
            </div>
            <div>
              <h4 className="font-medium">Availability</h4>
              <p className="text-muted-foreground">Full-time</p>
            </div>
            <div>
              <h4 className="font-medium">Experience</h4>
              <p className="text-muted-foreground">5+ Years</p>
            </div>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. 
              I specialize in React, TypeScript, and Node.js, with a strong focus on creating 
              performant, accessible, and user-friendly experiences.
            </p>
            <p className="text-muted-foreground mb-4">
              My approach combines technical excellence with a deep understanding of user needs. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends and best practices.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through blog posts and community events.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
