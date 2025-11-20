import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technology Architect",
      company: "Experion Technologies",
      location: "Trivandrum, Kerala, India",
      period: "June 2025 - Present",
      type: "Full-time",
      description:
        "Leading enterprise-level architectural decisions and technical strategy for mission-critical applications. Focused on scalability, performance optimization, and engineering excellence across multiple product lines.",
      achievements: [
        "Provide strategic technical leadership for multiple concurrent product initiatives",
        "Design and implement cloud-native architectures leveraging AWS infrastructure",
        "Establish enterprise-wide coding standards, best practices, and development frameworks",
        "Lead technical governance through architecture reviews and senior-level mentorship",
      ],
      technologies: [
        "AWS",
        "NodeJS",
        "ReactJS",
        "React Native",
        "PostgreSQL",
        "MongoDB",
        "Kafka",
        "System Design",
      ],
    },
    {
      title: "Software Architect",
      company: "Experion Technologies",
      location: "Trivandrum, Kerala, India",
      period: "March 2023 - June 2025",
      type: "Full-time",
      description:
        "Led a 20-member engineering team in architecting and delivering a comprehensive healthcare platform modernization initiative, eliminating technical debt and establishing scalable infrastructure.",
      achievements: [
        "Successfully delivered version 2.0 encompassing 6 web portals (ReactJS) and mobile application (React Native)",
        "Re-architected and optimized NodeJS monolith serving 700+ API endpoints, significantly improving performance and maintainability",
        "Designed and implemented high-availability clusters for Cassandra, Kafka, MongoDB, and Elasticsearch",
        "Led Apache Spark migration from version 2.0 to 3.0, enhancing data processing capabilities",
        "Integrated and managed 15+ enterprise third-party services including Zoom, Stripe, Twilio, SES, OneSignal, and Avalara",
      ],
      technologies: [
        "ReactJS",
        "React Native",
        "NodeJS",
        "PostgreSQL",
        "Cassandra",
        "Kafka",
        "MongoDB",
        "Elasticsearch",
        "Apache Spark",
        "AWS",
      ],
    },
    {
      title: "Associate Software Architect",
      company: "Experion Technologies",
      location: "Trivandrum, Kerala, India",
      period: "July 2020 - March 2023",
      type: "Full-time",
      description:
        "Directed engineering team in feature development and system optimization for enterprise applications. Specialized in full-stack architecture utilizing ReactJS, React Native, NodeJS, and PostgreSQL.",
      achievements: [
        "Architected and implemented enterprise-grade notification system leveraging AWS SNS, SQS, Lambda, and SES",
        "Developed healthcare communication platform with Twilio integration supporting real-time audio/video capabilities",
        "Established and delivered comprehensive technical training program, onboarding 50+ engineers in full-stack MERN development",
        "Systematically reduced technical debt while improving application performance and maintainability",
      ],
      technologies: [
        "ReactJS",
        "React Native",
        "NodeJS",
        "PostgreSQL",
        "AWS Lambda",
        "AWS SNS",
        "AWS SQS",
        "Twilio",
        "Redis",
      ],
    },
    {
      title: "Technology Lead",
      company: "Experion Technologies",
      location: "Trivandrum, Kerala, India",
      period: "May 2019 - July 2020",
      type: "Full-time",
      description:
        "Directed the architecture and development of enterprise-grade REST APIs with comprehensive multi-tenant capabilities for educational technology platform. Led frontend development initiatives utilizing Angular framework.",
      achievements: [
        "Architected and implemented scalable REST API infrastructure supporting multi-tenant architecture",
        "Developed high-performance Angular application leveraging Material Design and Reactive Forms paradigm",
        "Implemented Redis-based caching strategy, significantly enhancing system performance",
        "Contributed to organizational growth through technical interviews and recruitment initiatives",
      ],
      technologies: [
        "NodeJS",
        "Angular",
        "MySQL",
        "Redis",
        "ExpressJS",
        "AWS",
        "TypeScript",
        "Angular Material",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Experion Technologies",
      location: "Trivandrum, Kerala, India",
      period: "January 2018 - April 2019",
      type: "Full-time",
      description:
        "Executed critical application modernization initiatives and delivered projects featuring real-time communication capabilities.",
      achievements: [
        "Successfully migrated Angular 4 application to Angular 6, achieving significant performance improvements",
        "Assumed ownership and delivered Angular 4 project featuring Tokbox integration for real-time audio/video communication",
        "Enhanced application performance and optimized user experience through systematic improvements",
        "Provided technical mentorship to junior engineers on Angular best practices and design patterns",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "NodeJS",
        "Tokbox",
        "WebRTC",
        "RxJS",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "TILTLABS",
      location: "Trivandrum, Kerala, India",
      period: "July 2016 - December 2017",
      type: "Full-time",
      description:
        "Developed full-stack solutions for data-intensive applications utilizing Angular 4, NodeJS, and MySQL. Contributed to multiple client projects across various technology stacks.",
      achievements: [
        "Developed and delivered big data applications leveraging Angular 4, NodeJS, and MySQL technologies",
        "Enhanced API performance through strategic database optimizations and caching implementations",
        "Extended AngularJS (1.X) application functionality utilizing NodeJS and Cassandra backend",
        "Delivered multiple web applications utilizing PHP, OpenCart, and CodeIgniter frameworks",
      ],
      technologies: [
        "Angular",
        "AngularJS",
        "NodeJS",
        "MySQL",
        "Cassandra",
        "PHP",
        "OpenCart",
        "CodeIgniter",
        "AWS",
      ],
    },
    {
      title: "Front End Developer",
      company: "Hash Include",
      location: "Trivandrum, Kerala, India",
      period: "March 2012 - June 2016",
      type: "Full-time",
      description:
        "Initiated professional career developing responsive web applications and static websites utilizing core web technologies.",
      achievements: [
        "Developed numerous client websites utilizing HTML5, CSS3, SASS, jQuery, and JavaScript",
        "Gained proficiency in CSS frameworks including Bootstrap, Foundation, and Materialize",
        "Developed cross-platform mobile applications leveraging jQuery Mobile framework",
        "Created interactive applications and games utilizing Facebook SDK integration",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "SASS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Foundation",
        "Materialize",
        "jQuery Mobile",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive career spanning 13+ years with progressive
              responsibilities in software engineering, architecture, and
              technical leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-fade-in-up">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gray-600 dark:bg-gray-300 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>

                <Card className="ml-0 md:ml-20 p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        <Building size={18} className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm gap-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Zap
                        size={18}
                        className="mr-2 text-gray-500 dark:text-gray-400"
                      />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="text-gray-500 dark:text-gray-400 mr-2">
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
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
