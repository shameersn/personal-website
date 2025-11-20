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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-slate-900 dark:to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent dark:from-blue-950/10"></div>

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

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-white dark:to-slate-100 bg-clip-text text-transparent tracking-tight">
              Shameer S N
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
              Technology Architect & Full Stack Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Technology Architect specializing in designing and implementing
            scalable enterprise solutions. Proven expertise in full-stack
            development, cloud architecture, and leading high-performing
            engineering teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg">
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
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shameersn/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin
                size={24}
                className="text-gray-600 dark:text-gray-400"
              />
            </a>
            <a
              href="mailto:shameersalnaz@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-gray-600 dark:text-gray-400" />
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block">
              <ArrowDown
                size={32}
                className="text-gray-400 dark:text-gray-500"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
