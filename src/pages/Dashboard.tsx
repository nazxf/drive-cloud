import { useState } from 'react'
import { Search, Upload, Bell, Settings, HelpCircle, Grid3X3, List } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import UploadModal from '../components/UploadModal'

const Dashboard = () => {
    const location = useLocation()
    const [searchQuery, setSearchQuery] = useState('')
    const [showUploadModal, setShowUploadModal] = useState(false)
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    // Dynamic Title based on route
    const getPageTitle = () => {
        const path = location.pathname
        if (path === '/dashboard') return 'Overview Storage'
        if (path.startsWith('/storage')) return 'My Storage'
        if (path.startsWith('/recent')) return 'Recents'
        if (path.startsWith('/favorites')) return 'Favorites'
        if (path.startsWith('/trash')) return 'Trash'
        if (path.startsWith('/shared')) return 'Shared'
        if (path.startsWith('/team')) return 'Team Storage'
        return 'Dashboard'
    }

    return (
        <DashboardLayout>
            <div className="relative flex-1 min-h-screen font-sans bg-[#0a0a0a] overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">

                    {/* Header - Supabase Style */}
                    <div className="sticky top-0 z-20 bg-[#0a0a0a]/80 backdrop-blur-xl px-6 py-4 border-b border-zinc-800/50">
                        <div className="flex items-center justify-between gap-4">
                            <h1 className="text-lg font-semibold text-white tracking-tight hidden md:block">
                                File Manager
                            </h1>

                            {/* Search Bar - Centered/Wide */}
                            <div className="flex-1 max-w-xl mx-auto">
                                <div className="relative group">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search files and folders..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full h-10 pl-10 pr-16 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                        <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 bg-zinc-800 rounded border border-zinc-700">
                                            ⌘K
                                        </kbd>
                                    </div>
                                </div>
                            </div>

                            {/* Right Actions */}
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                                    <HelpCircle className="w-5 h-5" />
                                </button>
                                <button className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                                    <Bell className="w-5 h-5" />
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full" />
                                </button>
                                <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                                    <Settings className="w-5 h-5" />
                                </button>
                                <div className="w-px h-6 bg-zinc-800 mx-1" />
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden ring-2 ring-zinc-800 cursor-pointer hover:ring-emerald-500/50 transition-all">
                                    <img src="https://ui-avatars.com/api/?name=User&background=transparent&color=fff" alt="User" />
                                </div>
                            </div>
                        </div>

                        {/* Sub Header / Actions Row */}
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center gap-3">
                                <h2 className="text-base font-medium text-white">{getPageTitle()}</h2>
                                <span className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded">24 items</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* View Toggle */}
                                <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                                    >
                                        <Grid3X3 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>

                                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-lg border border-zinc-800 hover:bg-zinc-800/50 transition-all">
                                    Sort by
                                </button>

                                <button
                                    onClick={() => setShowUploadModal(true)}
                                    className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-semibold rounded-lg transition-all"
                                >
                                    <Upload className="w-3.5 h-3.5" />
                                    <span>Upload</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Outlet for Sub-pages */}
                    <div className="flex-1 overflow-hidden flex flex-col p-6">
                        <Outlet context={{ searchQuery, viewMode }} />
                    </div>

                </div>
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <UploadModal onClose={() => setShowUploadModal(false)} />
            )}
        </DashboardLayout>
    )
}

export default Dashboard
