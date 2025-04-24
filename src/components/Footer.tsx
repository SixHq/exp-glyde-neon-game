
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'; // Social Icons
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// --- Footer Data ---

// Valid Logo URL (Ensure this is accessible)
const logoUrl = "https://png.pngtree.com/png-vector/20240604/ourmid/pngtree-neon-signboard-of-a-videogame-control-png-image_12614487.png";

// Valid Partner Logo URLs (Replace with actual URLs)
const partnerLogoRazer = "https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"; // Example: Official Razer SVG Logo
const partnerLogoLogitech = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Logitech_G_logo.svg"; // Example: Official Logitech G SVG Logo

// Navigation Links
const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
];

// Community Links
const communityLinks = [
    { href: "/join", label: "Join Us" },
    { href: "/rules", label: "Community Rules" },
    { href: "https://discord.gg/", label: "Discord Server" }, // Example: Link directly to Discord invite
    { href: "/members", label: "Member Spotlights" }, // Placeholder - Create this page if needed
];

// Resource/Legal Links
const legalLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
];

// Social Media Links Configuration
const socialLinks = [
    { Icon: FaDiscord, href: "https://discord.gg/", label: "Discord", hoverColor: "hover:text-electric-blue", focusRing: "focus-visible:ring-electric-blue", hoverShadow: "hover:shadow-neon-blue" },
    { Icon: FaTwitter, href: "https://x.com/", label: "Twitter", hoverColor: "hover:text-electric-blue", focusRing: "focus-visible:ring-electric-blue", hoverShadow: "hover:shadow-neon-blue" },
    { Icon: FaTwitch, href: "https://twitch.tv/", label: "Twitch", hoverColor: "hover:text-cyber-pink", focusRing: "focus-visible:ring-cyber-pink", hoverShadow: "hover:shadow-neon-pink" },
    { Icon: FaYoutube, href: "https://youtube.com/", label: "YouTube", hoverColor: "hover:text-cyber-pink", focusRing: "focus-visible:ring-cyber-pink", hoverShadow: "hover:shadow-neon-pink" },
    { Icon: FaInstagram, href: "https://instagram.com/", label: "Instagram", hoverColor: "hover:text-vibrant-green", focusRing: "focus-visible:ring-vibrant-green", hoverShadow: "hover:shadow-neon-green" },
    { Icon: FaFacebook, href: "https://facebook.com/", label: "Facebook", hoverColor: "hover:text-electric-blue", focusRing: "focus-visible:ring-electric-blue", hoverShadow: "hover:shadow-neon-blue" },
];

// Partner Data
const partners = [
    { name: "Razer", logoUrl: partnerLogoRazer, href: "https://www.razer.com" }, // Example actual link
    { name: "Logitech G", logoUrl: partnerLogoLogitech, href: "https://www.logitechg.com" }, // Example actual link
];

