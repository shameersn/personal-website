import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-gray-600 dark:text-gray-400" size={24} />,
      title: "Technical Excellence",
      description:
        "Expertise in designing and implementing enterprise-grade architectures with proven scalability and performance optimization.",
    },
    {
      icon: <Users className="text-gray-600 dark:text-gray-400" size={24} />,
      title: "Leadership",
      description:
        "Demonstrated success in leading cross-functional engineering teams and developing talent through structured mentorship programs.",
    },
    {
      icon: (
        <Lightbulb className="text-gray-600 dark:text-gray-400" size={24} />
      ),
      title: "Strategic Innovation",
      description:
        "Track record of adopting emerging technologies and implementing solutions that address complex business challenges.",
    },
    {
      icon: <Award className="text-gray-600 dark:text-gray-400" size={24} />,
      title: "Business Impact",
      description:
        "Committed to delivering high-quality solutions that drive measurable business outcomes and organizational efficiency.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900">
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
                Professional Profile
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With over 13 years of progressive experience in software
                development and architecture, I have evolved from a Frontend
                Developer in 2012 to a Technology Architect leading complex
                enterprise initiatives. My career trajectory reflects a strong
                commitment to technical excellence and continuous professional
                growth.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently serving as Technology Architect at Experion
                Technologies, I lead a cross-functional team of 20 engineers in
                architecting and delivering enterprise-grade web portals and
                mobile applications. My technical expertise spans full-stack
                JavaScript development, cloud infrastructure, and modern
                software architecture patterns.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am committed to fostering technical excellence through
                mentorship, having successfully trained over 50 developers in
                modern web technologies and best practices. My focus remains on
                delivering innovative solutions that drive business value and
                operational efficiency.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <Card className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-700 shadow-xl">
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
                        50+
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
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        50+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Developers Trained
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        15+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        API Integrations
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
                className="p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
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
