import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CodeBlockProps {
    tabs?: string[]
    content: Record<string, string>
    language?: string
}

const CodeBlock = ({ tabs = ['npm', 'pnpm', 'yarn', 'bun'], content, language = 'bash' }: CodeBlockProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0])
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content[activeTab])
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0A0A0A] my-6 not-prose">
            {/* Tab Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/30">
                <div className="flex items-center gap-1">
                    {tabs.length > 1 ? (
                        tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === tab
                                        ? 'text-white bg-zinc-800 shadow-sm'
                                        : 'text-zinc-500 hover:text-zinc-300'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))
                    ) : (
                        <div className="flex items-center gap-2 text-zinc-400 px-2 py-1">
                            <Terminal className="w-3.5 h-3.5" />
                            <span className="text-xs font-mono">Terminal</span>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleCopy}
                    className="p-2 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto relative group">
                <pre className="font-mono text-sm leading-relaxed text-zinc-300">
                    <AnimatePresence mode="wait">
                        <motion.code
                            key={activeTab}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                            className="block"
                        >
                            {language === 'bash' && <span className="mr-2 text-zinc-600 select-none">$</span>}
                            {content[activeTab]}
                        </motion.code>
                    </AnimatePresence>
                </pre>
            </div>
        </div>
    )
}

export default CodeBlock
