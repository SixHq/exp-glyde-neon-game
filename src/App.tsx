
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { KeyFeaturesSection } from './components/KeyFeaturesSection';
import { UpcomingEventsSection, CommunityEvent } from './components/UpcomingEventsSection'; // Import Events section & type
import { CommunityShowcaseSection } from './components/CommunityShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection'; // Import Testimonials section
import { Toaster } from "@/components/ui/sonner";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { format } from 'date-fns'; // Needed for EventsPage formatting

// --- Loading Spinner ---
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
        <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-electric-blue border-r-electric-blue/50 border-b-electric-blue/30 border-l-transparent animate-spin"></div>
            <span className="absolute inset-2 flex items-center justify-center text-xs font-semibold text-electric-blue/80">NG</span>
        </div>
    </div>
);

// --- Reusable Page Layout ---
const PageLayout = ({ title, titleColor = 'electric-blue', children }: { title: string, titleColor?: string, children: React.ReactNode }) => (
    <div className="container py-16 md:py-24 text-center">
        <h1 className={cn(
            "text-4xl md:text-5xl font-bold mb-8",
            `text-${titleColor}`,
            `text-glow-${titleColor}`,
             // Pulse on more dynamic pages
             ['Features', 'Events', 'Join NeonGamers', '404 - Glitch in the Matrix'].includes(title) ? "animate-neon-pulse-blue" : ""
        )}>
            {title}
        </h1>
        {/* Adjust max-width and text alignment based on typical content for the page */}
        <div className={cn(
            "mx-auto",
            ['About Us', 'Contact Us', 'Community Rules', 'Privacy Policy', 'Terms of Service', 'Past Events Archive'].includes(title) // Added Past Events
                ? "max-w-3xl text-left" // Wider for text-heavy pages
                : "max-w-5xl" // Wider for pages with components like gallery/events
        )}>
             {children}
        </div>
    </div>
);

// --- HomePage Component ---
const HomePage = () => (
    <>
        <HeroSection />
        <KeyFeaturesSection />

        {/* === Call to Action Section === */}
        <section id="join-cta" className="py-20 md:py-28 bg-neon-surface/70 text-center border-t border-neon-border/30" aria-labelledby="join-heading">
             <div className="container px-4 md:px-6">
                  <h2 id="join-heading" className="text-3xl md:text-4xl font-bold mb-6 text-cyber-pink text-glow-cyber-pink">
                      Ready to Join the Nexus?
                  </h2>
                  <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                      Become part of the fastest-growing gaming community. Sign up today, connect with players, and start your legacy.
                  </p>
                  <Link to="/join">
                      <Button
                          size="lg"
                          variant="outline"
                          aria-label="Get started now by joining NeonGamers"
                          className={cn(
                              "group relative overflow-hidden rounded-full border-2 px-8 py-6 text-lg font-semibold transition-all duration-300 ease-out",
                              "border-vibrant-green text-vibrant-green bg-transparent",
                              "hover:bg-vibrant-green hover:text-neon-bg hover:shadow-neon-green",
                              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vibrant-green/60 focus-visible:shadow-neon-green focus-visible:bg-vibrant-green/10",
                              "before:absolute before:inset-0 before:z-[-1] before:bg-vibrant-green/15 before:opacity-0 before:blur-lg before:transition-opacity before:duration-300 hover:before:opacity-100"
                          )}
                      >
                         Get Started Now
                      </Button>
                  </Link>
            </div>
        </section>

        <UpcomingEventsSection />
        <CommunityShowcaseSection />

        {/* === Testimonials Section === */}
        <TestimonialsSection />
        {/* ========================== */}
    </>
);

// --- Specific Page Components ---

// Events Page: Reuses the main event section and adds a link to past events
const EventsPage = () => (
     <div className="pt-10 md:pt-16"> {/* Add padding if Header is sticky */}
         {/* Render the full events section */}
         <UpcomingEventsSection />
         {/* Additional content specific to the Events page */}
         <div className="container py-16 text-center">
             <h3 className="text-2xl font-semibold mb-6 text-text-secondary">Event Archive</h3>
             <p className="text-text-secondary mb-6">Looking for results or details from past events?</p>
             <Link to="/past-events">
                 <Button variant="outline" className="border-neon-border text-text-secondary hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/10">
                     Check the Archive
                 </Button>
             </Link>
         </div>
     </div>
);

