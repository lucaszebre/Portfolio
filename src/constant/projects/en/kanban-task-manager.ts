export const KANBAN_TASK_MANAGER_EN = `# Kanban Task Manager

![App Screenshot](./assets/Kanban.jpg)

## Overview

The Kanban Task Manager is a modern web application built with Vite.js, Hono, and PostgreSQL that helps you efficiently manage your tasks using the Kanban methodology. It provides a visual way to organize, track, and prioritize your work, making it easier to collaborate with your team and stay organized.

## Features

- **Kanban Boards:** Create and manage multiple Kanban boards for different projects or workflows.
- **Columns and Tasks:** Each board consists of columns representing different stages of your workflow (e.g., To Do, In Progress, Done), and you can add tasks to these columns.
- **Drag and Drop:** Seamlessly move tasks between columns using DND Core for smooth drag-and-drop interactions.
- **Subtasks:** Break down tasks into smaller subtasks to manage them more effectively.
- **Task Details:** Add descriptions and additional information to your tasks.
- **User Authentication:** Securely sign in and manage your tasks with user accounts.
- **Responsive Design:** Access and manage your tasks on various devices, including desktop and mobile.

### Technologies Used

    Frontend: Vite.js, React 19, React Query, Chakra UI, TypeScript
    Backend: Hono (hosted on Cloudflare Workers), Cloudflare D1 (SQLite-based database), JWT Authentication
    Note: An Express.js version of the API is also available (using PostgreSQL)
    Styling: CSS Modules
    State Management: React Query
    Drag and Drop: DND Core
    User Authentication: JWT (JSON Web Tokens)
    Cloud Hosting: Cloudflare Workers
    Database: Cloudflare D1 Storage
`;
