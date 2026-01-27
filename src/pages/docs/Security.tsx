import { Lock, Shield, Key, FileCheck, Book } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'
import DocsHeading from '../../components/docs/DocsHeading'

const Security = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Guides', 'Security']} />

            <h1 className="text-white mb-4">Security</h1>
            <p className="text-zinc-400 mb-8">
                TeraCloud implements industry-leading security practices to keep your data safe.
            </p>

            <DocsHeading id="encryption" className="text-white mb-4">Encryption</DocsHeading>
            <p className="text-zinc-400 mb-6">
                All data is protected with enterprise-grade encryption at every layer.
            </p>

            <div className="grid gap-4 not-prose mb-10">
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                        <Lock className="w-5 h-5 text-white mt-0.5" />
                        <div>
                            <h4 className="font-medium text-white mb-2">End-to-End Encryption</h4>
                            <p className="text-sm text-zinc-400">
                                All files are encrypted using AES-256 encryption at rest and TLS 1.3 in transit.
                                Encryption keys are managed using industry-standard KMS.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                        <Shield className="w-5 h-5 text-white mt-0.5" />
                        <div>
                            <h4 className="font-medium text-white mb-2">Zero-Knowledge Architecture</h4>
                            <p className="text-sm text-zinc-400">
                                Your encryption keys never leave your devices. We can't read your files even if we wanted to.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <DocsHeading id="access-control" className="text-white mb-4">Access Control</DocsHeading>
            <p className="text-zinc-400 mb-6">
                Fine-grained permissions and comprehensive audit logging.
            </p>

            <div className="grid gap-4 not-prose mb-10">
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                        <Key className="w-5 h-5 text-white mt-0.5" />
                        <div>
                            <h4 className="font-medium text-white mb-2">API Key Security</h4>
                            <p className="text-sm text-zinc-400">
                                Scoped API keys with granular permissions. Rotate keys instantly without downtime.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                        <FileCheck className="w-5 h-5 text-white mt-0.5" />
                        <div>
                            <h4 className="font-medium text-white mb-2">Audit Logging</h4>
                            <p className="text-sm text-zinc-400">
                                Complete audit trail of all file access and modifications for compliance requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <DocsHeading id="compliance" className="text-white mb-4">Compliance</DocsHeading>
            <p className="text-zinc-400 mb-4">TeraCloud meets the following compliance standards:</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mb-10">
                <li>SOC 2 Type II certified</li>
                <li>GDPR compliant data processing</li>
                <li>HIPAA eligible for healthcare data</li>
                <li>ISO 27001 certified security practices</li>
                <li>PCI DSS compliant payment processing</li>
            </ul>

            <DocsPager
                prev={{ title: 'Authentication', href: '/docs/api-reference' }}
            />

            {/* CTA */}
            <div className="not-prose mt-16 p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 text-center">
                <Book className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Want to learn more?</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                    Explore our community guides and advanced configuration tutorials.
                </p>
                <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                    Explore Guides
                </button>
            </div>
        </motion.div>
    )
}

export default Security
