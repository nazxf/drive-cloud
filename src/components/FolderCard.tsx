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
                className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--accent-primary)]/30 transition-all duration-300 cursor-pointer"
            >
                <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                    <Folder className="w-5 h-5" fill="currentColor" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white truncate transition-colors">{folder.name}</p>
                </div>
                <div className="text-slate-500 text-xs hidden md:block">
                    {folder.itemCount} items
                </div>
                <div className="text-slate-600 text-xs hidden lg:block w-28">
                    {formattedDate}
                </div>
                <button className="text-slate-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-white/10 rounded">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="glass group relative rounded-2xl p-5 hover:border-[var(--accent-primary)]/30 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Gradient Glow Background */}
            {/* Gradient Glow Background - Subtle */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Folder className="w-6 h-6 text-[var(--accent-primary)]" fill="currentColor" />
                    </div>
                    <button className="text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-white/10 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>

                <h3 className="text-base font-medium text-slate-200 group-hover:text-white mb-1 truncate transition-colors">
                    {folder.name}
                </h3>

                <div className="flex justify-between items-end mt-2">
                    <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {folder.itemCount} items
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 group-hover:text-[var(--accent-primary)] transition-colors">
                        {formattedDate}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default FolderCard
