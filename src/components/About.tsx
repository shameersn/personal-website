import React from "react";
import { about } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {about.title}
            </h2>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-foreground font-medium mb-8">
              {about.lead}
            </p>
          </div>
          <div className="animate-fade-in-up space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
