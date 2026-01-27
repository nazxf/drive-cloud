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
                className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[var(--accent-primary)]/30 transition-all duration-300 cursor-pointer"
            >
                <div className="p-2 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                    <FileIcon mimeType={file.mimeType} fileName={file.name} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white truncate transition-colors">{file.name}</p>
                </div>
                <div className="text-slate-500 text-xs hidden md:block">
                    {formatFileSize(file.size)}
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
            className="glass group relative rounded-2xl p-4 hover:border-[var(--accent-primary)]/30 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Gradient Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileIcon mimeType={file.mimeType} fileName={file.name} className="w-5 h-5 text-[var(--accent-primary)]" />
                    </div>
                    <button className="text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-white/10 rounded-lg">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>

                {file.thumbnailUrl ? (
                    <div className="mb-3 rounded-lg overflow-hidden border border-white/5 aspect-video relative group-hover:border-[var(--accent-primary)]/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        <img
                            src={file.thumbnailUrl}
                            alt={file.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ) : (
                    <div className="mb-3 rounded-lg bg-white/[0.02] border border-white/5 aspect-video flex items-center justify-center relative overlow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent" />
                        <FileIcon mimeType={file.mimeType} fileName={file.name} className="w-8 h-8 text-slate-700 group-hover:text-[var(--accent-primary)]/50 transition-colors" />
                    </div>
                )}

                <h3 className="text-sm font-medium text-slate-200 group-hover:text-white mb-1 truncate transition-colors">
                    {file.name}
                </h3>

                <div className="flex justify-between items-end mt-auto pt-2 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 group-hover:text-[var(--accent-primary)] transition-colors">
                        {formatFileSize(file.size)}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {formattedDate}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default FileCard
