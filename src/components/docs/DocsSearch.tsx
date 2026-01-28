import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, File, ArrowRight, CornerDownLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface DocsSearchProps {
    isOpen: boolean
    onClose: () => void
}

const SEARCH_ITEMS = [
    { title: "Introduction", href: "/docs/introduction", category: "Getting Started" },
    { title: "Why TeraCloud?", href: "/docs/why-teracloud", category: "Getting Started" },
    { title: "Quick Start", href: "/docs/quick-start", category: "Getting Started" },
    { title: "Installation", href: "/docs/installation", category: "Getting Started" },
    { title: "Architecture", href: "/docs/architecture", category: "Core Concepts" },
    { title: "File System", href: "/docs/files", category: "Core Concepts" },
    { title: "Storage Buckets", href: "/docs/buckets", category: "Core Concepts" },
    { title: "REST API", href: "/docs/rest-api", category: "API Reference" },
    { title: "Authentication", href: "/docs/api-reference", category: "API Reference" },
    { title: "SDK Reference", href: "/docs/sdk", category: "API Reference" },
    { title: "Security", href: "/docs/security", category: "Guides" },
]

const DocsSearch = ({ isOpen, onClose }: DocsSearchProps) => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)

    const filteredItems = SEARCH_ITEMS.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )

    // Reset selection when query changes
    useEffect(() => setSelectedIndex(0), [query])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return

            if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSelectedIndex(prev => (prev + 1) % filteredItems.length)
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length)
            } else if (e.key === 'Enter') {
                e.preventDefault()
                if (filteredItems[selectedIndex]) {
                    handleSelect(filteredItems[selectedIndex].href)
                }
            } else if (e.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, filteredItems, selectedIndex])

    const handleSelect = (href: string) => {
        navigate(href)
        onClose()
        setQuery('')
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg z-[70] p-4"
                    >
                        <div className="bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh]">
                            {/* Input Header */}
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800/50">
                                <Search className="w-5 h-5 text-zinc-500" />
                                <input
                                    type="text"
                                    placeholder="Search documentation..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-zinc-500 h-6 text-sm"
                                    autoFocus
                                />
                                <div className="hidden sm:flex items-center gap-1">
                                    <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400 opacity-100">
                                        <span className="text-xs">ESC</span>
                                    </kbd>
                                </div>
                            </div>

                            {/* Results List */}
                            <div className="overflow-y-auto custom-scrollbar p-2">
                                {filteredItems.length === 0 ? (
                                    <div className="py-12 text-center text-sm text-zinc-500">
                                        No results found for "{query}"
                                    </div>
                                ) : (
                                    <div className="space-y-1">
                                        {filteredItems.map((item, index) => (
                                            <button
                                                key={item.href}
                                                onClick={() => handleSelect(item.href)}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${index === selectedIndex
                                                    ? 'bg-emerald-500/10 text-emerald-400'
                                                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <File className={`w-4 h-4 ${index === selectedIndex ? 'text-emerald-400' : 'text-zinc-500'}`} />
                                                    <div className="flex flex-col items-start">
                                                        <span>{item.title}</span>
                                                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{item.category}</span>

                                                    </div>
                                                </div>
                                                {index === selectedIndex && (
                                                    <CornerDownLeft className="w-3.5 h-3.5 text-zinc-500" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="px-4 py-2 bg-zinc-900/50 border-t border-zinc-800/50 flex items-center justify-between text-[10px] text-zinc-500">
                                <div className="flex gap-4">
                                    <span className="flex items-center gap-1">
                                        <ArrowRight className="w-3 h-3" /> to navigate
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <CornerDownLeft className="w-3 h-3" /> to select
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default DocsSearch
