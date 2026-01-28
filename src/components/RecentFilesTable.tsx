import { useState } from 'react'
import { FileText, Image as ImageIcon, Video, MoreVertical, Download, Edit2, Share2, Trash2 } from 'lucide-react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu'

// Mock Data
const recentFiles = [
    { id: 1, name: 'Toba Lake Proposal 2023.doc', size: '8.45 MB', shared: 'Me', modified: '23/03/2023 - 17:15', type: 'doc' },
    { id: 2, name: 'Explanation music mardua holong.pdf', size: '19.21 MB', shared: 'Me', modified: '24/03/2023 - 08:09', type: 'pdf' },
    { id: 3, name: 'Member of 2021.xls', size: '5.14 MB', shared: 'Team', modified: '25/03/2023 - 17:12', type: 'xls' },
    { id: 4, name: 'Invoice 2021.pdf', size: '10.66 MB', shared: 'Me', modified: '26/03/2023 - 09:18', type: 'pdf' },
    { id: 5, name: 'Furniture Catalog January.pdf', size: '28.11 MB', shared: 'Me', modified: '27/03/2023 - 16:21', type: 'pdf' },
]

const getFileIcon = (type: string) => {
    switch (type) {
        case 'doc': return <FileText className="w-4 h-4 text-blue-400" />
        case 'pdf': return <FileText className="w-4 h-4 text-red-400" />
        case 'xls': return <FileText className="w-4 h-4 text-emerald-400" />
        case 'image': return <ImageIcon className="w-4 h-4 text-purple-400" />
        case 'video': return <Video className="w-4 h-4 text-orange-400" />
        default: return <FileText className="w-4 h-4 text-zinc-400" />
    }
}

const getFileBgColor = (type: string) => {
    switch (type) {
        case 'doc': return 'bg-blue-500/10'
        case 'pdf': return 'bg-red-500/10'
        case 'xls': return 'bg-emerald-500/10'
        case 'image': return 'bg-purple-500/10'
        case 'video': return 'bg-orange-500/10'
        default: return 'bg-zinc-500/10'
    }
}

const UsersIcon = () => (
    <div className="flex items-center gap-1.5 text-zinc-400">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] font-medium">
            T
        </div>
        <span>Team</span>
    </div>
)

const RecentFilesTable = () => {
    const [selectedIds, setSelectedIds] = useState<number[]>([])

    // Toggle Selection Logic
    const toggleSelection = (id: number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        )
    }

    const toggleAll = () => {
        if (selectedIds.length === recentFiles.length) {
            setSelectedIds([])
        } else {
            setSelectedIds(recentFiles.map(f => f.id))
        }
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium text-base">Recent files</h3>
                {selectedIds.length > 0 && (
                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <span className="text-sm text-zinc-400">{selectedIds.length} selected</span>
                        <button className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors" title="Download Selected">
                            <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" title="Delete Selected">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>

            <div className="w-full overflow-x-auto rounded-xl border border-zinc-800/50">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-zinc-500 text-xs border-b border-zinc-800/50 bg-zinc-900/50">
                            <th className="py-3 px-4 font-medium w-6">
                                <div
                                    onClick={toggleAll}
                                    className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-all ${selectedIds.length === recentFiles.length
                                        ? 'bg-emerald-500 border-emerald-500'
                                        : 'border-zinc-600 hover:border-zinc-500'
                                        }`}
                                >
                                    {selectedIds.length === recentFiles.length && <div className="w-2 h-2 bg-black rounded-sm" />}
                                </div>
                            </th>
                            <th className="py-3 px-4 font-medium w-1/2">Name</th>
                            <th className="py-3 px-4 font-medium">Size</th>
                            <th className="py-3 px-4 font-medium">Shared</th>
                            <th className="py-3 px-4 font-medium text-right">Last modified</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {recentFiles.map((file) => (
                            <tr
                                key={file.id}
                                className={`group border-b border-zinc-800/50 transition-all duration-200 cursor-pointer ${selectedIds.includes(file.id) ? 'bg-emerald-500/5' : 'hover:bg-zinc-900/50'
                                    }`}
                                onClick={() => toggleSelection(file.id)}
                            >
                                <td className="py-3 px-4">
                                    <div
                                        className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-all ${selectedIds.includes(file.id)
                                            ? 'bg-emerald-500 border-emerald-500'
                                            : 'border-zinc-700 hover:border-emerald-500'
                                            }`}
                                    >
                                        {selectedIds.includes(file.id) && <div className="w-2 h-2 bg-black rounded-sm" />}
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-1.5 rounded-lg ${getFileBgColor(file.type)}`}>
                                            {getFileIcon(file.type)}
                                        </div>
                                        <span className={`font-medium transition-colors ${selectedIds.includes(file.id) ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                                            }`}>
                                            {file.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-zinc-400">{file.size}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        {file.shared === 'Team' ? <UsersIcon /> : <span className="text-zinc-400">{file.shared}</span>}
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center justify-end gap-4">
                                        <span className="text-zinc-500 text-sm">{file.modified}</span>

                                        {/* Action Menu - Stops propagation to prevent row selection when clicking menu */}
                                        <div onClick={(e) => e.stopPropagation()}>
                                            <DropdownMenu
                                                trigger={
                                                    <button className="p-1 text-zinc-500 hover:text-white hover:bg-zinc-700 rounded transition-colors opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </button>
                                                }
                                            >
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Download
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Share2 className="w-4 h-4 mr-2" />
                                                    Share
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit2 className="w-4 h-4 mr-2" />
                                                    Rename
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-red-400 hover:!text-red-400 hover:!bg-red-500/10">
                                                    <Trash2 className="w-4 h-4 mr-2" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentFilesTable
