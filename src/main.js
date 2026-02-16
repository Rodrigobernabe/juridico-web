import './style.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize Locomotive Scroll (v5 is headless by default but we want smooth)
// Note: If using v4, syntax is different. Assuming latest via npm which is usually 4.1 or 5 beta. 
// Standard v4 usage:
/*
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
*/
// For this environment, I'll attempt a generic init that usually works for v4/5
const locomotiveScroll = new LocomotiveScroll();



// --- Magnetic Button ---
const magneticBtns = document.querySelectorAll('.magnetic');
magneticBtns.forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Move both the button and the text slightly
    gsap.to(btn, {
      x: x * 0.2, // Strength
      y: y * 0.2,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
  });
});

// --- Stats Counter Animation ---
const stats = document.querySelectorAll('.stat-number');

stats.forEach((stat) => {
  const target = +stat.getAttribute('data-target'); // Get target number

  // Use ScrollTrigger to start animation when in view
  ScrollTrigger.create({
    trigger: stat,
    start: 'top 85%',
    once: true, // Only run once
    onEnter: () => {
      // Animate the object { val: 0 } to { val: target }
      const counter = { val: 0 };
      gsap.to(counter, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          // Format number (e.g. integer)
          // If target is small (8), just show int. If large (500), show int.
          // If target is 100 (percentage), we might want to append % but dirty simple way:
          // We'll set the text content to the rounded value.
          // Check if original had + or % suffix using context or just raw number

          let formatted = Math.ceil(counter.val);

          // Re-add symbols based on data-target content or context
          if (stat.nextElementSibling && stat.nextElementSibling.textContent.includes('Compromiso')) {
            stat.textContent = formatted + '%';
          } else if (stat.nextElementSibling && stat.nextElementSibling.textContent.includes('Visas')) {
            stat.textContent = '+' + formatted;
          } else {
            stat.textContent = formatted;
          }
        }
      });
    }
  });
});

// --- Initial Hero Animations (GSAP Enhanced) ---
// Enhance the CSS fade-in with a little scale or stagger if desired, 
// but CSS handles the base. We can add a parallax effect to the hero bg here.

gsap.to('.hero', {
  backgroundPosition: '50% 100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

// --- Horizontal Scroll Service Gallery ---
const marqueeContainer = document.querySelector('.services-marquee-container');
const marqueeTrack = document.querySelector('.marquee-track');

if (marqueeContainer && marqueeTrack) {
  // Use ScrollTrigger to pin and scroll horizontally
  // We use a functional value for 'x' to handle resizing properly.

  let getScrollAmount = () => {
    let trackWidth = marqueeTrack.scrollWidth;
    let containerWidth = window.innerWidth;
    return -(trackWidth - containerWidth);
  };

  const tween = gsap.to(marqueeTrack, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: marqueeContainer,
      start: "top top",
      end: () => "+=" + (marqueeTrack.scrollWidth - window.innerWidth), // Scroll distance
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true // Debugging
    }
  });
}



gsap.to('.animated-line', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  },
  strokeDashoffset: 0,
  ease: 'none'
});

console.log("Legal Excellence Site Initialized - VIP Mode");
