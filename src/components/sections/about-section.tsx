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

          <h3 className="text-2xl font-semibold mb-4">
            Lucien Lu
            <small className="ml-2 text-muted-foreground text-sm">
              Software Engineer
            </small>
          </h3>
          <p className="text-muted-foreground mb-6">
            Full Stack Developer with 4+ years of experience building web
            applications.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Melbourne, Australia</p>
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
              I am a quality-oriented Software Engineer with 4+ years of
              experience specializing in high-performance full-stack systems
              (Java/Golang, React/Angular) and robust DevOps automation. My
              focus is on tackling technical debt and maximizing engineering
              efficiency, such as halving CI pipeline times and leading
              successful code quality initiatives.
            </p>
            <p className="text-muted-foreground mb-4">
              I combine a deep knowledge of Microservices architecture (and its
              appropriate application), event-driven systems and design
              principles (SOLID/GRASP) with practical expertise in RESTful APIs,
              event buses, concurrency, and OAuth2/JWT security to drive
              measurable results in system performance, security and
              development.
            </p>
            <small className="text-muted-foreground font-semibold">
              AI Adoption
            </small>
            <p className="text-muted-foreground mb-4">
              With the latest breakthroughs in machine learning, I've fully
              adopted and leverage LLM coding assistants such as GitHub CoPilot,
              Gemini, Claude and Cursor into my workflow to help me deliver
              value at an extremely fast rate. At the same time, I tend to stay
              cautious of errorneous or incorrect AI-generated code by being
              strict with a high automation test coverage and my own expertise.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
