import { motion } from 'framer-motion'
import CodeBlock from '../../components/docs/CodeBlock'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const ApiReference = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['API Reference', 'REST API']} />

            <h1 className="text-white">API Reference</h1>
            <p>
                Complete REST API documentation for TeraCloud services.
            </p>

            <h2 className="text-white" id="authentication">Authentication</h2>
            <p>All API requests require authentication using an API key:</p>

            <CodeBlock
                tabs={['cURL']}
                content={{
                    'cURL': `curl -H "Authorization: Bearer YOUR_API_KEY" \\
https://api.teracloud.io/v1/files`
                }}
            />

            <h2 className="text-white">Upload Endpoint</h2>
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

            <DocsPager
                prev={{ title: 'Architecture', href: '/docs/architecture' }}
                next={{ title: 'Security', href: '/docs/security' }}
            />
        </motion.div>
    )
}

export default ApiReference
