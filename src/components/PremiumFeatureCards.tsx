import { motion } from 'framer-motion';

// SVG Illustrations for each feature card
const CloudStorageIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
        {/* Background glow */}
        <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Main cloud icon */}
        <g transform="translate(50, 30)">
            <path
                d="M90 80H25c-11 0-20-9-20-20s9-20 20-20c1.5 0 3 .2 4.4.5C33 28 45 18 60 18c19 0 35 15 37 34h2c11 0 20 9 20 20s-9 20-20 20z"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                filter="url(#glow)"
            />
            {/* Inner glow */}
            <path
                d="M90 80H25c-11 0-20-9-20-20s9-20 20-20c1.5 0 3 .2 4.4.5C33 28 45 18 60 18c19 0 35 15 37 34h2c11 0 20 9 20 20s-9 20-20 20z"
                fill="url(#cloudGradient)"
                opacity="0.3"
            />
        </g>

        {/* Decorative lines */}
        <line x1="20" y1="130" x2="180" y2="130" stroke="#10b981" strokeWidth="0.5" opacity="0.2" />
        <line x1="40" y1="140" x2="160" y2="140" stroke="#10b981" strokeWidth="0.5" opacity="0.1" />

        {/* Corner accents */}
        <path d="M10 10 L30 10 M10 10 L10 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <path d="M190 10 L170 10 M190 10 L190 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
    </svg>
);

const AIIntegrationIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
        <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
            </linearGradient>
        </defs>

        {/* AI Brain/Network pattern */}
        <g transform="translate(100, 80)">
            {/* Central hexagon */}
            <polygon
                points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17"
                fill="url(#aiGradient)"
                stroke="#10b981"
                strokeWidth="1.5"
            />

            {/* Inner patterns */}
            <circle cx="0" cy="0" r="12" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.6" />
            <circle cx="0" cy="0" r="6" fill="#10b981" opacity="0.4" />

            {/* Connection lines */}
            <g stroke="#10b981" strokeWidth="0.5" opacity="0.4">
                <line x1="-50" y1="-30" x2="-30" y2="-17" />
                <line x1="50" y1="-30" x2="30" y2="-17" />
                <line x1="-50" y1="30" x2="-30" y2="17" />
                <line x1="50" y1="30" x2="30" y2="17" />
                <line x1="0" y1="-55" x2="0" y2="-35" />
                <line x1="0" y1="55" x2="0" y2="35" />
            </g>

            {/* Outer nodes */}
            <circle cx="-50" cy="-30" r="4" fill="#10b981" opacity="0.5" />
            <circle cx="50" cy="-30" r="4" fill="#10b981" opacity="0.5" />
            <circle cx="-50" cy="30" r="4" fill="#10b981" opacity="0.5" />
            <circle cx="50" cy="30" r="4" fill="#10b981" opacity="0.5" />
            <circle cx="0" cy="-55" r="4" fill="#10b981" opacity="0.5" />
            <circle cx="0" cy="55" r="4" fill="#10b981" opacity="0.5" />
        </g>

        {/* Corner decorations */}
        <path d="M10 10 L30 10 M10 10 L10 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <path d="M190 10 L170 10 M190 10 L190 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
    </svg>
);

const SecurityIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
        <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
            </linearGradient>
        </defs>

        {/* Shield shape */}
        <g transform="translate(100, 80)">
            <path
                d="M0 -50 L45 -35 L45 10 C45 35 25 55 0 65 C-25 55 -45 35 -45 10 L-45 -35 Z"
                fill="url(#shieldGradient)"
                stroke="#10b981"
                strokeWidth="1.5"
            />

            {/* Certificate badge inside */}
            <rect x="-25" y="-20" width="50" height="35" rx="4" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.6" />
            <text x="0" y="-5" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">SOC 2</text>
            <text x="0" y="5" textAnchor="middle" fill="#10b981" fontSize="6" fontFamily="monospace" opacity="0.7">Type II</text>

            {/* Checkmark */}
            <circle cx="0" cy="25" r="8" fill="none" stroke="#10b981" strokeWidth="1" />
            <path d="M-4 25 L-1 28 L4 22" stroke="#10b981" strokeWidth="1.5" fill="none" />
        </g>

        {/* Decorative scan lines */}
        <g stroke="#10b981" strokeWidth="0.3" opacity="0.2">
            <line x1="20" y1="130" x2="180" y2="130" />
            <line x1="30" y1="140" x2="170" y2="140" />
        </g>

        {/* Corner accents */}
        <path d="M10 10 L30 10 M10 10 L10 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <path d="M190 10 L170 10 M190 10 L190 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
    </svg>
);

