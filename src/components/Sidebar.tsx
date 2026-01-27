import { NavLink } from 'react-router-dom'
import { Clock, Trash2, Plus, LayoutGrid, HardDrive, Star, FolderOpen, FileText, Users, Cloud } from 'lucide-react'

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[var(--bg-card)] border-r border-white/5 p-4 flex flex-col font-sans transition-colors duration-300">
            {/* Logo */}
            <div className="mb-8 px-2 flex items-center gap-3">
                <img src="/logo.png" alt="TeraCloud" className="w-8 h-8 rounded-lg" />
                <span className="font-bold text-lg text-white tracking-tight">TeraCloud</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">

                {/* Overview Group */}
                <div className="space-y-1">
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Overview</p>
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                            ${isActive
                                ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        <LayoutGrid className="w-4 h-4" />
                        Overview Storage
                    </NavLink>
                </div>

                {/* File Manager Group */}
                <div className="space-y-1">
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">File Manager</p>
                    {[
                        { icon: HardDrive, label: 'My Storage', path: '/dashboard/storage' },
                        { icon: Clock, label: 'Recents', path: '/dashboard/recent' },
                        { icon: Star, label: 'Favorites', path: '/dashboard/favorites' },
                        { icon: Trash2, label: 'Trash', path: '/dashboard/trash' },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                                ${isActive
                                    ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }
                            `}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Shared Group */}
                <div className="space-y-1">
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Shared File</p>
                    {[
                        { icon: FolderOpen, label: 'Shared Folder', path: '/dashboard/shared-folder' },
                        { icon: FileText, label: 'Shared File', path: '/dashboard/shared-file' },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                                ${isActive
                                    ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }
                            `}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Team Storage Group */}
                <div className="space-y-1">
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Team Storage</p>
                    {[
                        { icon: Users, label: 'Civic Team', path: '/dashboard/team/civic' },
                        { icon: Users, label: 'Developer Team', path: '/dashboard/team/dev' },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                                ${isActive
                                    ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }
                            `}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </NavLink>
                    ))}

                    <button className="w-full mt-2 flex items-center justify-center gap-2 h-9 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] rounded-xl text-xs font-medium hover:bg-[var(--accent-primary)]/10 transition-colors">
                        <Plus className="w-3 h-3" />
                        Add team storage
                    </button>
                </div>

                {/* Resources Group */}
                <div className="space-y-1">
                    <NavLink
                        to="/docs"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <FileText className="w-4 h-4" />
                        Documentation
                    </NavLink>
                </div>

            </nav>

            {/* Storage Progress */}
            <div className="mt-6 pt-4 border-t border-white/5 text-white/90">
                <div className="flex items-center gap-2 mb-2">
                    <Cloud className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span className="text-sm font-medium">Storage</span>
                    <span className="ml-auto text-xs text-slate-400">92%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="h-full w-[92%] bg-[var(--accent-secondary)] rounded-full" />
                </div>

                <button className="w-full py-2.5 bg-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)]/90 text-black rounded-xl text-sm font-semibold transition-colors">
                    Upgrade Plan
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
