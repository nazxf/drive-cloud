import { useState } from 'react'
import { Search, Upload, Bell, Settings, HelpCircle } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import FolderCard from '../components/FolderCard'
import { mockFolders } from '../services/mockData'
import UploadModal from '../components/UploadModal'
import OverviewCards from '../components/OverviewCards'
import RecentFilesTable from '../components/RecentFilesTable'

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [showUploadModal, setShowUploadModal] = useState(false)

    const filteredFolders = mockFolders.filter(folder =>
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <DashboardLayout>
            <div className="relative flex-1 min-h-screen font-sans bg-[var(--bg-deep)] overflow-hidden">

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">

                    {/* Header - StackDrive Style */}
                    <div className="sticky top-0 z-20 bg-[var(--bg-deep)]/90 backdrop-blur-md px-6 py-4 border-b border-white/5">
                        <div className="flex items-center justify-between gap-4">
                            <h1 className="text-xl font-semibold text-white tracking-tight hidden md:block">
                                File Manager
                            </h1>

                            {/* Search Bar - Centered/Wide */}
                            <div className="flex-1 max-w-2xl mx-auto">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-[var(--accent-primary)] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full h-11 pl-10 pr-20 bg-[var(--bg-card)] border border-white/5 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-primary)]/50 focus:ring-1 focus:ring-[var(--accent-primary)]/50 transition-all"
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-500 text-xs font-mono">
                                        <span className="hidden sm:inline">⌘ + K</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Actions */}
                            <div className="flex items-center gap-3">
                                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                                    <HelpCircle className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                                    <Bell className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-white transition-colors mr-2">
                                    <Settings className="w-5 h-5" />
                                </button>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden ring-2 ring-white/10">
                                    <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
                                </div>
                            </div>
                        </div>

                        {/* Sub Header / Actions Row */}
                        <div className="flex items-center justify-between mt-6">
                            <h2 className="text-sm font-semibold text-slate-300">Overview Storage</h2>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                                    Sort
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                                    View
                                </button>
                                <button
                                    onClick={() => setShowUploadModal(true)}
                                    className="flex items-center gap-2 px-4 py-1.5 bg-[var(--accent-secondary)] hover:bg-[var(--accent-secondary)]/90 text-black text-xs font-semibold rounded-lg shadow-lg shadow-orange-500/20 transition-all"
                                >
                                    <Upload className="w-3 h-3" />
                                    <span>Create</span>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Content Scroll Area */}
                    <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar">

                        {/* 1. Overview Cards */}
                        <OverviewCards />

                        {/* 2. Suggested / Folders */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-medium text-lg">Suggested</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredFolders.map((folder) => (
                                    <FolderCard key={folder.id} folder={folder} viewMode="grid" />
                                ))}
                                {filteredFolders.length === 0 && (
                                    <div className="col-span-full py-8 text-center text-slate-500 text-sm">
                                        No folders found
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 3. Recent Files Table */}
                        <div className="pb-10">
                            <RecentFilesTable />
                        </div>
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
