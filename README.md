# Md. Arman Hossen — Portfolio

A modern, responsive, monochrome personal portfolio customized for **Md. Arman Hossen**.

## Tech Stack

- **TypeScript** — typed application enhancements and page entrypoint
- **HTML5** — semantic page structure
- **CSS3** — responsive layout, animation, and black/white theme
- **JavaScript** — existing browser interactions and data rendering
- **Vite** — local development server and production build

> This is a vanilla TypeScript + HTML/CSS/JavaScript frontend. It does not use React or a backend.

## Features

- Premium black-and-white visual design
- Dark / Light theme support
- Responsive navigation and layouts
- Animated hero and profile monogram
- About section
- Education timeline and academic results
- Programming and technical skills
- AI prompt engineering and analytical expertise
- Contact details and contact form interface
- Privacy and Terms pages
- Keyboard focus accessibility
- Data-driven profile content via `data.json`

## Project Structure

```text
arman-hossen-portfolio/
├── index.html
├── privacy.html
├── terms.html
├── data.json
├── style.css
├── scripts/
│   └── script.js
├── src/
│   └── main.ts
├── public/
│   ├── data.json
│   └── images/
│       └── favicon.ico
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Requirements

- Node.js 18 or later
- npm

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The optimized website will be generated in the `dist/` folder.

## Customize Arman's Information

Edit `data.json`:

- `profile`: name, role, summary
- `about`: biography and stats
- `education`: university, college, school and results
- `skills`: programming, web, AI and analytical skills
- `contact`: email, phone and location
- `projects`: add verified projects when available

## TypeScript, JavaScript, HTML and CSS

- Write typed browser enhancements in `src/main.ts`.
- The TypeScript entry imports `scripts/script.js` for the existing portfolio behavior.
- Vite compiles TypeScript to browser-compatible JavaScript during development/build.
- Update page structure in HTML and visual styles in `style.css`.

Java, Python and JavaScript are listed as Arman's programming skills where applicable; they are not all used to build this website.

## Contact

**Md. Arman Hossen**  
Bashundhara, Dhaka, Bangladesh  
Email: hossenarmanshakuat@gmail.com
Phone: +8801408415463
