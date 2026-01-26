import { useState } from 'react'
import { LayoutGrid, List, Search, Upload, FolderPlus, MoreHorizontal } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout'
import FolderCard from '../components/FolderCard'
import FileCard from '../components/FileCard'
import { mockFolders, mockFiles } from '../services/mockData'
import UploadModal from '../components/UploadModal'

const Dashboard = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [searchQuery, setSearchQuery] = useState('')
    const [showUploadModal, setShowUploadModal] = useState(false)

    const filteredFolders = mockFolders.filter(folder =>
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredFiles = mockFiles.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <DashboardLayout>
            <div className="flex-1 bg-black min-h-screen font-sans">
                {/* Header */}
                <div className="border-b border-zinc-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-lg font-semibold text-white">All Files</h1>
                            <p className="text-sm text-zinc-500">Manage your files and folders</p>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                <input
                                    type="text"
                                    placeholder="Search files..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="h-9 w-64 pl-9 pr-3 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* View Toggle */}
                            <div className="flex items-center border border-zinc-800 rounded-md overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 transition-colors ${viewMode === 'grid'
                                        ? 'bg-zinc-800 text-white'
                                        : 'text-zinc-500 hover:text-white'
                                        }`}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 transition-colors ${viewMode === 'list'
                                        ? 'bg-zinc-800 text-white'
                                        : 'text-zinc-500 hover:text-white'
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Actions */}
                            <button className="flex items-center gap-2 h-9 px-3 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                                <FolderPlus className="w-4 h-4" />
                                New Folder
                            </button>
                            <button
                                onClick={() => setShowUploadModal(true)}
                                className="flex items-center gap-2 h-9 px-4 bg-white text-black rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors"
                            >
                                <Upload className="w-4 h-4" />
                                Upload
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Folders Section */}
                    {filteredFolders.length > 0 && (
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-medium text-zinc-400">Folders</h2>
                                <button className="text-zinc-500 hover:text-white transition-colors">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                            <div className={viewMode === 'grid'
                                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
                                : 'space-y-2'
                            }>
                                {filteredFolders.map((folder) => (
                                    <FolderCard key={folder.id} folder={folder} viewMode={viewMode} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Files Section */}
                    {filteredFiles.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-medium text-zinc-400">Files</h2>
                                <button className="text-zinc-500 hover:text-white transition-colors">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                            <div className={viewMode === 'grid'
                                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
                                : 'space-y-2'
                            }>
                                {filteredFiles.map((file) => (
                                    <FileCard key={file.id} file={file} viewMode={viewMode} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredFolders.length === 0 && filteredFiles.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                                <Search className="w-6 h-6 text-zinc-600" />
                            </div>
                            <h3 className="text-white font-medium mb-1">No results found</h3>
                            <p className="text-sm text-zinc-500">Try adjusting your search query</p>
                        </div>
                    )}
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
