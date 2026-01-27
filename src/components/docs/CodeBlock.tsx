import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CodeBlockProps {
    tabs?: string[]
    content: Record<string, string>
    language?: string
}

const CodeBlock = ({ tabs = [], content, language = 'bash' }: CodeBlockProps) => {
    // Default to first available key if tabs empty, widely robust
    const initialTab = tabs.length > 0 ? tabs[0] : Object.keys(content)[0]
    const [activeTab, setActiveTab] = useState(initialTab)
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content[activeTab])
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0c0c0c] my-6 not-prose">
            {/* Tab Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900/40">
                <div className="flex items-center gap-4">
                    {/* Terminal Icon */}
                    <div className="text-zinc-400">
                        <Terminal className="w-4 h-4" />
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-1">
                        {tabs && tabs.length > 0 ? (
                            tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === tab
                                        ? 'text-white bg-zinc-800'
                                        : 'text-zinc-500 hover:text-zinc-300'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))
                        ) : (
                            // Determine display name if no tabs provided (e.g. filename or language)
                            <span className="text-xs font-medium text-zinc-400">
                                {Object.keys(content).length === 1 ? Object.keys(content)[0] : 'Terminal'}
                            </span>
                        )}
                    </div>
                </div>

                {/* Copy Button */}
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-zinc-300">
                    <AnimatePresence mode="wait">
                        <motion.code
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="block"
                        >
                            {language === 'bash' && !content[activeTab].startsWith('$') && (
                                <span className="mr-2 text-zinc-600 select-none">$</span>
                            )}
                            {content[activeTab]}
                        </motion.code>
                    </AnimatePresence>
                </pre>
            </div>
        </div>
    )
}

export default CodeBlock
