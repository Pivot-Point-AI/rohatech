export type JobOpening = {
  slug: string;
  title: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobOpenings: JobOpening[] = [
  {
    slug: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Islamabad / Remote",
    description:
      "Build and ship features across our React/Next.js front ends and Node back ends, working closely with design and product.",
    responsibilities: [
      "Design, build, and maintain scalable web applications using React/Next.js and Node.js",
      "Collaborate with designers and product managers to translate requirements into technical solutions",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and mentor junior developers",
    ],
    requirements: [
      "3+ years of experience with React, Next.js, and Node.js",
      "Strong understanding of REST APIs and databases",
      "Experience with TypeScript",
      "Good communication skills and ability to work independently",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Islamabad",
    description:
      "Own the design process from research to high-fidelity mockups, collaborating with engineers to bring designs to life.",
    responsibilities: [
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Maintain and evolve our design system",
      "Work closely with engineers to ensure pixel-perfect implementation",
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma or similar design tools",
      "A strong portfolio showcasing web and mobile design work",
      "Understanding of accessibility and responsive design principles",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    description:
      "Maintain and improve our cloud infrastructure, CI/CD pipelines, and deployment processes across client projects.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure on AWS/Azure/GCP",
      "Monitor system performance and reliability",
      "Implement security best practices across environments",
    ],
    requirements: [
      "2+ years of experience in DevOps or infrastructure roles",
      "Hands-on experience with Docker, Kubernetes, and CI/CD tools",
      "Familiarity with infrastructure as code (Terraform, etc.)",
      "Strong scripting skills (Bash, Python)",
    ],
  },
  {
    slug: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Islamabad",
    description:
      "Plan and execute campaigns across SEO, paid media, and social channels to grow our clients' online presence.",
    responsibilities: [
      "Plan and execute SEO and paid media campaigns",
      "Manage social media accounts and content calendars",
      "Analyze campaign performance and report on KPIs",
      "Collaborate with content and design teams on creative assets",
    ],
    requirements: [
      "2+ years of experience in digital marketing",
      "Experience with Google Ads, Meta Ads, and SEO tools",
      "Strong analytical and reporting skills",
      "Excellent written communication skills",
    ],
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    type: "Full-time",
    location: "Islamabad / Remote",
    description:
      "Craft responsive, accessible, and performant user interfaces using modern frontend frameworks.",
    responsibilities: [
      "Build reusable UI components with React and Tailwind CSS",
      "Optimize applications for speed and accessibility",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Write unit and integration tests for UI components",
    ],
    requirements: [
      "1+ years of experience with React or similar frameworks",
      "Strong knowledge of HTML, CSS, and JavaScript/TypeScript",
      "Experience with responsive and mobile-first design",
      "Eye for detail and design consistency",
    ],
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Design and maintain robust APIs and services that power our web and mobile applications.",
    responsibilities: [
      "Design and implement RESTful APIs and services",
      "Optimize database queries and schema design",
      "Ensure application security and data protection",
      "Collaborate with frontend teams on API contracts",
    ],
    requirements: [
      "2+ years of experience with Node.js, Python, or similar",
      "Experience with SQL and NoSQL databases",
      "Understanding of authentication and authorization patterns",
      "Familiarity with cloud deployment workflows",
    ],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    type: "Full-time",
    location: "Islamabad",
    description:
      "Ensure the quality and reliability of our products through manual and automated testing.",
    responsibilities: [
      "Design and execute test plans and test cases",
      "Build and maintain automated test suites",
      "Report and track bugs through to resolution",
      "Collaborate with developers to improve product quality",
    ],
    requirements: [
      "1+ years of experience in QA or software testing",
      "Familiarity with automated testing tools (Cypress, Playwright, etc.)",
      "Strong attention to detail",
      "Good understanding of the software development lifecycle",
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    type: "Full-time",
    location: "Islamabad / Remote",
    description:
      "Lead cross-functional teams to deliver client projects on time and within scope.",
    responsibilities: [
      "Plan, schedule, and track project deliverables",
      "Coordinate between clients, designers, and developers",
      "Identify and mitigate project risks",
      "Run stand-ups, sprint planning, and retrospectives",
    ],
    requirements: [
      "2+ years of experience managing software projects",
      "Familiarity with Agile/Scrum methodologies",
      "Excellent organizational and communication skills",
      "Experience with project management tools (Jira, Trello, etc.)",
    ],
  },
];
