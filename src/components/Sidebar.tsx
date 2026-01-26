import { NavLink } from 'react-router-dom'
import { Home, Clock, Share2, Trash2, Settings, Plus } from 'lucide-react'

const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'All Files', path: '/dashboard' },
        { icon: Clock, label: 'Recent', path: '/dashboard/recent' },
        { icon: Share2, label: 'Shared', path: '/dashboard/shared' },
        { icon: Trash2, label: 'Trash', path: '/dashboard/trash' },
    ]

    return (
        <aside className="w-64 bg-zinc-950 border-r border-zinc-900 p-4 flex flex-col font-sans">
            {/* Logo */}
            <div className="mb-6 px-2">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="TeraCloud" className="w-8 h-8" />
                    <span className="font-semibold text-white">TeraCloud</span>
                </div>
            </div>

            {/* New Button */}
            <button className="flex items-center justify-center gap-2 h-9 px-4 mb-4 bg-white text-black rounded-md font-medium text-sm hover:bg-zinc-200 transition-colors">
                <Plus className="w-4 h-4" />
                New
            </button>

            {/* Navigation */}
            <nav className="flex-1 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2 rounded-md text-sm
                            transition-colors
                            ${isActive
                                ? 'bg-zinc-900 text-white'
                                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                            }
                        `}
                    >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            {/* Storage Usage */}
            <div className="mt-auto pt-4 border-t border-zinc-900">
                <div className="px-2 space-y-3">
                    <div className="flex justify-between text-xs">
                        <span className="text-zinc-400">Storage</span>
                        <span className="text-zinc-500">15.2 GB / 100 GB</span>
                    </div>
                    <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full w-[15%] bg-white rounded-full" />
                    </div>
                </div>

                {/* Settings */}
                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) => `
                        flex items-center gap-3 px-3 py-2 mt-4 rounded-md text-sm
                        transition-colors
                        ${isActive
                            ? 'bg-zinc-900 text-white'
                            : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                        }
                    `}
                >
                    <Settings className="w-4 h-4" />
                    Settings
                </NavLink>
            </div>
        </aside>
    )
}

export default Sidebar
