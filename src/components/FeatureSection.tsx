import {
    Cloud,
    RefreshCw,
    Shield,
    Code2,
    Users,
    BarChart3,
    type LucideIcon
} from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    highlightWord: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, highlightWord, description }: FeatureCardProps) => {
    // Split title to highlight specific word
    const parts = title.split(highlightWord);

    return (
        <div className="group relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--accent-secondary)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 cursor-pointer overflow-hidden">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-[var(--accent-muted)] group-hover:text-emerald-400 transition-colors duration-300" strokeWidth={1.5} />
                    <h3 className="text-base font-medium text-[var(--accent-primary)]">
                        {parts[0]}
                        <span className="text-emerald-400">{highlightWord}</span>
                        {parts[1] || ''}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--accent-muted)] leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Decorative element - subtle grid pattern */}
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
        </div>
    );
};

const features: FeatureCardProps[] = [
    {
        icon: Cloud,
        title: 'Cloud Storage',
        highlightWord: 'Storage',
        description: 'Store and organize your files in the cloud with enterprise-grade infrastructure and instant access from anywhere.',
    },
    {
        icon: RefreshCw,
        title: 'Realtime Sync',
        highlightWord: 'Realtime',
        description: 'Keep your files synchronized across all devices with real-time updates and conflict resolution.',
    },
    {
        icon: Shield,
        title: 'Security First',
        highlightWord: 'Security',
        description: 'End-to-end encryption and advanced access controls to keep your data protected at all times.',
    },
    {
        icon: Code2,
        title: 'Developer APIs',
        highlightWord: 'APIs',
        description: 'Powerful REST and GraphQL APIs with comprehensive SDKs for seamless integration.',
    },
    {
        icon: Users,
        title: 'Team Collaboration',
        highlightWord: 'Collaboration',
        description: 'Share files and folders with your team. Role-based permissions and activity tracking built-in.',
    },
    {
        icon: BarChart3,
        title: 'Analytics Dashboard',
        highlightWord: 'Analytics',
        description: 'Gain insights into storage usage, file access patterns, and team activity with detailed reports.',
    },
];

export const FeatureSection = () => {
    return (
        <section className="w-full py-20 px-4 bg-[var(--bg-deep)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent-primary)] mb-4">
                        Everything you need to <span className="text-emerald-400">scale</span>
                    </h2>
                    <p className="text-[var(--accent-muted)] text-lg max-w-2xl mx-auto">
                        A complete toolkit for modern file management. Built for developers, designed for everyone.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
