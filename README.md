# Mazen Ebada Portfolio

A professional portfolio web application built for Mazen Ebada, showcasing his experience as an Adaptive Engineer and Automation Specialist.

## Overview

This project is a modern, responsive single-page application built with Next.js. It features a clean design, smooth animations, and an interactive experience carousel to highlight professional achievements.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

```
/portfolio-app
├── /components          # Reusable UI components
│   ├── Navbar.js        # Sticky navigation
│   ├── Hero.js          # Intro section with animations
│   ├── ExperienceCarousel.js # Interactive work history
│   ├── ...              # Other sections (About, Skills, Projects, etc.)
├── /pages               # Next.js pages
│   ├── index.js         # Main landing page
│   └── _app.js          # Global app configuration
├── /styles              # Global styles
│   └── globals.css      # Tailwind imports and custom theme
└── public               # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mazen-portfolio.git
   cd mazen-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up/login.
3. Click "Add New Project" and import your repository.
4. Vercel will automatically detect the Next.js framework.
5. Click "Deploy".

### Environment Variables

Currently, this project does not require any specific environment variables. If you add a backend or API keys later, create a `.env.local` file in the root directory.

## Customization

- **Content:** Update the data arrays in each component file (e.g., `experiences` in `ExperienceCarousel.js`).
- **Colors:** Modify the theme colors in `styles/globals.css`.
- **Images:** Add images to the `public` folder and update references.

---

Built with Next.js & React
