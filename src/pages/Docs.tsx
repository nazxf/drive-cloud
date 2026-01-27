import { Zap, Code, Shield, Layers, Server, Database, Cloud, Book, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import DocsLayout from '../layouts/DocsLayout'
import CodeBlock from '../components/docs/CodeBlock'
import DocsBreadcrumbs from '../components/docs/DocsBreadcrumbs'
import DocsPager from '../components/docs/DocsPager'

const Docs = () => {
    return (
        <DocsLayout>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
            >
                <DocsBreadcrumbs items={['Getting Started', 'Introduction']} />

                {/* Introduction */}
                <section id="introduction" className="scroll-mt-20">
                    <h1 className="text-white mb-6">Introduction</h1>
                    <p className="lead text-xl text-zinc-300 mb-10">
                        TeraCloud is a secure, high-performance cloud storage solution designed for developer teams.
                        Manage files programmatically, share assets securely, and collaborate in real-time.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 not-prose mb-16">
                        <FeatureCard icon={Zap} title="Lightning Fast" desc="Global CDN distribution and smart caching for sub-second delivery." />
                        <FeatureCard icon={Code} title="Developer First" desc="Type-safe SDKs and comprehensive REST API for instant integration." />
                        <FeatureCard icon={Shield} title="Secure by Default" desc="AES-256 encryption at rest and TLS 1.3 in transit." />
                        <FeatureCard icon={Layers} title="Scalable" desc="Built on a distributed architecture that scales to petabytes." />
                    </div>
                </section>

                {/* Why TeraCloud */}
                <section id="why-teracloud" className="scroll-mt-20">
                    <h2 className="text-white">Why TeraCloud?</h2>
                    <p>
                        Traditional cloud storage is clunky and disconnected. TeraCloud aims to bring the fluidity of local file management to the cloud,
                        powered by a robust backend and a beautiful, minimal interface.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-400 mb-8 border-l border-white/10 ml-1 py-1">
                        <li className="pl-2">End-to-end encryption for maximum security</li>
                        <li className="pl-2">Real-time collaboration and file syncing</li>
                        <li className="pl-2">Advanced search with metadata filtering</li>
                        <li className="pl-2">Team management and role-based access control</li>
                        <li className="pl-2">99.99% uptime SLA with global redundancy</li>
                    </ul>
                </section>

                <hr className="border-white/5 my-10" />

                {/* Quick Start */}
                <section id="quickstart" className="scroll-mt-20">
                    <h2 className="text-white">Quick Start</h2>
                    <p>
                        Get up and running with TeraCloud integration in under 5 minutes.
                    </p>

                    <h3 className="text-white" id="installation">1. Installation</h3>
                    <p>Install the official SDK via your preferred package manager:</p>

                    <CodeBlock
                        tabs={['npm', 'pnpm', 'yarn', 'bun']}
                        content={{
                            npm: 'npm install @teracloud/sdk',
                            pnpm: 'pnpm add @teracloud/sdk',
                            yarn: 'yarn add @teracloud/sdk',
                            bun: 'bun add @teracloud/sdk'
                        }}
                    />

                    <h3 className="text-white">2. Initialize Client</h3>
                    <CodeBlock
                        tabs={['Global', 'Per Request']}
                        language="typescript"
                        content={{
                            'Global': `import { TeraCloud } from '@teracloud/sdk'

const cloud = new TeraCloud({
  apiKey: process.env.TERACLOUD_API_KEY,
  region: 'us-east-1'
})`,
                            'Per Request': `import { TeraCloud } from '@teracloud/sdk'

// Initialize with ephemeral credentials
const cloud = new TeraCloud({
  token: sessionToken
})`
                        }}
                    />
                </section>

                {/* Architecture */}
                <section id="architecture" className="scroll-mt-20">
                    <h2 className="text-white">Architecture</h2>
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
                </section>

                {/* API Reference */}
                <section id="rest-api" className="scroll-mt-20">
                    <h2 className="text-white">API Reference</h2>
                    <p>
                        Complete REST API documentation for TeraCloud services.
                    </p>

                    <h3 className="text-white" id="authentication">Authentication</h3>
                    <p>All API requests require authentication using an API key:</p>

                    <CodeBlock
                        tabs={['cURL']}
                        content={{
                            'cURL': `curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.teracloud.io/v1/files`
                        }}
                    />

                    <h3 className="text-white">Upload Endpoint</h3>
                    <div className="not-prose mb-4">
                        <code className="text-sm text-white bg-white/10 px-2 py-1 rounded">POST /v1/upload</code>
                    </div>

                    <CodeBlock
                        tabs={['JSON']}
                        language="json"
                        content={{
                            'JSON': `{
  "file": "binary",
  "folder": "/path/to/folder",
  "public": false,
  "metadata": {
    "key": "value"
  }
}`
                        }}
                    />
                </section>

                {/* Security */}
                <section id="encryption" className="scroll-mt-20">
                    <h2 className="text-white">Security</h2>
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
                </section>

                <DocsPager
                    next={{ title: 'Why TeraCloud?', href: '#why-teracloud' }}
                />

            </motion.div>
        </DocsLayout>
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

export default Docs
