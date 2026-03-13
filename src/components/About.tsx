import React from "react";
import { Code, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      line: "Enterprise-grade architecture, scalability, and performance.",
    },
    {
      icon: Users,
      title: "Leadership",
      line: "Cross-functional teams, mentorship, and talent development.",
    },
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      line: "Emerging tech adoption and solutions for complex business challenges.",
    },
    {
      icon: Award,
      title: "Business Impact",
      line: "Measurable outcomes and operational efficiency.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground font-medium">
              13+ years in software development and architecture
            </p>
          </div>

          <div className="animate-fade-in-up space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I moved from Frontend Developer in 2012 to Technology Architect,
              leading enterprise initiatives. At Experion Technologies I lead
              20 engineers building web portals and mobile apps—full-stack
              JavaScript, cloud, and modern architecture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on technical excellence through mentorship (50+ developers
              trained), and on solutions that drive business value and
              efficiency.
            </p>
          </div>

          <ul className="mt-12 space-y-4 animate-fade-in-up">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex gap-4 items-start text-left"
                >
                  <span className="shrink-0 mt-0.5 text-muted-foreground">
                    <Icon size={20} />
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="text-muted-foreground">
                      {" — "}
                      {item.line}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
