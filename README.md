# WebStudio Portfolio

A modern, fully responsive portfolio website built with React, TypeScript, and Vite. This project is a complete rewrite of my [original HTML/SCSS static website](https://github.com/OstTomasz/GoIT-Portfolio-HTML-CSS-Solo) from a web development course, transformed into a dynamic single-page application with modern tooling and best practices.

## 🚀 Live Demo

[View Live Site](https://own-landing-page-tsx-saa-s.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Key Improvements from Original](#key-improvements-from-original)
- [Environment Variables](#environment-variables)
- [Browser Support](#browser-support)

## 🎯 Overview

WebStudio is a portfolio website showcasing web development services, projects, and team members. Originally built as a static HTML/SCSS site during a web development course, this version has been completely rebuilt from the ground up using modern React ecosystem tools.

### Original Project

- **Repository**: [GoIT-Portfolio-HTML-CSS-Solo](https://github.com/OstTomasz/GoIT-Portfolio-HTML-CSS-Solo)
- **Tech**: Plain HTML, SCSS, vanilla JavaScript
- **Structure**: Multi-page static site with separate HTML files

### Current Project

- **Tech**: React 19, TypeScript, Vite, CSS Modules
- **Structure**: Single-page application with client-side routing
- **Architecture**: Component-based with modern state management

## 🛠 Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling

- **SCSS** - CSS preprocessor
- **CSS Modules** - Scoped styling
- **Framer Motion** - Animations and page transitions

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **React Hot Toast** - Toast notifications

### UI Components

- **Headless UI** - Accessible UI primitives (Dialogs, Modals)

### Maps

- **@vis.gl/react-google-maps** - Google Maps integration

### Development

- **ESLint** - Code linting with TypeScript rules
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## ✨ Features

### User-Facing

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Smooth page transitions and animations
- 🗺️ Interactive Google Maps integration
- 📝 Contact form with real-time validation
- 🖼️ Portfolio gallery with category filtering
- 🌐 Optimized images with srcSet for retina displays
- ♿ Accessibility-focused (ARIA labels, semantic HTML, keyboard navigation)
- 🎯 404 page with custom design

### Developer Experience

- ⚡ Lightning-fast HMR with Vite
- 🔒 Full TypeScript coverage
- 📦 CSS Modules for style encapsulation
- 🎭 Consistent code style with ESLint + Prettier
- 🏗️ Component-based architecture
- 🔄 Reusable UI components and hooks

## 📁 Project Structure

```
src/
├── assets/
│   └── images/          # Responsive images (mini/mid/max variants with @2x)
├── components/
│   ├── common/          # Layout components (Header, Footer, Navbar, MobileMenu)
│   ├── sections/        # Page-specific sections (HomeHero, PortfolioList, etc.)
│   └── ui/              # Reusable UI components (Button, Modal, Card, etc.)
├── data/
│   └── config.ts        # Static data (features, team, portfolio, contacts)
├── hooks/               # Custom React hooks (useScrolled, useBodyScrollLock)
├── layouts/             # Layout components (MainLayout)
├── pages/               # Page components (HomePage, PortfolioPage, ContactsPage)
├── styles/              # Global styles, variables, and mixins
│   ├── _variables.scss  # SCSS variables (colors, fonts, shadows)
│   ├── _mixins.scss     # SCSS mixins (responsive, typography, utilities)
│   └── index.scss       # Global styles and resets
├── App.tsx              # Root component with routing
└── main.tsx             # Application entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/OstTomasz/Own-Portfolio-React.git
cd Own-Portfolio-React
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file in the root directory

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🔄 Key Improvements from Original

### Architecture

| Original                     | Current                           | Benefit                                    |
| ---------------------------- | --------------------------------- | ------------------------------------------ |
| Separate HTML files per page | Single-page app with React Router | Faster navigation, no page reloads         |
| Manual DOM manipulation      | React component state             | Predictable UI updates                     |
| Global CSS                   | CSS Modules                       | No style conflicts, better maintainability |
| Inline event handlers        | Typed props and hooks             | Type safety, better debugging              |

### Performance

- ⚡ **Lazy Loading**: Images load on-demand with `loading="lazy"`
- 🖼️ **Responsive Images**: `srcSet` with 1x/2x variants for different screen sizes
- 📦 **Code Splitting**: React Router handles automatic code splitting
- 🎯 **Optimized Animations**: Hardware-accelerated with Framer Motion

### Developer Experience

- 🔒 **Type Safety**: Full TypeScript coverage catches errors at compile time
- 🎨 **Component Reusability**: Shared UI components (Button, Modal, Card)
- 🧪 **Form Validation**: Declarative validation with Zod schemas
- 🔧 **Modern Tooling**: Vite for instant HMR, ESLint for code quality

### Accessibility

- ♿ **ARIA Labels**: Proper labeling for screen readers
- ⌨️ **Keyboard Navigation**: Full keyboard support for interactive elements
- 🎯 **Focus Management**: Visible focus indicators and logical tab order
- 📱 **Touch Targets**: Minimum 44px touch targets for mobile

### Code Quality

- ✅ **Linting**: ESLint with TypeScript rules
- 💅 **Formatting**: Prettier for consistent code style
- 🏗️ **Separation of Concerns**: Components, hooks, and utilities in dedicated directories
- 📝 **Type Definitions**: Explicit types for all data structures

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Getting a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Maps JavaScript API**
4. Create credentials (API Key)
5. Restrict the key to your domain (optional but recommended)

## 🌐 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Key Features Requiring Modern Browsers

- CSS `aspect-ratio` (96%+ support)
- CSS `backdrop-filter` (95%+ support)
- ES2020+ JavaScript features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original course project: [GoIT Polska](https://goit.global/pl/)
- Design inspiration from modern portfolio sites
- Icons and imagery from various sources

## 📧 Contact

- **Email**: ost.tomasz@gmail.com
- **LinkedIn**: [Tomasz Ostaszewski](https://www.linkedin.com/in/tomasz-ostaszewski-7166071aa/)
- **GitHub**: [@OstTomasz](https://github.com/OstTomasz)

---

**Note**: This is a portfolio project showcasing modern web development practices. Feel free to use it as inspiration for your own projects!
