
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CountdownTimer } from './CountdownTimer'; // Import the countdown timer
import { cn } from '@/lib/utils';
import { format, isPast } from 'date-fns'; // Import isPast
import { CalendarDays, Gamepad2, Ticket, Info } from 'lucide-react'; // Added Info icon
import { CommunityEvent, upcomingEvents } from '@/data/events'; // Import from data source

// --- Helper to get Badge variant based on type ---
const getBadgeVariant = (type: CommunityEvent['type']): "default" | "secondary" | "destructive" | "outline" => {
    switch(type) {
        case 'Tournament': return 'destructive'; // Use destructive (maps to yellow via CSS vars)
        case 'Community Night': return 'secondary'; // Use secondary (maps to pink)
        case 'Workshop': return 'default'; // Use default (maps to blue)
        case 'AMA': return 'outline'; // Use outline (uses border color)
        default: return 'default';
    }
};

// --- Helper to get Neon Color Class ---
const getNeonColorClass = (color: CommunityEvent['neonColor'], type: 'text' | 'border' | 'shadow' | 'glow' | 'bg' | 'ring') => {
    const safeColor = color || 'electric-blue'; // Fallback color
    switch (type) {
        case 'text': return `text-${safeColor}`;
        case 'border': return `border-${safeColor}`;
        case 'shadow': return `shadow-${safeColor}`; // Assumes shadow utility exists e.g., shadow-neon-blue
        case 'glow': return `text-glow-${safeColor}`; // Assumes text-glow utility exists
        case 'bg': return `bg-${safeColor}`;
        case 'ring': return `ring-${safeColor}`; // For focus rings
        default: return '';
    }
};

