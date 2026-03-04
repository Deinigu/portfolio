# Portfolio - Deinigu
This is the repository for my portfolio built with Astro.js, React, and TailwindCSS.
![Screenshot of my portfolio](public/portfolio_screenshot.png)

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **UI:** React components
- **Styling:** TailwindCSS, Tailwind Typography
- **Markdown:** MDX with Shiki syntax highlighting
- **Animations:** Framer Motion, Keen Slider
- **Build Tools:** Vite
- **Other:** Astro RSS, Astro Sitemap, Astro Embed

## Getting Started

### Prerequisites

- Node.js >= 22.22
- npm

### Installation

```bash
git clone https://github.com/Deinigu/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321/portfolio](http://localhost:4321/portfolio) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Scripts

- `dev` – Run project in development mode
- `build` – Build project for production
- `preview` – Preview production build locally
- `astro` – Run Astro CLI commands

## Folder Structure

```text
portfolio/
├─ astro.config.mjs         # Astro configuration
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ public/                  # Static assets
│  ├─ favicon.svg
│  ├─ fonts/
│  ├─ itchio.svg
│  ├─ logo.png
│  └─ pdf/
├─ src/
│  ├─ assets/               # Images, icons, media
│  ├─ components/           # Reusable React/Astro components
│  ├─ consts.ts             # Project constants
│  ├─ content/              # Markdown/MDX content
│  ├─ content.config.ts     # Content configuration
│  ├─ layouts/              # Layout templates
│  ├─ pages/                # Astro pages/routes
│  ├─ scripts/              # Utility scripts
│  └─ styles/               # Tailwind/global styles
└─ README.md
```


## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
