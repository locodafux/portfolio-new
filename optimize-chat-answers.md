Fix the chat quick prompt answers by giving the AI enough portfolio/profile context about Leonardo.

Current issue:
The quick prompt buttons work visually, but when the user clicks prompts like:

* Tell me about Leonardo
* What are his main skills?
* What projects has he built?
* How can I contact him?

the AI returns nothing or gives no useful answer because the API does not have enough information about Leonardo.

Goal:
Make the AI answer based on Leonardo’s actual portfolio information, skills, projects, experience, and contact details.

Tasks:

1. Inspect the current chat feature:

   * chat component
   * quick prompt buttons
   * message submit function
   * `/api/chat` route
   * AI/Gemini API integration
   * any existing profile or portfolio data files

2. Create a dedicated knowledge source for Leonardo.

Add a file like:

`src/data/profile.ts`

or use the project’s existing data structure.

The file should contain clear portfolio information, for example:

```ts
export const leonardoProfile = {
  name: "Leonardo",
  role: "Full Stack Developer",
  summary:
    "Leonardo is a full stack developer focused on building modern, responsive, and user-friendly web applications.",

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "API Integration",
    "Responsive Web Design",
    "UI/UX Implementation",
    "Frontend Development",
    "Backend Development"
  ],

  projects: [
    {
      name: "Portfolio Website",
      description:
        "A modern personal portfolio website showcasing Leonardo’s background, skills, projects, and contact information."
    },
    {
      name: "AI Chat Feature",
      description:
        "A portfolio chat assistant that answers questions about Leonardo using his personal profile information."
    }
  ],

  contact: {
    email: "replace-with-real-email@example.com",
    github: "replace-with-github-url",
    linkedin: "replace-with-linkedin-url",
    website: "replace-with-portfolio-url"
  }
};
```

Important:
Replace the placeholder data with the real information already available in the portfolio project.
Do not invent fake information if real data exists in the app, resume, constants, or existing sections.

3. Update `/api/chat` so the AI always receives Leonardo’s profile context.

The API should build a strong system instruction like this:

```ts
const systemPrompt = `
You are the AI assistant for Leonardo's portfolio website.

Your job is to answer questions about Leonardo only using the profile information below.

Be friendly, professional, concise, and helpful.
Do not say you do not know if the answer exists in the profile data.
If the user asks about Leonardo's background, skills, projects, or contact details, answer directly using the provided information.

Profile Information:
${JSON.stringify(leonardoProfile, null, 2)}
`;
```

4. Make sure every user message is sent together with the profile context.

The Gemini/API request should include:

* the user question
* the Leonardo profile context
* a clear instruction to answer as Leonardo’s portfolio assistant

5. Add direct fallback answers for the quick prompts.

Before calling the AI, handle common quick prompts safely:

```ts
const quickPromptAnswers: Record<string, string> = {
  "Tell me about Leonardo":
    "Leonardo is a full stack developer who builds modern, responsive, and user-friendly web applications. He focuses on clean design, smooth user experience, and practical web solutions.",

  "What are his main skills?":
    "Leonardo’s main skills include Next.js, React, TypeScript, JavaScript, Tailwind CSS, API integration, responsive design, and full stack web development.",

  "What projects has he built?":
    "Leonardo has built portfolio projects including a personal portfolio website and an AI-powered chat feature that answers questions about his background, skills, projects, and contact information.",

  "How can I contact him?":
    "You can contact Leonardo through the contact section of this portfolio. Add his real email, GitHub, LinkedIn, or website link from the project data."
};
```

Use these fallback answers only when the AI returns an empty response or when the API fails.

6. Make sure the frontend does not show blank assistant messages.

Add validation:

```ts
const answer =
  data.answer?.trim() ||
  data.reply?.trim() ||
  data.message?.trim() ||
  fallbackAnswer ||
  "Sorry, I couldn’t generate an answer. Please try again.";
```

7. Improve the AI instruction so it understands the quick prompts.

The AI should understand that:

* “Tell me about Leonardo” means summarize Leonardo’s background.
* “What are his main skills?” means list Leonardo’s technical skills.
* “What projects has he built?” means summarize portfolio projects.
* “How can I contact him?” means provide available contact details.

8. Keep the same UI design.

Do not change:

* colors
* layout
* button style
* spacing
* borders
* theme

Only fix:

* AI knowledge/context
* quick prompt responses
* fallback answers
* API response handling

9. Make sure environment variables are used correctly.

Do not expose API keys in frontend files.

Use:

```env
GEMINI_API_KEY=your_key_here
```

The API key should only be used inside server-side API routes.

10. Test all quick prompts.

Expected results:

When clicking “Tell me about Leonardo”:
The chat should answer with a short professional background summary.

When clicking “What are his main skills?”:
The chat should list Leonardo’s main technical skills.

When clicking “What projects has he built?”:
The chat should summarize Leonardo’s projects from the portfolio data.

When clicking “How can I contact him?”:
The chat should show Leonardo’s available contact information.

Also test custom questions like:

* “Is Leonardo a frontend developer?”
* “Does Leonardo know React?”
* “What kind of projects does Leonardo make?”
* “Where can I reach Leonardo?”

11. Final expected behavior:

The chat assistant should behave like a portfolio guide.
It should answer questions about Leonardo using the portfolio data.
It should never return an empty response.
It should have fallback answers for all quick prompts.
It should keep the existing UI design unchanged.
