import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { animate, createScope, stagger } from 'animejs'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Shield, Zap, Cloud, Lock, Globe, Sparkles, Star, Plus } from 'lucide-react'
import PremiumFeatureCards from '../components/PremiumFeatureCards'

const Landing = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const handleHover = (el: HTMLElement | null, scaleVal: number) => {
        if (!el) return;
        animate(el, {
            scale: scaleVal,
            duration: 800,
            ease: 'outElastic(1, .5)'
        });
    }

    useEffect(() => {
        if (!containerRef.current) return

        const scope = createScope({ root: containerRef.current });

        // Hero Animation
        scope.add(() => {
            // Hero Badge
            animate('.hero-badge', {
                y: [-20, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 200,
                ease: 'outExpo'
            });

            // Hero Title Letters
            animate('.hero-title .letter', {
                y: [20, 0],
                opacity: [0, 1],
                duration: 950,
                delay: stagger(30, { start: 0 }),
                ease: 'outExpo'
            });

            // Description
            animate('.hero-desc', {
                y: [20, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 400,
                ease: 'outExpo'
            });

            // Buttons
            animate('.hero-btns', {
                y: [20, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 500,
                ease: 'outExpo'
            });

            // Trust Badges
            animate('.hero-trust', {
                y: [10, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 600,
                ease: 'outExpo'
            });

            // Preview
            animate('.hero-preview', {
                y: [40, 0],
                opacity: [0, 1],
                duration: 1200,
                delay: 800,
                ease: 'outExpo'
            });
        });

        // Scroll In View Animations
        const observeSection = (selector: string, delayBase = 0) => {
            const elements = containerRef.current?.querySelectorAll(selector);
            if (!elements?.length) return;

            const observer = new IntersectionObserver((entries) => {
                if (entries.some(e => e.isIntersecting)) {
                    animate(selector, {
                        y: [50, 0],
                        opacity: [0, 1],
                        delay: stagger(100, { start: delayBase }),
                        duration: 800,
                        ease: 'outExpo'
                    });
                    observer.disconnect();
                }
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
            return observer;
        };

        const featureObserver = observeSection('.feature-card');
        const testimonialObserver = observeSection('.testimonial-card');
        const pricingObserver = observeSection('.pricing-card');

        // Parallax Effect
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const elements = containerRef.current?.querySelectorAll<HTMLElement>('.parallax-element');
            elements?.forEach(el => {
                const speed = parseFloat(el.dataset.speed || '0');
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            featureObserver?.disconnect();
            testimonialObserver?.disconnect();
            pricingObserver?.disconnect();
            // scope.dispose(); // Removed as it might cause issues if type definitions aren't perfect, relying on React unmount
        };

    }, [])

    const features = [
        {
            icon: Shield,
            title: 'End-to-end encryption',
            description: 'Your files are encrypted before they leave your device.',
        },
        {
            icon: Zap,
            title: 'Lightning fast',
            description: 'Optimized for speed with global CDN distribution.',
        },
        {
            icon: Cloud,
            title: 'Unlimited storage',
            description: 'Scale your storage as your needs grow.',
        },
        {
            icon: Lock,
            title: 'Zero-knowledge',
            description: 'We can never access your files. Only you hold the keys.',
        },
        {
            icon: Globe,
            title: 'Global access',
            description: 'Access your files from anywhere in the world.',
        },
        {
            icon: Sparkles,
            title: 'AI-powered',
            description: 'Smart organization and search powered by AI.',
        },
    ]

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
            {/* Parallax Background */}
            {/* Navigation */}
            <nav className="border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="TeraCloud" className="w-8 h-8" />
                            <span className="font-semibold text-lg">TeraCloud</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                            <Link to="#features" className="hover:text-white transition-colors">Features</Link>
                            <Link to="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                            <Link to="/docs" className="hover:text-white transition-colors">Docs</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/register"
                            className="text-sm px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-zinc-200 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative">
                <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="max-w-3xl"
                    >
                        {/* Badge */}
                        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 mb-6 opacity-0">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            New: AI-powered file organization
                        </div>

                        <h1 className="hero-title text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                            <span className="block overflow-hidden">
                                {"The modern way to store".split("").map((char, i) => (
                                    <span key={i} className={`letter inline-block ${char === ' ' ? 'w-3' : ''}`}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                            <span className="text-zinc-500 block overflow-hidden">
                                {"and share files".split("").map((char, i) => (
                                    <span key={i + 100} className={`letter inline-block ${char === ' ' ? 'w-3' : ''}`}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </h1>

                        <p className="hero-desc text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed opacity-0">
                            Secure, fast, and beautifully simple cloud storage.
                            Built for teams who care about privacy and performance.
                        </p>

                        <div className="hero-btns flex flex-col sm:flex-row gap-3 mb-12 opacity-0">
                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black rounded-md font-medium text-sm hover:bg-zinc-200 transition-colors"
                            >
                                Start for free
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/dashboard"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border border-zinc-800 text-white rounded-md font-medium text-sm hover:bg-zinc-900 transition-colors"
                            >
                                View demo
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="hero-trust flex flex-wrap items-center gap-6 text-sm text-zinc-500 opacity-0">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span>100GB free storage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Demo Preview */}
                <div className="max-w-6xl mx-auto px-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hero-preview relative rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl opacity-0"
                    >
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-xs text-zinc-500">teracloud.app/dashboard</span>
                            </div>
                        </div>
                        {/* Mock Dashboard Content */}
                        <div className="p-6 min-h-[300px] bg-gradient-to-b from-zinc-900/50 to-black">
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                                        <div className="w-8 h-8 rounded bg-zinc-800 mb-3"></div>
                                        <div className="h-2 w-3/4 bg-zinc-800 rounded mb-2"></div>
                                        <div className="h-2 w-1/2 bg-zinc-800/50 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Premium Feature Cards - Supabase Style */}
            <PremiumFeatureCards />

            {/* Features Section */}
            <section id="features" className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">
                            Everything you need
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Built with security and performance in mind. No compromises.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card group p-6 rounded-xl border border-zinc-900 hover:border-zinc-800 bg-zinc-950/50 transition-colors opacity-0 translate-y-[50px]"
                                onMouseEnter={(e) => handleHover(e.currentTarget, 1.02)}
                                onMouseLeave={(e) => handleHover(e.currentTarget, 1)}
                            >
                                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-800 transition-colors">
                                    <feature.icon className="w-5 h-5 text-zinc-400" />
                                </div>
                                <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="border-t border-zinc-900 py-24 bg-zinc-950/30">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Loved by developers</h2>
                        <p className="text-zinc-400 text-lg">Don't just take our word for it.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "TeraCloud has revolutionized how we handle asset management. The speed is incredible.",
                                author: "Sarah Chen",
                                role: "VP Engineering"
                            },
                            {
                                text: "Security was our #1 concern. TeraCloud's end-to-end encryption gave us peace of mind.",
                                author: "Mark Thompson",
                                role: "CTO, TechStart"
                            },
                            {
                                text: "The API is a dream to work with. We integrated it into our workflow in an afternoon.",
                                author: "David Kim",
                                role: "Lead Developer"
                            }
                        ].map((testimonial, i) => (
                            <div
                                key={i}
                                className="testimonial-card p-6 rounded-xl border border-zinc-900 bg-black opacity-0 translate-y-[50px] cursor-default"
                                onMouseEnter={(e) => handleHover(e.currentTarget, 1.02)}
                                onMouseLeave={(e) => handleHover(e.currentTarget, 1)}
                            >
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-zinc-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                                <div>
                                    <div className="font-medium text-white">{testimonial.author}</div>
                                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Simple, transparent pricing</h2>
                        <p className="text-zinc-400 text-lg">Start for free, upgrade when you need to.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Free Tier */}
                        <div
                            className="pricing-card p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 opacity-0 translate-y-[50px]"
                            onMouseEnter={(e) => handleHover(e.currentTarget, 1.02)}
                            onMouseLeave={(e) => handleHover(e.currentTarget, 1)}
                        >
                            <h3 className="text-xl font-medium text-white mb-2">Free</h3>
                            <div className="text-3xl font-bold text-white mb-6">$0<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                            <ul className="space-y-4 mb-8 text-sm text-zinc-400">
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 10 GB Storage</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Basic Support</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Single Device</li>
                            </ul>
                            <Link to="/register" className="block w-full py-2.5 text-center bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors">Get Started</Link>
                        </div>

                        {/* Pro Tier */}
                        <div
                            className="pricing-card p-8 rounded-2xl border border-zinc-700 bg-zinc-900 relative shadow-2xl opacity-0 translate-y-[50px]"
                            onMouseEnter={(e) => handleHover(e.currentTarget, 1.02)}
                            onMouseLeave={(e) => handleHover(e.currentTarget, 1)}
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
                            <h3 className="text-xl font-medium text-white mb-2">Pro</h3>
                            <div className="text-3xl font-bold text-white mb-6">$12<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                            <ul className="space-y-4 mb-8 text-sm text-zinc-300">
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500" /> 1 TB Storage</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500" /> Priority Support</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500" /> 5 Devices</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-500" /> Advanced Sharing</li>
                            </ul>
                            <Link to="/register" className="block w-full py-2.5 text-center bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors">Start Free Trial</Link>
                        </div>

                        {/* Enterprise Tier */}
                        <div
                            className="pricing-card p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 opacity-0 translate-y-[50px]"
                            onMouseEnter={(e) => handleHover(e.currentTarget, 1.02)}
                            onMouseLeave={(e) => handleHover(e.currentTarget, 1)}
                        >
                            <h3 className="text-xl font-medium text-white mb-2">Enterprise</h3>
                            <div className="text-3xl font-bold text-white mb-6">Custom</div>
                            <ul className="space-y-4 mb-8 text-sm text-zinc-400">
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> Unlimited Storage</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 24/7 Dedicated Support</li>
                                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> SSO & Audit Logs</li>
                            </ul>
                            <Link to="/contact" className="block w-full py-2.5 text-center bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors">Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-t border-zinc-900 py-24 bg-zinc-950/30">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold tracking-tight mb-4">Frequently asked questions</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Is my data really secure?", a: "Yes. We use military-grade AES-256 encryption. Files are encrypted on your device before upload, so only you have the keys." },
                            { q: "Can I cancel anytime?", a: "Absolutely. You can cancel your subscription at any time without any hidden fees." },
                            { q: "Do you offer a free trial?", a: "Yes, all Pro plans come with a 14-day free trial. No credit card required to start." },
                            { q: "How does sharing work?", a: "You can generate secure links with passwords and expiration dates to share files with anyone, even if they don't have an account." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 rounded-xl border border-zinc-900 bg-black hover:border-zinc-700 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="font-medium text-white">{faq.q}</h3>
                                    <Plus className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                </div>
                                <p className="mt-4 text-sm text-zinc-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                        Join thousands of teams who trust TeraCloud with their most important files.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-zinc-200 transition-colors"
                        >
                            Start for free
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-800 text-white rounded-md font-medium hover:bg-zinc-900 transition-colors"
                        >
                            Contact sales
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-900 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="TeraCloud" className="w-6 h-6" />
                            <span className="text-sm text-zinc-500">© 2026 TeraCloud</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-zinc-500">
                            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
                            <a href="https://twitter.com" className="hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing
