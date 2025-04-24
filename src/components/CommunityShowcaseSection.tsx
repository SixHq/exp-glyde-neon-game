
import { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Card as ShadcnCard, CardContent as ShadcnCardContent } from "@/components/ui/card"; // Alias Shadcn Card
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlayCircle, Camera } from "lucide-react";
// Import animation variants
import { fadeInUp, staggerContainer, cardHover, fadeIn } from '@/lib/animations'; // Use standard cardHover
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

// Interface and Data (ensure data is complete as in Section 5)
interface ShowcaseItem { id: number; type: 'screenshot' | 'video'; title: string; user: string; game: string; imageUrl: string; videoUrl?: string; color: 'electric-blue' | 'cyber-pink' | 'vibrant-green' | 'neon-yellow'; shadow: 'neon-blue' | 'neon-pink' | 'neon-green' | 'neon-yellow'; }
const showcaseItems: ShowcaseItem[] = [ /* ... showcase data from Section 5 ... */
    { id: 1, type: 'screenshot', title: "Clutch 1v4", user: "NeonNinja42", game: "Valorant", imageUrl: "https://gumlet.assettype.com/afkgaming%2F2023-08%2F52735494-c5a5-4f77-8691-7cf2a648cc30%2FCover_Image___Valorant_Clutch_Guide.jpg?compress=true&dpr=1&w=1200", color: 'electric-blue', shadow: 'neon-blue', },
    { id: 2, type: 'video', title: "Epic Boss Takedown", user: "DragonSlayerX", game: "Elden Ring", imageUrl: "https://cdn.vox-cdn.com/thumbor/vF4j6m192-_OtFUI4p2u4wT3hWw=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/70537486/ELDEN_RING_15_4K.0.jpg", videoUrl: "#", color: 'neon-yellow', shadow: 'neon-yellow', },
    { id: 3, type: 'screenshot', title: "Night City Drive", user: "CyberRider", game: "Cyberpunk 2077", imageUrl: "https://cdn.mos.cms.futurecdn.net/9UmK332zQogSUcWk2Db7k8-1200-80.jpg", color: 'cyber-pink', shadow: 'neon-pink', },
    { id: 4, type: 'video', title: "Apex Highlights Reel", user: "QuickScopeQueen", game: "Apex Legends", imageUrl: "https://progameguides.com/wp-content/uploads/2021/09/Featured-Apex-Legends-Best-Team-Comps.jpg", videoUrl: "#", color: 'vibrant-green', shadow: 'neon-green', },
    { id: 5, type: 'screenshot', title: "Victory Royale!", user: "BuildMasterFlex", game: "Fortnite", imageUrl: "https://images.ctfassets.net/pmoqlbqg3ila/4t3kI3DAnu6517SjMVK149/3617b38738a440774b3145a737349e9a/Fortnite-Victory-Royale-Guide-Tips-Strategy.png", color: 'electric-blue', shadow: 'neon-blue', },
    { id: 6, type: 'screenshot', title: "Mountain Vista", user: "PixelPainter", game: "Red Dead Redemption 2", imageUrl: "https://media.wired.co.uk/photos/606dbaf4f197075f1a4a4e3c/16:9/w_1280,c_limit/gm_art_MountainVista_MS%20(1).png", color: 'vibrant-green', shadow: 'neon-green', },
    { id: 7, type: 'video', title: "Rocket League Freestyle", user: "AerialAce", game: "Rocket League", imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2021/04/16113416/rocket-league-musty.jpg", videoUrl: "#", color: 'electric-blue', shadow: 'neon-blue', },
    { id: 8, type: 'screenshot', title: "Cozy Corner Build", user: "SimSettler", game: "The Sims 4", imageUrl: "https://simscommunity.info/wp-content/uploads/2018/12/TS4_x64-2018-12-10-19-15-25.png", color: 'cyber-pink', shadow: 'neon-pink', },
];
// Valid background pattern URL obtained via Image Url Tool
const backgroundPatternUrl = "https://www.shutterstock.com/image-vector/3d-blue-techno-background-big-600nw-2480811763.jpg";

export function CommunityShowcaseSection() {
    const plugin = useRef( Autoplay({ delay: 5000, stopOnInteraction: true }) );

    return (
        <motion.section // Animate section entrance
            id="community-showcase"
            className="py-20 md:py-28 bg-neon-surface/80 relative border-t-2 border-neon-border/50 overflow-hidden"
            style={{ backgroundImage: `url(${backgroundPatternUrl})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
            aria-labelledby="showcase-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer} // Stagger heading and carousel
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-neon-bg/85 z-0"></div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Heading */}
                <motion.h2 variants={fadeInUp} id="showcase-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-primary">
                    Community <span className="text-vibrant-green text-glow-vibrant-green">Showcase</span>
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-center text-text-secondary mb-16 max-w-2xl mx-auto">
                    Check out the latest highlights, epic moments, and creative captures shared by the NeonGamers community.
                </motion.p>

                {/* Carousel - Animate the carousel container */}
                <motion.div variants={fadeIn}>
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        className="w-full max-w-6xl mx-auto"
                        aria-label="Community Showcase Carousel"
                    >
                        {/* Content does not need stagger variant if items animate individually */}
                        <CarouselContent className="-ml-4">
                            {showcaseItems.map((item, index) => (
                                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 group">
                                    {/* Animate each carousel item */}
                                    <motion.div
                                        className="p-1 h-full"
                                        variants={fadeInUp} // Use fadeInUp or a custom slide-in variant
                                        custom={index * 0.1} // Optional custom delay
                                        initial="hidden"
                                        whileInView="visible" // Trigger item animation when it becomes visible
                                        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
                                        whileHover="hover" // Enable hover variant defined below
                                    >
                                        {/* Apply hover scale/lift to the card wrapper */}
                                        <motion.div variants={cardHover} className="h-full">
                                            <a href={item.videoUrl || '#'} target={item.videoUrl ? "_blank" : "_self"} rel="noopener noreferrer">
                                                <ShadcnCard className={cn( /* Base Styles from Section 5 */ "relative overflow-hidden rounded-xl border-2 border-neon-border/60 bg-neon-surface shadow-lg h-full", "transition-all duration-300 ease-in-out", item.videoUrl ? "cursor-pointer" : "cursor-default", `hover:border-${item.color} hover:shadow-${item.shadow}/40 group-hover:border-${item.color} group-hover:shadow-${item.shadow}/40` )}>
                                                    {/* Neon Glow Edge Effect (Keep as is) */}
                                                    <div className={cn( "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition-all duration-300 pointer-events-none z-0", `group-hover:border-${item.color} group-hover:shadow-${item.shadow} group-hover:opacity-75` )}></div>
                                                    <ShadcnCardContent className="relative z-10 flex flex-col items-center justify-center p-0 h-full">
                                                        <AspectRatio ratio={16 / 9} className="w-full">
                                                            <motion.img // Animate image scale on hover
                                                                src={item.imageUrl} alt={item.title} loading="lazy"
                                                                className="object-cover w-full h-full rounded-t-lg" // Removed transform from CSS
                                                                whileHover={{ scale: 1.08 }} // Animate scale directly
                                                                transition={{ duration: 0.35, ease: "easeOut" }}
                                                            />
                                                            {/* Media Type Icon Overlay (Keep as is) */}
                                                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-1.5 text-white" title={item.type === 'video' ? 'Video Clip' : 'Screenshot'}> {item.type === 'video' ? <PlayCircle className="h-5 w-5"/> : <Camera className="h-5 w-5"/>} </div>
                                                            {/* Play Icon for Videos on Hover (Keep as is) */}
                                                            {item.type === 'video' && ( <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 flex items-center justify-center bg-black/40" aria-hidden="true"> <PlayCircle className={cn( "h-16 w-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300", `text-${item.color}` )} /> </motion.div> )}
                                                        </AspectRatio>
                                                        {/* Information Overlay (Keep as is) */}
                                                        <div className={cn( "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white transition-all duration-300 w-full rounded-b-lg" )}>
                                                            <h3 className={cn( "text-lg font-semibold truncate transition-colors duration-300", `group-hover:text-${item.color}` )}> {item.title} </h3>
                                                            <p className="text-sm text-text-secondary/90 truncate"> by <span className="font-medium text-text-primary/90">{item.user}</span> in {item.game} </p>
                                                        </div>
                                                    </ShadcnCardContent>
                                                </ShadcnCard>
                                            </a>
                                        </motion.div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Navigation Buttons - Add subtle hover/tap */}
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <CarouselPrevious className={cn( /* Styles from Section 5 */ "absolute left-[-12px] sm:left-[-16px] md:left-[-20px] top-1/2 -translate-y-1/2 z-20", "bg-neon-surface/80 text-text-primary border-2 border-neon-border rounded-full h-10 w-10", "hover:border-electric-blue hover:text-electric-blue hover:shadow-neon-border-glow-blue hover:bg-electric-blue/10", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-electric-blue focus-visible:border-electric-blue focus-visible:text-electric-blue", "transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none" )} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <CarouselNext className={cn( /* Styles from Section 5 */ "absolute right-[-12px] sm:right-[-16px] md:right-[-20px] top-1/2 -translate-y-1/2 z-20", "bg-neon-surface/80 text-text-primary border-2 border-neon-border rounded-full h-10 w-10", "hover:border-electric-blue hover:text-electric-blue hover:shadow-neon-border-glow-blue hover:bg-electric-blue/10", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-electric-blue focus-visible:border-electric-blue focus-visible:text-electric-blue", "transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none" )} />
                        </motion.div>
                    </Carousel>
                </motion.div>

                 {/* Gallery Link - Animate entrance */}
                 <motion.div variants={fadeInUp} className="text-center mt-16">
                    <Link to="/gallery">
                        <Button variant="link" className="text-electric-blue hover:text-glow-electric-blue text-lg">
                            Explore Full Gallery &rarr;
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}