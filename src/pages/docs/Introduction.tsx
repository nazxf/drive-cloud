import { Zap, Code, Shield, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const Introduction = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Getting Started', 'Introduction']} />

            <h1 className="text-white mb-4">Introduction</h1>
            <p className="text-zinc-400 text-lg mb-10">
                TeraCloud is a secure, high-performance cloud storage solution designed for developer teams.
                Manage files programmatically, share assets securely, and collaborate in real-time.
            </p>

            <h2 className="text-white mb-4">Features</h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose mb-10">
                <FeatureCard icon={Zap} title="Lightning Fast" desc="Global CDN distribution and smart caching for sub-second delivery." />
                <FeatureCard icon={Code} title="Developer First" desc="Type-safe SDKs and comprehensive REST API for instant integration." />
                <FeatureCard icon={Shield} title="Secure by Default" desc="AES-256 encryption at rest and TLS 1.3 in transit." />
                <FeatureCard icon={Layers} title="Scalable" desc="Built on a distributed architecture that scales to petabytes." />
            </div>

            <DocsPager
                next={{ title: 'Why TeraCloud?', href: '/docs/why-teracloud' }}
            />
        </motion.div>
    )
}

// Helper Component for Feature Cards
const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="p-5 rounded-xl border border-white/10 bg-[var(--bg-card)] hover:border-white/20 transition-all">
        <div className="mb-3 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
            <Icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
    </div>
)

export default Introduction
