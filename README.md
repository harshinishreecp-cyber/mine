# 💕 Romantic Premium UI - Our Story

A beautiful, romantic single-page website built with React, Tailwind CSS, and Framer Motion featuring luxury emotional UI with magical animations.

## ✨ Features

- **Hero Section** - Full-screen greeting with floating particles and glowing text
- **Animated Timeline** - Scroll-based love story timeline with glassmorphism cards
- **Romantic Poem** - Floating glass card with falling petals animation
- **Valentine Week Cards** - 3D flip cards for each day of Valentine's week
- **Love Letter** - Interactive animated envelope that opens to reveal a letter
- **Final Section** - Heartbeat animation with glowing effects
- **Floating Hearts** - Continuous heart animations across the entire page
- **Music Toggle** - Control background romantic music
- **Fully Responsive** - Beautiful on all devices

## 🎨 Color Theme

- Blush Pink (#FFB6C1)
- Soft Lavender (#E6E6FA)  
- Warm Cream (#FFF8E7)
- White Glow

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (usually http://localhost:5173)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🎵 Adding Background Music (Optional)

To add romantic background music:

1. Add your music file (MP3 format) to the `public` folder and name it `romantic-music.mp3`
2. Uncomment the audio element in `src/App.jsx` (lines 71-73)

## 📱 Mobile Responsive

The website is fully responsive and looks beautiful on:
- Mobile phones
- Tablets
- Desktop computers
- Large displays

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with particles
│   ├── Timeline.jsx       # Animated love timeline
│   ├── Poem.jsx          # Romantic poem with petals
│   ├── ValentineWeek.jsx # Flip cards for Valentine week
│   ├── LoveLetter.jsx    # Animated envelope letter
│   ├── FinalSection.jsx  # Final heartbeat section
│   └── FloatingHearts.jsx # Background floating hearts
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🎭 Animations

All animations are powered by Framer Motion and include:
- Fade-in effects
- Slide-in transitions
- 3D flip cards
- Floating particles
- Heartbeat animations
- Glow effects
- Scroll-based reveals

## 💝 Customization

To personalize the content, edit the text in the component files:
- Hero text: `src/components/Hero.jsx`
- Timeline moments: `src/components/Timeline.jsx`
- Poem content: `src/components/Poem.jsx`
- Valentine messages: `src/components/ValentineWeek.jsx`
- Love letter: `src/components/LoveLetter.jsx`

## 📄 License

This project is created for personal use.

---

Made with 💕 and lots of care
