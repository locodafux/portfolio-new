export const profileKnowledge = {
  name: "Leonardo Timkang Jr.",
  assistantName: "Leonardo Portfolio Assistant",
  currentRole: "Full Stack Developer",
  currentCompany: "CF Outsourcing Philippines Inc.",
  currentStartDate: "May 4, 2026",
  education: [
    {
      school: "University of Makati",
      date: "June 2019 – August 2024",
      program: "Bachelor of Science in Computer Science Major in Social Computing",
    },
  ],
  summary:
    "Leonardo Timkang Jr. is a full stack developer focused on building clean, useful, and reliable web applications, especially business systems, internal tools, approval workflows, and ERP-connected software.",
  background: [
    "Currently works as a Full Stack Developer at CF Outsourcing Philippines Inc.",
    "Previously worked as a System Developer at Wilcon Depot Inc., building internal systems and integrating enterprise data with Infor M3.",
    "Has experience collaborating on attendance management and Android/Firebase application work during earlier development roles.",
  ],
  skills: [
    "PHP",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Java",
    "Laravel",
    "Vue",
    "Buefy",
    "Infor M3",
    "MySQL",
    "ETP",
    "SQLite",
    "IBM DB2",
    "Inertia",
    "Firebase",
    "MongoDB",
    "React Native",
    "Android Studio",
    "FastAPI",
    "Git",
    "GitHub Desktop",
    "Linux",
    "Ubuntu Server",
    "Tmux",
    "Neovim",
    "SSH",
    "Ngrok",
  ],
  projects: [
    {
      name: "Petty Cash Replenishment",
      description:
        "A business system for managing petty cash refills, approvals, reconciliation, and accurate financial records.",
    },
    {
      name: "Project CO Dashboard",
      description:
        "A workflow system for tracking customer orders, purchase requests, delivery orders, and order status visibility.",
    },
    {
      name: "Payment Monitoring",
      description:
        "A reporting and monitoring system for user requests, bank and broker reports, and Infor M3 data integration.",
    },
    {
      name: "Product Attribute: Price Lookup",
      description:
        "A project for searching items, checking prices and promos, and improving usability around price information.",
    },
    {
      name: "APEX Non-Trade PO With Terms",
      description:
        "A system that consolidates supplier invoices, generates payment proposals, and supports approval workflows with Infor M3 integration.",
    },
    {
      name: "APYRO Attendance Management System",
      description: "Attendance management system project built during Leonardo's earlier development work.",
    },
    {
      name: "Dog Face / Emotion Recognition",
      description: "A recognition-focused academic project exploring dog face and emotion detection.",
    },
    {
      name: "Portfolio Website",
      description: "Leonardo's personal portfolio site showcasing his work, skills, and professional background.",
    },
    {
      name: "Enterprise Internal Systems",
      description:
        "Internal tools for approvals, payment monitoring, customer order tracking, petty cash replenishment, and ERP-connected workflows.",
    },
  ],
  achievements: [
    "Designed and implemented an internal system used across 100+ branches.",
    "Integrated enterprise data using the Infor M3 API.",
    "Built role-based and branch-based approval workflows for business operations.",
  ],
  availability: [
    "Full-stack development",
    "Internal business systems",
    "ERP-connected tools",
    "Backend and frontend improvements",
  ],
  contact: {
    email: "leonardotimkangjr@gmail.com",
    phone: "09606152206",
    github: "https://github.com/locodafux",
    linkedin: "https://www.linkedin.com/in/leonardo-timkang-jr-276230257/",
  },
} as const;

export type ProfileKnowledge = typeof profileKnowledge;

export const quickPromptAnswers = {
  "Tell me about Leonardo":
    "Leonardo Timkang Jr. is a full stack developer focused on clean, reliable business systems, internal tools, and ERP-connected applications. He currently works at CF Outsourcing Philippines Inc. and has experience building practical software for operations, approvals, reporting, and order workflows.",
  "What are his main skills?":
    "Leonardo’s main skills include PHP, JavaScript, Python, Laravel, Vue, HTML, CSS, FastAPI, MySQL, IBM DB2, Infor M3, SQLite, MongoDB, Firebase, React Native, and full-stack web application development for business systems.",
  "What projects has he built?":
    "Leonardo has worked on systems such as Petty Cash Replenishment, Project CO Dashboard, Payment Monitoring, Product Attribute: Price Lookup, APEX Non-Trade PO With Terms, APYRO Attendance Management System, Dog Face / Emotion Recognition, and his portfolio website.",
  "How can I contact him?":
    "You can contact Leonardo by email at leonardotimkangjr@gmail.com, by phone at 09606152206, on GitHub at github.com/locodafux, or on LinkedIn at linkedin.com/in/leonardo-timkang-jr-276230257/.",
} as const;

type QuickPromptKey = keyof typeof quickPromptAnswers;
type CasualPromptAnswer = {
  answer: string;
};

function normalizePrompt(value: string) {
  return value.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
}

function isPrivateQuestion(normalized: string) {
  const privateTerms = [
    "girlfriend",
    "boyfriend",
    "wife",
    "husband",
    "partner",
    "dating",
    "date",
    "crush",
    "love life",
    "relationship",
    "ex",
    "family",
    "mother",
    "father",
    "sister",
    "brother",
    "religion",
    "politics",
    "salary",
    "address",
  ];

  return privateTerms.some((term) => normalized.includes(term));
}

