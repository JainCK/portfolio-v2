# Portfolio Website

This is a personal portfolio website designed to showcase my projects, skills, and professional background. The website is built using modern technologies and integrates with the GitHub GraphQL API to dynamically fetch and display my projects.

## Tech Stack

- **Next.js:** Framework used for both frontend and backend rendering with server-side support.
- **Tailwind CSS:** For modern, responsive, and customizable styling.
- **GitHub GraphQL API:** Used to fetch project details dynamically from my GitHub repositories.
- **Apollo Client:** For managing data fetching from the GitHub GraphQL API.
- **React Icons:** Provides scalable vector icons that integrate seamlessly with React.
- **MagicUI:** A lightweight UI framework for seamless animations and interactions.
- **SCDCN:** Utilized for advanced state management across components.
- **React Icons:** For adding easily customizable icons throughout the site.

## Features

- **Dynamic Project Display:** Integrates with GitHub's GraphQL API to automatically pull in and display project details, keeping the portfolio up-to-date.
- **Responsive Design:** Ensures optimal viewing experience across devices, powered by Tailwind CSS.
- **Professional UI/UX:** Built to highlight key details in a clean, modern, and aesthetically pleasing way, with MagicUI enhancing interactive animations.
- **Iconography:** Uses React Icons to visually represent skills, tools, and technologies.

## Key Sections

- **About Me:** A detailed introduction of my professional background, skills, and experiences.
- **Projects:** A dynamic showcase of my top GitHub projects, fetched using GitHub's GraphQL API and Apollo Client.
- **Skills:** A categorized list of my technical skills, represented with React Icons.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Add your GitHub token in a `.env.local` file:
      ```bash
      NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
      ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Visit `http://localhost:3000` to view the portfolio in the browser.

## Deployment

This project can be deployed on any static site hosting platform, such as Vercel or Netlify. For optimal integration with Next.js, deploying on **Vercel** is recommended.

---

Feel free to explore, fork, or contribute to the repository!
