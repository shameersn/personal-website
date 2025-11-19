/**
 * Centralized Profile Data
 * Update this file with information from LinkedIn and other sources
 * This data is used across all components for consistency
 */

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
  label?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  companyLogo?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  level: string;
  year: string;
  description: string;
  skills: string[];
  image: string;
  verifyLink: string;
  credentialId?: string;
  expirationDate?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  type: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon?: string;
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  linkedinUrl?: string;
}

export interface Education {
  degree: string;
  field?: string;
  institution: string;
  location?: string;
  period: string;
  status?: string;
  description?: string;
}

export interface Award {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
}

export interface Language {
  name: string;
  proficiency?: string;
}

export interface ProfileData {
  // Basic Information
  name: string;
  fullName: string;
  title: string;
  subtitle?: string;
  location: string;
  email: string;
  phone?: string;
  bio: string;
  longBio?: string;
  profileImage: string;

  // Social Links
  socialLinks: SocialLink[];

  // Professional Information
  yearsOfExperience: number;
  projectsDelivered: number;
  teamMembersLed: number;

  // Sections
  experiences: Experience[];
  certifications: Certification[];
  projects: Project[];
  skillCategories: SkillCategory[];
  education?: Education[];
  awards?: Award[];
  languages?: Language[];
  testimonials?: Testimonial[];

  // SEO & Meta
  seoKeywords: string[];
  professionalSummary: string;
}

