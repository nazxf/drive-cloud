import { Lock, Book } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const Security = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Guides', 'Security']} />

            <h1 className="text-white">Security</h1>
            <p>
                TeraCloud implements industry-leading security practices to keep your data safe.
            </p>

            <div className="not-prose bg-[#0A0A0A] border border-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                    <Lock className="w-6 h-6 text-white mt-1" />
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">End-to-End Encryption</h3>
                        <p className="text-sm text-zinc-400 mb-3">
                            All files are encrypted using AES-256 encryption at rest and TLS 1.3 in transit.
                            Encryption keys are managed using industry-standard KMS.
                        </p>
                    </div>
                </div>
            </div>

            <DocsPager
                prev={{ title: 'API Reference', href: '/docs/api-reference' }}
            />

            {/* CTA */}
            <div className="not-prose mt-16 p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 text-center">
                <Book className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Want to learn more?</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">Explore our community guides and advanced configuration tutorials.</p>
                <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                    Explore Guides
                </button>
            </div>
        </motion.div>
    )
}

export default Security
