import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { UsersRound, Trophy, Gamepad2, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations'; // Import variants

// Interface and Data (ensure data is complete)
interface Feature { icon: React.ElementType; title: string; description: string; color: 'electric-blue' | 'cyber-pink' | 'vibrant-green' | 'neon-yellow'; shadow: 'neon-blue' | 'neon-pink' | 'neon-green' | 'neon-yellow'; }
const features: Feature[] = [
    { icon: UsersRound, title: "Global Community Hub", description: "Connect with thousands of players worldwide. Find teammates, join squads, and forge lasting friendships in a vibrant, inclusive atmosphere.", color: 'electric-blue', shadow: 'neon-blue', },
    { icon: Trophy, title: "Exclusive Tournaments", description: "Test your skills in regular, high-stakes tournaments across various popular games. Compete for glory, unique digital rewards, and climb the NeonGamers leaderboards.", color: 'cyber-pink', shadow: 'neon-pink', },
    { icon: Gamepad2, title: "Cross-Platform Sync", description: "Seamlessly link and integrate your gaming profiles. Track stats, achievements, and progress across multiple platforms (PC, Console, Mobile) all in one place.", color: 'vibrant-green', shadow: 'neon-green', },
    { icon: Zap, title: "Instant LFG", description: "Find groups immediately with our intelligent 'Looking for Group' system. Filter by game, playstyle, skill level, and communication preferences to find your perfect match fast.", color: 'neon-yellow', shadow: 'neon-yellow', },
];
// Valid background pattern URL obtained via Image Url Tool
const backgroundPatternUrl = "https://www.shutterstock.com/image-vector/hud-grid-tech-interface-futuristic-600nw-2283864313.jpg";

export function KeyFeaturesSection() {
    return (
        <motion.section // Wrap section for viewport animation trigger
            id="key-features"
            className="py-20 md:py-28 bg-neon-bg relative overflow-hidden border-t border-neon-border/30"
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true, amount: 0.15 }} // Trigger once, when 15% is visible
            variants={staggerContainer} // Apply stagger container variants
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.025] bg-repeat" style={{ backgroundImage: `url(${backgroundPatternUrl})` }}></div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-text-primary"
                    variants={fadeInUp} // Animate heading
                >
                    Unlock Your <span className="text-electric-blue text-glow-electric-blue">Potential</span>
                </motion.h2>

                {/* Features Grid - Apply stagger to the grid container */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerContainer} // This ensures children stagger
                >
                    {features.map((feature, index) => (
                        <motion.div // Wrap each card item for individual animation + hover
                            key={index}
                            variants={fadeInUp} // Each card fades in up (staggered by parent)
                            whileHover="hover" // Reference the hover variant name
                        >
                             {/* Apply cardHover variant for lift/scale */}
                            <motion.div variants={cardHover} className="h-full">
                                <Card
                                    className={cn(
                                        // Base Styles
                                        "group bg-neon-surface border border-neon-border rounded-xl shadow-lg overflow-hidden h-full",
                                        "transition-shadow duration-300 ease-in-out", // Only transition shadow via CSS if needed
                                        "relative",
                                        // CSS hover styles for border/glow (Framer handles transform/scale)
                                        "hover:border-transparent hover:shadow-none",
                                        // Neon Border Glow Effect (using ::before)
                                        "before:absolute before:inset-0 before:z-[-1] before:rounded-[calc(0.75rem+1px)] before:border-2 before:border-transparent before:opacity-0 before:transition-all before:duration-300 before:ease-in-out",
                                        `group-hover:before:border-${feature.color} group-hover:before:shadow-${feature.shadow} group-hover:before:opacity-100`
                                    )}
                                >
                                    <CardHeader className="items-center text-center pt-8 pb-4">
                                        <div className={cn( "mb-5 rounded-full p-3.5 bg-neon-border/30 border border-neon-border/50 transition-all duration-300 ease-in-out", `group-hover:border-${feature.color}/70 group-hover:bg-${feature.color}/15 group-hover:shadow-${feature.shadow}/50` )}>
                                            <feature.icon className={cn( "h-10 w-10 transition-colors duration-300", `text-${feature.color}/80 group-hover:text-${feature.color}` )} aria-hidden="true" />
                                        </div>
                                        <CardTitle className={cn( "text-xl md:text-2xl font-semibold transition-colors duration-300", `text-${feature.color} group-hover:text-glow-${feature.color}` )}>
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center pb-8 px-6">
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