// Profile data updated from resume and LinkedIn
// LinkedIn URL: https://www.linkedin.com/in/shameersn/
export const profileData: ProfileData = {
  // Basic Information
  name: "Shameer S N",
  fullName: "Shameer S N",
  title:
    "Full Stack JavaScript Developer | React | React Native | Angular | Node.js | JavaScript | TypeScript | MySQL | MongoDB | AWS | HTML5 | CSS3 | System Design",
  subtitle: "Full Stack JavaScript Developer | Learn, Code, Teach & Mentor",
  location: "Thiruvananthapuram, Kerala, India",
  email: "shameersalnaz@gmail.com",
  phone: "+91 9061527989",

  bio: "Experienced Full Stack JavaScript Developer with strong leadership and mentoring skills. Specializing in React, React Native, Angular, Node.js, AWS, AI/ML on AWS, and Generative AI.",

  longBio: `Experienced Full Stack JavaScript Developer with strong leadership and mentoring skills.

My journey spans from frontend development to full-stack architecture, leading teams of 20+ developers and delivering scalable solutions that serve thousands of users. I specialize in JavaScript/TypeScript ecosystems, cloud architecture, and modern web technologies including React, React Native, Angular, Node.js, and AWS.

I believe in continuous learning, clean code, solid architecture, and collaborative teamwork. When I'm not architecting solutions or mentoring teams, I enjoy exploring emerging technologies, particularly AI and ML on AWS, and sharing knowledge with the developer community.`,

  profileImage: "https://avatars.githubusercontent.com/u/10277908?v=3",

  // Social Links - Update with LinkedIn profile URL and other social media
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shameersn/",
      label: "Connect on LinkedIn",
    },
    {
      platform: "GitHub",
      url: "https://github.com/shameersn",
      label: "View GitHub Profile",
    },
    {
      platform: "Email",
      url: "mailto:shameersalnaz@gmail.com",
      label: "Send Email",
    },
  ],

  // Professional Stats
  yearsOfExperience: 12,
  projectsDelivered: 20,
  teamMembersLed: 20,

  // Experience - Updated from LinkedIn with accurate dates and achievements
  experiences: [
    {
      title: "Technology Architect",
      company: "Experion Technologies",
      location: "Thiruvananthapuram, Kerala, India",
      period: "Present",
      type: "Full-time",
      companyUrl: "https://www.experionglobal.com/",
      description:
        "Leading architecture decisions and technology strategy for enterprise applications. Focused on AI/ML integration, cloud architecture, and scalable system design.",
      achievements: [
        "Leading architecture decisions for AI/ML integration on AWS",
        "Driving technology strategy for enterprise applications",
        "Mentoring teams on modern architecture patterns",
      ],
      technologies: [
        "AWS",
        "AI/ML",
        "Generative AI",
        "React",
        "React Native",
        "Node.js",
        "TypeScript",
        "System Design",
      ],
    },
    {
      title: "Software Architect",
      company: "Experion Technologies",
      location: "Thiruvananthapuram, Kerala, India",
      period: "March 2023 - March 2025",
      type: "Full-time",
      companyUrl: "https://www.experionglobal.com/",
      description:
        "Leading a 20-member team in optimizing and adding new features to an existing application. Responsible for architecture decisions, technical debt management, and infrastructure scaling.",
      achievements: [
        "Deployed 2.0 version 6 web portals in React and a React Native mobile app addressing all technical debts",
        "Optimized a Node.js monolith with more than 700+ APIs and addressed most of the technical debts",
        "Successfully clustered and deployed Cassandra, Kafka, MongoDB and Elasticsearch to enable future loads",
        "Able to support Spark migration from Version 2.0 to 3.0, used for heavy data processing and core matching logic",
        "Provided technical support and guidance for 15+ third-party service integrations like Zoom, Stripe, Twilio, SES, OnSignal, Avalara etc.",
      ],
      technologies: [
        "React",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Cassandra",
        "Kafka",
        "MongoDB",
        "Elasticsearch",
        "Spark",
        "AWS",
        "TypeScript",
      ],
    },
    {
      title: "Associate Software Architect",
      company: "Experion Technologies",
      location: "Thiruvananthapuram, Kerala, India",
      period: "July 2020 - March 2023",
      type: "Full-time",
      companyUrl: "https://www.experionglobal.com/",
      description:
        "Leading a team in optimizing and adding new features to an existing application. Doing full-stack development with React, React Native, Node.js, PostgreSQL and deploying to AWS.",
      achievements: [
        "Designed and developed a highly scalable notification architecture for a healthcare application using AWS SNS, SQS, Lambda and SES",
        "Used Node.js, React, PostgreSQL and integrated Twilio services for audio and video communications",
        "Provided training and guidance for more than 50+ new joiners in full-stack development in MERN stack",
      ],
      technologies: [
        "React",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "AWS SNS",
        "AWS SQS",
        "AWS Lambda",
        "AWS SES",
        "Twilio",
        "MERN Stack",
      ],
    },
    {
      title: "Technology Lead",
      company: "Experion Technologies",
      location: "Thiruvananthapuram, Kerala, India",
      period: "May 2019 - July 2020",
      type: "Full-time",
      companyUrl: "https://www.experionglobal.com/",
      description:
        "Designed and developed scalable REST APIs with multi-tenant support for an edutech application. Developed highly optimized and performant Angular applications.",
      achievements: [
        "Developed highly optimized and performant Angular application with Angular Material and Reactive Forms",
        "Implemented scalable REST APIs with multi-tenant support using Node.js, MySQL and Redis",
      ],
      technologies: [
        "Node.js",
        "Angular",
        "Angular Material",
        "MySQL",
        "Redis",
        "REST APIs",
        "TypeScript",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Experion Technologies",
      location: "Thiruvananthapuram, Kerala, India",
      period: "January 2018 - April 2019",
      type: "Full-time",
      companyUrl: "https://www.experionglobal.com/",
      description:
        "Successfully migrated Angular applications and completed projects with audio/video call integrations.",
      achievements: [
        "Successfully migrated an Angular 4 application to Angular 6 and improved its performance",
        "Taken over an Angular 4 project with TokBox (audio/video call) integration and successfully completed the project",
      ],
      technologies: ["Angular", "TokBox", "TypeScript", "JavaScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Tilt Labs",
      location: "Thiruvananthapuram, Kerala, India",
      period: "July 2016 - December 2017",
      type: "Full-time",
      description:
        "Full-stack developer for big data projects with Angular as frontend, Node.js and MySQL as backend. Focused on improving API performance through database optimizations and caching.",
      achievements: [
        "Improved API performance through database optimizations and caching",
        "Added new features to an existing AngularJS(1.X) application with Node.js and Cassandra",
        "Created multiple web apps and websites using PHP, OpenCart, CodeIgniter and deployed to AWS",
      ],
      technologies: [
        "Angular",
        "AngularJS",
        "Node.js",
        "MySQL",
        "Cassandra",
        "PHP",
        "OpenCart",
        "CodeIgniter",
        "AWS",
        "JavaScript",
      ],
    },
    {
      title: "Front End Developer",
      company: "Hash Include",
      location: "Thiruvananthapuram, Kerala, India",
      period: "March 2012 - June 2016",
      type: "Full-time",
      description:
        "Started career by building static websites and progressed to developing hybrid mobile applications and Facebook SDK integrations.",
      achievements: [
        "Built multiple static websites using HTML5, CSS3, SASS, jQuery and JavaScript",
        "Gained hands-on experience in CSS frameworks like Bootstrap, Foundation and Materialize",
        "Developed hybrid mobile applications using jQuery Mobile",
        "Created small games and applications using Facebook SDK",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "SASS",
        "jQuery",
        "JavaScript",
        "Bootstrap",
        "Foundation",
        "Materialize",
        "jQuery Mobile",
        "Facebook SDK",
      ],
    },
  ],

  // Certifications - Updated from LinkedIn
  certifications: [
    {
      title: "AI and ML on AWS - Foundational",
      issuer: "Amazon Web Services",
      level: "Foundational",
      year: "2025",
      description:
        "Foundational understanding of AWS AI/ML services, cloud computing concepts, and artificial intelligence implementations on AWS platform.",
      skills: [
        "AWS AI Services",
        "Machine Learning Basics",
        "Cloud Computing",
        "AI Implementation",
        "Generative AI",
      ],
      image: "/aws-ai.png",
      verifyLink:
        "https://www.credly.com/badges/239d00fa-1b4f-43b8-a3fa-5f3a922a6268/public_url",
    },
    {
      title: "Shaping up with Angular.js",
      issuer: "Code School",
      level: "Intermediate",
      year: "2016",
      description:
        "Comprehensive Angular.js framework training covering core concepts and best practices.",
      skills: ["AngularJS", "JavaScript", "Frontend Development"],
      image: "/placeholder.svg",
      verifyLink: "",
    },
    {
      title: "Learning React.js",
      issuer: "Online Course",
      level: "Intermediate",
      year: "2017",
      description:
        "Modern React.js development including hooks, components, and state management.",
      skills: ["React", "JavaScript", "Frontend Development"],
      image: "/placeholder.svg",
      verifyLink: "",
    },
    {
      title: "Advanced Express",
      issuer: "Online Course",
      level: "Advanced",
      year: "2018",
      description:
        "Advanced Express.js server-side development and API design patterns.",
      skills: ["Express.js", "Node.js", "Backend Development", "API Design"],
      image: "/placeholder.svg",
      verifyLink: "",
    },
    {
      title: "The Modern Angular Bootcamp",
      issuer: "Online Course",
      level: "Advanced",
      year: "2019",
      description:
        "Comprehensive Angular framework training covering Angular 6+ features and best practices.",
      skills: ["Angular", "TypeScript", "Frontend Development"],
      image: "/placeholder.svg",
      verifyLink: "",
    },
    {
      title: "Communicating with Charisma",
      issuer: "Professional Development",
      level: "Professional",
      year: "2020",
      description:
        "Leadership and communication skills training for technical leaders.",
      skills: ["Leadership", "Communication", "Public Speaking"],
      image: "/placeholder.svg",
      verifyLink: "",
    },
  ],

  // Awards & Honors
  awards: [
    {
      title: "Spot Award for Commitment to Excellence",
      issuer: "Experion Technologies",
      year: "2023",
      description:
        "Recognized for outstanding commitment and excellence in project delivery.",
    },
    {
      title: "Certificate of Recognition",
      issuer: "Experion Technologies",
      year: "2022",
      description:
        "Awarded for exceptional performance and contribution to team success.",
    },
    {
      title: "Award of Excellence",
      issuer: "Experion Technologies",
      year: "2021",
      description:
        "Recognized for excellence in technical leadership and innovation.",
    },
  ],

  // Languages
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Malayalam", proficiency: "Native" },
    { name: "Hindi", proficiency: "Conversational" },
    { name: "Tamil", proficiency: "Conversational" },
  ],

  // Projects - Add real projects from LinkedIn or portfolio
  projects: [
    {
      title: "Enterprise E-commerce Platform",
      description:
        "Architected and led development of a scalable e-commerce platform handling $50M+ in annual transactions. Built with microservices architecture supporting multiple vendors and complex inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Kubernetes",
      ],
      achievements: [
        "Serves 100K+ daily active users",
        "99.9% uptime achieved",
        "50M+ annual transaction volume",
      ],
      type: "Enterprise",
    },
    // Add more real projects here
  ],

  // Skills - Organized and deduplicated
  skillCategories: [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "SASS"],
    },
    {
      title: "Frontend Frameworks & Libraries",
      skills: [
        "React",
        "React Native",
        "Angular",
        "AngularJS",
        "Angular Material",
        "Reactive Forms",
        "jQuery",
        "jQuery Mobile",
        "Bootstrap",
        "Foundation",
        "Materialize",
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Multi-tenant Architecture",
        "System Design",
        "MERN Stack",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Cassandra",
        "Redis",
        "Elasticsearch",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "AI and ML on AWS",
        "Generative AI",
        "AWS SNS",
        "AWS SQS",
        "AWS Lambda",
        "AWS SES",
        "Kafka",
        "Spark",
        "Git",
      ],
    },
    {
      title: "Mobile Development",
      skills: ["React Native"],
    },
    {
      title: "Third-Party Integrations",
      skills: [
        "Zoom",
        "Stripe",
        "Twilio",
        "OnSignal",
        "Avalara",
        "TokBox",
        "Facebook SDK",
      ],
    },
    {
      title: "Other Technologies",
      skills: ["OpenCart", "CodeIgniter", "Big Data", "Data Processing"],
    },
  ],

  // Education
  education: [
    {
      degree: "B.Tech",
      field: "Computer Software Engineering",
      institution: "College of Engineering, Attingal",
      period: "2007 - 2011",
      status: "Not Completed",
      description: "Computer Software Engineering program",
    },
    {
      degree: "Full Stack Web Development Certification",
      field: "Computer Software Engineering",
      institution: "Online Certification",
      period: "2015",
      description: "Comprehensive full-stack web development certification",
    },
  ],

  // Testimonials - Add from LinkedIn recommendations
  testimonials: [
    // Example structure:
    // {
    //   name: "John Doe",
    //   role: "CTO",
    //   company: "Company Name",
    //   content: "Shameer is an exceptional architect...",
    //   linkedinUrl: "https://linkedin.com/in/johndoe",
    // },
  ],

  // SEO Keywords - Deduplicated and organized
  seoKeywords: [
    "Software Architect",
    "Technology Architect",
    "Full Stack JavaScript Developer",
    "Technology Leader",
    "React",
    "React Native",
    "Angular",
    "Node.js",
    "AWS",
    "AI/ML",
    "Generative AI",
    "PostgreSQL",
    "MongoDB",
    "Cassandra",
    "Kafka",
    "TypeScript",
    "JavaScript",
    "MERN Stack",
    "System Design",
    "Kerala",
    "India",
    "Experion Technologies",
  ],

  professionalSummary:
    "Experienced Full Stack JavaScript Developer with strong leadership and mentoring skills. Expert in React, React Native, Angular, Node.js, AWS, AI/ML on AWS, and leading teams of 20+ developers. Specializing in system design and modern web technologies.",
};

// Helper function to get current role
export const getCurrentRole = (): Experience | undefined => {
  return profileData.experiences.find(
    (exp) => exp.period.includes("Present") || exp.period === "Present"
  );
};

// Helper function to get all technologies used
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  profileData.experiences.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  profileData.projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};
