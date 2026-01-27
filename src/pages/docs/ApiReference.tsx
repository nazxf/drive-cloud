import { motion } from 'framer-motion'
import CodeBlock from '../../components/docs/CodeBlock'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'
import DocsHeading from '../../components/docs/DocsHeading'

const ApiReference = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['API Reference', 'Authentication']} />

            <h1 className="text-white mb-4">Authentication</h1>
            <p className="text-zinc-400 mb-8">
                Complete REST API documentation for TeraCloud services.
            </p>

            <DocsHeading id="authentication" className="text-white mb-4">API Key Authentication</DocsHeading>
            <p className="text-zinc-400 mb-4">All API requests require authentication using an API key:</p>

            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['cURL']}
                    content={{
                        'cURL': `curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.teracloud.io/v1/files`
                    }}
                />
            </div>

            <DocsHeading id="upload" className="text-white mb-4">Upload Endpoint</DocsHeading>
            <div className="not-prose mb-4">
                <code className="text-sm text-white bg-white/10 px-3 py-1.5 rounded font-mono">POST /v1/upload</code>
            </div>
            <p className="text-zinc-400 mb-4">Upload a file to TeraCloud storage:</p>

            <div className="not-prose mb-10">
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
            </div>

            <DocsHeading id="download" className="text-white mb-4">Download Endpoint</DocsHeading>
            <div className="not-prose mb-4">
                <code className="text-sm text-white bg-white/10 px-3 py-1.5 rounded font-mono">GET /v1/files/:id</code>
            </div>
            <p className="text-zinc-400 mb-4">Retrieve a file by its ID:</p>

            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['cURL']}
                    content={{
                        'cURL': `curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.teracloud.io/v1/files/abc123`
                    }}
                />
            </div>

            <DocsPager
                prev={{ title: 'REST API', href: '/docs/rest-api' }}
                next={{ title: 'Security', href: '/docs/security' }}
            />
        </motion.div>
    )
}

export default ApiReference