// Placeholder Past Events Page
const PastEventsPage = () => {
    // Mock past event data (replace with actual data fetching)
    const pastEvents: CommunityEvent[] = [
         { id: 'past-event-1', title: "Neon Nights: Valorant July", date: new Date(2024, 6, 15), game: "Valorant", type: "Tournament", description: "Completed tournament.", neonColor: 'electric-blue'},
         { id: 'past-event-2', title: "Community Game Night: Among Us", date: new Date(2024, 6, 28), game: "Among Us", type: "Community Night", description: "Fun times were had.", neonColor: 'cyber-pink'},
         { id: 'past-event-3', title: "CS2 Wingman Warmup", date: new Date(2024, 7, 5), game: "Counter-Strike 2", type: "Tournament", description: "Results posted.", prize: "Steam Keys", neonColor: 'neon-yellow'},
    ].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort descending

    return (
        <PageLayout title="Past Events Archive" titleColor="neon-yellow">
            <p className="text-lg text-text-secondary mb-12 text-center">
                Browse through the results, highlights, and details of previous NeonGamers tournaments and community nights.
            </p>
            {/* Simple List Placeholder for Past Events */}
            <div className="bg-neon-surface/60 border border-neon-border rounded-lg p-6 shadow-md space-y-6">
                {pastEvents.length > 0 ? (
                    pastEvents.map(event => (
                        <div key={event.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border-b border-neon-border/30 last:border-b-0">
                            <div>
                                <h4 className={cn("text-xl font-semibold mb-1", `text-${event.neonColor || 'electric-blue'}`)}>{event.title}</h4>
                                <p className="text-sm text-text-secondary">
                                    <span className="font-medium">{event.game}</span> - {event.type} ({format(event.date, 'MMM d, yyyy')})
                                </p>
                                {event.prize && <p className="text-xs text-neon-yellow mt-1">Prize: {event.prize}</p>}
                            </div>
                            <Button variant="ghost" size="sm" asChild className="mt-2 sm:mt-0 flex-shrink-0">
                                <a href="#" className={cn("text-electric-blue hover:bg-electric-blue/10 hover:text-glow-electric-blue")} aria-label={`View details for ${event.title}`}>
                                    View Results
                                </a>
                            </Button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-text-secondary">No past events found in the archive yet.</p>
                )}
                <p className="text-center text-text-secondary text-sm pt-4">(Full archive filtering and detailed results pages are under development)</p>
            </div>
        </PageLayout>
    );
};


// Join Page: Remains largely the same
const JoinPage = () => (
    <PageLayout title="Join NeonGamers" titleColor="electric-blue">
        <p className="text-lg text-text-secondary mb-10 text-center">
            Ready to level up? Create your NeonGamers account or sign in below to dive into the action!
        </p>
        <div className="bg-neon-surface p-8 md:p-10 rounded-xl max-w-md mx-auto border border-neon-border shadow-xl shadow-electric-blue/15">
             <h3 className="text-2xl font-semibold mb-8 text-center text-electric-blue text-glow-electric-blue">Access Your Account</h3>
             <form className="space-y-6">
                <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-md bg-neon-bg border border-neon-border focus:outline-none focus:ring-2 focus:ring-electric-blue text-text-primary placeholder:text-text-secondary/60 transition-colors duration-200"
                        required
                        aria-required="true"
                    />
                </div>
                 <div>
                    <Label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 rounded-md bg-neon-bg border border-neon-border focus:outline-none focus:ring-2 focus:ring-electric-blue text-text-primary placeholder:text-text-secondary/60 transition-colors duration-200"
                        required
                        aria-required="true"
                    />
                </div>
                <Button
                    type="submit"
                    variant="outline"
                    className="w-full !mt-8 text-electric-blue border-electric-blue hover:bg-electric-blue/10 hover:shadow-neon-blue hover:text-glow-electric-blue focus:ring-electric-blue py-3"
                >
                    Sign In / Create Account
                </Button>
             </form>
             <p className="text-xs text-text-secondary mt-6 text-center">
                 By proceeding, you agree to our <Link to="/terms" className="text-electric-blue hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-electric-blue hover:underline">Privacy Policy</Link>.
             </p>
        </div>
    </PageLayout>
);

// Gallery Page: Remains largely the same
const GalleryPage = () => (
    <PageLayout title="Community Gallery" titleColor="vibrant-green">
         <p className="text-lg text-text-secondary mb-12 text-center">
            Explore the full collection of screenshots and video highlights shared by the NeonGamers community. Filter by game, user, or type!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
                 <div key={i} className="aspect-video bg-neon-surface border border-neon-border rounded-lg flex items-center justify-center text-text-secondary opacity-60 hover:opacity-100 hover:border-vibrant-green transition-all">
                    Media {i + 1}
                </div>
            ))}
        </div>
         <p className="text-center text-text-secondary mt-8">(Full gallery filtering and content loading is under development)</p>
    </PageLayout>
);

