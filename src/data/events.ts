import { addDays, addHours } from 'date-fns';

// --- Event Data Structure ---
export interface CommunityEvent {
    id: string;
    title: string;
    date: Date;
    game: string;
    description: string;
    type: 'Tournament' | 'Community Night' | 'Workshop' | 'AMA';
    prize?: string; // Optional prize pool/reward
    isFeatured?: boolean; // To distinguish featured events
    imageUrl?: string; // Banner or game logo
    registrationLink?: string; // Link to register or details page
    detailsLink?: string; // Separate link for details if registration is different
    neonColor?: 'electric-blue' | 'cyber-pink' | 'vibrant-green' | 'neon-yellow';
}

// --- Mock Event Data (with Valid Image URLs & future dates) ---
const now = new Date();
const eventsData: CommunityEvent[] = [
    {
        id: 'val-major-01',
        title: "Neon Nexus Valorant Major",
        date: addDays(addHours(now, 10), 7), // 7 days, 10 hours from now
        game: "Valorant",
        description: "Compete for the title in our flagship 5v5 Valorant tournament. Intense matches, pro-level casting, and big prizes!",
        type: 'Tournament', // Explicitly matches the type
        prize: "$5,000 Prize Pool + Neon Gear",
        isFeatured: true,
        imageUrl: "https://i.guim.co.uk/img/media/74596d0ac65ea4f0a3024f1fb10c8c60d385586a/0_0_2560_1440/master/2560.jpg?width=700&quality=85&auto=format&fit=max&s=56411edfc1dd5ac24a9cb96ae562f566", // Valid URL
        registrationLink: "#register-valorant",
        detailsLink: "#details-valorant",
        neonColor: 'electric-blue',
    },
    {
        id: 'lol-clash-05',
        title: "League Community Clash",
        date: addDays(addHours(now, 18), 14), // 14 days, 18 hours from now
        game: "League of Legends",
        description: "Gather your team for a weekend of strategic battles on the Rift. All ranks welcome!",
        type: 'Tournament', // Explicitly matches the type
        prize: "Exclusive Summoner Icons & RP",
        isFeatured: true,
        imageUrl: "https://blog.en.uptodown.com/files/2022/12/1-4.jpg", // Valid URL
        registrationLink: "#register-lol",
        detailsLink: "#details-lol",
        neonColor: 'cyber-pink',
    },
    {
        id: 'apex-night-12',
        title: "Apex Legends Squad Up Night",
        date: addDays(addHours(now, 20), 3), // 3 days, 20 hours from now
        game: "Apex Legends",
        description: "Drop in with the community for casual matches, fun challenges, and good vibes. Perfect for finding new squadmates.",
        type: 'Community Night', // Explicitly matches the type
        imageUrl: "https://assetsio.gnwcdn.com/Apex-Legends-Mobile_6bwXO9o.jpeg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp", // Valid URL
        detailsLink: "#details-apex",
        neonColor: 'vibrant-green',
    },
     {
        id: 'cs2-wingman-02',
        title: "CS2 Wingman Wednesdays",
        date: addDays(addHours(now, 19), 5), // 5 days, 19 hours from now
        game: "Counter-Strike 2",
        description: "Grab a partner and test your duo skills in our weekly 2v2 Wingman tournament.",
        type: 'Tournament', // Explicitly matches the type
        prize: "Steam Gift Cards",
         imageUrl: "https://i.ytimg.com/vi/k2vbZx2WPM8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHuKeJW-VM0Bnk38zvgM_m0hG6zw", // Valid URL
         registrationLink: "#register-cs2",
         detailsLink: "#details-cs2",
         neonColor: 'neon-yellow',
    },
    {
        id: 'dev-ama-01',
        title: "Developer AMA Session",
        date: addDays(addHours(now, 17), 10), // 10 days, 17 hours from now
        game: "Platform Update",
        description: "Join us for a live Q&A session with the NeonGamers platform developers. Ask your questions and hear about future plans.",
        type: 'AMA', // Explicitly matches the type
        imageUrl: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-question-mark-vector-icon-png-image_4236972.jpg", // Valid URL
        detailsLink: "#details-ama",
        neonColor: 'electric-blue',
    },
    {
        id: 'fortnite-build-04',
        title: "Fortnite Creative Build-Off",
        date: addDays(addHours(now, 15), 20), // 20 days, 15 hours from now
        game: "Fortnite",
        description: "Show off your building skills in our creative mode competition. Theme: Neon Future City.",
        type: 'Community Night', // Explicitly matches the type
        prize: "V-Bucks & Featured Spot",
        imageUrl: "https://cdn-images.understood.org/p0qf7j048i0q/22CA69A7D1C3463E86938EBD6DB7F15D/86cd3407b331765631a4a0260e2aeb52/070518_7_Things_I_Tell_Parents_of_Kids_With_ADHD_and_Social_Skills_Issues_About_Fortnite.jpg", // Valid URL
        detailsLink: "#details-fortnite",
        neonColor: 'cyber-pink',
    },
];
export const upcomingEvents: CommunityEvent[] = eventsData.sort((a, b) => a.date.getTime() - b.date.getTime()); // Sort events by date
