import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Code,
  Users,
  Lightbulb,
  Award,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { profileData } from "@/data/profile";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <Code className="text-blue-600 dark:text-blue-400" size={28} />,
      title: "Technical Excellence",
      description:
        "Expert in designing and implementing scalable architectures using modern technologies and best practices.",
      color:
        "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    },
    {
      icon: <Users className="text-green-600 dark:text-green-400" size={28} />,
      title: "Team Leadership",
      description:
        "Proven track record of leading cross-functional teams and mentoring developers to achieve their potential.",
      color:
        "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    },
    {
      icon: (
        <Lightbulb className="text-yellow-600 dark:text-yellow-400" size={28} />
      ),
      title: "Innovation",
      description:
        "Passionate about exploring new technologies and implementing innovative solutions to complex problems.",
      color:
        "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20",
    },
    {
      icon: (
        <Award className="text-purple-600 dark:text-purple-400" size={28} />
      ),
      title: "Results Driven",
      description:
        "Focused on delivering high-quality solutions that drive business value and exceed expectations.",
      color:
        "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {profileData.subtitle}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Text */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" size={32} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {profileData.longBio?.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="p-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <TrendingUp className="text-primary" size={32} />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {profileData.yearsOfExperience}+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 mb-8 font-medium">
                    Years of Experience
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {profileData.projectsDelivered}+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {profileData.teamMembersLed}+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Team Members Led
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-500 border-none bg-gradient-to-br ${
                  highlight.color
                } group hover:scale-105 cursor-default ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
