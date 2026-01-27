import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Search } from 'lucide-react'

interface DocsSidebarProps {
    isOpen: boolean
    onClose: () => void
}

const DocsSidebar = ({ isOpen, onClose }: DocsSidebarProps) => {
    const location = useLocation()
    const [searchQuery, setSearchQuery] = useState('')

    const isActive = (path: string) => {
        return location.pathname === path
    }

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

    // Filter sections based on search query
    const filteredSections = sections.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.items.length > 0)

    const sidebarClasses = `
        fixed inset-y-0 left-0 z-50 w-72 bg-[var(--bg-deep)] border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `

    return (
        <>
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

                    {/* Search Input */}
                    <div className="px-4 py-3 border-b border-white/5">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search docs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar py-6 px-4">
                        {filteredSections.length === 0 ? (
                            <p className="text-sm text-zinc-500 px-2">No results found</p>
                        ) : (
                            <nav className="space-y-8">
                                {filteredSections.map((section) => (
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
                        )}
                    </div>
                </div>
            </aside>
        </>
    )
}

export default DocsSidebar
