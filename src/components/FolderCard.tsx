import { motion } from 'framer-motion'
import { FolderItem } from '../store/useStore'
import { Folder, MoreVertical } from 'lucide-react'

interface FolderCardProps {
    folder: FolderItem
    viewMode: 'grid' | 'list'
}

const FolderCard = ({ folder, viewMode }: FolderCardProps) => {
    const formattedDate = new Date(folder.modifiedAt).toLocaleDateString('en-US', {
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
                    <Folder className="w-5 h-5" fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{folder.name}</p>
                </div>
                <div className="text-zinc-500 text-xs hidden md:block">
                    {folder.itemCount} items
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
                    <Folder className="w-5 h-5 text-zinc-400" fill="currentColor" />
                </div>
                <button className="text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>

            <h3 className="text-sm text-white font-medium mb-1 truncate">
                {folder.name}
            </h3>

            <div className="flex justify-between items-center text-xs text-zinc-600">
                <span>{folder.itemCount} items</span>
                <span>{formattedDate}</span>
            </div>
        </motion.div>
    )
}

export default FolderCard
