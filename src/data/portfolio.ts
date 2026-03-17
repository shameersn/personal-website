/**
 * Portfolio content — AI Systems Architect / Senior Backend positioning.
 * Single source of truth for copy, case studies, and experience.
 */

export const hero = {
  headline: "AI Systems Architect & Senior Backend Engineer",
  valueProposition:
    "Design and build LLM-powered systems, scalable backends, and cloud-native architectures for high-impact products.",
  bullets: [
    "13+ years designing and shipping production systems at scale",
    "End-to-end ownership: from system design to deployment and iteration",
    "LLMs, RAG, agents — applied to real workflows, not demos",
    "AWS, Node.js, distributed systems — built for reliability and growth",
  ],
  ctaPrimary: "View Work",
  ctaSecondary: "Get In Touch",
};

export const about = {
  title: "About Me",
  lead: "I solve hard problems and own outcomes.",
  paragraphs: [
    "I've spent 13+ years moving from frontend development to leading architecture and engineering teams. At Experion Technologies I lead technical strategy and 20+ engineers—designing systems that handle real load, real integrations, and real business constraints.",
    "My focus is on decisions that matter: where to invest in scale, how to reduce technical debt without blocking delivery, and how to introduce AI and automation in ways that ship and sustain. I've re-architected Node.js monoliths serving 700+ APIs, stood up high-availability clusters for Cassandra, Kafka, MongoDB, and Elasticsearch, and integrated 15+ enterprise services (Stripe, Twilio, Zoom, SES, OneSignal, Avalara) into coherent platforms.",
    "I don't just advise—I design, build, and ship. I'm looking for senior backend, AI engineer, and solution architect roles where system thinking and ownership directly drive product and business outcomes.",
  ],
};

