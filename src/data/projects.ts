export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  extendedDescription?: string;
  status: "Live" | "In Development" | "Beta";
  statusColor?: string;
  url?: string;
  ctaText: string;
  logo: string;
  logoType?: "image" | "svg";
  previewImage: string;
  gradient: string;
  accentColor: string;
  tags: string[];
  features?: string[];
  impactStatement?: string;
  stats?: { label: string; value: string }[];
  market: string;
}

export const ADPENCE_PROJECTS: Project[] = [
  {
    id: "videopost-ai",
    name: "VideoPost AI",
    category: "AI VIDEO · CREATOR TECHNOLOGY",
    description:
      "AI-powered video creation designed to help creators and businesses turn ideas into engaging video content faster.",
    extendedDescription:
      "VideoPost AI transforms raw concepts, scripts, and media into viral-ready video productions. Featuring automated script synthesis, dynamic scene generation, speech dubbing, and algorithmic distribution optimization.",
    status: "Live",
    url: "https://videopostai.com",
    ctaText: "Visit VideoPost AI →",
    logo: "/assets/logos/videopostai.png",
    previewImage: "/assets/mockups/preview-videopostai.png",
    gradient: "from-purple-600/30 via-indigo-600/20 to-blue-600/10",
    accentColor: "#8B5CF6",
    tags: ["Generative AI", "Video Synthesis", "Creator Economy", "Automation"],
    features: [
      "AI Script-to-Video Engine",
      "Dynamic B-Roll & Asset Matching",
      "Multi-Language Voice Cloning",
      "Cross-Platform Social Auto-Publishing",
    ],
    impactStatement: "Accelerating content production from hours to seconds for 10x output.",
    stats: [
      { label: "Generation Speed", value: "< 60s" },
      { label: "Platforms Supported", value: "TikTok, Reels, Shorts" },
      { label: "AI Pipeline", value: "Multi-Model" },
    ],
    market: "Global Creators & Digital Marketing Agencies",
  },
  {
    id: "footpawa",
    name: "FootPawa",
    category: "SPORTS TECHNOLOGY · AI",
    description:
      "An AI-powered football platform connecting players, scouts, agents, coaches, and teams through data-driven player profiles and analysis.",
    extendedDescription:
      "FootPawa bridges talent scouting and elite football analytics. By combining computer vision match analysis, intelligent performance metrics, and verified player passports, FootPawa uncovers undiscovered talent across Africa and global leagues.",
    status: "Live",
    url: "https://footpawa.com",
    ctaText: "Visit FootPawa →",
    logo: "/assets/logos/footpawa.png",
    previewImage: "/assets/mockups/preview-footpawa.png",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/10",
    accentColor: "#10B981",
    tags: ["Computer Vision", "Sports Analytics", "Talent Scouting", "Player Profiles"],
    features: [
      "AI Tactical & Physical Tracking",
      "Digital Player Passports & Video Highlights",
      "Verified Scouting & Agent Network",
      "Predictive Talent Potential Scoring",
    ],
    impactStatement: "Democratizing scouting opportunities for millions of grassroots athletes.",
    stats: [
      { label: "Focus", value: "Global Talent" },
      { label: "Metrics", value: "50+ Data Points" },
      { label: "Network", value: "Scouts & Clubs" },
    ],
    market: "Football Clubs, Scouts, Academies & Athletes Worldwide",
  },
  {
    id: "in2soc",
    name: "in2SOC",
    category: "CYBERSECURITY · AI",
    description:
      "An AI-powered security operations and cybersecurity learning environment designed to help people develop practical security skills.",
    extendedDescription:
      "in2SOC delivers realistic cyber ranges and AI security analyst simulations. Learners and defenders engage with simulated attacks, automated threat hunting, SIEM log analysis, and incident response runbooks in a real-time environment.",
    status: "Live",
    url: "https://in2soc.com",
    ctaText: "Explore in2SOC →",
    logo: "/assets/logos/in2soc.png",
    previewImage: "/assets/mockups/preview-in2soc.png",
    gradient: "from-cyan-600/30 via-blue-600/20 to-sky-600/10",
    accentColor: "#06B6D4",
    tags: ["Cyber Defense", "SOC Simulator", "Threat Hunting", "Hands-on Labs"],
    features: [
      "Live Cyber Attack Simulator",
      "Automated SIEM & EDR Triage Workflows",
      "Interactive SOC Analyst Playbooks",
      "AI Mentor with Real-time Code & Packet Feedback",
    ],
    impactStatement: "Closing the 4-million professional global cybersecurity workforce gap.",
    stats: [
      { label: "Lab Realism", value: "Enterprise SIEM" },
      { label: "Threat Scenarios", value: "MITRE ATT&CK" },
      { label: "Analyst Readiness", value: "Level 1 & 2" },
    ],
    market: "Security Analysts, IT Professionals, Universities & Enterprises",
  },
  {
    id: "intelligenfy",
    name: "Intelligenfy",
    category: "AI · FINANCIAL TECHNOLOGY",
    description:
      "An intelligent financial markets platform designed to help users analyze markets, strategies, and trading opportunities.",
    extendedDescription:
      "Intelligenfy synthesizes real-time market microstructure, algorithmic indicators, and quantitative predictive signals. Engineered for institutional clarity and retail trader empowerment across Equities, Forex, and Crypto.",
    status: "Live",
    url: "https://intelligenfy.com",
    ctaText: "Explore Intelligenfy →",
    logo: "/assets/logos/intelligenfy.png",
    previewImage: "/assets/mockups/preview-intelligenfy.png",
    gradient: "from-amber-600/30 via-orange-600/20 to-yellow-600/10",
    accentColor: "#F59E0B",
    tags: ["Quant Algorithms", "Market Intelligence", "Order Flow", "Backtesting"],
    features: [
      "Institutional Flow & Liquidity Heatmaps",
      "AI Strategy Optimization & Multi-Asset Backtesting",
      "Real-time Macro Sentiment Alerts",
      "Portfolio Risk Management Matrix",
    ],
    impactStatement: "Giving modern traders Wall Street-grade quantitative edge.",
    stats: [
      { label: "Data Feeds", value: "Real-time Ultra-low Latency" },
      { label: "Asset Classes", value: "FX, Equities, Indices" },
      { label: "Signal Engine", value: "Statistical Edge" },
    ],
    market: "Quantitative Traders, Retail Investors & Asset Managers",
  },
  {
    id: "buildanyshop",
    name: "BuildAnyShop",
    category: "AI · E-COMMERCE",
    description:
      "AI-powered tools for creating and launching online stores and digital commerce businesses faster.",
    extendedDescription:
      "BuildAnyShop empowers entrepreneurs to prompt high-converting storefronts into existence. From automated product catalog generation and localized payment gateway orchestration to AI copy and inventory syncing.",
    status: "Live",
    url: "https://buildanyshop.com",
    ctaText: "Explore BuildAnyShop →",
    logo: "/assets/logos/buildanyshop.svg",
    logoType: "svg",
    previewImage: "/assets/mockups/preview-buildanyshop.png",
    gradient: "from-blue-600/30 via-indigo-600/20 to-violet-600/10",
    accentColor: "#3B82F6",
    tags: ["Storefront Generator", "Next-Gen Commerce", "AI Catalog", "Global Checkout"],
    features: [
      "Instant AI Store Creation from Natural Language",
      "Localized Multi-Currency & Mobile Money Checkouts",
      "Autonomous SEO & High-Converting Product Copy",
      "Dropshipping & Direct Manufacturer Integrations",
    ],
    impactStatement: "Democratizing retail entrepreneurship from local markets to global consumers.",
    stats: [
      { label: "Setup Time", value: "< 5 Minutes" },
      { label: "Payments", value: "Global & Mobile Money" },
      { label: "Architecture", value: "Headless High-Speed" },
    ],
    market: "Global Merchants, Digital Entrepreneurs & Direct-to-Consumer Brands",
  },
  {
    id: "adpence-app",
    name: "Adpence App",
    category: "AI · INFLUENCER MARKETING & AD-TECH",
    description:
      "AI-powered influencer marketing and creator monetization platform connecting brands and creators through intelligent matching, automated content validation, and instant rewards.",
    extendedDescription:
      "Adpence App (adpence.app) enables creators and influencers to monetize their audience by turning posts into revenue across 8+ social platforms. Brands launch high-converting campaigns with AI-ranked creator matching, automated proof verification, and real-time ROI tracking.",
    status: "Live",
    url: "https://adpence.app",
    ctaText: "Visit Adpence App →",
    logo: "/assets/logos/adpence-app.png",
    previewImage: "/assets/mockups/preview-adpence.png",
    gradient: "from-purple-600/30 via-fuchsia-600/20 to-pink-600/10",
    accentColor: "#A855F7",
    tags: ["Influencer Marketing", "Creator Economy", "Content Validation", "Ad-Tech"],
    features: [
      "AI-Ranked Influencer & Brand Matching",
      "Automated Content Proof & Engagement Validation",
      "Multi-Platform Support Across 8+ Social Networks",
      "Fast 24-Hour Multi-Option Reward Fulfillment",
    ],
    impactStatement: "Empowering everyday creators and influencers to convert audience reach into sustainable economic opportunity.",
    stats: [
      { label: "Fulfillment", value: "< 24 Hours" },
      { label: "Platforms", value: "8+ Social Nets" },
      { label: "Verification", value: "AI-Powered" },
    ],
    market: "Brands, Sponsors, Content Creators & Influencers Worldwide",
  },
  {
    id: "adpence-ai-future",
    name: "Adpence AI / Future Labs",
    category: "IN DEVELOPMENT",
    description:
      "Adpence is continuously developing new AI-powered products, platforms, and digital businesses.",
    extendedDescription:
      "Our R&D pipeline is engineering autonomous business agents, cross-border fintech infrastructures, and next-generation educational technologies designed to unlock human potential at scale.",
    status: "In Development",
    url: "#contact",
    ctaText: "Follow Our Journey →",
    logo: "/assets/logos/adpence-mark.png",
    previewImage: "/assets/mockups/preview-future-labs.png",
    gradient: "from-white/10 via-white/5 to-transparent",
    accentColor: "#F43F5E",
    tags: ["Autonomous Agents", "Cross-Border Infrastructure", "Emerging Tech", "Incubation"],
    features: [
      "Multi-Agent Enterprise Orchestration",
      "Next-Gen Spatial Computing Interfaces",
      "AI-native Micro-SaaS Ecosystems",
      "Venture Studio Incubation Framework",
    ],
    impactStatement: "Continuously seeding the next frontier of high-leverage technology ventures.",
    stats: [
      { label: "Pipeline", value: "Active Incubation" },
      { label: "Focus", value: "Next-Gen AI Systems" },
      { label: "Timeline", value: "Rolling Launches 2026+" },
    ],
    market: "Global Technology Ecosystems",
  },
];

