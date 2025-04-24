import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Use standard button
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { fadeInUp, buttonHoverTap, staggerContainer, fadeIn } from '@/lib/animations'; // Import variants

// Valid background image URL obtained via Image Url Tool
const backgroundImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/050/612/250/small/futuristic-cityscape-with-vibrant-neon-lights-and-digital-technology-creating-an-immersive-cyberpunk-atmosphere-free-video.jpg";

export function HeroSection() {
    return (
        <motion.section // Animate the section itself with fade-in
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative flex h-[calc(100vh-4rem)] min-h-[650px] md:min-h-[700px] items-center justify-center overflow-hidden py-20 md:py-32"
            style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
            aria-labelledby="hero-headline"
        >
            {/* Dark semi-transparent overlay */}
            <div className="absolute inset-0 bg-neon-bg/85 backdrop-blur-sm"></div>

            {/* Optional: Subtle Animated Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.07]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0, 255, 255, 0.15)" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Content Container - Apply stagger effect */}
            <motion.div
                className="container relative z-10 flex flex-col items-center text-center px-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible" // Trigger stagger on load
            >
                {/* Headline */}
                <motion.h1
                    id="hero-headline"
                    className={cn(
                        "text-5xl font-extrabold tracking-tight text-electric-blue sm:text-6xl md:text-7xl lg:text-8xl",
                        "text-glow-electric-blue"
                    )}
                    variants={fadeInUp} // Use fadeInUp variant
                >
                    Enter the Neon Nexus
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className={cn(
                        "mt-6 max-w-xl text-lg text-text-secondary sm:text-xl md:max-w-2xl"
                    )}
                    variants={fadeInUp} // Use fadeInUp variant
                >
                    Forge alliances, conquer challenges, and define your legacy in the ultimate gaming community built for the future.
                </motion.p>

                {/* Call to Action Button */}
                <motion.div // Wrap the Link/Button for animation
                    variants={fadeInUp} // Use fadeInUp variant
                    whileHover="hover" // Apply hover from variants
                    whileTap="tap" // Apply tap from variants
                    custom={{ ...buttonHoverTap }} // Pass variants object if needed or define directly
                    className={cn("mt-10")} // Move margin here
                >
                    <Link
                        to="/join"
                        aria-label="Join the NeonGamers community"
                    >
                         {/* Use standard button, wrapped in motion.div */}
                        <Button
                            variant="outline"
                            size="lg"
                            className={cn(
                                "group relative overflow-hidden rounded-full border-2 px-8 py-6 text-lg font-semibold", // Removed CSS transition as Motion handles it
                                "border-cyber-pink text-cyber-pink bg-transparent",
                                "hover:bg-cyber-pink hover:text-neon-bg hover:shadow-neon-pink", // Keep CSS hover for style changes
                                "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyber-pink/60 focus-visible:shadow-neon-pink focus-visible:bg-cyber-pink/10",
                                "before:absolute before:inset-0 before:z-[-1] before:bg-cyber-pink/15 before:opacity-0 before:blur-lg before:transition-opacity before:duration-300 hover:before:opacity-100"
                            )}
                        >
                            <span className="relative z-10 flex items-center gap-2.5">
                                Join the Revolution
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div // Animate the indicator with fade-in up after a delay
                 variants={fadeInUp}
                 initial="hidden"
                 animate="visible"
                 custom={1.2} // Custom delay (matches transition delay below)
                 transition={{ delay: 1.2, duration: 0.8, ease:"easeOut" }} // Use variant's duration/easing
                 className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
            >
                {/* Bounce animation for the anchor */}
                <motion.a
                    href="#key-features" // Link to the next section
                    aria-label="Scroll down to key features section"
                    className="inline-block p-2 text-text-secondary hover:text-electric-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 rounded-full"
                    animate={{ y: [0, 8, 0] }} // Simple bounce animation
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} // Slower, delayed bounce
                >
                   <ChevronDown className="w-8 h-8" />
                </motion.a>
            </motion.div>
        </motion.section>
    );
}