// --- Upcoming Events Section Component ---
export function UpcomingEventsSection() {
    const featuredEvents = upcomingEvents.filter(event => event.isFeatured && !isPast(event.date));
    const otherEvents = upcomingEvents.filter(event => !event.isFeatured && !isPast(event.date));
    const allUpcomingEvents = upcomingEvents.filter(event => !isPast(event.date));

    // Valid image URL obtained via Image Url Tool
    const defaultEventImageUrl = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gaming-streaming-neon-video-banner-templates-design-bca5b4efeda31380a42574139a295194_screen.jpg?ts=1677559181";

    return (
        <section id="upcoming-events" className="py-20 md:py-28 bg-gradient-to-b from-neon-bg to-neon-surface border-t-2 border-neon-border/50 overflow-hidden">
            <div className="container px-4 md:px-6">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-text-primary">
                    Upcoming <span className="text-cyber-pink text-glow-cyber-pink">Events & Tournaments</span>
                </h2>

                {/* Featured Events Cards */}
                {featuredEvents.length > 0 && (
                    <div className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-electric-blue text-glow-electric-blue">
                            Featured Events
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {featuredEvents.map((event) => (
                                <Card key={event.id} className={cn(
                                    "bg-neon-surface/80 border-2 border-neon-border shadow-lg overflow-hidden group transition-all duration-300 ease-in-out rounded-xl flex flex-col", // Added flex flex-col
                                    `hover:border-${event.neonColor || 'electric-blue'} hover:shadow-${event.neonColor || 'electric-blue'}/50 hover:scale-[1.01]` // Slightly reduced scale
                                )}>
                                    <CardHeader className="p-0 relative">
                                        <AspectRatio ratio={16 / 9}>
                                            <img
                                                src={event.imageUrl || defaultEventImageUrl} // Use fetched default image
                                                alt={`${event.title} banner`}
                                                className="object-cover w-full h-full rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-t-lg"></div>
                                            {/* Type Badge */}
                                            <Badge variant={getBadgeVariant(event.type)} className={cn(
                                                "absolute top-4 left-4 backdrop-blur-sm font-semibold",
                                                // Apply dynamic border and text color based on neonColor for better contrast
                                                getNeonColorClass(event.neonColor, 'border'),
                                                getNeonColorClass(event.neonColor, 'text')
                                            )}>
                                                {event.type}
                                            </Badge>
                                        </AspectRatio>
                                    </CardHeader>
                                    <CardContent className="p-6 relative z-10 flex-grow"> {/* Added flex-grow */}
                                        <CardTitle className={cn("text-2xl font-bold mb-2", getNeonColorClass(event.neonColor, 'text'), `group-hover:${getNeonColorClass(event.neonColor, 'glow')}`)}>
                                            {event.title}
                                        </CardTitle>
                                        <CardDescription className="text-text-secondary mb-4 line-clamp-2">{event.description}</CardDescription>

                                        {/* Event Details */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-text-secondary mb-5 space-y-2 sm:space-y-0">
                                            <div className="flex items-center gap-2" title="Event Date & Time">
                                                <CalendarDays className={cn("w-4 h-4 flex-shrink-0", getNeonColorClass(event.neonColor, 'text'))} aria-hidden="true" />
                                                <span>{format(event.date, 'eee, MMM d, yyyy \'@\' h:mm a')}</span>
                                            </div>
                                            <div className="flex items-center gap-2" title="Game/Platform">
                                                <Gamepad2 className={cn("w-4 h-4 flex-shrink-0", getNeonColorClass(event.neonColor, 'text'))} aria-hidden="true"/>
                                                <span>{event.game}</span>
                                            </div>
                                        </div>

                                        {/* Prize Pool Info */}
                                        {event.prize && (
                                            <div className="mb-6 flex items-center gap-2 text-sm text-neon-yellow text-glow-neon-yellow" title="Prize Information">
                                                <Ticket className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                                                <span className="font-semibold">Prize:</span> {event.prize}
                                            </div>
                                        )}

                                        {/* Countdown Timer */}
                                        <CountdownTimer
                                            targetDate={event.date}
                                            className="mb-6"
                                            digitClassName={cn("text-3xl md:text-4xl font-bold", getNeonColorClass(event.neonColor, 'text'), `group-hover:${getNeonColorClass(event.neonColor, 'glow')}`)}
                                            labelClassName="text-xs text-text-secondary/80 uppercase tracking-wider"
                                        />

                                    </CardContent>
                                     <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 p-6 pt-0"> {/* Allows stacking on small screens */}
                                        {event.registrationLink && (
                                             <Button
                                                variant="outline"
                                                size="lg"
                                                asChild
                                                className={cn(
                                                    "w-full sm:w-auto border-2 text-lg font-semibold transition-all duration-300 ease-out",
                                                    getNeonColorClass(event.neonColor, 'border'),
                                                    getNeonColorClass(event.neonColor, 'text'),
                                                    `hover:${getNeonColorClass(event.neonColor, 'bg')}/15 hover:${getNeonColorClass(event.neonColor, 'shadow')}/40 hover:${getNeonColorClass(event.neonColor, 'glow')}`, // Adjusted hover bg/shadow
                                                    `focus:ring-2 focus:ring-offset-2 focus:ring-offset-neon-surface focus:${getNeonColorClass(event.neonColor, 'ring')}` // Corrected focus ring usage
                                                )}
                                            >
                                                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" aria-label={`Register for ${event.title}`}>
                                                    Register Now
                                                </a>
                                            </Button>
                                        )}
                                         {event.detailsLink && (
                                            <Button
                                                variant="ghost" // Use ghost for secondary action
                                                size="lg"
                                                asChild
                                                className={cn(
                                                    "w-full sm:w-auto text-lg font-semibold transition-all duration-300 ease-out",
                                                    getNeonColorClass(event.neonColor, 'text'),
                                                    `hover:${getNeonColorClass(event.neonColor, 'bg')}/10 hover:${getNeonColorClass(event.neonColor, 'glow')}`,
                                                    `focus:ring-2 focus:ring-offset-2 focus:ring-offset-neon-surface focus:${getNeonColorClass(event.neonColor, 'ring')}` // Corrected focus ring usage
                                                )}
                                            >
                                                 <a href={event.detailsLink} target="_blank" rel="noopener noreferrer" aria-label={`View details for ${event.title}`}>
                                                     View Details
                                                 </a>
                                            </Button>
                                         )}
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Upcoming Events Table */}
                {otherEvents.length > 0 && (
                    <div className="mt-12"> {/* Added margin top */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-vibrant-green text-glow-vibrant-green">
                            More Events
                        </h3>
                        <div className="border border-neon-border rounded-lg overflow-hidden bg-neon-surface/60 shadow-md">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b-neon-border/50 hover:bg-neon-border/10">
                                        <TableHead className="w-[150px] text-text-primary font-semibold pl-6">Date & Time</TableHead> {/* Added padding */}
                                        <TableHead className="text-text-primary font-semibold">Event</TableHead>
                                        <TableHead className="hidden sm:table-cell text-text-primary font-semibold">Game</TableHead> {/* Hide game on xs */}
                                        <TableHead className="text-text-primary font-semibold">Type</TableHead>
                                        <TableHead className="text-right text-text-primary font-semibold pr-6">Details</TableHead> {/* Added padding */}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {otherEvents.map((event) => (
                                        <TableRow key={event.id} className="border-b-neon-border/30 hover:bg-neon-border/20 transition-colors duration-200 group">
                                            <TableCell className="font-medium text-text-secondary py-3.5 pl-6">
                                                {format(event.date, 'MMM d, h:mma')} {/* Slightly shorter format */}
                                            </TableCell>
                                            <TableCell className={cn("font-semibold py-3.5", getNeonColorClass(event.neonColor, 'text'), `group-hover:${getNeonColorClass(event.neonColor, 'glow')}`)}>
                                                {event.title}
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell text-text-secondary py-3.5">{event.game}</TableCell>
                                            <TableCell className="py-3.5">
                                                <Badge variant={getBadgeVariant(event.type)} className={cn(
                                                     "font-mono text-xs px-1.5 py-0.5", // Smaller badge
                                                     getNeonColorClass(event.neonColor, 'border'),
                                                     getNeonColorClass(event.neonColor, 'text')
                                                    )}>
                                                    {event.type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right py-3.5 pr-6">
                                                <Button variant="ghost" size="sm" asChild className={cn(
                                                    "text-electric-blue hover:bg-electric-blue/10 hover:text-glow-electric-blue",
                                                    `focus:ring-2 focus:ring-offset-1 focus:ring-offset-neon-surface focus:${getNeonColorClass(event.neonColor, 'ring')}` // Corrected focus ring usage
                                                    )}>
                                                    <a href={event.detailsLink || event.registrationLink || '#'} target="_blank" rel="noopener noreferrer" aria-label={`View details for ${event.title}`}>
                                                        <Info className="w-4 h-4 sm:hidden" aria-hidden="true"/> {/* Icon for mobile */}
                                                        <span className="hidden sm:inline">View</span> {/* Text for larger screens */}
                                                    </a>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                )}

                 {/* Fallback message if absolutely no upcoming events */}
                 {allUpcomingEvents.length === 0 && (
                    <p className="text-center text-text-secondary text-lg mt-10">
                        No upcoming events scheduled right now. Check back soon!
                    </p>
                )}
            </div>
        </section>
    );
}
