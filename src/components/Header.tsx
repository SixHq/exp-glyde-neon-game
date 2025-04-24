
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import { Button } from "../components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import {
    Sheet,
    SheetClose, // Import SheetClose for closing the mobile menu
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from 'lucide-react'; // Icons for mobile menu trigger and close
import { useIsMobile } from '../hooks/use-mobile'; // Assumed custom hook
import { cn } from '../lib/utils'; // Utility for conditional classes

// Navigation links configuration
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/events", label: "Events" },
    { href: "/join", label: "Join Us" },
];

// Valid logo URL obtained from Image Url Tool
const logoUrl = "https://png.pngtree.com/png-vector/20240604/ourmid/pngtree-neon-signboard-of-a-videogame-control-png-image_12614487.png";

export function Header() {
    const isMobile = useIsMobile(); // Determine if mobile view

    // Function to render navigation links, adapting style based on layout
    const renderNavLinks = (isMobileLayout = false) => (
        navLinks.map((link) => (
            <NavLink
                key={link.label}
                to={link.href}
                // Apply specific styles for mobile vs desktop, including active states
                className={({ isActive }) => cn(
                    "transition-all duration-300 ease-in-out",
                    isMobileLayout
                        ? // Mobile link style
                        "block p-4 text-lg font-medium rounded hover:bg-neon-border focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:bg-neon-border"
                        : // Desktop link style using Shadcn base and custom neon styles
                        cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent text-text-primary text-base font-medium hover:bg-neon-border hover:text-electric-blue focus:bg-neon-border focus:text-electric-blue data-[active]:bg-neon-border/50 data-[state=open]:bg-neon-border/50",
                            "hover:text-glow-electric-blue focus:text-glow-electric-blue" // Neon glow on hover/focus
                        ),
                    // Active link styling
                    isActive
                        ? (isMobileLayout ? "text-electric-blue text-glow-electric-blue bg-neon-border" : "text-electric-blue text-glow-electric-blue")
                        : (isMobileLayout ? "text-text-primary hover:text-electric-blue" : "text-text-primary")
                )}
                // Use SheetClose to close the mobile menu on link click
                {...(isMobileLayout ? { asChild: true } : {})} // Use asChild only for SheetClose scenario
            >
                {isMobileLayout ? <SheetClose asChild><span className="w-full block">{link.label}</span></SheetClose> : link.label}
            </NavLink>
        ))
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-neon-border/50 bg-neon-bg/90 backdrop-blur-lg shadow-lg shadow-electric-blue/10">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo Section */}
                <NavLink to="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neon-bg focus:ring-electric-blue rounded-sm">
                    <img
                        src={logoUrl}
                        alt="NeonGamers Logo"
                        className="h-10 w-10 rounded-full object-contain p-1 border-2 border-electric-blue shadow-neon-blue group-hover:shadow-neon-pink group-hover:border-cyber-pink group-hover:scale-105 transform transition-all duration-300 ease-in-out"
                    />
                    <span className="text-xl font-bold text-electric-blue group-hover:text-cyber-pink transition-colors duration-300 text-glow-electric-blue group-hover:text-glow-cyber-pink">
                        NeonGamers
                    </span>
                </NavLink>

                {/* Navigation: Conditional rendering based on screen size */}
                {isMobile ? (
                    // Mobile Menu (Sheet)
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue hover:shadow-neon-border-glow-blue focus:ring-electric-blue">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-neon-surface border-l border-neon-border text-text-primary w-[280px] flex flex-col">
                            <SheetHeader className="mb-4 border-b border-neon-border pb-4">
                                <SheetTitle className="text-2xl font-bold text-center text-electric-blue text-glow-electric-blue">Menu</SheetTitle>
                                <SheetDescription className="text-center text-text-secondary px-2">
                                    Explore NeonGamers.
                                </SheetDescription>
                            </SheetHeader>
                            <nav className="flex-grow flex flex-col gap-2 px-2 py-4">
                                {renderNavLinks(true)}
                            </nav>
                             <SheetFooter className="mt-auto border-t border-neon-border pt-4">
                                <SheetClose asChild>
                                     <Button variant="outline" className="w-full border-cyber-pink text-cyber-pink hover:bg-cyber-pink/10 hover:shadow-neon-border-glow-pink focus:ring-cyber-pink">
                                        Close Menu
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                ) : (
                    // Desktop Menu (NavigationMenu)
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.label}>
                                    {/* Render NavLink directly within NavigationMenuItem */}
                                    {renderNavLinks(false).find(renderedLink => renderedLink.key === link.label)}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                )}
            </div>
        </header>
    );
}