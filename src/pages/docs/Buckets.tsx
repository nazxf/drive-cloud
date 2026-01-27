import { Database, Shield, Settings, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const Buckets = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Core Concepts', 'Storage Buckets']} />

            <h1 className="text-white mb-4">Storage Buckets</h1>
            <p className="text-zinc-400 mb-8">
                Buckets are top-level containers for organizing and managing your files.
                Each bucket can have its own access policies and configuration.
            </p>

            <h2 id="creating" className="text-white mb-4">Creating Buckets</h2>
            <p className="text-zinc-400 mb-6">
                Create buckets to separate different projects, environments, or use cases.
            </p>

            <div className="grid gap-4 not-prose mb-10">
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Database className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Unlimited Buckets</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Create as many buckets as you need with no additional cost.</p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Region Selection</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Choose the primary region for each bucket to optimize latency.</p>
                </div>
            </div>

            <h2 id="permissions" className="text-white mb-4">Permissions</h2>
            <p className="text-zinc-400 mb-6">
                Control access to your buckets with fine-grained permissions.
            </p>

            <div className="not-prose p-5 rounded-lg border border-white/10 bg-white/[0.02] mb-10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-white" />
                    <h4 className="font-medium text-white">Access Control</h4>
                </div>
                <ul className="text-sm text-zinc-400 space-y-2 mt-3">
                    <li><strong className="text-white">Private</strong> — Only authenticated users with explicit access</li>
                    <li><strong className="text-white">Team</strong> — All team members can access</li>
                    <li><strong className="text-white">Public</strong> — Accessible via CDN URL</li>
                </ul>
            </div>

            <h2 id="lifecycle" className="text-white mb-4">Lifecycle Rules</h2>
            <p className="text-zinc-400 mb-6">
                Automate file management with lifecycle rules.
            </p>

            <div className="not-prose p-5 rounded-lg border border-white/10 bg-white/[0.02] mb-10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-5 h-5 text-white" />
                    <h4 className="font-medium text-white">Automation Options</h4>
                </div>
                <ul className="text-sm text-zinc-400 space-y-2 mt-3">
                    <li>Auto-delete after X days</li>
                    <li>Move to cold storage</li>
                    <li>Version cleanup</li>
                    <li>Compress old files</li>
                </ul>
            </div>

            <DocsPager
                prev={{ title: 'File System', href: '/docs/files' }}
                next={{ title: 'REST API', href: '/docs/rest-api' }}
            />
        </motion.div>
    )
}

export default Buckets
