import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'
import DocsHeading from '../../components/docs/DocsHeading'

const WhyTeraCloud = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Getting Started', 'Why TeraCloud']} />

            <h1 className="text-white mb-4">Why TeraCloud?</h1>
            <p className="text-zinc-400 mb-8">
                Traditional cloud storage is clunky and disconnected. TeraCloud aims to bring the fluidity
                of local file management to the cloud, powered by a robust backend and a beautiful, minimal interface.
            </p>

            <DocsHeading>Key Benefits</DocsHeading>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mb-8">
                <li>End-to-end encryption for maximum security</li>
                <li>Real-time collaboration and file syncing</li>
                <li>Advanced search with metadata filtering</li>
                <li>Team management and role-based access control</li>
                <li>99.99% uptime SLA with global redundancy</li>
            </ul>

            <DocsPager
                prev={{ title: 'Introduction', href: '/docs/introduction' }}
                next={{ title: 'Quick Start', href: '/docs/quick-start' }}
            />
        </motion.div>
    )
}

export default WhyTeraCloud
