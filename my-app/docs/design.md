# Mini Design Document – Personal Portfolio

## Overview/Background
This project is a personal portfolio site built with Next.js to showcase my background, projects, and experiences. It includes several interactive features such as a dynamic form and a dark/light mode toggle. 

## Technical Problem Statement
The goal was to create a multi-page, interactive, and accessible site using **only custom components** (no UI libraries). I needed to ensure the site accesible meaning that it was screen-reader friendly and used good semantic HTML.

## Design Approach
The project is structured with the new `app/` directory, which enables the **App Router** model. Pages like `/about`, `/projects`, and `/work` are each in their own folders with a `page.jsx` file.

Reusable components (like `Navbar`, `SocialIcons`, and `ProjectCard`) are organized under `src/components/`, making the code modular and easier to maintain.

User preferences for dark/light mode are saved using `localStorage` and controlled by a reusable `ThemeToggle` component. This allows users to switch themes, and their selection is preserved across sessions for a consistent experience.

> **Note:** This feature is currently under development. A known issue prevents theme persistence from working correctly in some cases. A fix is in progress.

## Thought Process

### Why did you choose to separate out a specific section into a component?
Sections like the Navbar, SocialIcons, and Project Cards are shared across pages or represent reusable UI logic. By turning them into components, I was able to:
- Avoid repetition
- Improve clarity
- Maintain separation of concerns


### Why did you keep a state within a component vs using dependency injection?
I chose to keep certain states local to components because they are self-contained and don’t need to be shared across the app.

For example, in my `TypingText` component, I use `useState` to track when the animation is complete, and `useEffect` to trigger that state update after a calculated timeout based on the length of the text. This state is only relevant to that component’s typing effect and doesn't need to be managed globally.

### Which design patterns did you notice in your app?
- **Module Pattern**: Each component is self-contained in its own file, promoting separation of concerns and easier maintainability.
- **Hooks Pattern**: I used React hooks like `useState` and `useEffect` in components such as `TypingText` to manage local state and side effects. This allowed me to keep logic encapsulated while enabling dynamic behavior without relying on class components.

## Challenges and Solutions

### What were several challenges that you encountered and how did you solve said challenges?

1. **Dark/Light Mode Toggle Persistence**  
   Implementing a dark/light theme toggle was a key feature, but making the preference persist reliably across sessions proved challenging. While the `ThemeToggle` component syncs with `localStorage`, there is currently a bug with how the theme is applied on initial load. I'm actively testing different strategies to fix this, including syncing the toggle state early in the hydration phase and ensuring class application happens consistently.

2. **Next.js App Router (New File Structure)**  
   This project was my first time using the new Next.js App Router. The structure (e.g. `app/layout.js`, `page.js`, and the concept of `use client`) was initially unfamiliar. I consulted the [Next.js documentation](https://nextjs.org/docs/app) and other online sources to understand the structure and routing. 

3. **Learning Tailwind CSS**  
   Tailwind offered an efficient way to style directly in JSX, but it was a different mindset from traditional CSS. I frequently searched common patterns online to better implement my portfolio.

## Rendering Strategy: CSR vs SSR vs Hybrid
- **Client-Side Rendering (CSR)** is used since this is a fully static portfolio with no need for server-rendered content.
- The site benefits from faster load times for interactive features like toggles and animations.


## Tooling & AI Use
I vibe coded parts of this project with **ChatGPT**—using it as a coding buddy to help troubleshoot bugs, explore layout ideas, and talk through tricky state logic. It was especially helpful when I hit roadblocks with `useEffect`, routing in the App Router, and syncing dark mode with localStorage.

While the code and decisions are mine, ChatGPT gave me nudges in the right direction. I also used it to polish this design doc and keep my component structure clean and scalable.

All usage followed course guidelines, and I can confidently explain everything I implemented.
