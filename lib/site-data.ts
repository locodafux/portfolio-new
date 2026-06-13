export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const experienceItems = [
  {
    title: "Full Stack Developer",
    company: "CF Outsourcing Philippines Inc.",
    meta: "May 4, 2026 – Present",
    description: [
      "Builds and maintains full-stack web applications.",
      "Works with backend, frontend, database, and integration requirements.",
      "Focuses on clean, maintainable, business-ready systems.",
    ],
  },
  {
    title: "System Developer",
    company: "Wilcon Depot Inc.",
    meta: "Quezon City, Metro Manila • July 2024 – Present",
    description: [
      "Designed and developed systems in Omnibus based on gathered user and business requirements.",
      "Integrated enterprise data with Infor using the M3 API to support system interoperability.",
      "Designed and implemented an internal system used by users across 100+ branches to support daily operations.",
      "Developed a complex change request form within an existing system built by other team members.",
    ],
  },
  {
    title: "Web Developer",
    company: "Erovoutika Inc.",
    meta: "Makati, Metro Manila • February 2024 – May 2024",
    description: [
      "Collaborated in the development of an Attendance Management System.",
      "Collaborated in developing a Quiz Application using Android Studio with Firebase for backend services.",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science Major in Social Computing",
    company: "University of Makati",
    meta: "June 2019 – August 2024",
    description: [
      "Relevant coursework included Attendance Management System and Dog Face Emotion Recognition.",
    ],
  },
] as const;

export const techCategories = [
  {
    title: "Frontend",
    items: ["JavaScript", "HTML", "CSS", "Vue", "Buefy", "Tailwind CSS", "Inertia"],
  },
  {
    title: "Backend",
    items: ["PHP", "Laravel", "Python", "FastAPI", "Java"],
  },
  {
    title: "Databases & ERP",
    items: ["MySQL", "IBM DB2", "SQLite", "ETP", "Infor M3", "MongoDB", "Firebase"],
  },
  {
    title: "Mobile & Tools",
    items: ["React Native", "Android Studio", "Git", "GitHub Desktop", "Ngrok"],
  },
  {
    title: "Environment",
    items: ["Linux", "Ubuntu Server", "Tmux", "Neovim", "SSH"],
  },
] as const;

export const projects = [
  {
    title: "Petty Cash Replenishment",
    date: "July 2024 – January 2025",
    description:
      "A system that manages and tracks the refilling of petty cash used for small operational expenses, ensuring proper documentation, approvals, and accurate financial records.",
    features: [
      "Reconciliation and replenishment processes",
      "Bank schedule setup",
      "Cash-on-hand tracking",
      "Approval workflows with role-based and branch-based controls",
    ],
    tags: ["Vue", "Laravel", "MySQL", "IBM DB2", "Infor M3", "Buefy"],
  },
  {
    title: "Project CO Dashboard",
    date: "February 2025 – July 2025",
    description:
      "A system to track customer orders, manage purchase requests and delivery orders, and update quantities in Infor M3 after approvals.",
    features: [
      "Customer order tracking",
      "Purchase request workflow",
      "Delivery order workflow",
      "Clear order status visibility",
    ],
    tags: ["Vue", "Laravel", "MySQL", "IBM DB2", "Infor M3", "Buefy"],
  },
  {
    title: "Payment Monitoring",
    date: "November 2025 – February 2026",
    description:
      "A system that monitors multiple user requests, generates reports sent to banks and brokers, and integrates data into Infor M3.",
    features: [
      "Multi-user request monitoring",
      "Bank report generation",
      "Broker report generation",
      "Infor M3 integration",
    ],
    tags: ["Vue", "Laravel", "MySQL", "IBM DB2", "Infor M3", "Buefy"],
  },
  {
    title: "Product Attribute: Price Lookup",
    date: "December 2025 – February 2026",
    description:
      "A project that lets users search for items and view prices, sales promos, and item price modifications.",
    features: [
      "Item search",
      "Price lookup",
      "Sales promo search",
      "UI rework for better usability",
    ],
    tags: ["Vue", "Laravel", "MySQL", "IBM DB2", "Infor M3", "Buefy"],
  },
  {
    title: "APEX Non-Trade PO With Terms",
    date: "July 2025 – January 2026",
    description:
      "A system that consolidates multiple companies’ supplier invoices into Infor M3, generates payment proposals and journal voucher listings, and manages approval workflows.",
    features: [
      "Supplier invoice consolidation",
      "Payment proposal generation",
      "Journal voucher listings",
      "Improved Infor M3 GLS840 integration",
    ],
    tags: ["Vue", "Laravel", "MySQL", "IBM DB2", "Infor M3", "Buefy"],
  },
] as const;

export const achievements = [
  {
    title: "Internal System for 100+ Branches",
    text: "Designed and implemented an internal system used by users across 100+ branches.",
  },
  {
    title: "ERP Integration",
    text: "Integrated enterprise data using Infor M3 API to support interoperability.",
  },
  {
    title: "Production Delivery",
    text: "Improved and modified systems from UAT to production stage.",
  },
  {
    title: "Approval Workflow Systems",
    text: "Built role-based and branch-based approval workflows for business operations.",
  },
] as const;

export const highlights = [
  {
    title: "Enterprise Systems",
    text: "Experienced in developing internal tools that support business operations, branch workflows, and enterprise processes.",
  },
  {
    title: "Financial Operations",
    text: "Built systems for petty cash replenishment, payment monitoring, supplier invoices, payment proposals, and journal voucher listings.",
  },
  {
    title: "Data Integration",
    text: "Worked with MySQL, IBM DB2, ETP, and Infor M3 to support reliable business data workflows.",
  },
  {
    title: "User-Centered Development",
    text: "Creates practical interfaces for users handling approvals, reports, order tracking, and operational tasks.",
  },
] as const;

export const galleryItems = [
  "ERP Integration",
  "Approval Workflow",
  "Payment Monitoring",
  "Customer Orders",
  "Price Lookup",
  "Branch Operations",
  "Supplier Invoices",
  "Cash Replenishment",
  "Report Generation",
  "Dashboard UI",
  "Database Workflow",
  "Production Deployment",
] as const;
