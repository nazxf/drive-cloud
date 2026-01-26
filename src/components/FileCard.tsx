import { motion } from 'framer-motion'
import { FileItem } from '../store/useStore'
import { formatFileSize } from '../services/mockData'
import FileIcon from './FileIcon'
import { MoreVertical } from 'lucide-react'

interface FileCardProps {
    file: FileItem
    viewMode: 'grid' | 'list'
}

const FileCard = ({ file, viewMode }: FileCardProps) => {
    const formattedDate = new Date(file.modifiedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

    if (viewMode === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 px-4 py-3 rounded-lg border border-zinc-900 hover:bg-zinc-900/50 transition-colors cursor-pointer group"
            >
                <div className="text-zinc-400">
                    <FileIcon mimeType={file.mimeType} fileName={file.name} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{file.name}</p>
                </div>
                <div className="text-zinc-500 text-xs hidden md:block">
                    {formatFileSize(file.size)}
                </div>
                <div className="text-zinc-600 text-xs hidden lg:block w-28">
                    {formattedDate}
                </div>
                <button className="text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            className="rounded-lg border border-zinc-900 bg-zinc-950/50 p-4 hover:border-zinc-800 transition-all cursor-pointer group"
        >
            <div className="flex justify-between items-start mb-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <FileIcon mimeType={file.mimeType} fileName={file.name} className="w-5 h-5 text-zinc-400" />
                </div>
                <button className="text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>

            {file.thumbnailUrl && (
                <div className="mb-3 rounded-md overflow-hidden border border-zinc-900">
                    <img
                        src={file.thumbnailUrl}
                        alt={file.name}
                        className="w-full h-24 object-cover"
                    />
                </div>
            )}

            <h3 className="text-sm text-white font-medium mb-1 truncate">
                {file.name}
            </h3>

            <div className="flex justify-between items-center text-xs text-zinc-600">
                <span>{formatFileSize(file.size)}</span>
                <span>{formattedDate}</span>
            </div>
        </motion.div>
    )
}

export default FileCard
