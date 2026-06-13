export const profileKnowledge = {
  name: "Leonardo Timkang Jr.",
  assistantName: "Leonardo Portfolio Assistant",
  currentRole: "Full Stack Developer",
  currentCompany: "CF Outsourcing Philippines Inc.",
  currentStartDate: "May 4, 2026",
  education: [
    {
      school: "University of Makati",
      date: "June 2018 – August 2024",
    },
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
  summary:
    "Leonardo Timkang Jr. is a full stack developer focused on building clean, useful, and reliable web applications, especially business systems, internal tools, and ERP-connected software.",
  contact: {
    email: "leonardotimkangjr@gmail.com",
    github: "https://github.com/locodafux",
    linkedin: "https://www.linkedin.com/in/leonardo-timkang-jr-276230257/",
  },
} as const;

export type ProfileKnowledge = typeof profileKnowledge;
