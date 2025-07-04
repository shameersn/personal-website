import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-gray-600 dark:text-gray-400" size={24} />,
      title: "Technical Excellence",
      description:
        "Expert in designing and implementing scalable architectures using modern technologies and best practices.",
    },
    {
      icon: <Users className="text-gray-600 dark:text-gray-400" size={24} />,
      title: "Team Leadership",
      description:
        "Proven track record of leading cross-functional teams and mentoring developers to achieve their potential.",
    },
    {
      icon: (
        <Lightbulb className="text-gray-600 dark:text-gray-400" size={24} />
      ),
      title: "Innovation",
      description:
        "Passionate about exploring new technologies and implementing innovative solutions to complex problems.",
    },
    {
      icon: <Award className="text-gray-600 dark:text-gray-400" size={24} />,
      title: "Results Driven",
      description:
        "Focused on delivering high-quality solutions that drive business value and exceed expectations.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Passionate Technology Leader
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With over 13 years of experience in software development and
                architecture, I have had the privilege of working with diverse
                technologies and leading teams to deliver exceptional digital
                solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My journey spans from hands-on development to strategic
                technology leadership, focusing on building scalable systems
                that drive business growth and innovation. I believe in the
                power of clean code, solid architecture, and collaborative
                teamwork.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not architecting solutions or mentoring teams, I enjoy
                exploring emerging technologies and sharing knowledge with the
                developer community.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-none shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    13+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 mb-6">
                    Years of Experience
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        20+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects Delivered
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        20+
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700"
              >
                <div className="mb-4 flex justify-center">{highlight.icon}</div>
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
