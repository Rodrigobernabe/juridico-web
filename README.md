# Legal Excellence in Motion

A high-performance, animated legal services website built with Vite, Vanilla JS, GSAP, and Locomotive Scroll.

## Tech Stack

- **Vite**: Ultra-fast build tool.
- **GSAP**: Industry-standard animation library (ScrollTrigger, TweenMax).
- **Locomotive Scroll**: Smooth scrolling experience.
- **CSS3 Variables**: Theming and responsive design.

## Project Structure

- `index.html`: Main entry point with semantic HTML5.
- `src/main.js`: Animation logic, ScrollTrigger setup, and component initialization.
- `src/style.css`: Global styles, reset, and component styling.

## Features

- **Split Layout Hero**: Animated text reveal and cinemagraph placeholder.
- **Bento Grid Services**: Interactive grid with hover effects and background images.
- **Marquee**: Parallax scrolling text.
- **Sticky Cards**: Contact sections stack vertically on scroll.
- **Custom Cursor**: Interactive cursor with blend mode effects.
- **Magnetic Buttons**: CTAs that attract the cursor.

## How to Run

1.  **Install Dependencies** (if not already installed):
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

4.  **Preview Production Build**:
    ```bash
    npm run preview
    ```

## Customization

- **Colors**: Edit CSS variables in `src/style.css` (`--color-oxford-blue`, etc.).
- **Content**: Update text in `index.html`.
- **Animations**: Tweak GSAP timings in `src/main.js`.
