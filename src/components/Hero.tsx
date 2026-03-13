import React from "react";
import { ArrowDown, Award, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted dark:from-background dark:via-background dark:to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/20 via-transparent to-transparent dark:from-muted/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={"https://avatars.githubusercontent.com/u/10277908?v=3"}
                  // alt={`${cert.title} Certificate`}
                  className="w-48 h-48 object-contain rounded-lg shadow-md grayscale"
                  // style={{ filter: "grayscale(1)" }}
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-muted-foreground to-foreground dark:from-foreground dark:via-foreground dark:to-foreground bg-clip-text text-transparent tracking-tight">
              Shameer S N
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Technology Architect & Full Stack Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Technology Architect specializing in designing and implementing
            scalable enterprise solutions. Proven expertise in full-stack
            development, cloud architecture, and leading high-performing
            engineering teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg transition-transform duration-150 active:scale-[0.98] hover:scale-[1.02]"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={20} />
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/shameersn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-border"
            >
              <Github size={24} className="text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/shameersn/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-border"
            >
              <Linkedin size={24} className="text-muted-foreground" />
            </a>
            <a
              href="mailto:shameersalnaz@gmail.com"
              className="p-3 rounded-full bg-card shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-border"
            >
              <Mail size={24} className="text-muted-foreground" />
            </a>
          </div>

          <div
            className="animate-scroll-hint motion-reduce:animate-none"
            aria-hidden="true"
          >
            <a href="#about" className="inline-block">
              <ArrowDown
                size={32}
                className="text-muted-foreground"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
