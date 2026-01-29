import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    illustration: React.ReactNode;
    className?: string;
    features?: string[];
}

export const FeatureCard = ({ icon, title, description, illustration, className = '', features }: FeatureCardProps) => (
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
