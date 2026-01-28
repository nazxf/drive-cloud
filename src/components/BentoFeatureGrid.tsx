import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Database, Lock, Zap, HardDrive, Radio, Box, Code2, Check, Image, FileText, Video } from 'lucide-react';

// ============================================
// NEW STORAGE CARD COMPONENTS
// ============================================

const IconBox = ({ children }: { children: React.ReactNode }) => (
    <div className="w-[72px] h-[72px] flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 group-hover:border-white/[0.15]">
        {children}
    </div>
);

const MarqueeRow = ({ children, direction = "left", speed = 40 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden select-none gap-3 py-1.5">
            <motion.div
                animate={{
                    x: direction === "left" ? [0, -420] : [-420, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-none gap-3"
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

const StorageFeatureCard = () => {
    const [hovering, setHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        x.set(mouseXPos / width - 0.5);
        y.set(mouseYPos / height - 0.5);
    };

    const handleMouseLeave = () => {
        setHovering(false);
        x.set(0);
        y.set(0);
    };

    const renderIcons = (IconComponent: React.ElementType) =>
        Array(8).fill(0).map((_, i) => (
            <IconBox key={i}>
                <IconComponent className="w-7 h-7 text-zinc-600 stroke-[1.5] transition-colors duration-500 group-hover:text-zinc-400" />
            </IconBox>
        ));

    return (
        <div className="h-full w-full perspective-1000">
            <motion.div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative w-full h-full bg-[#121212] rounded-[24px] border border-white/[0.1] overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
            >
                {/* Spotlight Effect */}
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 80%)`,
                    }}
                    ref={(el) => {
                        if (el && hovering) {
                            const rect = containerRef.current?.getBoundingClientRect();
                            if (rect) {
                                el.style.setProperty('--mouse-x', `${(mouseX.get() + 0.5) * rect.width}px`);
                                el.style.setProperty('--mouse-y', `${(mouseY.get() + 0.5) * rect.height}px`);
                            }
                        }
                    }}
                />

                {/* Content */}
                <div className="p-8 pb-4 relative z-20 pointer-events-none">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-white/5 p-2 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors">
                            <HardDrive className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-white text-[19px] font-medium tracking-wide">Storage</h2>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-white text-[20px] font-bold leading-tight">
                            Store, organize, and serve
                        </h3>
                        <p className="text-[#71717a] text-[18px] leading-tight font-medium transition-colors group-hover:text-zinc-400">
                            large files, from videos to images.
                        </p>
                    </div>
                </div>

                {/* Icons Animation Area */}
                <div className="relative flex-1 min-h-[200px] overflow-hidden z-10 mt-auto">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                    <div className="px-4 flex flex-col gap-1 transition-transform duration-500 group-hover:scale-[1.02]">
                        <MarqueeRow direction="left" speed={50}>
                            {renderIcons(Image)}
                        </MarqueeRow>
                        <MarqueeRow direction="right" speed={55}>
                            {renderIcons(FileText)}
                        </MarqueeRow>
                        <MarqueeRow direction="left" speed={45}>
                            {renderIcons(Video)}
                        </MarqueeRow>
                    </div>
                </div>

                {/* Border Highlight */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[24px] transition-colors pointer-events-none" />
            </motion.div>
        </div>
    );
};


// ============================================
// ILLUSTRATION COMPONENTS - IMPROVED
// ============================================

const CloudDatabaseIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
        <defs>
            <linearGradient id="headsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6b7280" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#374151" stopOpacity="0.1" />
            </linearGradient>
        </defs>

        {/* Headset/Support illustration */}
        <g transform="translate(100, 85)">
            <path
                d="M-40 0 C-40 -45, 40 -45, 40 0"
                fill="none"
                stroke="#6b7280"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <ellipse cx="-42" cy="8" rx="12" ry="18" fill="none" stroke="#6b7280" strokeWidth="2.5" />
            <ellipse cx="-42" cy="8" rx="7" ry="12" fill="url(#headsetGradient)" stroke="#4b5563" strokeWidth="1" />
            <ellipse cx="42" cy="8" rx="12" ry="18" fill="none" stroke="#6b7280" strokeWidth="2.5" />
            <ellipse cx="42" cy="8" rx="7" ry="12" fill="url(#headsetGradient)" stroke="#4b5563" strokeWidth="1" />
            <path
                d="M-30 18 Q-35 35, -15 45 Q-5 48, 0 42"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <circle cx="0" cy="42" r="6" fill="none" stroke="#6b7280" strokeWidth="2" />
            <circle cx="0" cy="42" r="2" fill="#6b7280" />
        </g>

        <g stroke="#10b981" strokeWidth="1" opacity="0.4">
            <path d="M15 15 L35 15 M15 15 L15 35" fill="none" />
            <path d="M185 15 L165 15 M185 15 L185 35" fill="none" />
        </g>
    </svg>
);

const AuthIllustration = () => (
    <div className="relative w-full h-full flex flex-col gap-2.5 p-4">
        {[
            { email: 's160198@gmail.com', user: 'alex160198' },
            { email: 'x234567@gmail.com', user: 'mememaster' },
            { email: 'dev@teracloud.io', user: 'developer' },
        ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 bg-zinc-900/60 rounded-lg px-3 py-2.5 border border-zinc-800/80">
                <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                <span className="text-[11px] text-zinc-400 font-mono flex-1 truncate">{row.email}</span>
                <span className="text-[11px] text-zinc-500 font-mono">{row.user}</span>
            </div>
        ))}
    </div>
);

const EdgeFunctionIllustration = () => (
    <div className="relative w-full h-full p-4 flex flex-col">
        <div className="mb-6 bg-zinc-900/80 rounded-lg px-4 py-2.5 border border-emerald-500/40 inline-flex items-center gap-2 self-start">
            <span className="text-emerald-400 text-xs font-bold">$</span>
            <span className="text-xs text-zinc-200 font-mono">teracloud functions deploy</span>
        </div>

        <svg viewBox="0 0 180 80" className="w-full flex-1">
            <g stroke="#10b981" strokeWidth="1" opacity="0.5">
                <line x1="90" y1="15" x2="40" y2="45" />
                <line x1="90" y1="15" x2="90" y2="55" />
                <line x1="90" y1="15" x2="140" y2="45" />
                <line x1="40" y1="45" x2="90" y2="55" />
                <line x1="140" y1="45" x2="90" y2="55" />
                <line x1="40" y1="45" x2="140" y2="45" strokeDasharray="3,3" />
            </g>

            <circle cx="90" cy="15" r="5" fill="#10b981" />
            <circle cx="40" cy="45" r="4" fill="#10b981" opacity="0.7" />
            <circle cx="90" cy="55" r="4" fill="#10b981" opacity="0.7" />
            <circle cx="140" cy="45" r="4" fill="#10b981" opacity="0.7" />

            <circle cx="20" cy="65" r="2" fill="#10b981" opacity="0.3" />
            <circle cx="160" cy="65" r="2" fill="#10b981" opacity="0.3" />
        </svg>
    </div>
);

const RealtimeIllustration = () => (
    <div className="w-full h-full p-4 flex items-center justify-center relative">
        <svg viewBox="0 0 160 100" className="w-full h-full">
            <g transform="translate(45, 25)">
                <path
                    d="M0 0 L0 24 L6 18 L12 30 L16 28 L10 16 L18 16 Z"
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="1"
                />
            </g>
            <g transform="translate(85, 45)">
                <path
                    d="M0 0 L0 24 L6 18 L12 30 L16 28 L10 16 L18 16 Z"
                    fill="#9ca3af"
                    stroke="#d1d5db"
                    strokeWidth="1"
                />
            </g>
            <g transform="translate(120, 50)">
                <circle cx="0" cy="0" r="3" fill="#10b981" />
                <circle cx="10" cy="0" r="3" fill="#10b981" />
                <circle cx="20" cy="0" r="3" fill="#10b981" />
            </g>
        </svg>
    </div>
);

const VectorIllustration = () => (
    <div className="w-full h-full p-4 flex flex-col items-center justify-center">
        <svg viewBox="0 0 120 100" className="w-full flex-1">
            <g transform="translate(60, 50)">
                <polygon
                    points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                />
                <line x1="0" y1="-35" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="-17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="0" y1="35" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="-30" y1="17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="-30" y1="-17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />

                <circle cx="0" cy="-35" r="3" fill="#10b981" />
                <circle cx="30" cy="-17" r="3" fill="#10b981" />
                <circle cx="30" cy="17" r="3" fill="#10b981" />
                <circle cx="0" cy="35" r="3" fill="#10b981" />
                <circle cx="-30" cy="17" r="3" fill="#10b981" />
                <circle cx="-30" cy="-17" r="3" fill="#10b981" />
                <circle cx="0" cy="0" r="2" fill="#10b981" opacity="0.6" />
            </g>
        </svg>
    </div>
);

const DataAPIsIllustration = () => (
    <div className="w-full h-full p-3 flex flex-col gap-1.5 overflow-hidden">
        {[
            { table: 'countries', endpoint: '/v1/countries' },
            { table: 'continents', endpoint: '/v1/continents' },
            { table: 'cities', endpoint: '/v1/cities' },
            { table: 'states', endpoint: '/v1/states' },
            { table: 'country_codes', endpoint: '/v1/country_codes' },
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-500 font-mono bg-zinc-900/70 px-2 py-1 rounded border border-zinc-800 min-w-[75px] truncate">
                    {item.table}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                    {item.endpoint}
                </span>
            </div>
        ))}
    </div>
);

// ============================================
// FEATURE CARD COMPONENT
// ============================================

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    illustration: React.ReactNode;
    className?: string;
    features?: string[];
}

const FeatureCard = ({ icon, title, description, illustration, className = '', features }: FeatureCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative rounded-2xl border border-zinc-800/60 bg-zinc-950 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 ${className}`}
    >
        {/* Content */}
        <div className="p-5 pb-3 relative z-10">
            <div className="flex items-center gap-2 mb-2">
                <div className="text-emerald-400">{icon}</div>
                <h3 className="font-medium text-white">{title}</h3>
            </div>
            <div className="text-sm text-zinc-400 leading-relaxed">
                {description}
            </div>
            {features && (
                <div className="mt-4 space-y-2">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* Illustration */}
        <div className="relative min-h-[120px]">
            {illustration}
        </div>
    </motion.div>
);

// ============================================
// MAIN COMPONENT
// ============================================

export const BentoFeatureGrid = () => {
    return (
        <section className="w-full py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        Build in a weekend, <span className="text-emerald-400">scale to millions</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Everything you need to build modern applications with enterprise-grade infrastructure.
                    </p>
                </motion.div>

                {/* Bento Grid - Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {/* Large Card - Cloud Database */}
                    <FeatureCard
                        className="lg:row-span-2"
                        icon={<Database className="w-5 h-5" />}
                        title="Cloud Database"
                        description={
                            <span>
                                Every project is a <span className="text-white font-medium">full cloud database</span>, with enterprise-grade infrastructure and performance.
                            </span>
                        }
                        features={[
                            '100% scalable',
                            'Built-in encryption',
                            'Easy to extend'
                        ]}
                        illustration={
                            <div className="h-44 flex items-center justify-center">
                                <CloudDatabaseIllustration />
                            </div>
                        }
                    />

                    {/* Authentication */}
                    <FeatureCard
                        icon={<Lock className="w-5 h-5" />}
                        title="Authentication"
                        description={
                            <span>
                                Add user sign ups and logins, <span className="text-white font-medium">securing your data</span> with Row Level Security.
                            </span>
                        }
                        illustration={<AuthIllustration />}
                    />

                    {/* Edge Functions */}
                    <FeatureCard
                        icon={<Zap className="w-5 h-5" />}
                        title="Edge Functions"
                        description={
                            <span>
                                Easily write custom code <span className="text-white font-medium">without deploying</span> or scaling servers.
                            </span>
                        }
                        illustration={<EdgeFunctionIllustration />}
                    />
                </div>

                {/* Bottom Row - 4 smaller cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Storage - REPLACED WITH NEW 3D CARD */}
                    <div className="h-full">
                        <StorageFeatureCard />
                    </div>

                    {/* Realtime */}
                    <FeatureCard
                        icon={<Radio className="w-5 h-5" />}
                        title="Realtime"
                        description={
                            <span>
                                Build multiplayer experiences with <span className="text-white font-medium">real-time data sync</span>.
                            </span>
                        }
                        illustration={<RealtimeIllustration />}
                    />

                    {/* Vector */}
                    <FeatureCard
                        icon={<Box className="w-5 h-5" />}
                        title="Vector"
                        description={
                            <span>
                                Integrate ML-models to <span className="text-emerald-400">store, index and search</span> vector embeddings.
                            </span>
                        }
                        illustration={<VectorIllustration />}
                    />

                    {/* Data APIs */}
                    <FeatureCard
                        icon={<Code2 className="w-5 h-5" />}
                        title="Data APIs"
                        description={
                            <span>
                                Instant ready-to-use <span className="text-white font-medium">Restful APIs</span>.
                            </span>
                        }
                        illustration={<DataAPIsIllustration />}
                    />
                </div>
            </div>
        </section>
    );
};

export default BentoFeatureGrid;
