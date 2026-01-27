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
        case 'image': return <Image className="w-6 h-6 text-purple-400" />
        case 'video': return <Video className="w-6 h-6 text-orange-400" />
        case 'pdf': return <FileText className="w-6 h-6 text-red-400" />
        case 'doc': return <FileText className="w-6 h-6 text-blue-400" />
        case 'xls': return <FileText className="w-6 h-6 text-green-400" />
        case 'zip': return <FileArchive className="w-6 h-6 text-yellow-400" />
        default: return <FileText className="w-6 h-6 text-slate-400" />
    }
}

const getFileColor = (type: string) => {
    switch (type) {
        case 'image': return 'from-purple-500/20 to-purple-500/5'
        case 'video': return 'from-orange-500/20 to-orange-500/5'
        case 'pdf': return 'from-red-500/20 to-red-500/5'
        case 'doc': return 'from-blue-500/20 to-blue-500/5'
        case 'xls': return 'from-green-500/20 to-green-500/5'
        case 'zip': return 'from-yellow-500/20 to-yellow-500/5'
        default: return 'from-slate-500/20 to-slate-500/5'
    }
}

const FileCard = ({ file, viewMode, isSelected, onSelect }: FileCardProps) => {
    const ActionMenu = () => (
        <DropdownMenu
            trigger={
                <button className="p-1.5 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
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
                className={`group flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected
                        ? 'bg-[var(--accent-primary)]/5 border-[var(--accent-primary)]/30'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                    }`}
            >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${getFileColor(file.type)}`}>
                    {getFileIcon(file.type)}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white truncate transition-colors">
                        {file.name}
                    </p>
                    <p className="text-xs text-slate-500">{file.size}</p>
                </div>
                <div className="text-slate-500 text-xs hidden md:block w-32">
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
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onClick={onSelect}
            className={`glass group relative rounded-2xl p-5 transition-all duration-300 cursor-pointer overflow-hidden ${isSelected
                    ? 'border-[var(--accent-primary)]/50 shadow-[0_0_20px_var(--accent-glow)]'
                    : 'hover:border-[var(--accent-primary)]/30 hover:shadow-[0_0_30px_var(--accent-glow)]'
                }`}
        >
            {/* Gradient Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getFileColor(file.type)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getFileColor(file.type)} border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {getFileIcon(file.type)}
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <ActionMenu />
                    </div>
                </div>

                <h3 className="text-sm font-medium text-slate-200 group-hover:text-white mb-1 truncate transition-colors">
                    {file.name}
                </h3>

                <div className="flex justify-between items-end mt-3">
                    <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {file.size}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 group-hover:text-[var(--accent-primary)] transition-colors">
                        {file.type.toUpperCase()}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default FileCard
export type { FileItem }
