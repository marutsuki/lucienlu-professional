import React from "react";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:contact@lucienlu.com" className="text-foreground hover:underline">
                contact@lucienlu.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <span>+61 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <span>Sydney, Australia</span>
            </div>
            
            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-3">Connect with me on social media:</div>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Work Inquiries</CardTitle>
            <CardDescription>
              I'm currently available for freelance work and full-time positions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              If you're interested in working together, please send me an email with details about your project or position.
              I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-medium">What I can help with:</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Frontend Development</li>
                <li>Full Stack Development</li>
                <li>Web Application Development</li>
                <li>UI/UX Implementation</li>
                <li>Performance Optimization</li>
                <li>Technical Consultation</li>
              </ul>
            </div>
            
            <Button size="lg" className="w-full" asChild>
              <a href="mailto:contact@lucienlu.com">
                <MailIcon className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
