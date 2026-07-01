# Premium React Developer Portfolio

A stunning, premium, and highly responsive developer portfolio built in React JS. It is designed with modern web aesthetics—including glassmorphism, floating ambient background blurs, radial profile glows, micro-interactions, and a blinking-free dark mode.

---

## 🚀 Key Features Built & Developed

### 1. Modern UI/UX & Rich Aesthetics
* **Ambient Background Blobs**: Three floating radial gradient blurs (violet, sky-blue, emerald) drift slowly in the background (`mix-blend-mode: multiply` on light mode, `mix-blend-mode: screen` on dark mode), creating visual depth.
* **Floating Avatar Glow**: The hero profile picture floats dynamically, backed by a pulsing shape-shifting radial gradient glow.
* **Glassmorphism Design**: Standardized card layout patterns (`backdrop-filter: blur(12px)`) with thin borders across About cards, Skill grids, Portfolio layouts, and Contact cards.
* **Custom Scrollbars & Micro-Interactions**: Features a theme-aware curved scrollbar and bounce/slide hover transitions on buttons and social icons.

### 2. Interactive Portfolio Section
* Displays 8 professional projects categorized into **Mobile Applications** (React Native CLI/TypeScript) and **Web Applications** (React JS):
  1. **Zomo Health** (Mobile Application)
  2. **MailBlitz** (Mobile Application)
  3. **Digital Visiting Card** (Mobile Application)
  4. **HRMS Info** (Mobile Application)
  5. **Cylsys CRM** (Mobile Application)
  6. **E-Admin (Evolve Admin)** (Web Application)
  7. **IT-Asset** (Web Application)
  8. **RichWaves** (Web Application)
* **Dynamic Filters**: Quick toggle filters for *All*, *Mobile Application*, and *Web Application*.
* **Rich Detail Modals**: High-fidelity detail popups showing features checklist, technology stack list, and external Play Store / Demo action buttons.

### 3. Fully Responsive Mobile Navigation
* **Top-Positioned Mobile Header**: Fixed navigation bar at the top on mobile, containing the logo and toggle apps icon.
* **Bottom Sheet Drawer**: Tap menu items to open a navigation drawer sliding up from the bottom of the screen.
* **Auto-Dismiss & Layout Fixes**: Clicking any section link or tapping the top-right `X` button slides the menu down instantly. Fixed positioning layers prevent overlapping click blockages.

### 4. Layout-Shift-Free Theme Toggler
* Standardized light/dark mode triggers using Unicons (`uil-sun` and `uil-moon`).
* Removed layout jumps and theme-switching blinking by locking bounding boxes and utilizing CSS transitions.

---

## 🛠️ Technology Stack

* **Frontend Framework**: React JS (Functional Components & Hooks)
* **Styling**: Vanilla CSS3 (Custom properties, CSS Grid, Flexbox, Keyframes)
* **Animations**: AOS (Animate On Scroll), CSS Keyframe Animations
* **Icons**: Unicons, FontAwesome
* **Interactive UI**: Typewriter Effect

---

## 💻 How to Develop & Run Locally

Follow these steps to set up and run the portfolio on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v14 or higher) and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/Rahulkumarsingh1996/Portfolio-In-React.git
cd Portfolio-In-React
```

### 3. Install Dependencies
Install all the required package dependencies:
```bash
npm install
```

### 4. Start Development Server
Run the local dev server:
```bash
npm start
```
The application will open automatically at [http://localhost:3000](http://localhost:3000). The page will reload if you make edits to the code.

### 5. Build for Production
To build the app for production to the `build` folder:
```bash
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.

---

## 📂 Project Structure

```text
src/
├── assets/                  # Resumes, Logos, and static assets
├── components/
│   └── header/
│       ├── Header.jsx       # Header & Theme Toggler
│       ├── header.css       # Header Navigation styles
│       ├── Home/            # Hero section (typewriter, social, profile blob)
│       ├── about/           # About Info cards
│       ├── skills/          # Skills level progress meters
│       ├── qualification/   # Experience & Education timeline
│       ├── work/            # Portfolio filters, grid cards, details modal
│       ├── contact/         # Form inputs with focus glow and social cards
│       └── footer/          # Navigation links and social footer
├── App.js                   # Parent component & background blobs
├── App.css                  # Global layouts & custom scrollbars
└── index.js                 # Entry point
```