// 404 Page: Remains largely the same
const NotFoundPage = () => (
    <PageLayout title="404 - Glitch in the Matrix" titleColor="cyber-pink">
        <div className="text-center">
            <p className="text-lg text-text-secondary mb-10">
                Whoops! The page you're looking for seems to have phased out of existence. Maybe a typo in the URL?
            </p>
            <Link to="/">
                <Button variant="outline" className="text-electric-blue border-electric-blue hover:bg-electric-blue/10 hover:shadow-neon-blue focus:ring-electric-blue">
                    Return to Home Base
                </Button>
            </Link>
        </div>
    </PageLayout>
);

// Features Page: Remains largely the same
const FeaturesPage = () => (
    <PageLayout title="Our Features" titleColor="vibrant-green">
        <p className="text-lg text-text-secondary mb-12 text-center">
            NeonGamers is packed with tools and features designed to enhance your gaming experience and connect you with the community. Explore some highlights below:
        </p>
         <KeyFeaturesSection />
         <div className="mt-16 text-center text-text-secondary">
             <p>More features including advanced profile customization, integrated voice chat lobbies, and community event calendars are coming soon!</p>
         </div>
    </PageLayout>
);

// --- Static Pages (Refined slightly) ---
const AboutPage = () => (
    <PageLayout title="About Us" titleColor="vibrant-green">
        <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>NeonGamers was forged in the digital crucible by a collective of dedicated gamers who envisioned a more connected, dynamic, and future-forward community hub. Our core mission is to engineer a cutting-edge platform where players of all backgrounds can converge, compete, collaborate, and celebrate their shared passion for gaming.</p>
            <p>We champion inclusivity, uphold the spirit of fair play, and relentlessly pursue innovation. Built upon a foundation of modern technology, NeonGamers aspires to be the ultimate destination for discovering allies, conquering challenges in thrilling events, and staying wired into the pulse of the gaming universe.</p>
            <h3 className="text-2xl font-semibold text-vibrant-green pt-4 !mt-8">Our Core Values:</h3>
            <ul className="list-none space-y-3 pl-4">
                <li className="flex items-start gap-3"><span className="text-vibrant-green font-bold text-xl mt-0.5">&gt;</span> Community First: Fostering positive, engaging interactions.</li>
                <li className="flex items-start gap-3"><span className="text-vibrant-green font-bold text-xl mt-0.5">&gt;</span> Competitive Spirit: Encouraging healthy, fair competition.</li>
                <li className="flex items-start gap-3"><span className="text-vibrant-green font-bold text-xl mt-0.5">&gt;</span> Innovation Driven: Continuously evolving the platform experience.</li>
                <li className="flex items-start gap-3"><span className="text-vibrant-green font-bold text-xl mt-0.5">&gt;</span> Universal Access: Welcoming gamers of every skill level.</li>
            </ul>
        </div>
    </PageLayout>
);
const ContactPage = () => (
    <PageLayout title="Contact Us" titleColor="cyber-pink">
         <div className="space-y-6 text-text-secondary leading-relaxed text-center text-lg">
            <p>Have questions, feedback, or need technical support? We're here to help connect!</p>
            <p>For general inquiries, partnership opportunities, press information, or support requests, please reach out via email:</p>
            <a href="mailto:support@neongamers.gg" className="inline-block my-2 text-xl font-semibold text-cyber-pink hover:text-glow-cyber-pink hover:underline underline-offset-4 decoration-cyber-pink/50 transition duration-300">
                support@neongamers.gg
            </a>
            <p className="text-base pt-4">Alternatively, join the conversation and connect with staff on our official community Discord server (link available in the footer).</p>
            <p className="text-base">Our support team aims to respond to all inquiries within 24-48 business hours.</p>
        </div>
    </PageLayout>
);
const RulesPage = () => (
    <PageLayout title="Community Rules" titleColor="neon-yellow">
        <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>To ensure NeonGamers remains a vibrant, positive, and welcoming space for everyone, all members are expected to adhere to the following code of conduct:</p>
            <ol className="list-decimal list-outside space-y-3 pl-8">
                <li><strong className="text-text-primary">Respect Above All:</strong> Treat fellow members, moderators, and staff with courtesy and respect. Harassment, hate speech, discrimination, personal attacks, or any form of toxicity will not be tolerated.</li>
                <li><strong className="text-text-primary">Fair Play Doctrine:</strong> Maintain the integrity of competition and gameplay. The use, discussion, or distribution of cheats, hacks, exploits, or third-party programs that provide an unfair advantage is strictly prohibited.</li>
                <li><strong className="text-text-primary">Stay On Topic:</strong> Keep discussions within designated channels relevant to their intended purpose (e.g., use game-specific channels for that game). Off-topic conversations should be moved to appropriate general channels.</li>
                <li><strong className="text-text-primary">No Excessive Spam:</strong> Avoid excessive posting, large text blocks, repetitive messages, overuse of CAPS, or any behavior that disrupts chat flow and readability.</li>
                <li><strong className="text-text-primary">Content Appropriateness:</strong> Do not share or promote content that is NSFW (Not Safe For Work), illegal, excessively graphic, harmful, or violates intellectual property rights. Use spoiler tags appropriately.</li>
                <li><strong className="text-text-primary">Privacy Matters:</strong> Do not share the personal information (doxing) of others without their explicit, verifiable consent. Respect the privacy of all members.</li>
                <li><strong className="text-text-primary">Adhere to Platform Terms:</strong> Comply with the Terms of Service and community guidelines of any integrated platforms used by NeonGamers (e.g., Discord, Twitch).</li>
            </ol>
            <p className="pt-6 font-semibold text-neon-yellow text-glow-neon-yellow">Violation of these rules may result in actions ranging from warnings and temporary restrictions to permanent removal from the community, subject to the discretion of the moderation team.</p>
        </div>
    </PageLayout>
);
const PrivacyPage = () => (
    <PageLayout title="Privacy Policy" titleColor="electric-blue">
       <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>Your privacy is critically important to us at NeonGamers. This policy outlines how we collect, utilize, disclose, and safeguard your personal information when you use our platform and services.</p>

            <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">Information We Collect:</h3>
            <ul className="list-disc list-outside space-y-2 pl-8">
                <li><strong className="text-text-primary">Account Information:</strong> Includes your chosen username, email address, securely hashed password, and optionally, linked gaming profiles or identifiers you choose to share.</li>
                <li><strong className="text-text-primary">Usage & Interaction Data:</strong> We collect data about your activity on the platform, such as login times, features used, content viewed, IP address, browser type, and device information. This helps us improve the service and maintain security.</li>
                <li><strong className="text-text-primary">User-Generated Content:</strong> Any posts, messages, comments, images, or other content you create and share within the NeonGamers community forums or features.</li>
            </ul>

             <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">How We Use Your Information:</h3>
            <ul className="list-disc list-outside space-y-2 pl-8">
                <li>To operate, maintain, and improve the NeonGamers platform and its features.</li>
                <li>To personalize your experience, such as suggesting relevant content or groups.</li>
                <li>To communicate important service updates, security alerts, and support messages.</li>
                <li>To monitor for and prevent fraudulent or malicious activity, ensuring platform security.</li>
                <li>To analyze trends and usage patterns, allowing us to enhance user experience and develop new features (typically using aggregated, anonymized data).</li>
            </ul>

             <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">Data Sharing & Disclosure:</h3>
             <p>We are committed to protecting your data. We do not sell your personal information to third parties. Information may be shared only under specific circumstances:</p>
             <ul className="list-disc list-outside space-y-2 pl-8">
                 <li>With trusted third-party service providers (e.g., hosting, analytics, customer support tools) who operate under strict confidentiality agreements and only process data as needed to perform their services for us.</li>
                 <li>If required by law, regulation, legal process, or governmental request.</li>
                 <li>To protect the rights, property, or safety of NeonGamers, our users, or the public as required or permitted by law.</li>
            </ul>

            <p className="pt-6">This is a summary. For complete details on data retention, your rights (like access and deletion), international transfers, and cookie usage, please review the full <Link to="#" className="text-electric-blue hover:underline">NeonGamers Privacy Policy</Link>. You can manage certain data preferences within your account settings.</p>
        </div>
    </PageLayout>
);
const TermsPage = () => (
    <PageLayout title="Terms of Service" titleColor="electric-blue">
        <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
            <p>Welcome to NeonGamers! These Terms of Service ("Terms") govern your access to and use of the NeonGamers website, platform, applications, and services (collectively, the "Service"). Please read these Terms carefully before using the Service. By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.</p>

            <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">1. Your Account</h3>
            <p>You must be at least 13 years old (or the minimum age required in your country to use online services) to create an account. You are responsible for safeguarding your account credentials (username and password) and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">2. User Conduct and Content</h3>
            <p>You agree to use the Service in compliance with all applicable laws and regulations, and our <Link to="/rules" className="text-electric-blue hover:underline">Community Rules</Link>. You are solely responsible for the content you post, upload, or share ("User Content"). You warrant that you own or have the necessary rights to your User Content and that it does not violate these Terms or infringe on any third-party rights.</p>
            <p>You grant NeonGamers a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display your User Content solely for the purpose of operating, promoting, and improving the Service.</p>

             <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">3. Prohibited Activities</h3>
            <p>You agree not to engage in activities that: violate laws or regulations; infringe intellectual property; harass, bully, or harm others; distribute spam or malware; interfere with the Service's operation; attempt unauthorized access; or otherwise violate our Community Rules.</p>

            <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">4. Service Modifications and Termination</h3>
            <p>We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We may also terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms.</p>

             <h3 className="text-2xl font-semibold text-electric-blue pt-4 !mt-8">5. Disclaimers and Limitation of Liability</h3>
            <p>The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. NeonGamers does not warrant that the Service will be uninterrupted, secure, or error-free. To the fullest extent permitted by law, NeonGamers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.</p>

            <p className="pt-6">These Terms constitute the entire agreement between you and NeonGamers regarding the Service. For the full legal details, please read the complete <Link to="#" className="text-electric-blue hover:underline">NeonGamers Terms of Service</Link> document.</p>
        </div>
    </PageLayout>
);


// --- Main App Component ---
function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-neon-bg text-text-primary font-sans antialiased">
                <Header />
                <main className="flex-grow">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            {/* Core Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/features" element={<FeaturesPage />} />
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/past-events" element={<PastEventsPage />} />
                            <Route path="/join" element={<JoinPage />} />
                            <Route path="/gallery" element={<GalleryPage />} />
                            {/* Footer/Static Pages */}
                             <Route path="/about" element={<AboutPage />} />
                             <Route path="/rules" element={<RulesPage />} />
                             <Route path="/contact" element={<ContactPage />} />
                             <Route path="/privacy" element={<PrivacyPage />} />
                             <Route path="/terms" element={<TermsPage />} />
                            {/* Catch-all 404 */}
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
                <Toaster richColors theme="dark" position="bottom-right" closeButton />
            </div>
        </Router>
    );
}

export default App;