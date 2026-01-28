import { NavLink } from 'react-router-dom'
import { Clock, Trash2, Plus, LayoutGrid, HardDrive, Star, FolderOpen, FileText, Users, Cloud, ChevronDown } from 'lucide-react'

const Sidebar = () => {
    return (
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800/50 p-4 flex flex-col font-sans">
            {/* Logo */}
            <div className="mb-8 px-2 flex items-center gap-3">
                <img src="/logo.png" alt="TeraCloud" className="w-8 h-8" />
                <span className="font-semibold text-lg text-white tracking-tight">TeraCloud</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto pr-1 space-y-6 custom-scrollbar">

                {/* Overview Group */}
                <div className="space-y-1">
                    <p className="px-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Overview</p>
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                            ${isActive
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                            }
                        `}
                    >
                        <LayoutGrid className="w-4 h-4" />
                        Overview Storage
                    </NavLink>
                </div>

                {/* File Manager Group */}
                <div className="space-y-1">
                    <p className="px-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">File Manager</p>
                    {[
                        { icon: HardDrive, label: 'My Storage', path: '/storage' },
                        { icon: Clock, label: 'Recents', path: '/recent' },
                        { icon: Star, label: 'Favorites', path: '/favorites' },
                        { icon: Trash2, label: 'Trash', path: '/trash' },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                ${isActive
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
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
                    <p className="px-3 text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Shared</p>
                    {[
                        { icon: FolderOpen, label: 'Shared Folder', path: '/shared-folder' },
                        { icon: FileText, label: 'Shared File', path: '/shared-file' },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                ${isActive
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
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
                    <div className="flex items-center justify-between px-3 mb-2">
                        <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Teams</p>
                        <ChevronDown className="w-3 h-3 text-zinc-600" />
                    </div>
                    {[
                        { icon: Users, label: 'Civic Team', path: '/team/civic', color: 'bg-blue-500' },
                        { icon: Users, label: 'Developer Team', path: '/team/dev', color: 'bg-purple-500' },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                                flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                ${isActive
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                                }
                            `}
                        >
                            <div className={`w-2 h-2 rounded-full ${item.color}`} />
                            {item.label}
                        </NavLink>
                    ))}

                    <button className="w-full mt-2 flex items-center justify-center gap-2 h-9 border border-zinc-800 text-zinc-400 rounded-lg text-xs font-medium hover:bg-zinc-800/50 hover:text-white hover:border-zinc-700 transition-all duration-200">
                        <Plus className="w-3 h-3" />
                        Add team
                    </button>
                </div>

                {/* Resources Group */}
                <div className="space-y-1">
                    <NavLink
                        to="/docs"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                    >
                        <FileText className="w-4 h-4" />
                        Documentation
                    </NavLink>
                </div>

            </nav>

            {/* Storage Progress */}
            <div className="mt-4 pt-4 border-t border-zinc-800/50">
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <div className="flex items-center gap-2 mb-3">
                        <Cloud className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-white">Storage</span>
                        <span className="ml-auto text-xs text-zinc-400">92%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-3">
                        <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                    </div>
                    <p className="text-[11px] text-zinc-500 mb-3">18.4 GB of 20 GB used</p>

                    <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg text-sm font-semibold transition-colors">
                        Upgrade Plan
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
