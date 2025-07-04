import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technology Architect",
      company: "Experion Technologies",
      location: "Trivandrum, Kerala, India",
      period: "2020 - Present",
      type: "Full-time",
      description:
        "Leading architecture decisions for  applications serving thousands of users. Designed and implemented microservices architecture that improved system scalability.",
      achievements: [
        "Led a team of 15+ developers across multiple projects",
        "Reduced system downtime and improved performance by 50%",
        "Implemented DevOps practices reducing deployment time",
        "Mentored 10+ junior developers into senior roles",
      ],
      technologies: [
        "AWS",
        "NodeJS",
        "NextJS",
        "ReactJS",
        "PostgreSQL",
        "Cassandra",
        "kafka",
        "MongoDB",
        "React Native",
        "Snowflake",
      ],
    },
    {
      title: "Technology Lead",
      company: "Experion Technologies",
      location: "Thiruvananthapuram, Kerala, India",
      period: "2018 - 2020",
      type: "Full-time",
      description:
        "Spearheaded the development of cloud applications and led a team of developers in building scalable solutions for  clients.",
      achievements: [
        "Architected and delivered major product releases",
        "Improved application performance on ReactJS",
        "Established coding standards and best practices",
        "Led technical interviews and team expansion",
      ],
      technologies: [
        "NodeJS",
        "Angular",
        "ExpressJS",
        "MySQL",
        "AWS",
        "Serverless",
        "Docker",
        "TypeScript",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Tilt Labs",
      location: "Thiruvananthapuram, Kerala, India",
      period: "2016 - 2017",
      type: "Full-time",
      description:
        "Developed full-stack web applications and mobile solutions for startup clients, focusing on rapid prototyping and scalable solutions.",
      achievements: [
        "Built 10+ web applications from concept to production",
        "Reduced development time through reusable components",
        "Implemented automated testing increasing code coverage to 90%",
        "Collaborated with UX/UI teams to improve user experience",
      ],
      technologies: ["PHP", "MySQL", "OpenCart", "CodeIgniter", "AngularJS"],
    },
    {
      title: "Frontend Developer",
      company: "Hash Include",
      location: "Thiruvananthapuram, Kerala, India",
      period: "2012 - 2016",
      type: "Full-time",
      description:
        "Developed and maintained software solutions, focusing on front end and user experience. Created responsive web applications and optimized performance.",
      achievements: [
        "Optimized database queries reducing response time",
        "Developed RESTful APIs serving 10K+ daily requests",
        "Developed HTML5/CSS3 applications with responsive design",
        "Started by creating web applications for IE8+ and older browsers",
      ],
      technologies: [
        "HTML5",
        "CSS5",
        "Bootstrap",
        "Material Design",
        "JavaScript",
        "jQuery",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              13+ years of progressive experience in software development and
              architecture
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-fade-in-up">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gray-600 dark:bg-gray-300 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>

                <Card className="ml-0 md:ml-20 p-8 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
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
