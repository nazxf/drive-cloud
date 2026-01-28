import { motion } from 'framer-motion'
import { FileText, Image, Video, FileArchive, MoreVertical, Download, Edit2, Share2, Trash2 } from 'lucide-react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu'

interface FileItem {
    id: number
    name: string
    size: string
    type: string
    modified: string
}

interface FileCardProps {
    file: FileItem
    viewMode: 'grid' | 'list'
    isSelected?: boolean
    onSelect?: () => void
}

const getFileIcon = (type: string) => {
    switch (type) {
        case 'image': return <Image className="w-5 h-5 text-purple-400" />
        case 'video': return <Video className="w-5 h-5 text-orange-400" />
        case 'pdf': return <FileText className="w-5 h-5 text-red-400" />
        case 'doc': return <FileText className="w-5 h-5 text-blue-400" />
        case 'xls': return <FileText className="w-5 h-5 text-emerald-400" />
        case 'zip': return <FileArchive className="w-5 h-5 text-amber-400" />
        default: return <FileText className="w-5 h-5 text-zinc-400" />
    }
}

const getFileBgColor = (type: string) => {
    switch (type) {
        case 'image': return 'bg-purple-500/10'
        case 'video': return 'bg-orange-500/10'
        case 'pdf': return 'bg-red-500/10'
        case 'doc': return 'bg-blue-500/10'
        case 'xls': return 'bg-emerald-500/10'
        case 'zip': return 'bg-amber-500/10'
        default: return 'bg-zinc-500/10'
    }
}

const FileCard = ({ file, viewMode, isSelected, onSelect }: FileCardProps) => {
    const ActionMenu = () => (
        <DropdownMenu
            trigger={
                <button className="p-1.5 text-zinc-500 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <MoreVertical className="w-4 h-4" />
                </button>
            }
        >
            <DropdownMenuLabel>File Actions</DropdownMenuLabel>
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
    )

    if (viewMode === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onSelect}
                className={`group flex items-center gap-4 px-4 py-3 rounded-lg border transition-all duration-200 cursor-pointer ${isSelected
                    ? 'bg-emerald-500/5 border-emerald-500/30'
                    : 'border-zinc-800/50 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700'
                    }`}
            >
                <div className={`p-2 rounded-lg ${getFileBgColor(file.type)}`}>
                    {getFileIcon(file.type)}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white truncate transition-colors">
                        {file.name}
                    </p>
                    <p className="text-xs text-zinc-500">{file.size}</p>
                </div>
                <div className="text-zinc-500 text-xs hidden md:block w-32">
                    {file.modified}
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                    <ActionMenu />
                </div>
            </motion.div>
        )
    }

    // Grid View
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={onSelect}
            className={`group relative rounded-xl p-5 bg-zinc-950 transition-all duration-200 cursor-pointer ${isSelected
                ? 'border-emerald-500/50 border'
                : 'border border-zinc-800/50 hover:border-zinc-700'
                }`}
        >
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl ${getFileBgColor(file.type)} border border-zinc-800/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                        {getFileIcon(file.type)}
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <ActionMenu />
                    </div>
                </div>

                <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white mb-1 truncate transition-colors">
                    {file.name}
                </h3>

                <div className="flex justify-between items-end mt-3">
                    <div className="text-xs text-zinc-500">
                        {file.size}
                    </div>
                    <span className="text-[10px] uppercase font-medium text-zinc-600">
                        {file.type.toUpperCase()}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default FileCard
export type { FileItem }
