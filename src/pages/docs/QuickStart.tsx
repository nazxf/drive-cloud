import { motion } from 'framer-motion'
import CodeBlock from '../../components/docs/CodeBlock'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const QuickStart = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Getting Started', 'Quick Start']} />

            <h1 className="text-white">Quick Start</h1>
            <p>
                Get up and running with TeraCloud integration in under 5 minutes.
            </p>

            <h2 className="text-white" id="installation">1. Installation</h2>
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

            <h2 className="text-white">2. Initialize Client</h2>
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

            <DocsPager
                prev={{ title: 'Why TeraCloud?', href: '/docs/why-teracloud' }}
                next={{ title: 'Architecture', href: '/docs/architecture' }}
            />
        </motion.div>
    )
}

export default QuickStart
