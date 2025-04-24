
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';
// Import animation variants
import { fadeInUp, staggerContainer, cardHover, fadeIn } from '@/lib/animations';
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

// Interface, Data, Helpers (Keep as defined in Section 8)
interface Testimonial { id: number; quote: string; name: string; username: string; avatarUrl: string; color: 'electric-blue' | 'cyber-pink' | 'vibrant-green' | 'neon-yellow'; }
const testimonials: Testimonial[] = [ /* ... testimonial data from Section 8 ... */
    { id: 1, quote: "NeonGamers is hands-down the best community I've joined. The LFG tool actually works, and I found my main squad here. The events are always hype!", name: "Alex 'NeonNinja' R.", username: "@NeonNinja42", avatarUrl: "https://static.vecteezy.com/system/resources/previews/025/948/856/non_2x/futuristic-blue-glasses-metaverse-boy-avatar-mascot-gaming-vector.jpg", color: 'electric-blue', },
    { id: 2, quote: "Finally, a place that gets the cyberpunk aesthetic right! The platform is smooth, and finding teammates for Cyberpunk 2077 or Apex is super easy.", name: "Morgan 'Glitch'", username: "@CyberRider", avatarUrl: "https://as1.ftcdn.net/v2/jpg/04/11/34/60/1000_F_411346031_jo5AQLmmeWAuRfWiaONWrxKh1wRoqlJP.jpg", color: 'cyber-pink', },
    { id: 3, quote: "The regular tournaments keep things exciting, and the community is surprisingly non-toxic compared to other places. Great moderation and positive vibes.", name: "Sam 'QuickScope'", username: "@QuickScopeQueen", avatarUrl: "https://thumbs.dreamstime.com/z/streamer-african-beautiful-girl-shows-heart-sign-hands-professional-gamer-playing-online-games-computer-neon-color-210571132.jpg", color: 'vibrant-green', },
    { id: 4, quote: "I appreciate the focus on community building beyond just playing games. The developer AMAs and workshops are a great touch.", name: "Dana 'VoidWalker'", username: "@VoidWalker", avatarUrl: "https://cdna.artstation.com/p/assets/images/images/047/704/338/large/hanberg-yu-0326.jpg?1648224204", color: 'neon-yellow', },
    { id: 5, quote: "The cross-platform integration is a lifesaver! Tracking my stats across PC and console in one place is incredibly convenient.", name: "Kai 'BlueScreen'", username: "@DigitalGhost", avatarUrl: "https://as2.ftcdn.net/v2/jpg/08/28/54/53/1000_F_828545358_ppkcOGE6tUY2FRk4xaLfbhuda1cxIrjN.jpg", color: 'electric-blue', },
    { id: 6, quote: "Joined for the Valorant tournaments, stayed for the awesome people. It feels like a real community, not just a random LFG server.", name: "Max 'CodeMaster'", username: "@BuildMasterFlex", avatarUrl: "https://images.pexels.com/photos/2538122/pexels-photo-2538122.jpeg?cs=srgb&dl=pexels-connor-danylenko-534256-2538122.jpg&fm=jpg", color: 'cyber-pink', },
];
const getNeonColorClass = (_color: Testimonial['color'], type: 'text' | 'border' | 'shadow' | 'glow' | 'ring' | 'bg') => { /* ... */ return ''; };
const backgroundPatternUrl = "https://www.photoshopsupply.com/wp-content/uploads/2019/11/hexagon-pattern-dark.jpg";

