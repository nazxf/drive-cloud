import { motion } from 'framer-motion'
import CodeBlock from '../../components/docs/CodeBlock'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const Installation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['Getting Started', 'Installation']} />

            <section id="requirements" className="mb-12">
                <h1 className="text-white mb-4">Installation</h1>
                <p className="text-zinc-400 mb-8">
                    This guide will help you install and configure the TeraCloud SDK in your project.
                </p>

                <h2 className="text-white mt-10 mb-4">Requirements</h2>
                <ul className="list-disc pl-6 space-y-3 text-zinc-400 mb-8">
                    <li>Node.js 18.0 or higher</li>
                    <li>npm, pnpm, yarn, or bun</li>
                    <li>A TeraCloud account with API access</li>
                </ul>
            </section>

            <section id="package-managers" className="mb-12">
                <h2 className="text-white mb-4">Package Managers</h2>
                <p className="text-zinc-400 mb-6">Install the SDK using your preferred package manager:</p>

                <div className="not-prose">
                    <CodeBlock
                        tabs={['npm', 'pnpm', 'yarn', 'bun']}
                        content={{
                            npm: 'npm install @teracloud/sdk',
                            pnpm: 'pnpm add @teracloud/sdk',
                            yarn: 'yarn add @teracloud/sdk',
                            bun: 'bun add @teracloud/sdk'
                        }}
                    />
                </div>
            </section>

            <section id="configuration" className="mb-12">
                <h2 className="text-white mb-4">Configuration</h2>
                <p className="text-zinc-400 mb-6">
                    After installation, configure the SDK with your API credentials.
                </p>

                <h3 className="text-white text-lg mb-4">Environment Variables</h3>
                <p className="text-zinc-400 mb-4">Create a <code>.env</code> file in your project root:</p>

                <div className="not-prose mb-8">
                    <CodeBlock
                        tabs={['.env']}
                        content={{
                            '.env': `TERACLOUD_API_KEY=your_api_key_here
TERACLOUD_REGION=us-east-1
TERACLOUD_BUCKET=my-bucket`
                        }}
                    />
                </div>

                <h3 className="text-white text-lg mb-4">SDK Initialization</h3>
                <p className="text-zinc-400 mb-4">Initialize the SDK in your application:</p>

                <div className="not-prose">
                    <CodeBlock
                        tabs={['TypeScript', 'JavaScript']}
                        language="typescript"
                        content={{
                            'TypeScript': `import { TeraCloud } from '@teracloud/sdk'

const cloud = new TeraCloud({
  apiKey: process.env.TERACLOUD_API_KEY!,
  region: process.env.TERACLOUD_REGION,
  bucket: process.env.TERACLOUD_BUCKET
})

export default cloud`,
                            'JavaScript': `const { TeraCloud } = require('@teracloud/sdk')

const cloud = new TeraCloud({
  apiKey: process.env.TERACLOUD_API_KEY,
  region: process.env.TERACLOUD_REGION,
  bucket: process.env.TERACLOUD_BUCKET
})

module.exports = cloud`
                        }}
                    />
                </div>
            </section>

            <DocsPager
                prev={{ title: 'Quick Start', href: '/docs/quick-start' }}
                next={{ title: 'Architecture', href: '/docs/architecture' }}
            />
        </motion.div>
    )
}

export default Installation
