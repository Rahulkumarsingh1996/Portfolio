# Portfolio-in-React-
# 🌟 Premium React Developer Portfolio

A stunning, state-of-the-art developer portfolio built using React JS. The portfolio features a modern glassmorphic theme, smooth hover elevations, interactive technology color glows, and layout-shift-free dark mode toggling.

---

## 🎨 Premium Visual Architecture & UI/UX Features

### 1. Ambient Background Glows
* **Layered Space Depth**: Features three custom floating radial gradient blurs (`blob-1`, `blob-2`, `blob-3`) in the background of the app wrapper. 
* **Dynamic Blend Modes**: Uses `mix-blend-mode: multiply` on light mode to blend with the light-grey background, and switches to `mix-blend-mode: screen` with lower opacity on dark mode.
* **Morphing Profile Backdrop**: The Hero profile image floats in a keyframe-animated blob container, backed by a pulsing shape-shifting gradient glow.

### 2. Interactive Portfolio grid
* Displays 8 professional developer projects categorized into **Mobile Applications** (React Native CLI & TypeScript) and **Web Applications** (React JS):
  * **Zomo Health** (React Native CLI/TypeScript App with Play Store link)
  * **MailBlitz** (React Native marketing app with Play Store link)
  * **Digital Visiting Card** (Modern networking QR card app with Play Store link)
  * **HRMS Info** (Employee check-in & leave request app with Play Store link)
  * **Cylsys CRM** (React Native search, bookmarking, and Redux CRM app with Play Store link)
  * **E-Admin (Evolve Admin)** (Enterprise dashboard for office travel, vendors, and visitor logs)
  * **IT-Asset** (Hardware inventory and device allocation controller dashboard)
  * **RichWaves** (Streaming wave layout landing page built with Vite)
* **Tab Filters**: Filter between **All**, **Mobile Application**, and **Web Application** instantly.
* **Pop-Up Modals**: Opens a details sheet presenting project overviews, deliverables lists, and external launch action keys.

### 3. Responsive Header & Navigation
* **Top-Positioned Header**: Fixed at the top on mobile, showing the logo and menu toggle icon.
* **Bottom Sheet Menu Drawer**: Tapping the menu button slides the navigation drawer up from the bottom of the screen.
* **Auto-Close Triggers**: Clicking any section link or tapping the top-right `X` close icon slides the drawer down.
* **Layout Containment Fix**: Bypasses browser rendering engine containing block bugs by transitioning GPU-accelerated `transform: translateY` animations.

### 4. Blinking-Free Dark Mode
* Toggles between standard light mode and pure black (`#000`) dark mode smoothly.
* Uses fixed bounding boxes on standard Unicons (`uil-sun` and `uil-moon`) to prevent layout-shifts or jumps when clicking.

---

## 📂 Directory Layout & Architecture

```text
Portfolio-In-React/
├── public/
│   ├── index.html           # Main HTML Template (imports Unicons & Fonts)
│   └── favicon.ico          # Browser Tab Icon
├── src/
│   ├── assets/              # Developer CV (PDF), profile images, and logos
│   ├── components/
│   │   └── header/
│   │       ├── Header.jsx   # Top-fixed header, theme toggler, and mobile menu state
│   │       ├── header.css   # Glassmorphic header, active menu dots, and mobile layout rules
│   │       ├── Home/        # Hero section (Data.jsx, Social.jsx, ScrollDown.jsx, home.css)
│   │       ├── about/       # Experience, projects delivered, and biography text
│   │       ├── skills/      # Frontend & Mobile development progress meters
│   │       ├── qualification/# Education & Job timelines with pulsing nodes
│   │       ├── work/        # Portfolio tabs, grid cards, details modal, and glows
│   │       ├── contact/     # WhatsApp & email link cards, message form, and glows
│   │       └── footer/      # Navigation links and social brand directories
│   ├── App.js               # Entry components container & background ambient blobs
│   ├── App.css              # Global styling tokens, scrollbars, and buttons
│   └── index.js             # DOM render script
├── package.json             # NPM dependencies list
└── README.md                # Documentation guide
```

---

## 🛠️ Technology Stack

* **Core**: React JS (v18+)
* **Styling**: Vanilla CSS3 (Custom Properties/CSS Variables, Grid, Flexbox, Keyframes)
* **Icon Packs**: Unicons, FontAwesome Icons
* **Helper Libraries**: Typewriter Effect, AOS (Animate On Scroll)

---

## 💻 Installation & Local Development

Follow these steps to run the portfolio on your local system:

### 1. Clone the Repository
```bash
git clone https://github.com/Rahulkumarsingh1996/Portfolio-In-React.git
cd Portfolio-In-React
```

### 2. Install Package Dependencies
Install all package configurations:
```bash
npm install
```

### 3. Start Development Server
Launch the React development server:
```bash
npm start
```
The application will open automatically at [https://rahulsinghportfolio-info.netlify.app/](https://rahulsinghportfolio-info.netlify.app/). The server supports live-reloading.

### 4. Build for Production
To bundle the portfolio into static assets optimized for production deployments:
```bash
npm run build
```
This builds the files into the `build` directory for deployment on platforms like GitHub Pages, Vercel, Netlify, or Hostinger.
