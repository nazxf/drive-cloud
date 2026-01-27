import { Link, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

interface DocsSidebarProps {
    isOpen: boolean
    onClose: () => void
}

const DocsSidebar = ({ isOpen, onClose }: DocsSidebarProps) => {
    const location = useLocation()

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

                    <div className="flex-1 overflow-y-auto custom-scrollbar py-6 px-4">
                        <nav className="space-y-8">
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
