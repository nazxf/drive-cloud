import { Folder, HardDrive, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const Files = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Core Concepts', 'File System']} />

            <h1 className="text-white mb-4">File System</h1>
            <p className="text-zinc-400 mb-8">
                TeraCloud provides a virtual file system that mirrors traditional directory structures
                while offering cloud-native features like versioning and metadata.
            </p>

            <h2 id="structure" className="text-white mb-4">File Structure</h2>
            <p className="text-zinc-400 mb-6">
                Files are organized in a hierarchical structure similar to your local file system.
                Each file has a unique path and can be nested within folders.
            </p>

            <div className="grid gap-4 not-prose mb-10">
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Folder className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">Hierarchical Organization</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Create nested folder structures up to 50 levels deep.</p>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <HardDrive className="w-5 h-5 text-white" />
                        <h4 className="font-medium text-white">No Size Limits</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Upload files of any size with chunked, resumable uploads.</p>
                </div>
            </div>

            <h2 id="metadata" className="text-white mb-4">Metadata</h2>
            <p className="text-zinc-400 mb-4">
                Every file can have custom metadata attached for easier organization and search.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mb-10">
                <li>Custom key-value pairs</li>
                <li>Automatic MIME type detection</li>
                <li>File hashes (MD5, SHA-256)</li>
                <li>Creation and modification timestamps</li>
            </ul>

            <h2 id="versioning" className="text-white mb-4">Versioning</h2>
            <p className="text-zinc-400 mb-6">
                Enable versioning to keep track of all changes to your files. Restore previous
                versions at any time or compare changes between versions.
            </p>

            <div className="not-prose p-5 rounded-lg border border-white/10 bg-white/[0.02] mb-10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <RefreshCw className="w-5 h-5 text-white" />
                    <h4 className="font-medium text-white">Version Control</h4>
                </div>
                <p className="text-sm text-zinc-400">Keep up to 100 versions per file with automatic cleanup policies.</p>
            </div>

            <DocsPager
                prev={{ title: 'Architecture', href: '/docs/architecture' }}
                next={{ title: 'Storage Buckets', href: '/docs/buckets' }}
            />
        </motion.div>
    )
}

export default Files
