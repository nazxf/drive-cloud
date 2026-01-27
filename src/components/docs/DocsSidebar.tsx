import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Search } from 'lucide-react'
import DocsSearch from './DocsSearch'

interface DocsSidebarProps {
    isOpen: boolean
    onClose: () => void
}

const DocsSidebar = ({ isOpen, onClose }: DocsSidebarProps) => {
    const location = useLocation()
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const isActive = (path: string) => {
        return location.pathname === path
    }

    // Keyboard shortcut to open search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsSearchOpen(true)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const sections = [
        {
            title: "Getting Started",
            items: [
                { title: "Introduction", href: "/docs/introduction" },
                { title: "Why TeraCloud?", href: "/docs/why-teracloud" },
                { title: "Quick Start", href: "/docs/quick-start" },
                { title: "Installation", href: "/docs/installation" },
            ]
        },
        {
            title: "Core Concepts",
            items: [
                { title: "Architecture", href: "/docs/architecture" },
                { title: "File System", href: "/docs/files" },
                { title: "Storage Buckets", href: "/docs/buckets" },
            ]
        },
        {
            title: "API Reference",
            items: [
                { title: "SDK Reference", href: "/docs/sdk" },
                { title: "REST API", href: "/docs/rest-api" },
                { title: "Authentication", href: "/docs/api-reference" },
            ]
        },
        {
            title: "Guides",
            items: [
                { title: "Security", href: "/docs/security" },
            ]
        }
    ]

    const sidebarClasses = `
        fixed inset-y-0 left-0 z-50 w-72 bg-[var(--bg-deep)] border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `

    return (
        <>
            <DocsSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={sidebarClasses}>
                <div className="flex flex-col h-full">
                    <div className="h-14 flex items-center justify-between px-6 border-b border-white/5">
                        <Link to="/dashboard" className="flex items-center gap-2 font-bold text-white tracking-tight">
                            <img src="/logo.png" alt="TeraCloud" className="w-6 h-6 rounded-md" />
                            <span>TeraCloud</span>
                        </Link>
                        <button onClick={onClose} className="lg:hidden text-zinc-500 hover:text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Search Trigger Button */}
                    <div className="px-4 py-3 pb-2">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-zinc-500 hover:text-zinc-300 hover:border-white/20 transition-all group"
                        >
                            <Search className="w-4 h-4" />
                            <span className="flex-1 text-left">Search docs...</span>
                            <div className="hidden lg:flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </div>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-6">
                        <nav className="space-y-8 mt-4">
                            {sections.map((section) => (
                                <div key={section.title}>
                                    <h4 className="mb-3 text-xs font-semibold text-white uppercase tracking-wider opacity-60 px-2">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-1">
                                        {section.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    to={item.href}
                                                    className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${isActive(item.href)
                                                        ? 'text-white bg-white/5 font-medium'
                                                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                        }`}
                                                    onClick={() => {
                                                        if (window.innerWidth < 1024) onClose()
                                                    }}
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default DocsSidebar
