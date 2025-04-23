import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <Avatar className="h-40 w-40 mb-6">
            <AvatarImage src="/profile.jfif" alt="Lucien Lu" />
            <AvatarFallback>LL</AvatarFallback>
          </Avatar>

          <h3 className="text-2xl font-semibold mb-4">Lucien Lu</h3>
          <p className="text-muted-foreground mb-6">
            Full Stack Developer with 4+ years of experience building web
            applications.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Sydney, Australia</p>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">lucienlu2000@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium">Availability</h4>
              <p className="text-muted-foreground">Full-time</p>
            </div>
            <div>
              <h4 className="font-medium">Experience</h4>
              <p className="text-muted-foreground">4+ Years</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. I specialize in React, TypeScript,
              Node.js and Java Spring with a strong focus on creating
              maintainable and extensible code.
            </p>
            <p className="text-muted-foreground mb-4">
              With the latest breakthroughs in machine learning, I've mastered
              leveraging coding assistants such as CoPilot, Claude and Cline to
              their fullest potential in helping me deliver value at an
              extremely fast rate whilst being cautious by adjusting AI-assisted
              code with my own expertise in order to prevent any potential bugs
              or vulnerabilities being introduced to the software.
            </p>
            <p className="text-muted-foreground mb-4">
              My approach combines technical excellence with a deep
              understanding of fundamental system/software design concepts and
              patterns. I believe in writing clean, maintainable code and
              staying up-to-date with the latest industry trends not only makes
              the code easier for developers but also reduces the chances of
              unfixable bugs and large-scale refactors.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
