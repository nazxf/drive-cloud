import { Globe, Zap, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import CodeBlock from '../../components/docs/CodeBlock'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const RestApi = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['API Reference', 'REST API']} />

            <h1 className="text-white mb-4">REST API</h1>
            <p className="text-zinc-400 mb-8">
                The TeraCloud REST API provides programmatic access to all platform features.
                All endpoints return JSON responses and follow REST conventions.
            </p>

            <h2 id="base-url" className="text-white mb-4">Base URL</h2>
            <p className="text-zinc-400 mb-4">
                All API requests should be made to:
            </p>

            <div className="not-prose p-4 rounded-lg border border-white/10 bg-white/[0.02] mb-10">
                <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-white" />
                    <code className="text-sm text-white font-mono">https://api.teracloud.io/v1</code>
                </div>
            </div>

            <h2 id="rate-limits" className="text-white mb-4">Rate Limits</h2>
            <p className="text-zinc-400 mb-6">
                API requests are rate limited to ensure fair usage and platform stability.
            </p>

            <div className="not-prose p-5 rounded-lg border border-white/10 bg-white/[0.02] mb-8 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-white" />
                    <h4 className="font-medium text-white">Default Limits</h4>
                </div>
                <ul className="text-sm text-zinc-400 space-y-2">
                    <li><strong className="text-white">1,000</strong> requests per minute (standard)</li>
                    <li><strong className="text-white">10,000</strong> requests per minute (pro)</li>
                    <li><strong className="text-white">Unlimited</strong> (enterprise)</li>
                </ul>
            </div>

            <p className="text-zinc-400 mb-4">Rate limit headers are included in every response:</p>

            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['Headers']}
                    content={{
                        'Headers': `X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
X-RateLimit-Reset: 1706345678`
                    }}
                />
            </div>

            <h2 id="errors" className="text-white mb-4">Error Codes</h2>
            <p className="text-zinc-400 mb-6">
                The API uses standard HTTP status codes to indicate success or failure.
            </p>

            <div className="not-prose mb-8">
                <div className="rounded-lg border border-white/10 overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-white/5">
                            <tr>
                                <th className="text-left px-4 py-3 text-white font-medium">Code</th>
                                <th className="text-left px-4 py-3 text-white font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr>
                                <td className="px-4 py-3 text-green-400 font-mono">200</td>
                                <td className="px-4 py-3 text-zinc-400">Success</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-yellow-400 font-mono">400</td>
                                <td className="px-4 py-3 text-zinc-400">Bad Request - Invalid parameters</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-yellow-400 font-mono">401</td>
                                <td className="px-4 py-3 text-zinc-400">Unauthorized - Invalid API key</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-yellow-400 font-mono">403</td>
                                <td className="px-4 py-3 text-zinc-400">Forbidden - Insufficient permissions</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-yellow-400 font-mono">404</td>
                                <td className="px-4 py-3 text-zinc-400">Not Found - Resource doesn't exist</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-orange-400 font-mono">429</td>
                                <td className="px-4 py-3 text-zinc-400">Too Many Requests - Rate limited</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-red-400 font-mono">500</td>
                                <td className="px-4 py-3 text-zinc-400">Internal Error - Contact support</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="not-prose p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 mb-10">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="font-medium text-white mb-1">Rate Limit Exceeded</h4>
                        <p className="text-sm text-zinc-400">
                            When rate limited, wait for the time specified in <code className="text-yellow-400">X-RateLimit-Reset</code> before retrying.
                        </p>
                    </div>
                </div>
            </div>

            <DocsPager
                prev={{ title: 'Storage Buckets', href: '/docs/buckets' }}
                next={{ title: 'Authentication', href: '/docs/api-reference' }}
            />
        </motion.div>
    )
}

export default RestApi
