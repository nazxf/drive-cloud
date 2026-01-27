import { X, Download, Share2, Trash2, FileText, Image as ImageIcon, Video, FileArchive, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FilePreviewModalProps {
    file: {
        id: number
        name: string
        size: string
        type: string
        modified: string
        url?: string
    } | null
    onClose: () => void
}

const getFileIcon = (type: string, size: 'sm' | 'lg' = 'lg') => {
    const classes = size === 'lg' ? 'w-16 h-16' : 'w-6 h-6'
    switch (type) {
        case 'image': return <ImageIcon className={`${classes} text-purple-400`} />
        case 'video': return <Video className={`${classes} text-orange-400`} />
        case 'pdf': return <FileText className={`${classes} text-red-400`} />
        case 'doc': return <FileText className={`${classes} text-blue-400`} />
        case 'xls': return <FileText className={`${classes} text-green-400`} />
        case 'zip': return <FileArchive className={`${classes} text-yellow-400`} />
        default: return <FileText className={`${classes} text-slate-400`} />
    }
}

// Sample preview URLs for demo
const getSamplePreviewUrl = (type: string, name: string) => {
    switch (type) {
        case 'image':
            return `https://picsum.photos/seed/${name}/800/600`
        case 'video':
            return 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        case 'pdf':
            return 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.jpg'
        default:
            return null
    }
}

const FilePreviewModal = ({ file, onClose }: FilePreviewModalProps) => {
    const [zoom, setZoom] = useState(1)

    if (!file) return null

    const previewUrl = file.url || getSamplePreviewUrl(file.type, file.name)
    const canPreview = ['image', 'video', 'pdf'].includes(file.type)

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3))
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5))

    const renderPreview = () => {
        if (!canPreview || !previewUrl) {
            return (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                    {getFileIcon(file.type)}
                    <div>
                        <p className="text-lg font-medium text-white mb-1">No preview available</p>
                        <p className="text-sm text-slate-500">This file type cannot be previewed</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-secondary)] text-black rounded-lg text-sm font-semibold hover:bg-[var(--accent-secondary)]/90 transition-colors">
                        <Download className="w-4 h-4" />
                        Download to view
                    </button>
                </div>
            )
        }

        switch (file.type) {
            case 'image':
                return (
                    <motion.img
                        src={previewUrl}
                        alt={file.name}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        style={{ transform: `scale(${zoom})` }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: zoom }}
                        transition={{ duration: 0.3 }}
                        draggable={false}
                    />
                )
            case 'video':
                return (
                    <video
                        src={previewUrl}
                        controls
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                        style={{ transform: `scale(${zoom})` }}
                    >
                        Your browser does not support the video tag.
                    </video>
                )
            case 'pdf':
                return (
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <img
                            src={previewUrl}
                            alt="PDF Preview"
                            className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
                        />
                        <p className="text-sm text-slate-500">PDF preview - Download for full document</p>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col"
                onClick={onClose}
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between px-6 py-4 border-b border-white/5"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-white/5">
                            {getFileIcon(file.type, 'sm')}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-white truncate max-w-md">{file.name}</h2>
                            <p className="text-sm text-slate-500">{file.size} • Modified {file.modified}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Zoom Controls (for images) */}
                        {file.type === 'image' && (
                            <div className="flex items-center gap-1 mr-2 px-2 py-1 bg-white/5 rounded-lg">
                                <button
                                    onClick={handleZoomOut}
                                    className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                                >
                                    <ZoomOut className="w-4 h-4" />
                                </button>
                                <span className="text-xs text-slate-400 w-12 text-center">{Math.round(zoom * 100)}%</span>
                                <button
                                    onClick={handleZoomIn}
                                    className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        {/* Actions */}
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Open in new tab">
                            <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Share">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Download">
                            <Download className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" title="Delete">
                            <Trash2 className="w-5 h-5" />
                        </button>
                        <div className="w-px h-6 bg-white/10 mx-1" />
                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Preview Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex items-center justify-center p-8 overflow-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {renderPreview()}
                </motion.div>

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 py-3 border-t border-white/5 flex items-center justify-center gap-6 text-xs text-slate-500"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span>Type: {file.type.toUpperCase()}</span>
                    <span>Size: {file.size}</span>
                    <span>Last modified: {file.modified}</span>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default FilePreviewModal