export const COMPANY_METRICS = [
  {
    value: "7+",
    label: "Technology Ventures",
    subtext: "Diverse product ecosystem spanning AI, sports, security, fintech & commerce",
  },
  {
    value: "AI-FIRST",
    label: "Product Strategy",
    subtext: "Core intelligence and autonomous automation baked into every platform",
  },
  {
    value: "GLOBAL",
    label: "Market Ambition",
    subtext: "Engineered from day one for international scale, reliability, and reach",
  },
  {
    value: "AFRICA",
    label: "Long-Term Focus",
    subtext: "Empowering talent, driving local opportunity, and exporting world-class tech",
  },
];

export const COMPANY_VALUES = [
  {
    title: "INNOVATION",
    subtitle: "Continuous Exploration",
    description:
      "We continuously explore new ways technology can solve meaningful problems.",
    icon: "Sparkles",
  },
  {
    title: "ACCESSIBILITY",
    subtitle: "Democratized Power",
    description:
      "Powerful technology should be available to more people—not only large corporations.",
    icon: "KeyRound",
  },
  {
    title: "ENTREPRENEURSHIP",
    subtitle: "From Idea to Execution",
    description:
      "We turn ideas into products, businesses, and opportunities.",
    icon: "Rocket",
  },
  {
    title: "GLOBAL IMPACT",
    subtitle: "Local Roots, Worldwide Reach",
    description:
      "We build for global markets while creating opportunities locally.",
    icon: "Globe2",
  },
];