export const skillGroups = [
  {
    id: "ai",
    title: "AI Engineering",
    subtitle: "LLMs, RAG, Agents",
    description:
      "Design and implement LLM-powered systems: RAG pipelines for knowledge retrieval, multi-agent orchestration for complex workflows, and AI automation that integrates with existing backends and data. Focus on latency, cost, and production reliability.",
    capabilities: [
      "RAG pipelines (embedding, chunking, retrieval)",
      "Multi-agent orchestration and tool use",
      "Prompt engineering and evaluation",
      "LLM integration (OpenAI, Anthropic, open-source)",
    ],
  },
  {
    id: "backend",
    title: "Backend Systems",
    subtitle: "Node.js, APIs, Microservices",
    description:
      "Build and evolve APIs and services that scale. From REST and event-driven design to multi-tenant architecture, caching, and performance optimization. Strong in Node.js/TypeScript and connecting frontends to databases and third-party systems.",
    capabilities: [
      "REST and event-driven APIs",
      "Multi-tenant and domain modeling",
      "Caching, queues, and async processing",
      "Third-party integrations and idempotency",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "AWS, Docker, Kubernetes",
    description:
      "Run systems in the cloud with clarity and control. AWS (Lambda, SNS, SQS, SES, etc.), containerization, CI/CD, and observability. Experience with data pipelines (e.g. Apache Spark) and high-availability clusters.",
    capabilities: [
      "AWS (Lambda, SNS, SQS, SES, and core services)",
      "Docker, orchestration, and CI/CD",
      "Monitoring, logging, and incident readiness",
      "Data pipelines and stream processing",
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    subtitle: "System Design, Distributed Systems",
    description:
      "Shape technical direction and tradeoffs. System design for scale and maintainability, migration from monoliths to services, and governance through reviews, standards, and mentorship. Comfortable with distributed systems and failure modes.",
    capabilities: [
      "System design and tradeoff analysis",
      "Monolith-to-microservices migration",
      "High-availability and failure handling",
      "Technical governance and mentorship",
    ],
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  tag: "AI" | "Backend" | "Architecture" | "Platform";
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  impact: string[];
  isAiHighlight?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "rag-knowledge",
    title: "RAG-Based Internal Knowledge Assistant",
    tag: "AI",
    isAiHighlight: true,
    problem:
      "Teams spent hours searching across wikis, docs, and tickets. Context for onboarding and support was scattered and outdated.",
    solution:
      "Designed and implemented a RAG pipeline: document ingestion, chunking, embedding (OpenAI/alternative), and retrieval over a vector store. Exposed via a simple API and optional chat UI so teams could query internal knowledge with cited sources.",
    architecture:
      "Async ingestion pipeline → vector DB (e.g. Pinecone/pgvector) → retrieval API with reranking and source attribution. Caching and rate limits to control cost and latency.",
    techStack: [
      "Python/Node.js",
      "OpenAI / embedding APIs",
      "Vector store (Pinecone/pgvector)",
      "LangChain or custom orchestration",
    ],
    impact: [
      "Faster answers from internal docs with source links",
      "Reduced duplicate questions and context-switching",
      "Foundation for future agent and automation use cases",
    ],
  },
  {
    id: "multi-agent-workflows",
    title: "Multi-Agent Workflow Automation",
    tag: "AI",
    isAiHighlight: true,
    problem:
      "Repetitive, multi-step workflows (e.g. triage, summarization, routing) required manual handoffs and were hard to scale.",
    solution:
      "Built an orchestration layer where specialized agents handle discrete steps (classification, extraction, summarization) with tool use and shared context. Human-in-the-loop and fallbacks for edge cases.",
    architecture:
      "Orchestrator (state machine or agent) coordinates specialist agents. Each agent has defined tools (APIs, DB, search). State persisted for audit and retries; queues for async steps.",
    techStack: [
      "LLM APIs (OpenAI/Anthropic)",
      "Node.js/Python",
      "Message queues (SQS/Kafka)",
      "Structured logging and eval",
    ],
    impact: [
      "Automated high-volume, rule-heavy steps with guardrails",
      "Clear audit trail and handoff points for humans",
      "Reusable pattern for other workflow automations",
    ],
  },
  {
    id: "healthcare-modernization",
    title: "Healthcare Platform Modernization",
    tag: "Architecture",
    problem:
      "Legacy healthcare platform with a large Node.js monolith, fragmented frontends, and growing technical debt. Needed reliability, clarity, and a path to scale.",
    solution:
      "Led architecture and delivery of v2: re-architected Node.js backend serving 700+ APIs, introduced clear service boundaries, and delivered 6 web portals (React) and a React Native app. High-availability clusters for Cassandra, Kafka, MongoDB, Elasticsearch; Apache Spark migration 2→3.",
    architecture:
      "Layered APIs and shared libraries; event-driven flows where needed. Centralized auth, multi-tenant data isolation, and consistent integration patterns for 15+ third-party services (Zoom, Stripe, Twilio, SES, OneSignal, Avalara).",
    techStack: [
      "Node.js",
      "React",
      "React Native",
      "PostgreSQL",
      "Cassandra",
      "Kafka",
      "MongoDB",
      "Elasticsearch",
      "Apache Spark",
      "AWS",
    ],
    impact: [
      "Single cohesive platform replacing fragmented legacy",
      "Improved performance and maintainability; reduced deployment risk",
      "Stable foundation for future AI and data features",
    ],
  },
  {
    id: "notification-system",
    title: "Enterprise Notification & Messaging System",
    tag: "Backend",
    problem:
      "Applications needed reliable, multi-channel notifications (email, SMS, push) and in-app messaging with clear delivery and audit requirements.",
    solution:
      "Architected and implemented a notification platform using AWS SNS, SQS, Lambda, and SES. Unified API for channels, retries, and dead-letter handling; integrated Twilio for real-time audio/video where needed.",
    architecture:
      "API layer → SQS queues → Lambda workers per channel. Idempotency and deduplication; templates and preferences; logging for compliance and debugging.",
    techStack: [
      "Node.js",
      "AWS SNS",
      "SQS",
      "Lambda",
      "SES",
      "Twilio",
      "Redis",
    ],
    impact: [
      "Centralized, auditable notification delivery across channels",
      "Reduced duplicate code and inconsistent behavior per app",
      "Easier to add new channels and rules over time",
    ],
  },
  {
    id: "ai-analytics-automation",
    title: "LLM-Powered Analytics & Automation",
    tag: "AI",
    isAiHighlight: true,
    problem:
      "Stakeholders needed quicker summaries and next-step suggestions from large volumes of operational and product data.",
    solution:
      "Designed pipelines that combine structured data with LLM summarization and suggestion generation. Secure access to data, clear prompts, and optional human review before any automated actions.",
    architecture:
      "Data access layer (APIs/warehouse) → aggregation and filtering → LLM calls with structured prompts and outputs. Caching and batching for cost; logging and eval for quality.",
    techStack: [
      "Node.js/Python",
      "LLM APIs",
      "PostgreSQL/Snowflake",
      "Redis",
      "Scheduled jobs (Lambda/cron)",
    ],
    impact: [
      "Faster insight delivery and consistent summarization",
      "Reduced manual report-building and ad-hoc analysis time",
      "Reusable pattern for other AI-assisted reporting",
    ],
  },
];

export const aiCapabilities = [
  {
    title: "LLM-Powered Systems",
    description:
      "Design and implement systems that use LLMs for reasoning, generation, and tool use—with clear boundaries, fallbacks, and cost control.",
  },
  {
    title: "RAG Pipelines",
    description:
      "End-to-end RAG: ingestion, chunking, embedding, retrieval, and reranking. Source attribution and updates as knowledge changes.",
  },
  {
    title: "Multi-Agent Orchestration",
    description:
      "Coordinate multiple agents and tools for complex workflows, with state, audit trails, and human-in-the-loop where needed.",
  },
  {
    title: "Scalable Backend Systems",
    description:
      "APIs and services built for scale, clarity, and evolution—multi-tenant, event-driven, and integration-ready.",
  },
  {
    title: "Cloud-Native Architectures",
    description:
      "Systems designed for AWS (and similar): serverless where it fits, containers where it doesn’t, with observability and resilience.",
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  impact: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Technology Architect",
    company: "Experion Technologies",
    location: "Trivandrum, Kerala, India",
    period: "June 2024 – Present",
    type: "Full-time",
    summary:
      "Own technical strategy and architecture for mission-critical products. Drive decisions on scale, AI adoption, and platform evolution while leading cross-team alignment and standards.",
    impact: [
      "Define and govern architecture across multiple product lines; align teams on patterns and tradeoffs.",
      "Design and advocate cloud-native and AI-ready architectures on AWS and existing stacks.",
      "Establish coding standards, review processes, and senior-level mentorship to raise bar and reduce risk.",
      "Guide evaluation and adoption of LLM/RAG and automation use cases for internal and product workflows.",
    ],
    technologies: [
      "AWS",
      "Node.js",
      "React",
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
    period: "March 2023 – June 2024",
    type: "Full-time",
    summary:
      "Led a 20-person engineering team through a full healthcare platform modernization: from legacy monolith and fragmented apps to a unified, scalable v2 with clear ownership and HA data stores.",
    impact: [
      "Delivered platform v2: 6 React web portals and a React Native app; single Node.js backend re-architected from monolith serving 700+ APIs.",
      "Designed and implemented HA clusters for Cassandra, Kafka, MongoDB, and Elasticsearch; led Apache Spark 2→3 migration.",
      "Integrated 15+ enterprise services (Zoom, Stripe, Twilio, SES, OneSignal, Avalara) with consistent patterns and ownership.",
      "Eliminated major technical debt and established a maintainable path for future features and AI integration.",
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
      "Apache Spark",
      "AWS",
    ],
  },
  {
    title: "Associate Software Architect",
    company: "Experion Technologies",
    location: "Trivandrum, Kerala, India",
    period: "July 2020 – March 2023",
    type: "Full-time",
    summary:
      "Drove feature development and system design for enterprise products. Owned notification and communication infrastructure and scaled engineering through training and standards.",
    impact: [
      "Architected and shipped enterprise notification system on AWS SNS, SQS, Lambda, SES—single platform for multi-channel delivery.",
      "Built healthcare communication platform with Twilio for real-time audio/video; defined APIs and reliability patterns.",
      "Created and delivered full-stack (MERN) training program; onboarded 50+ engineers with consistent practices.",
      "Reduced technical debt and improved performance and observability across owned services.",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS Lambda",
      "SNS",
      "SQS",
      "Twilio",
      "Redis",
    ],
  },
  {
    title: "Technology Lead",
    company: "Experion Technologies",
    location: "Trivandrum, Kerala, India",
    period: "May 2019 – July 2020",
    type: "Full-time",
    summary:
      "Led backend and frontend architecture for an ed-tech product: multi-tenant REST APIs and Angular applications with performance and scale in mind.",
    impact: [
      "Designed and implemented scalable multi-tenant REST API layer and data model.",
      "Shipped high-performance Angular app with Material Design and reactive forms.",
      "Introduced Redis-based caching and query optimization; measurable latency and throughput gains.",
      "Contributed to hiring and technical bar through interviews and recruitment.",
    ],
    technologies: [
      "Node.js",
      "Angular",
      "MySQL",
      "Redis",
      "Express",
      "AWS",
      "TypeScript",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Experion Technologies",
    location: "Trivandrum, Kerala, India",
    period: "January 2018 – April 2019",
    type: "Full-time",
    summary:
      "Owned critical modernization and real-time communication features. Delivered Angular upgrades and WebRTC-based collaboration with clear architecture and mentoring.",
    impact: [
      "Led Angular 4→6 migration with performance and stability improvements.",
      "Delivered project with Tokbox integration for real-time audio/video and defined patterns for future WebRTC work.",
      "Mentored engineers on Angular, TypeScript, and design patterns.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Tokbox",
      "WebRTC",
      "RxJS",
    ],
  },
];

export const ctaSection = {
  title: "Let's Build Something That Scales",
  subtitle:
    "Recruiters and hiring managers: I'm open to senior backend, AI engineer, and solution architect roles. Founders: I can help you design and ship systems that are reliable, scalable, and AI-ready.",
  ctaText: "Get In Touch",
  ctaSubtext: "I respond within 24 hours. No spam, no fluff.",
};

export const contactExpertise = [
  "AI systems (LLMs, RAG, agents) and backend architecture",
  "Scalable APIs, microservices, and cloud-native design",
  "Technical leadership and system design reviews",
  "Consulting and architecture for startups and scale-ups",
];

export const footerTagline =
  "AI Systems Architect & Senior Backend Engineer — LLMs, scalable systems, cloud-native design. Open to senior and remote opportunities.";
