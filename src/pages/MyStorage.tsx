import { useState, useEffect } from 'react'
import { useOutletContext, useParams, useNavigate } from 'react-router-dom'
import { Filter, Grid, List as ListIcon, FolderPlus, ChevronRight, Home } from 'lucide-react'
import FileCard, { FileItem } from '../components/FileCard'
import FolderCard from '../components/FolderCard'
import FilePreviewModal from '../components/FilePreviewModal'
import { Skeleton } from '../components/ui/skeleton'
import { mockFolders } from '../services/mockData'

interface DashboardContext {
    searchQuery: string
}

// Mock file data definition...
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
    const { folderId } = useParams()
    const navigate = useNavigate()
    const { searchQuery } = useOutletContext<DashboardContext>()

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
    const [previewFile, setPreviewFile] = useState<FileItem | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Simulate loading on route change
    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [folderId])

    const currentFolder = folderId ? mockFolders.find(f => f.id === folderId) : null

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

    const FolderSkeleton = () => (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
            <Skeleton className="w-10 h-10 rounded-lg bg-emerald-500/10" />
            <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-2 bg-zinc-800" />
                <Skeleton className="h-3 w-16 bg-zinc-800/50" />
            </div>
        </div>
    )

    const FileCardSkeleton = () => {
        if (viewMode === 'list') {
            return (
                <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-zinc-800/50 bg-zinc-900/50">
                    <Skeleton className="w-10 h-10 rounded-lg bg-zinc-800" />
                    <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-1 bg-zinc-800" />
                        <Skeleton className="h-3 w-12 bg-zinc-800/50" />
                    </div>
                    <Skeleton className="h-3 w-24 hidden md:block bg-zinc-800/50" />
                    <Skeleton className="w-8 h-8 rounded-lg bg-zinc-800/50" />
                </div>
            )
        }
        return (
            <div className="rounded-xl p-5 bg-zinc-950 border border-zinc-800/50">
                <div className="flex justify-between items-start mb-4">
                    <Skeleton className="w-12 h-12 rounded-xl bg-zinc-800" />
                    <Skeleton className="w-6 h-6 rounded-lg bg-zinc-800/50" />
                </div>
                <Skeleton className="h-4 w-3/4 mb-3 bg-zinc-800" />
                <div className="flex justify-between items-end">
                    <Skeleton className="h-3 w-12 bg-zinc-800/50" />
                    <Skeleton className="h-3 w-8 bg-zinc-800/50" />
                </div>
            </div>
        )
    }

    // Breadcrumb Component
    const Breadcrumbs = () => (
        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6 font-medium">
            <button
                onClick={() => navigate('/storage')}
                className="hover:text-white flex items-center gap-1 transition-colors"
            >
                <Home className="w-4 h-4" />
                Storage
            </button>
            {currentFolder && (
                <>
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                    <span className="text-white">{currentFolder.name}</span>
                </>
            )}
        </div>
    )

    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">

            <Breadcrumbs />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-medium text-white">
                        {currentFolder ? currentFolder.name : 'My Storage'}
                    </h2>
                    {isLoading ? (
                        <Skeleton className="h-4 w-48 mt-1 bg-zinc-800" />
                    ) : (
                        <p className="text-sm text-zinc-500 mt-1">
                            {currentFolder
                                ? `0 folders, ${Math.floor(filteredFiles.length / 2)} files`
                                : `${filteredFolders.length} folders, ${filteredFiles.length} files`
                            }
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                            ? 'text-white bg-zinc-800'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                            }`}
                    >
                        <Grid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                            ? 'text-white bg-zinc-800'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                            }`}
                    >
                        <ListIcon className="w-5 h-5" />
                    </button>
                    <div className="w-px h-5 bg-zinc-800 mx-1" />
                    <button className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors border border-zinc-800">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 rounded-lg transition-colors border border-emerald-500/30">
                        <FolderPlus className="w-4 h-4" />
                        New Folder
                    </button>
                </div>
            </div>

            {/* Folders Section - Hide if inside a folder (for mock demo) */}
            {!currentFolder && (
                <>
                    {isLoading ? (
                        <div className="mb-8">
                            <Skeleton className="h-5 w-24 mb-4 bg-zinc-800" />
                            <div className={viewMode === 'grid'
                                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                                : 'space-y-2'
                            }>
                                {[1, 2, 3, 4].map((i) => (
                                    <FolderSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                    ) : filteredFolders.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-sm font-medium text-zinc-400 mb-4">Folders</h3>
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
                </>
            )}

            {/* Files Section */}
            <div>
                {isLoading ? (
                    <>
                        <Skeleton className="h-5 w-24 mb-4 bg-zinc-800" />
                        <div className={viewMode === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                            : 'space-y-2'
                        }>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <FileCardSkeleton key={i} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="text-sm font-medium text-zinc-400 mb-4">Files</h3>
                        <div className={viewMode === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                            : 'space-y-2'
                        }>
                            {/* Simulate different files for nested view by splicing or reversing, just for show */}
                            {(currentFolder ? filteredFiles.slice().reverse().slice(0, 5) : filteredFiles).map((file) => (
                                <FileCard
                                    key={file.id}
                                    file={file}
                                    viewMode={viewMode}
                                    onSelect={() => handleFileClick(file)}
                                />
                            ))}
                            {filteredFiles.length === 0 && (
                                <div className="col-span-full py-12 text-center text-zinc-500">
                                    <p>No files found matching "{searchQuery}"</p>
                                </div>
                            )}
                            {currentFolder && filteredFiles.length > 0 && (
                                <div className="col-span-full py-8 text-center text-zinc-500 text-xs italic">
                                    Displaying mock files for folder {currentFolder.name}
                                </div>
                            )}
                        </div>
                    </>
                )}
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
