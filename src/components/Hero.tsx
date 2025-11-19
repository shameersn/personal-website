import React, { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-radial from-gray-100/20 via-transparent to-transparent dark:from-gray-700/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image with Animation */}
          <div className="mb-8">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-2xl ring-4 ring-white dark:ring-gray-800 transition-all duration-500 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg animate-bounce">
                  <Sparkles size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Name with Gradient Animation */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-black dark:from-gray-100 dark:via-gray-300 dark:to-white bg-clip-text text-transparent transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {profileData.name}
          </h1>

          {/* Title */}
          <h2
            className={`text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {profileData.title}
          </h2>

          {/* Subtitle */}
          {profileData.subtitle && (
            <p
              className={`text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {profileData.subtitle}
            </p>
          )}

          {/* Bio */}
          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {profileData.bio}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-300 border-2 hover:border-primary"
            >
              <a href="#experience" className="flex items-center gap-2">
                View Experience
                <ArrowDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {profileData.socialLinks.map((link, index) => {
              const Icon =
                link.platform === "LinkedIn"
                  ? Linkedin
                  : link.platform === "GitHub"
                  ? Github
                  : Mail;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                  aria-label={link.label || link.platform}
                >
                  <Icon
                    size={24}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </a>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div
            className={`animate-bounce transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <a href="#about" className="inline-block group">
              <ArrowDown
                size={32}
                className="text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