// --- Footer Component Implementation ---
export function Footer() {
    const currentYear = new Date().getFullYear();

    // Helper function to render link lists with consistent styling
    const renderLinkList = (links: { href: string; label: string }[], hoverColor: string, glowColor: string) => (
        <ul className="space-y-2.5">
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        to={link.href}
                        // Use target="_blank" only for external links (like Discord)
                        target={link.href.startsWith('http') || link.href.startsWith('#discord') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') || link.href.startsWith('#discord') ? 'noopener noreferrer' : undefined}
                        className={cn(
                            "text-sm text-text-secondary transition-all duration-300 ease-in-out",
                            "hover:underline underline-offset-4 decoration-1", // Subtle underline on hover
                            hoverColor, // Apply specific hover color class
                            glowColor, // Apply specific text-glow class on hover
                            // Consistent focus styling for links
                            "focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface rounded-sm", // Increased offset
                            // Determine focus ring & decoration color based on hover color class
                            hoverColor.includes('green') ? 'focus-visible:ring-vibrant-green decoration-vibrant-green/60' :
                            hoverColor.includes('pink') ? 'focus-visible:ring-cyber-pink decoration-cyber-pink/60' :
                            'focus-visible:ring-electric-blue decoration-electric-blue/60' // Default to blue
                        )}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <footer className="bg-gradient-to-t from-neon-bg via-neon-surface to-neon-surface border-t-2 border-neon-border/70 text-text-secondary py-12 md:py-16 mt-auto shadow-inner shadow-neon-border/10">
            <div className="container px-4 md:px-6">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 mb-12">

                    {/* 1. Brand/Logo Column */}
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 flex flex-col items-start">
                        <Link to="/" className="flex items-center gap-2.5 mb-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-electric-blue rounded-sm">
                            <img
                                src={logoUrl}
                                alt="NeonGamers Logo"
                                className="h-10 w-10 rounded-full object-contain p-1 border border-electric-blue/60 transition-all duration-300 group-hover:border-electric-blue group-hover:shadow-neon-border-glow-blue group-hover:scale-105"
                                loading="lazy" // Add lazy loading
                            />
                            <span className="text-lg font-bold text-text-primary transition-colors duration-300 group-hover:text-electric-blue group-hover:text-glow-electric-blue">
                                NeonGamers
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            The premier destination for connecting with gamers, competing in events, and shaping the future of online communities.
                        </p>
                        {/* Partners Section (Only for Mobile/Tablet View) */}
                        <div className="md:hidden mt-auto pt-6 w-full">
                             <h4 className="text-base font-semibold text-text-primary mb-3 text-glow-neon-yellow uppercase tracking-wider">Partners</h4>
                             <div className="flex items-center gap-6">
                                {partners.map((partner) => (
                                    <a
                                        key={partner.name}
                                        href={partner.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit partner: ${partner.name}`}
                                        className="block opacity-70 hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-neon-yellow rounded group"
                                    >
                                        <img
                                            src={partner.logoUrl}
                                            alt={`${partner.name} Logo`}
                                            className="h-6 object-contain filter grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 transition-all duration-300 group-hover:drop-shadow-[0_0_3px_theme(colors.neon-yellow)]"
                                            loading="lazy" // Add lazy loading
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. Navigation Links Column */}
                    <div className="pt-1"> {/* Slight top padding for alignment */}
                        <h3 className="text-base font-semibold text-text-primary mb-4 text-glow-electric-blue uppercase tracking-wider">Navigation</h3>
                        {renderLinkList(navigationLinks, "hover:text-electric-blue", "hover:text-glow-electric-blue")}
                    </div>

                    {/* 3. Community Links Column */}
                     <div className="pt-1">
                        <h3 className="text-base font-semibold text-text-primary mb-4 text-glow-vibrant-green uppercase tracking-wider">Community</h3>
                        {renderLinkList(communityLinks, "hover:text-vibrant-green", "hover:text-glow-vibrant-green")}
                    </div>

                    {/* 4. Resources/Legal Links Column */}
                    <div className="pt-1">
                        <h3 className="text-base font-semibold text-text-primary mb-4 text-glow-cyber-pink uppercase tracking-wider">Resources</h3>
                        {renderLinkList(legalLinks, "hover:text-cyber-pink", "hover:text-glow-cyber-pink")}
                    </div>

                    {/* 5. Connect (Socials & Partners) Column */}
                    <div className="col-span-2 sm:col-span-3 md:col-span-1 flex flex-col pt-1">
                        {/* Social Media Section */}
                        <div>
                             <h3 className="text-base font-semibold text-text-primary mb-4 text-glow-electric-blue uppercase tracking-wider">Connect</h3>
                             <div className="flex flex-wrap gap-x-5 gap-y-3 mb-8"> {/* Adjusted gap */}
                                {socialLinks.map(({ Icon, href, label, hoverColor, focusRing, hoverShadow }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank" // Social links are always external
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${label}`}
                                        className={cn(
                                            "text-3xl text-text-secondary/80 transition-all duration-300 ease-in-out transform",
                                            "hover:scale-110 focus-visible:scale-110", // Scale effect on hover/focus
                                            hoverColor, // Dynamic text color on hover
                                            hoverShadow, // Dynamic shadow on hover
                                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface rounded-full", // Base focus ring style
                                            focusRing // Dynamic focus ring color
                                        )}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Partners Section (Only for Desktop View) */}
                        <div className="hidden md:block mt-auto"> {/* Hidden on smaller screens, shown on medium+ */}
                             <h4 className="text-base font-semibold text-text-primary mb-3 text-glow-neon-yellow uppercase tracking-wider">Partners</h4>
                             <div className="flex items-center gap-6">
                                {partners.map((partner) => (
                                    <a
                                        key={partner.name}
                                        href={partner.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit partner: ${partner.name}`}
                                        className="block opacity-70 hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-offset-neon-surface focus-visible:ring-neon-yellow rounded group"
                                    >
                                        <img
                                            src={partner.logoUrl}
                                            alt={`${partner.name} Logo`}
                                            className="h-6 object-contain filter grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 transition-all duration-300 group-hover:drop-shadow-[0_0_3px_theme(colors.neon-yellow)]"
                                            loading="lazy" // Add lazy loading
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator and Copyright */}
                <Separator className="bg-neon-border/50 my-8" />
                <div className="text-center text-sm">
                    &copy; {currentYear} NeonGamers. All Rights Reserved. Built with <span className="text-cyber-pink text-glow-cyber-pink">&lt;3</span> by the Community.
                </div>
            </div>
        </footer>
    );
}