const quickPromptAliases: Record<string, QuickPromptKey> = {
  "tell me about leonardo": "Tell me about Leonardo",
  "who is leonardo": "Tell me about Leonardo",
  "what are his main skills": "What are his main skills?",
  "what are leonardos main skills": "What are his main skills?",
  "does leonardo know react": "What are his main skills?",
  "what projects has he built": "What projects has he built?",
  "what kind of projects does leonardo make": "What projects has he built?",
  "how can i contact him": "How can I contact him?",
  "where can i reach leonardo": "How can I contact him?",
};

const casualPromptAnswers: Record<string, CasualPromptAnswer> = {
  "is leonardo funny": {
    answer:
      "That’s not listed in Leonardo’s portfolio, but if clean systems and solid builds count as humor, he might be dangerously funny.",
  },
  "is he funny": {
    answer:
      "That’s not listed in Leonardo’s portfolio, but if clean systems and solid builds count as humor, he might be dangerously funny.",
  },
  "is leonardo cool": {
    answer:
      "The portfolio does not rate coolness directly, but building practical systems and polished interfaces is not exactly a bad audition.",
  },
  "is he cool": {
    answer:
      "The portfolio does not rate coolness directly, but building practical systems and polished interfaces is not exactly a bad audition.",
  },
  "can i hire him": {
    answer:
      "Absolutely. If you need polished, functional web experiences and business-ready systems, Leonardo looks like a very reasonable person to hire and a very inconvenient person to ignore.",
  },
  "is he good": {
    answer:
      "Based on the portfolio, yes. Leonardo focuses on full-stack development, clean interfaces, and practical systems that solve real business problems.",
  },
  "is leonardo good": {
    answer:
      "Based on the portfolio, yes. Leonardo focuses on full-stack development, clean interfaces, and practical systems that solve real business problems.",
  },
  "is he good at coding": {
    answer:
      "Based on the portfolio, yes. Leonardo works across frontend, backend, databases, and enterprise integrations, with a strong focus on practical delivery.",
  },
  "tell me something cool about him": {
    answer:
      "One cool thing is that Leonardo’s portfolio does more than list projects. It lets visitors ask about his work through an AI chat experience built into the site.",
  },
  "be funny": {
    answer:
      "Understood. I’ll keep it professional, but with better timing. Think polished portfolio assistant, not a comedian who accidentally learned TypeScript.",
  },
};

export function getQuickPromptAnswer(question: string) {
  const normalized = normalizePrompt(question);
  const match = quickPromptAliases[normalized];

  return match ? quickPromptAnswers[match] : null;
}

export function getCasualPromptAnswer(question: string) {
  const normalized = normalizePrompt(question);
  return casualPromptAnswers[normalized]?.answer ?? null;
}

export function getPortfolioFallbackAnswer(question: string) {
  const quickPromptMatch = getQuickPromptAnswer(question);

  if (quickPromptMatch) {
    return quickPromptMatch;
  }

  const normalized = normalizePrompt(question);

  if (isPrivateQuestion(normalized)) {
    return "That’s outside the scope of Leonardo’s portfolio, so I keep it focused on his work. I can help with his skills, projects, experience, or how to contact him.";
  }

  if (normalized.includes("funny") || normalized.includes("cool")) {
    return "That detail is not listed in the portfolio, but Leonardo’s work does show a strong eye for clean systems and polished execution, which is at least adjacent to charm.";
  }

  if (
    normalized.includes("hire") ||
    normalized.includes("available") ||
    normalized.includes("open to work")
  ) {
    return "Yes. Leonardo is available for full-stack development, internal business systems, ERP-connected tools, and backend or frontend improvements.";
  }

  if (
    normalized.includes("good") ||
    normalized.includes("great") ||
    normalized.includes("strong")
  ) {
    return "Based on the portfolio, Leonardo is a strong full-stack developer with experience building practical systems, internal tools, and enterprise-connected applications.";
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("linkedin") ||
    normalized.includes("github") ||
    normalized.includes("reach")
  ) {
    return quickPromptAnswers["How can I contact him?"];
  }

  if (
    normalized.includes("skill") ||
    normalized.includes("stack") ||
    normalized.includes("tech") ||
    normalized.includes("react") ||
    normalized.includes("frontend") ||
    normalized.includes("backend")
  ) {
    return "Leonardo is a full stack developer with experience across frontend, backend, databases, and enterprise integrations. His stack includes PHP, JavaScript, Python, Laravel, Vue, HTML, CSS, FastAPI, MySQL, IBM DB2, Infor M3, SQLite, MongoDB, Firebase, and related development tools.";
  }

  if (
    normalized.includes("project") ||
    normalized.includes("built") ||
    normalized.includes("make") ||
    normalized.includes("portfolio")
  ) {
    return "Leonardo mainly builds practical business systems, internal tools, dashboards, approval workflows, and ERP-connected applications. His portfolio includes Petty Cash Replenishment, Project CO Dashboard, Payment Monitoring, Product Attribute: Price Lookup, APEX Non-Trade PO With Terms, APYRO Attendance Management System, and his portfolio website.";
  }

  if (
    normalized.includes("favorite") ||
    normalized.includes("food") ||
    normalized.includes("movie") ||
    normalized.includes("music") ||
    normalized.includes("hobby")
  ) {
    return "That detail is not listed in the portfolio. I can tell you about Leonardo’s skills, projects, and experience instead, which is probably more useful unless this interview includes snacks.";
  }

  if (
    normalized.includes("about leonardo") ||
    normalized.includes("who is") ||
    normalized.includes("background") ||
    normalized.includes("experience")
  ) {
    return quickPromptAnswers["Tell me about Leonardo"];
  }

  return null;
}
