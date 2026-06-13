You are working on my personal portfolio project. Implement a polished AI chat feature inspired by Facebook Messenger. The feature should match the visual style of the attached reference: a clean white rounded pill button on a dark premium portfolio background with a small chat icon and the label “Chat with Leonardo”.

IMPORTANT SECURITY REQUIREMENTS:
- Do NOT hardcode any API key.
- Do NOT use NEXT_PUBLIC_GEMINI_API_KEY.
- Do NOT expose the Gemini API key in client-side code.
- Use server-side API route only.
- Read the key from process.env.GEMINI_API_KEY.
- Add .env.example with:
  GEMINI_API_KEY=your_gemini_api_key_here
- Make sure .env.local is ignored by git.

TECH REQUIREMENTS:
- Use Next.js best practices.
- Use TypeScript.
- Use React components.
- Use CSS/Tailwind if the project already uses it; otherwise use the existing styling method.
- Do not use Lucide React.
- Do not use any third-party icon package.
- Use a handcrafted inline SVG chat icon.
- Do not use Framer Motion unless already installed.
- Do not add unnecessary UI libraries.
- Keep the implementation clean, responsive, accessible, and easy to customize.

GEMINI API REQUIREMENTS:
- Install and use the official Google Gen AI SDK:
  npm install @google/genai
- Create a server API route:
  /app/api/chat/route.ts
- The frontend chat component should POST user messages to /api/chat.
- The server route should call Gemini using process.env.GEMINI_API_KEY.
- Use a fast Gemini model, preferably gemini-3.5-flash, unless the project already has another configured Gemini model.
- Add proper error handling for missing API key, failed request, empty message, and API errors.
- Return clean JSON:
  { "reply": "..." }

AI PERSONALITY AND KNOWLEDGE:
Create a portfolio assistant named “Leonardo AI” or “Leonardo’s Assistant”.
It should answer questions about Leonardo Timkang Jr. based only on the portfolio data below.

Personal data to use:
- Name: Leonardo Timkang Jr.
- Current role: Full Stack Developer at CF Outsourcing Philippines Inc.
- Start date at CF Outsourcing Philippines Inc.: May 4, 2026.
- Education: University of Makati, June 2018 – August 2024.
- Main identity: Full Stack Developer focused on building clean, useful, and reliable web applications.
- Skills:
  PHP, JavaScript, Python, HTML, CSS, Java, Laravel, Vue, Buefy, Infor M3, MySQL, ETP, SQLite, IBM DB2, Inertia, Firebase, MongoDB, React Native, Android Studio, FastAPI, Git, GitHub Desktop, Linux, Ubuntu Server, Tmux, Neovim, SSH, Ngrok.
- Projects:
  APYRO Attendance Management System
  Dog Face / Emotion Recognition project
  Portfolio website
  Visitor management system if available in the existing project data.
- Tone:
  Friendly, professional, concise, confident, and portfolio-focused.
- The AI should speak like a helpful assistant representing Leonardo, not pretending to be a real human chatting live.
- If asked about Leonardo’s experience, skills, projects, education, availability, contact, or tech stack, answer clearly using the data.
- If the user asks something not found in the data, say:
  “I don’t have that detail in Leonardo’s portfolio data yet, but you can contact him directly for more information.”
- Do not hallucinate fake companies, fake projects, fake years, fake awards, or fake contact details.
- If the user asks general coding questions, answer briefly and connect it back to Leonardo’s skills when natural.
- If the user asks inappropriate, private, or sensitive questions, politely refuse and redirect to professional portfolio topics.

DATA ARCHITECTURE:
Create or update:
/lib/data.ts

Add a clean editable object:

export const profileKnowledge = {
  name: "Leonardo Timkang Jr.",
  assistantName: "Leonardo AI",
  currentRole: "Full Stack Developer",
  currentCompany: "CF Outsourcing Philippines Inc.",
  currentStartDate: "May 4, 2026",
  education: [
    {
      school: "University of Makati",
      date: "June 2018 – August 2024"
    }
  ],
  skills: [...],
  projects: [...],
  summary: "...",
  contact: {
    email: "",
    github: "",
    linkedin: ""
  }
}

The /api/chat route should import this profileKnowledge and inject it into the Gemini system instruction/prompt.

