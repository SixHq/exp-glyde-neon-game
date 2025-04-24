
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- Base Palette ---
        'neon-bg': '#0a0a0f',
        'neon-surface': '#1a1a2e',
        'neon-border': '#3a3a5e',
        // --- Accent Neon Colors ---
        'electric-blue': '#00ffff',
        'cyber-pink': '#ff00ff',
        'vibrant-green': '#39ff14',
        'neon-yellow': '#fff01f',
        // --- Text Colors ---
        'text-primary': '#e0e0ff',
        'text-secondary': '#a0a0c0',
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        // Standard Glows
        'neon-blue': '0 0 5px theme(colors.electric-blue), 0 0 10px theme(colors.electric-blue), 0 0 20px theme(colors.electric-blue), 0 0 40px theme(colors.electric-blue / 50%)',
        'neon-pink': '0 0 5px theme(colors.cyber-pink), 0 0 10px theme(colors.cyber-pink), 0 0 20px theme(colors.cyber-pink), 0 0 40px theme(colors.cyber-pink / 50%)',
        'neon-green': '0 0 5px theme(colors.vibrant-green), 0 0 10px theme(colors.vibrant-green), 0 0 20px theme(colors.vibrant-green), 0 0 40px theme(colors.vibrant-green / 50%)',
        'neon-yellow': '0 0 5px theme(colors.neon-yellow), 0 0 10px theme(colors.neon-yellow), 0 0 20px theme(colors.neon-yellow), 0 0 40px theme(colors.neon-yellow / 50%)',
        // Subtle Border Glows
        'neon-border-glow-blue': '0 0 3px theme(colors.electric-blue / 80%)',
        'neon-border-glow-pink': '0 0 3px theme(colors.cyber-pink / 80%)',
        'neon-border-glow-green': '0 0 3px theme(colors.vibrant-green / 80%)',
        'neon-border-glow-yellow': '0 0 3px theme(colors.neon-yellow / 80%)',
      },
      keyframes: {
        // Accordion animations (from tailwindcss-animate)
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Custom neon pulse animations (ensure these are present from Section 1)
        'neon-pulse-blue': {
            '0%, 100%': { boxShadow: '0 0 2px theme(colors.electric-blue), 0 0 5px theme(colors.electric-blue), 0 0 10px theme(colors.electric-blue / 70%)' },
            '50%': { boxShadow: '0 0 5px theme(colors.electric-blue), 0 0 10px theme(colors.electric-blue), 0 0 20px theme(colors.electric-blue / 50%)' },
        },
         'neon-pulse-pink': {
            '0%, 100%': { boxShadow: '0 0 2px theme(colors.cyber-pink), 0 0 5px theme(colors.cyber-pink), 0 0 10px theme(colors.cyber-pink / 70%)' },
            '50%': { boxShadow: '0 0 5px theme(colors.cyber-pink), 0 0 10px theme(colors.cyber-pink), 0 0 20px theme(colors.cyber-pink / 50%)' },
        },
        'neon-pulse-green': {
            '0%, 100%': { boxShadow: '0 0 2px theme(colors.vibrant-green), 0 0 5px theme(colors.vibrant-green), 0 0 10px theme(colors.vibrant-green / 70%)' },
            '50%': { boxShadow: '0 0 5px theme(colors.vibrant-green), 0 0 10px theme(colors.vibrant-green), 0 0 20px theme(colors.vibrant-green / 50%)' },
        },
         'neon-pulse-yellow': {
            '0%, 100%': { boxShadow: '0 0 2px theme(colors.neon-yellow), 0 0 5px theme(colors.neon-yellow), 0 0 10px theme(colors.neon-yellow / 70%)' },
            '50%': { boxShadow: '0 0 5px theme(colors.neon-yellow), 0 0 10px theme(colors.neon-yellow), 0 0 20px theme(colors.neon-yellow / 50%)' },
        },
        // Add new fade-in-up animation
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'neon-pulse-blue': 'neon-pulse-blue 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-pulse-pink': 'neon-pulse-pink 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-pulse-green': 'neon-pulse-green 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-pulse-yellow': 'neon-pulse-yellow 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Add utility for the new animation with delays
        // Uses tailwindcss-animate convention: [name] [duration] [timing-function] [delay] [fill-mode]
        // Note: tailwindcss-animate v1.0+ handles fill-mode automatically via `animate-` prefix or config
        'fade-in-up': 'fade-in-up 0.8s ease-out', // Base animation
        'fade-in-up-200': 'fade-in-up 0.8s ease-out 0.2s', // Delay 200ms
        'fade-in-up-400': 'fade-in-up 0.8s ease-out 0.4s', // Delay 400ms
        'fade-in-up-1000': 'fade-in-up 0.8s ease-out 1s', // Delay 1000ms (for scroll indicator)
      },
    },
  },
  plugins: [
      require("tailwindcss-animate"), // Ensures animate-fill-forwards etc. are available
      plugin(function({ addUtilities, theme }) {
        const textGlowUtilities = Object.entries(theme('colors')).reduce((acc, [key, value]) => {
            // Target specific neon colors for text glow effects
            if (typeof value === 'string' && (key.includes('electric') || key.includes('cyber') || key.includes('vibrant') || key.includes('neon-yellow'))) {
                // Creates utilities like .text-glow-electric-blue
                acc[`.text-glow-${key}`] = { textShadow: `0 0 5px ${value}, 0 0 10px ${value}` };
            } else if (typeof value === 'object' && value != null) {
                // Optional: Handle nested color shades if needed (e.g., blue-500)
                 Object.entries(value).forEach(([shade, colorValue]) => {
                    if (typeof colorValue === 'string') {
                        // Creates utilities like .text-glow-blue-500
                        acc[`.text-glow-${key}-${shade}`] = { textShadow: `0 0 5px ${colorValue}, 0 0 10px ${colorValue}` };
                    }
                 });
            }
            return acc;
        }, {} as Record<string, any>); // Type assertion for the accumulator

        addUtilities(textGlowUtilities);
     })
  ],
} satisfies Config

export default config