const GlobalDeployIllustration = () => (
    <svg viewBox="0 0 200 160" className="w-full h-full">
        {/* Dotted world map representation */}
        <g transform="translate(100, 80)">
            {/* Grid of dots representing global presence */}
            {[...Array(8)].map((_, row) => (
                [...Array(12)].map((_, col) => {
                    const x = (col - 5.5) * 14;
                    const y = (row - 3.5) * 14;
                    const isActive = Math.random() > 0.4;
                    return (
                        <circle
                            key={`${row}-${col}`}
                            cx={x}
                            cy={y}
                            r={isActive ? 3 : 2}
                            fill="#10b981"
                            opacity={isActive ? 0.6 : 0.2}
                        />
                    );
                })
            ))}

            {/* Connection lines between some nodes */}
            <g stroke="#10b981" strokeWidth="0.5" opacity="0.3">
                <line x1="-50" y1="-30" x2="30" y2="-10" strokeDasharray="2,2" />
                <line x1="30" y1="-10" x2="60" y2="20" strokeDasharray="2,2" />
                <line x1="-40" y1="10" x2="20" y2="30" strokeDasharray="2,2" />
            </g>
        </g>

        {/* Corner accents */}
        <path d="M10 10 L30 10 M10 10 L10 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <path d="M190 10 L170 10 M190 10 L190 30" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <path d="M10 150 L30 150 M10 150 L10 130" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <path d="M190 150 L170 150 M190 150 L190 130" stroke="#10b981" strokeWidth="1" opacity="0.4" />
    </svg>
);

interface FeatureCardData {
    illustration: React.ReactNode;
    title: string;
    description: string;
}

const features: FeatureCardData[] = [
    {
        illustration: <CloudStorageIllustration />,
        title: 'Cloud Storage',
        description: 'Store and organize your files with enterprise-grade infrastructure. Unlimited scalability with global CDN distribution.',
    },
    {
        illustration: <AIIntegrationIllustration />,
        title: 'AI-Powered',
        description: 'Smart file organization with AI. Automatic tagging, search, and recommendations powered by machine learning.',
    },
    {
        illustration: <SecurityIllustration />,
        title: 'Secure and Scalable',
        description: 'TeraCloud is SOC 2 Type II compliant, featuring end-to-end encryption and advanced permission controls.',
    },
    {
        illustration: <GlobalDeployIllustration />,
        title: 'Deploy Globally',
        description: 'Access your files from anywhere with our globally distributed data centers. Low latency worldwide.',
    },
];

const PremiumFeatureCard = ({ feature, index }: { feature: FeatureCardData; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative h-full rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-zinc-900/80 to-black overflow-hidden transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]">
                {/* Illustration Container */}
                <div className="h-40 relative overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />

                    {/* Grid pattern background */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <svg className="w-full h-full">
                            <defs>
                                <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>
                    </div>

                    {/* Illustration */}
                    <div className="absolute inset-0 p-4">
                        {feature.illustration}
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {feature.description}
                    </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500/50" />
                </div>
            </div>
        </motion.div>
    );
};

export const PremiumFeatureCards = () => {
    return (
        <section className="w-full py-24 px-4 bg-black relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-2xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        Built for the <span className="text-emerald-400">modern web</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Enterprise-grade infrastructure with developer-friendly tools.
                        Scale from prototype to production with confidence.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <PremiumFeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumFeatureCards;