export const ECOSYSTEM_PILLARS = [
  {
    id: "ai",
    title: "ARTIFICIAL INTELLIGENCE",
    shortTitle: "AI",
    tagline: "Autonomous Reasoning & Synthesis",
    description:
      "Custom generative models, computer vision pipelines, and intelligent agent workflows powering every product tier.",
    connectedProjects: ["VideoPost AI", "FootPawa", "in2SOC", "Intelligenfy", "BuildAnyShop", "Adpence App"],
    color: "#8B5CF6",
  },
  {
    id: "software",
    title: "SOFTWARE",
    shortTitle: "SOFTWARE",
    tagline: "Scalable Distributed Systems",
    description:
      "High-performance cloud architectures, real-time reactive frontends, and robust APIs built for enterprise reliability.",
    connectedProjects: ["VideoPost AI", "FootPawa", "in2SOC", "Intelligenfy", "BuildAnyShop", "Adpence App"],
    color: "#3B82F6",
  },
  {
    id: "automation",
    title: "AUTOMATION",
    shortTitle: "AUTOMATION",
    tagline: "Algorithmic Efficiency",
    description:
      "Self-healing workflows, real-time data ingestion, and zero-touch operations that eliminate operational friction.",
    connectedProjects: ["VideoPost AI", "in2SOC", "BuildAnyShop", "Intelligenfy", "Adpence App"],
    color: "#10B981",
  },
  {
    id: "digital-business",
    title: "DIGITAL BUSINESS",
    shortTitle: "DIGITAL BUSINESS",
    tagline: "Sustainable Economic Engines",
    description:
      "Monetization engines, multi-currency commerce, and venture development frameworks expanding human opportunity.",
    connectedProjects: ["BuildAnyShop", "Adpence App", "FootPawa", "Intelligenfy", "VideoPost AI"],
    color: "#F59E0B",
  },
];

export const MISSION_STEPS = [
  {
    step: "01",
    keyword: "Build",
    title: "Engineering Scalable Foundations",
    description:
      "We engineer production-grade platforms with modern AI architectures that solve acute, high-friction pain points.",
  },
  {
    step: "02",
    keyword: "Learn",
    title: "Practical Knowledge Transfer",
    description:
      "We build platforms like in2SOC and FootPawa that empower users to acquire real, high-value technical and professional skills.",
  },
  {
    step: "03",
    keyword: "Create",
    title: "Unlocking Economic Value",
    description:
      "We give creators, merchants, and founders autonomous tools like VideoPost AI and BuildAnyShop to generate income independently.",
  },
  {
    step: "04",
    keyword: "Scale",
    title: "Global Distribution & Impact",
    description:
      "We connect local talent and ventures to worldwide markets, expanding economic mobility across borders.",
  },
];
