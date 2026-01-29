
import { motion } from 'framer-motion';
import { Database, Lock, Zap, Radio, Box, Code2 } from 'lucide-react';
import { FeatureCard } from './bento/FeatureCard';
import { StorageFeatureCard } from './bento/StorageFeatureCard';
import {
    CloudDatabaseIllustration,
    AuthIllustration,
    EdgeFunctionIllustration,
    RealtimeIllustration,
    VectorIllustration,
    DataAPIsIllustration
} from './bento/Illustrations';

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
