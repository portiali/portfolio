# 🎨 Mini Design Document – Personal Portfolio

## Overview/Background
This project is a personal portfolio site built with Next.js (App Router) to showcase my background, projects, and interests. It includes several interactive features such as a theme toggle and dynamic routing between pages like “About,” “Projects,” and “Work.”

## Technical Problem Statement
The goal was to create a multi-page, interactive, and accessible site using **only custom components** (no UI libraries) while persisting user preferences like theme choice. Additionally, I needed to ensure the site was screen-reader friendly and used good semantic HTML.

## Design Approach
The project is structured with the new `app/` directory, which enables the **App Router** model from Next.js 13+. Pages like `/about`, `/projects`, and `/work` are each in their own folders with a `page.jsx` file.

Reusable components (like `Navbar`, `ThemeToggle`, and `ProjectCard`) are organized under `src/components/`, making the code modular and easier to maintain.

User preferences (e.g. dark/light theme) are stored in localStorage and applied using a toggle in the `ThemeToggle` component.

## Thought Process

### Why did you choose to separate out a specific section into a component?
Sections like the Navbar, Footer, Project Cards, and Theme Toggle are shared across pages or represent reusable UI logic. By turning them into components, I was able to:
- Avoid repetition
- Improve clarity
- Maintain separation of concerns

### Why did you keep a state within a component vs using dependency injection?
State like the theme toggle is kept within the `ThemeToggle` component because:
- It's local and specific to that component’s function.
- It leverages `useEffect` and `useState` to sync with `localStorage`, without the need for global context.
For global state, I'd consider using React Context or Zustand, but it wasn’t necessary here.

### Which design patterns did you notice in your app?
- **Module pattern**: Each component is self-contained in its own file.
- **Container/presentational pattern**: Some components like `ProjectCard` display content passed down via props.
- **Composition pattern**: Pages are composed of many smaller, reusable pieces (e.g. `Home` combines `Bio`, `Heading`, `SocialIcons`).

## Challenges and Solutions

### Challenge 1: Theme persistence across refresh
- **Solution**: Used `useEffect` to check for a stored theme in `localStorage` and apply it on mount.

### Challenge 2: Organizing pages with the new App Router
- **Solution**: Followed Next.js conventions (`app/[route]/page.jsx`) and used `layout.js` for consistent structure.

### Challenge 3: Building everything without a UI library
- **Solution**: Used Tailwind CSS and focused on accessibility by manually adding semantic tags, `aria-label`s, and keyboard navigation support.

## Rendering Strategy: CSR vs SSR vs Hybrid
- **Client-Side Rendering (CSR)** is used since this is a fully static portfolio with no need for server-rendered content.
- The site benefits from faster load times for interactive features like toggles and animations.


## Tooling & AI Use
I vibe coded parts of this project with **ChatGPT**—using it as a coding buddy to help troubleshoot bugs, explore layout ideas, and talk through tricky state logic. It was especially helpful when I hit roadblocks with `useEffect`, routing in the App Router, and syncing dark mode with localStorage.

While the code and decisions are mine, ChatGPT gave me nudges in the right direction—kind of like having a super-patient pair programmer. I also used it to polish this design doc and keep my component structure clean and scalable.

All usage followed course guidelines, and I can confidently explain everything I implemented.
