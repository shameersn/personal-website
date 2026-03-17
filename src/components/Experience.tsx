import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";
import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Impact-focused — decisions, challenges, and outcomes
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {experience.map((exp, index) => (
              <div key={index} className="relative mb-10 animate-fade-in-up">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-muted hidden md:block" />
                <Card className="ml-0 md:ml-20 p-6 md:p-8 border border-border bg-card hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                        <Building size={18} />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {exp.summary}
                    </p>
                    <ul className="space-y-2">
                      {exp.impact.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
