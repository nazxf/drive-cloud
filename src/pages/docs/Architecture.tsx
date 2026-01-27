import { Server, Database, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const Architecture = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Core Concepts', 'Architecture']} />

            <h1 className="text-white">Architecture</h1>
            <p>
                TeraCloud is built on a distributed architecture designed for maximum reliability and performance.
            </p>

            <div className="grid gap-6 mb-8 not-prose">
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-3">
                        <Server className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Multi-Region Storage</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Files are automatically replicated across multiple geographic regions for high availability and fast access worldwide.</p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-3">
                        <Database className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Metadata Index</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Lightning-fast search powered by distributed metadata indexing with sub-second query times.</p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-3 mb-3">
                        <Cloud className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">CDN Integration</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Automatic CDN caching for frequently accessed files ensures optimal delivery speed globally.</p>
                </div>
            </div>

            <DocsPager
                prev={{ title: 'Quick Start', href: '/docs/quick-start' }}
                next={{ title: 'API Reference', href: '/docs/api-reference' }}
            />
        </motion.div>
    )
}

export default Architecture