export function TestimonialsSection() {
    const plugin = useRef( Autoplay({ delay: 7000, stopOnInteraction: true }) );

    return (
        <motion.section // Animate section entrance
            id="testimonials"
            className="py-20 md:py-28 bg-neon-bg relative border-t-2 border-neon-border/50 overflow-hidden"
            style={{ backgroundImage: `url(${backgroundPatternUrl})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
             aria-labelledby="testimonials-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer} // Stagger heading and carousel
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-neon-bg/90 z-0"></div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Heading */}
                <motion.h2 variants={fadeInUp} id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-text-primary">
                    From the <span className="text-electric-blue text-glow-electric-blue">Community</span>
                </motion.h2>

                {/* Testimonials Carousel - Animate container */}
                 <motion.div variants={fadeIn}>
                     <Carousel
                        opts={{ align: "start", loop: true }}
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        className="w-full max-w-4xl mx-auto"
                        aria-label="Member Testimonials Carousel"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    {/* Animate each item */}
                                    <motion.div
                                        className="p-1 h-full"
                                        variants={fadeInUp}
                                        custom={index * 0.1} // Optional delay
                                        initial="hidden"
                                        whileInView="visible" // Animate when item enters view
                                        viewport={{ once: true, amount: 0.4 }} // Trigger when 40% visible
                                        whileHover="hover" // Enable hover
                                    >
                                         {/* Apply hover effect to wrapper */}
                                        <motion.div variants={cardHover} className="h-full">
                                            <Card className={cn( /* Base Styles from Section 8 */ "h-full flex flex-col justify-between bg-neon-surface/80 border border-neon-border/70 rounded-xl shadow-lg overflow-hidden", `hover:border-${testimonial.color} hover:shadow-${testimonial.color}/30` )}>
                                                <CardContent className="p-6 pb-4 flex-grow">
                                                    <blockquote className={cn( "relative border-l-4 pl-4 italic text-text-secondary text-base md:text-lg leading-relaxed", getNeonColorClass(testimonial.color, 'border') )}>
                                                         <Quote className={cn( "absolute top-[-0.5rem] left-[-0.1rem] w-8 h-8 opacity-15 transform scale-x-[-1]", getNeonColorClass(testimonial.color, 'text') )} />
                                                        {testimonial.quote}
                                                    </blockquote>
                                                </CardContent>
                                                <div className="flex items-center gap-4 p-6 pt-2 bg-neon-surface/50 border-t border-neon-border/50 mt-auto">
                                                    <Avatar className={cn( "h-12 w-12 border-2", getNeonColorClass(testimonial.color, 'border') )}>
                                                        <AvatarImage src={testimonial.avatarUrl} alt={`${testimonial.name}'s avatar`} />
                                                        <AvatarFallback className="bg-neon-border text-text-secondary font-semibold"> {testimonial.name.split(' ').map(n => n[0]).filter((_, i, arr) => i === 0 || i === arr.length - 1).join('').toUpperCase()} </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className={cn( "font-semibold text-lg transition-colors duration-200", getNeonColorClass(testimonial.color, 'text'), `hover:${getNeonColorClass(testimonial.color, 'glow')}` )}> {testimonial.name} </p>
                                                        <p className="text-sm text-text-secondary">{testimonial.username}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Navigation Buttons - Add subtle hover/tap */}
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                             <CarouselPrevious className={cn(/* Styles from Section 8 */ "absolute left-[-12px] sm:left-[-16px] lg:left-[-30px] top-1/2 -translate-y-1/2 z-20", "bg-neon-surface/80 text-text-primary border-2 border-neon-border rounded-full h-10 w-10", "hover:border-electric-blue hover:text-electric-blue hover:shadow-neon-border-glow-blue hover:bg-electric-blue/10", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-electric-blue focus-visible:border-electric-blue focus-visible:text-electric-blue", "transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none")} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <CarouselNext className={cn(/* Styles from Section 8 */ "absolute right-[-12px] sm:right-[-16px] lg:right-[-30px] top-1/2 -translate-y-1/2 z-20", "bg-neon-surface/80 text-text-primary border-2 border-neon-border rounded-full h-10 w-10", "hover:border-electric-blue hover:text-electric-blue hover:shadow-neon-border-glow-blue hover:bg-electric-blue/10", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-electric-blue focus-visible:border-electric-blue focus-visible:text-electric-blue", "transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none")} />
                        </motion.div>
                    </Carousel>
                </motion.div>
            </div>
        </motion.section>
    );
}