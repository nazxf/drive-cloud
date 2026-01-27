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

            <h1 className="text-white mb-4">Architecture</h1>
            <p className="text-zinc-400 mb-8">
                TeraCloud is built on a distributed architecture designed for maximum reliability and performance.
            </p>

            <h2 id="overview" className="text-white mb-4">Overview</h2>
            <p className="text-zinc-400 mb-6">
                Our infrastructure spans multiple regions worldwide, ensuring low latency and high availability for users everywhere.
            </p>

            <div className="grid gap-4 mb-10 not-prose">
                <div id="multi-region" className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Server className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Multi-Region Storage</h4>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Files are automatically replicated across multiple geographic regions for high availability and fast access worldwide.
                    </p>
                </div>

                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Database className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Metadata Index</h4>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Lightning-fast search powered by distributed metadata indexing with sub-second query times.
                    </p>
                </div>

                <div id="cdn" className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Cloud className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">CDN Integration</h4>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Automatic CDN caching for frequently accessed files ensures optimal delivery speed globally.
                    </p>
                </div>
            </div>

            <DocsPager
                prev={{ title: 'Installation', href: '/docs/installation' }}
                next={{ title: 'File System', href: '/docs/files' }}
            />
        </motion.div>
    )
}

export default Architecture
