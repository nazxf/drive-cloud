import { motion } from 'framer-motion'
import { Box, Code2, Settings, Download, Upload, Trash2, List } from 'lucide-react'
import CodeBlock from '../../components/docs/CodeBlock'
import DocsBreadcrumbs from '../../components/docs/DocsBreadcrumbs'
import DocsPager from '../../components/docs/DocsPager'

const SdkReference = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-code:text-[var(--accent-primary)] prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
        >
            <DocsBreadcrumbs items={['API Reference', 'SDK Reference']} />

            <h1 className="text-white mb-4">SDK Reference</h1>
            <p className="text-zinc-400 mb-8">
                Detailed documentation for the official Node.js and TypeScript SDK.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-200 mb-10 not-prose">
                <Box className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm m-0">
                    The SDK is fully typed and supports both CommonJS and ESM imports.
                </p>
            </div>

            <h2 id="initialization" className="text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Initialization
            </h2>
            <p className="text-zinc-400 mb-6">
                Initialize the client with your API key. You can find your keys in the dashboard.
            </p>

            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['TypeScript']}
                    language="typescript"
                    content={{
                        'TypeScript': `import { TeraCloud } from '@teracloud/sdk'

const cloud = new TeraCloud({
  apiKey: 'tc_live_...', // Your API Key
  region: 'us-east-1',   // Optimal region
  maxRetries: 3,         // Auto-retry failed requests
  timeout: 5000          // Request timeout in ms
})`
                    }}
                />
            </div>

            <h2 id="upload" className="text-white mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload File
            </h2>
            <p className="text-zinc-400 mb-4">
                Upload a file from a buffer, stream, or file path.
            </p>
            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['Buffer', 'Stream']}
                    language="typescript"
                    content={{
                        'Buffer': `const { url } = await cloud.upload({
  file: myBuffer,
  name: 'document.pdf',
  folder: '/uploads',
  metadata: { userId: '123' }
})`,
                        'Stream': `const stream = fs.createReadStream('./video.mp4')

const { url } = await cloud.upload({
  file: stream,
  name: 'video.mp4',
  onProgress: (progress) => {
    console.log(\`Upload: \${progress}%\`)
  }
})`
                    }}
                />
            </div>

            <h2 id="download" className="text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download File
            </h2>
            <p className="text-zinc-400 mb-4">
                Get a signed URL or download the file content directly.
            </p>
            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['Signed URL', 'Buffer']}
                    language="typescript"
                    content={{
                        'Signed URL': `// Get a temporary public URL valid for 1 hour
const url = await cloud.getSignedUrl('file_123', {
  expiresIn: 3600
})`,
                        'Buffer': `// Download directly to memory
const buffer = await cloud.download('file_123')
fs.writeFileSync('downloaded.pdf', buffer)`
                    }}
                />
            </div>

            <h2 id="list" className="text-white mb-4 flex items-center gap-2">
                <List className="w-5 h-5" />
                List Files
            </h2>
            <p className="text-zinc-400 mb-4">
                List files in a specific folder with pagination support.
            </p>
            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['TypeScript']}
                    language="typescript"
                    content={{
                        'TypeScript': `const files = await cloud.list({
  folder: '/documents',
  limit: 20,
  page: 1,
  sort: 'created_at:desc'
})

console.log(files.data) // Array of FileObject`
                    }}
                />
            </div>

            <h2 id="delete" className="text-white mb-4 flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Delete File
            </h2>
            <p className="text-zinc-400 mb-4">
                Permanently remove a file from storage.
            </p>
            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['TypeScript']}
                    language="typescript"
                    content={{
                        'TypeScript': `await cloud.delete('file_123')

// Or delete multiple
await cloud.delete(['file_1', 'file_2'])`
                    }}
                />
            </div>

            <h2 id="types" className="text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Types
            </h2>
            <p className="text-zinc-400 mb-6">
                Common TypeScript interfaces used in the SDK.
            </p>

            <div className="not-prose mb-10">
                <CodeBlock
                    tabs={['FileObject']}
                    language="typescript"
                    content={{
                        'FileObject': `interface FileObject {
  id: string
  name: string
  size: number
  mimeType: string
  url: string
  folder: string
  createdAt: string
  metadata?: Record<string, string>
}`
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

export default SdkReference
