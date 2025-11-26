import React from "react";
import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-slate-50 dark:bg-slate-950"
    >
      {/* Particle Animation */}
      <ParticlesBackground />

      {/* Bottom Gradient for Separation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent dark:from-slate-900 pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-indigo-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <img
                src="https://avatars.githubusercontent.com/u/10277908?v=3"
                alt="Shameer S N"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-900 shadow-xl object-cover"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full z-10"></div>
            </div>
          </div>

          <div className="inline-block mb-6 animate-fade-in delay-100">
            <div className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white animate-fade-in-up">
            Architecting <span className="text-primary">Scalable</span> <br />
            Digital Solutions
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 text-balance">
            Senior Technology Architect specializing in building high-performance enterprise applications and leading engineering teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900">
              <a href="#contact" className="flex items-center gap-2">
                Contact Me
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in-up delay-500">
            <a
              href="https://github.com/shameersn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shameersn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shameersalnaz@gmail.com"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce delay-1000">
        <a href="#about" className="text-slate-400 hover:text-primary transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