PROMPTING REQUIREMENTS INSIDE API ROUTE:
Build a strong system instruction like this:

“You are Leonardo’s portfolio AI assistant. Your job is to answer visitors’ questions about Leonardo Timkang Jr. using only the provided profile knowledge. Be friendly, professional, short, and helpful. Never invent facts. If information is missing, say the information is not available in the portfolio data yet. Keep answers focused on Leonardo’s skills, experience, projects, education, and contact details.”

Include the profileKnowledge JSON in the prompt sent to Gemini.

CHAT UI REQUIREMENTS:
Create components:
- components/chat/PortfolioChat.tsx
- components/chat/ChatButton.tsx
- components/chat/ChatWindow.tsx
- components/chat/ChatMessage.tsx
- components/chat/TypingIndicator.tsx

PortfolioChat behavior:
- Floating button initially visible.
- Button text: “Chat with Leonardo”.
- On click, open chat window.
- Chat window should appear bottom-right on desktop.
- On mobile, chat window should become a near full-screen bottom sheet.
- Include close/minimize button.
- Add welcome message:
  “Hi! I’m Leonardo’s AI assistant. Ask me about his skills, projects, experience, or tech stack.”
- Add clickable starter prompts:
  “Tell me about Leonardo”
  “What are his main skills?”
  “What projects has he built?”
  “How can I contact him?”

MESSAGE BEHAVIOR:
- Store messages in local component state.
- Persist chat history to localStorage.
- Allow clearing chat history.
- User can press Enter to send.
- Shift + Enter creates a new line if textarea is used.
- Disable send button while loading.
- Show typing indicator while waiting.
- Show error bubble if the API fails:
  “Sorry, I couldn’t respond right now. Please try again.”
- Prevent empty messages.
- Trim very long messages and add a reasonable max length.
- Sanitize/render responses as plain text only, not raw HTML.

DESIGN REQUIREMENTS:
Match the screenshot style:
- Premium dark portfolio background compatibility.
- Floating pill:
  background: white or near white
  text: dark
  border-radius: 999px
  padding around 18px 28px
  subtle shadow
  small outlined chat icon
  smooth hover scale or lift
- Chat window:
  dark modern container or white Messenger-style card depending on existing portfolio style
  rounded corners
  soft border
  subtle shadow
  clean spacing
- Messages:
  AI bubble: light neutral bubble, left aligned
  User bubble: accent/purple/pink bubble, right aligned
  Keep typography clean and readable
- Add smooth open/close transition using CSS only.
- Must be responsive:
  Desktop: 380px wide chat card
  Mobile: width calc(100vw - 24px), bottom 12px, left/right 12px
- Ensure it does not cover important content too aggressively.

ACCESSIBILITY:
- Add aria-labels.
- Button must be keyboard accessible.
- Input must have label or aria-label.
- Close button must be accessible.
- Focus input when chat opens.
- Escape key should close/minimize the chat.
- Maintain readable contrast.

FILES TO CREATE/UPDATE:
1. /components/chat/PortfolioChat.tsx
2. /components/chat/ChatButton.tsx
3. /components/chat/ChatWindow.tsx
4. /components/chat/ChatMessage.tsx
5. /components/chat/TypingIndicator.tsx
6. /app/api/chat/route.ts
7. /lib/data.ts
8. .env.example
9. Update the main layout/page to render <PortfolioChat />

API ROUTE DETAILS:
- Validate request body.
- Expected request:
  { "messages": [{ "role": "user" | "assistant", "content": "..." }] }
- Only send the latest relevant conversation history to Gemini to control token usage.
- Add a small rate limit or basic abuse protection if possible.
- Do not log the API key.
- Do not log private user messages in production.
- Return:
  { "reply": replyText }

QUALITY CHECKLIST:
- Run lint/build after implementation.
- Make sure there are no TypeScript errors.
- Make sure the chat works on desktop and mobile.
- Make sure the API key is never exposed in browser dev tools.
- Make sure no API key is committed.
- Make sure the assistant answers only from profileKnowledge.
- Make sure the UI visually matches the reference button style.
- Make sure the implementation is easy to customize from /lib/data.ts.

FINAL OUTPUT:
After implementing, summarize:
- Files changed
- How to add the Gemini API key
- How to customize Leonardo’s personal information
- How to test the chat feature