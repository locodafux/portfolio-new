You are working on my portfolio project. Fix and refine the chat feature colors so it visually matches the rest of the application.

Goal:
Update the chat UI color system so it feels native to the app design, not like a generic AI chatbot. Avoid classic AI colors such as bright purple, neon blue, cyan gradients, glowing borders, and futuristic AI-style accents unless those colors already exist in the app theme.

Tasks:
1. Inspect the existing application theme, global styles, CSS variables, Tailwind config, design tokens, and reused components.
2. Identify the main app colors, background colors, text colors, borders, shadows, hover states, and button styles.
3. Update the chat feature to use the same color language as the rest of the app.
4. Make the chat feature feel like a natural part of the portfolio, not a separate AI product.

Requirements:
- Do not use generic AI colors like purple, electric blue, cyan, or glowing gradient effects.
- Reuse existing app theme colors and design tokens whenever possible.
- Match the app’s existing typography, spacing, radius, borders, shadows, and button styles.
- User messages and AI messages should be visually clear but subtle.
- Use soft contrast, clean neutral tones, and brand-matching accents.
- Make the chat input, send button, message bubbles, loading state, scrollbar, and empty state consistent with the application.
- Ensure colors work properly in both light mode and dark mode if the app supports theme switching.
- Keep accessibility in mind: text must remain readable with good contrast.
- Avoid overdesigning the chat. It should look elegant, modern, minimal, and portfolio-friendly.

Specific UI Improvements:
- Chat container should use the same background style as other sections/cards in the app.
- Message bubbles should use app-compatible neutral or brand colors.
- User message bubble may use the primary brand/accent color, but muted and elegant.
- AI message bubble should use a card-like or secondary background color.
- Borders should match existing border colors.
- Text colors should use existing foreground/muted-foreground tokens.
- Send button should match existing primary button styling.
- Hover and focus states should be consistent with the rest of the site.
- Loading indicator should avoid colorful AI-style animation; use a simple subtle dot, pulse, or text-based loading style.

Implementation Guidelines:
- Do not introduce random new colors.
- Prefer using CSS variables like `--background`, `--foreground`, `--card`, `--muted`, `--primary`, `--border`, etc. if available.
- If Tailwind is used, prefer classes like `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, and similar existing theme utilities.
- Remove hardcoded AI-looking colors such as `purple`, `violet`, `cyan`, `blue-500`, `indigo`, neon gradients, and glowing shadows unless they are already part of the app’s official theme.
- Keep the UI responsive and polished on mobile, tablet, and desktop.

Expected Output:
- Update the chat feature styles/components directly.
- Keep the functionality unchanged.
- Do not break the message sending behavior, AI response behavior, scrolling, or input handling.
- Clean up unused color classes or unnecessary custom styles.
- Make sure the final chat UI looks consistent, professional, and integrated with the full application.

Before finishing:
- Review the entire chat feature visually through the code.
- Confirm there are no generic AI colors left.
- Confirm light/dark mode compatibility if applicable.
- Confirm all chat states are styled: empty state, user message, AI message, loading, error, input focus, disabled send button, and mobile layout.