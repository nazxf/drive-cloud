import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderItem } from '../store/useStore'
import { Folder, MoreVertical, Edit2, Share2, Trash2 } from 'lucide-react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu'

interface FolderCardProps {
    folder: FolderItem
    viewMode: 'grid' | 'list'
}

const FolderCard = ({ folder, viewMode }: FolderCardProps) => {
    const navigate = useNavigate()

    const formattedDate = new Date(folder.modifiedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

    const handleFolderClick = () => {
        navigate(`/storage/${folder.id}`)
    }

    if (viewMode === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleFolderClick}
                className="group flex items-center gap-4 px-4 py-3 rounded-lg border border-zinc-800/50 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer"
            >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Folder className="w-5 h-5" fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white truncate transition-colors">{folder.name}</p>
                </div>
                <div className="text-zinc-500 text-xs hidden md:block">
                    {folder.itemCount} items
                </div>
                <div className="text-zinc-600 text-xs hidden lg:block w-28">
                    {formattedDate}
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu
                        trigger={
                            <button className="text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-zinc-700 rounded">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        }
                    >
                        <DropdownMenuLabel>Folder Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Edit2 className="w-4 h-4 mr-2" />
                            Rename
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-400 hover:!text-red-400 hover:!bg-red-500/10">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenu>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={handleFolderClick}
            className="group relative rounded-xl p-5 bg-zinc-950 border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer"
        >
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-zinc-800/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        <Folder className="w-6 h-6 text-emerald-400" fill="currentColor" />
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu
                            trigger={
                                <button className="text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-zinc-800 rounded-lg data-[state=open]:opacity-100">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            }
                        >
                            <DropdownMenuLabel>Folder Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Edit2 className="w-4 h-4 mr-2" />
                                Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-400 hover:!text-red-400 hover:!bg-red-500/10">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenu>
                    </div>
                </div>

                <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white mb-1 truncate transition-colors">
                    {folder.name}
                </h3>

                <div className="flex justify-between items-end mt-2">
                    <div className="text-xs text-zinc-500">
                        {folder.itemCount} items
                    </div>
                    <span className="text-[10px] text-zinc-600">
                        {formattedDate}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default FolderCard
