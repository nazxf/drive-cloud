import { motion } from 'framer-motion';
import { Database, Lock, Zap, HardDrive, Radio, Box, Code2, Check } from 'lucide-react';

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

        {/* Headset/Support illustration - like in reference */}
        <g transform="translate(100, 85)">
            {/* Main headband arc */}
            <path
                d="M-40 0 C-40 -45, 40 -45, 40 0"
                fill="none"
                stroke="#6b7280"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* Left ear cup */}
            <ellipse cx="-42" cy="8" rx="12" ry="18" fill="none" stroke="#6b7280" strokeWidth="2.5" />
            <ellipse cx="-42" cy="8" rx="7" ry="12" fill="url(#headsetGradient)" stroke="#4b5563" strokeWidth="1" />

            {/* Right ear cup */}
            <ellipse cx="42" cy="8" rx="12" ry="18" fill="none" stroke="#6b7280" strokeWidth="2.5" />
            <ellipse cx="42" cy="8" rx="7" ry="12" fill="url(#headsetGradient)" stroke="#4b5563" strokeWidth="1" />

            {/* Microphone arm */}
            <path
                d="M-30 18 Q-35 35, -15 45 Q-5 48, 0 42"
                fill="none"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Microphone head */}
            <circle cx="0" cy="42" r="6" fill="none" stroke="#6b7280" strokeWidth="2" />
            <circle cx="0" cy="42" r="2" fill="#6b7280" />
        </g>

        {/* Decorative corner brackets */}
        <g stroke="#10b981" strokeWidth="1" opacity="0.4">
            <path d="M15 15 L35 15 M15 15 L15 35" fill="none" />
            <path d="M185 15 L165 15 M185 15 L185 35" fill="none" />
        </g>
    </svg>
);

const AuthIllustration = () => (
    <div className="relative w-full h-full flex flex-col gap-2.5 p-4">
        {/* Email/User rows - cleaner style */}
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
        {/* Terminal command - styled like reference */}
        <div className="mb-6 bg-zinc-900/80 rounded-lg px-4 py-2.5 border border-emerald-500/40 inline-flex items-center gap-2 self-start">
            <span className="text-emerald-400 text-xs font-bold">$</span>
            <span className="text-xs text-zinc-200 font-mono">teracloud functions deploy</span>
        </div>

        {/* Network visualization */}
        <svg viewBox="0 0 180 80" className="w-full flex-1">
            {/* Connection lines */}
            <g stroke="#10b981" strokeWidth="1" opacity="0.5">
                <line x1="90" y1="15" x2="40" y2="45" />
                <line x1="90" y1="15" x2="90" y2="55" />
                <line x1="90" y1="15" x2="140" y2="45" />
                <line x1="40" y1="45" x2="90" y2="55" />
                <line x1="140" y1="45" x2="90" y2="55" />
                <line x1="40" y1="45" x2="140" y2="45" strokeDasharray="3,3" />
            </g>

            {/* Nodes */}
            <circle cx="90" cy="15" r="5" fill="#10b981" />
            <circle cx="40" cy="45" r="4" fill="#10b981" opacity="0.7" />
            <circle cx="90" cy="55" r="4" fill="#10b981" opacity="0.7" />
            <circle cx="140" cy="45" r="4" fill="#10b981" opacity="0.7" />

            {/* Extra decorative nodes */}
            <circle cx="20" cy="65" r="2" fill="#10b981" opacity="0.3" />
            <circle cx="160" cy="65" r="2" fill="#10b981" opacity="0.3" />
        </svg>
    </div>
);

const StorageIllustration = () => (
    <div className="w-full h-full p-4 pt-6">
        {/* File type grid - cleaner like reference */}
        <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="aspect-square rounded-md border border-zinc-800 bg-zinc-900/40 flex items-center justify-center hover:border-zinc-700 transition-colors"
                >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-zinc-600">
                        <rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                    </svg>
                </div>
            ))}
        </div>
    </div>
);

const RealtimeIllustration = () => (
    <div className="w-full h-full p-4 flex items-center justify-center relative">
        <svg viewBox="0 0 160 100" className="w-full h-full">
            {/* Cursor 1 - Dark */}
            <g transform="translate(45, 25)">
                <path
                    d="M0 0 L0 24 L6 18 L12 30 L16 28 L10 16 L18 16 Z"
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="1"
                />
            </g>

            {/* Cursor 2 - Light */}
            <g transform="translate(85, 45)">
                <path
                    d="M0 0 L0 24 L6 18 L12 30 L16 28 L10 16 L18 16 Z"
                    fill="#9ca3af"
                    stroke="#d1d5db"
                    strokeWidth="1"
                />
            </g>

            {/* Connection indicator dots */}
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
        {/* 3D Hexagonal cube - like reference */}
        <svg viewBox="0 0 120 100" className="w-full flex-1">
            <g transform="translate(60, 50)">
                {/* Outer hexagon */}
                <polygon
                    points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                />

                {/* Inner connecting lines to center */}
                <line x1="0" y1="-35" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="-17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="30" y1="17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="0" y1="35" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="-30" y1="17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="-30" y1="-17" x2="0" y2="0" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />

                {/* Vertex dots */}
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
                    {/* Storage */}
                    <FeatureCard
                        icon={<HardDrive className="w-5 h-5" />}
                        title="Storage"
                        description={
                            <span>
                                <span className="text-white font-medium">Store, organize, and serve</span> large files, from videos to images.
                            </span>
                        }
                        illustration={<StorageIllustration />}
                    />

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
