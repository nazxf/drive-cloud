import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Filter, Grid, List as ListIcon, FolderPlus } from 'lucide-react'
import FileCard, { FileItem } from '../components/FileCard'
import FolderCard from '../components/FolderCard'
import FilePreviewModal from '../components/FilePreviewModal'
import { mockFolders } from '../services/mockData'

interface DashboardContext {
    searchQuery: string
}

// Mock file data (moved outside component to prevent recreation, though filtering will happen inside)
const allMockFiles: FileItem[] = [
    { id: 1, name: 'Toba Lake Proposal 2023.doc', size: '8.45 MB', type: 'doc', modified: '23 Mar 2023' },
    { id: 2, name: 'Project Screenshots.zip', size: '156 MB', type: 'zip', modified: '24 Mar 2023' },
    { id: 3, name: 'Team Photo 2023.jpg', size: '4.2 MB', type: 'image', modified: '25 Mar 2023' },
    { id: 4, name: 'Product Demo.mp4', size: '245 MB', type: 'video', modified: '26 Mar 2023' },
    { id: 5, name: 'Invoice Q1 2023.pdf', size: '1.2 MB', type: 'pdf', modified: '27 Mar 2023' },
    { id: 6, name: 'Financial Report.xls', size: '3.8 MB', type: 'xls', modified: '28 Mar 2023' },
    { id: 7, name: 'Meeting Notes.doc', size: '520 KB', type: 'doc', modified: '29 Mar 2023' },
    { id: 8, name: 'Brand Assets.zip', size: '89 MB', type: 'zip', modified: '30 Mar 2023' },
    { id: 9, name: 'Sunset Beach.jpg', size: '2.8 MB', type: 'image', modified: '31 Mar 2023' },
    { id: 10, name: 'Tutorial Video.mp4', size: '180 MB', type: 'video', modified: '1 Apr 2023' },
]

const MyStorage = () => {
    const { searchQuery } = useOutletContext<DashboardContext>()
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
    const [previewFile, setPreviewFile] = useState<FileItem | null>(null)

    // Filter data based on search query
    const filteredFolders = mockFolders.filter(folder =>
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredFiles = allMockFiles.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleFileClick = (file: FileItem) => {
        setPreviewFile(file)
    }

    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-white">My Storage</h2>
                    <p className="text-sm text-slate-500 mt-1">
                        {filteredFolders.length} folders, {filteredFiles.length} files
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                            ? 'text-white bg-white/10'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <Grid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                            ? 'text-white bg-white/10'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <ListIcon className="w-5 h-5" />
                    </button>
                    <div className="w-px h-5 bg-white/10 mx-1" />
                    <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-white/5">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 rounded-lg transition-colors border border-[var(--accent-primary)]/30">
                        <FolderPlus className="w-4 h-4" />
                        New Folder
                    </button>
                </div>
            </div>

            {/* Folders Section */}
            {filteredFolders.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-sm font-medium text-slate-400 mb-4">Folders</h3>
                    <div className={viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                        : 'space-y-2'
                    }>
                        {filteredFolders.map((folder) => (
                            <FolderCard key={folder.id} folder={folder} viewMode={viewMode} />
                        ))}
                    </div>
                </div>
            )}

            {/* Files Section */}
            <div>
                <h3 className="text-sm font-medium text-slate-400 mb-4">Files</h3>
                <div className={viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                    : 'space-y-2'
                }>
                    {filteredFiles.map((file) => (
                        <FileCard
                            key={file.id}
                            file={file}
                            viewMode={viewMode}
                            onSelect={() => handleFileClick(file)}
                        />
                    ))}
                    {filteredFiles.length === 0 && (
                        <div className="col-span-full py-12 text-center text-slate-500">
                            <p>No files found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>

            {/* File Preview Modal */}
            {previewFile && (
                <FilePreviewModal
                    file={previewFile}
                    onClose={() => setPreviewFile(null)}
                />
            )}
        </div>
    )
}

export default MyStorage
