
import { Variants } from 'framer-motion';

// Fade in Upwards Animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 }, // Slightly increased distance
  visible: (customDelay = 0) => ({ // Allow custom delay per item
    opacity: 1,
    y: 0,
    transition: {
      delay: customDelay,
      duration: 0.7, // Slightly longer duration
      ease: [0.6, 0.05, 0.01, 0.9], // Corrected cubic bezier (was -0.01)
    },
  }),
};

// Stagger Children Container
export const staggerContainer: Variants = {
  hidden: { opacity: 1 }, // Container itself is visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time delay between children animations
      delayChildren: 0.1, // Initial delay before children start animating
    },
  },
};

// Button/Interactive Element Hover & Tap Effect
export const buttonHoverTap = {
  hover: {
      scale: 1.06, // Slightly more pronounced scale
      transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { scale: 0.96 } // Slightly more pronounced tap
};

// Card Hover Effect (Lift and Scale)
export const cardHover = {
  hover: {
      y: -10, // Increased lift effect
      scale: 1.04, // Increased scale effect
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)", // Add a subtle shadow lift effect
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } // Smoother easing
  }
};

// Neon Glow Pulse Effect for specific elements
export const neonPulseEffect = (color: string) => ({
  hover: {
    // Using theme colors directly if possible, otherwise pass hex/rgba
    boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 35px ${color}`, // Enhanced glow
    transition: { duration: 0.35, ease: "easeInOut" }
  }
});

// Simple Fade In
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
};

// Slide In from Left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

// Slide In from Right
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};
