import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HardDrive, Image, FileText, Video } from 'lucide-react';

const IconBox = ({ children }: { children: React.ReactNode }) => (
    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900/50 transition-all duration-300 group-hover:border-zinc-700/80 group-hover:bg-zinc-800/30">
        {children}
    </div>
);

const MarqueeRow = ({ children, direction = "left", speed = 25 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden select-none gap-2">
            <motion.div
                animate={{
                    x: direction === "left" ? [0, -280] : [-280, 0],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-none gap-2"
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

export const StorageFeatureCard = () => {
    const [hovering, setHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

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

    const renderIcons = (IconComponent: React.ElementType, count: number = 5) =>
        Array(count).fill(0).map((_, i) => (
            <IconBox key={i}>
                <IconComponent className="w-5 h-5 text-zinc-600 stroke-[1.5] transition-colors duration-500 group-hover:text-zinc-400" />
            </IconBox>
        ));

    return (
        <div className="h-full w-full" style={{ perspective: '1000px' }}>
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
                className="group relative w-full h-full bg-zinc-950 rounded-2xl border border-zinc-800/60 overflow-hidden transition-all duration-300 hover:border-zinc-700/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col"
            >
                {/* Spotlight Effect */}
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 70%)`,
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
                <div className="p-5 pb-3 relative z-20">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="text-emerald-400">
                            <HardDrive className="w-5 h-5" />
                        </div>
                        <h3 className="font-medium text-white">Storage</h3>
                    </div>

                    <div className="text-sm text-zinc-400 leading-relaxed">
                        <span className="text-white font-medium">Store, organize, and serve</span>{' '}
                        large files, from videos to images.
                    </div>
                </div>

                {/* Icons Marquee Animation Area */}
                <div className="relative flex-1 overflow-hidden z-10">
                    {/* Gradient overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

                    <div className="px-2 flex flex-col gap-2 py-2">
                        <MarqueeRow direction="left" speed={30}>
                            {renderIcons(Image, 5)}
                        </MarqueeRow>
                        <MarqueeRow direction="right" speed={35}>
                            {renderIcons(FileText, 5)}
                        </MarqueeRow>
                        <MarqueeRow direction="left" speed={28}>
                            {renderIcons(Video, 5)}
                        </MarqueeRow>
                    </div>
                </div>

                {/* Border Highlight */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 rounded-2xl transition-colors pointer-events-none" />
            </motion.div>
        </div>
    );
};
