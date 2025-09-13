# AI Development Rules for DER Event Hub Application

This document outlines the technical stack and development guidelines for the DER Event Hub web application. These rules are designed to ensure consistency, maintainability, and performance across the codebase.

## Tech Stack Overview

*   **Framework:** Next.js (React Framework) for server-side rendering, static site generation, and file-system routing.
*   **Language:** TypeScript for type safety and improved developer experience.
*   **UI Library:** Shadcn/ui for pre-built, accessible, and customizable UI components.
*   **Styling:** Tailwind CSS for utility-first CSS styling, ensuring responsive and consistent design.
*   **Icons:** Lucide React for a comprehensive set of SVG icons.
*   **Form Management:** React Hook Form for efficient form handling.
*   **Schema Validation:** Zod for robust schema validation, especially for forms and data structures.
*   **Date Utilities:** `date-fns` for parsing, formatting, and manipulating dates.
*   **Image Hosting:** Cloudinary and Unsplash for external image assets.
*   **Form Submissions:** Formspree for handling contact and newsletter form submissions.

## Library Usage Rules

*   **UI Components:**
    *   **Always** prioritize using components from `shadcn/ui`.
    *   If a required component is not available in `shadcn/ui` or needs significant custom behavior, create a new, dedicated component in `components/`.
    *   **Do not** modify `shadcn/ui` source files directly.
*   **Styling:**
    *   **Exclusively** use Tailwind CSS classes for all styling. Avoid inline styles or custom CSS files unless absolutely necessary for global styles (e.g., `globals.css`).
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Icons:**
    *   **Always** use icons from `lucide-react`.
*   **Forms & Validation:**
    *   Implement all forms using `react-hook-form`.
    *   Define form schemas and perform validation using `zod`.
*   **Routing:**
    *   Leverage Next.js's file-system routing (the `app/` directory structure) for navigation. Avoid introducing client-side routing libraries like React Router, as Next.js handles routing inherently.
*   **Image Handling:**
    *   Use Next.js's `Image` component for optimized image loading and performance.
    *   External image assets are sourced from Cloudinary and Unsplash.
*   **Date Operations:**
    *   Use `date-fns` for any date-related formatting, parsing, or calculations.
*   **State Management:**
    *   For local component state, use React's `useState` and `useReducer` hooks.
    *   For simple global state, `React.useContext` is preferred. Avoid external state management libraries (e.g., Redux, Zustand) unless a clear and complex need arises.
*   **API Calls:**
    *   For client-side data fetching, use the native `fetch` API.
    *   For server-side data operations or form submissions, utilize Next.js Server Actions or external services like Formspree as already implemented.
*   **File Structure:**
    *   Keep components in `components/`.
    *   Keep pages and their related logic within the `app/` directory, following Next.js conventions (e.g., `app/blog/[slug]/page.tsx`).
    *   Utility functions should reside in `lib/`.
    *   Ensure directory names are all lowercase.