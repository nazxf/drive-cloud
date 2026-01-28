import { X, Upload, FileText, Image, Video, FileArchive, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'

interface UploadModalProps {
    onClose: () => void
}

interface UploadingFile {
    file: File
    progress: number
    status: 'pending' | 'uploading' | 'complete'
}

const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-4 h-4 text-purple-400" />
    if (type.startsWith('video/')) return <Video className="w-4 h-4 text-orange-400" />
    if (type.includes('zip') || type.includes('rar') || type.includes('7z')) return <FileArchive className="w-4 h-4 text-amber-400" />
    if (type.includes('pdf')) return <FileText className="w-4 h-4 text-red-400" />
    if (type.includes('doc') || type.includes('word')) return <FileText className="w-4 h-4 text-blue-400" />
    if (type.includes('sheet') || type.includes('excel') || type.includes('xls')) return <FileText className="w-4 h-4 text-emerald-400" />
    return <FileText className="w-4 h-4 text-zinc-400" />
}

const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

const UploadModal = ({ onClose }: UploadModalProps) => {
    const [isDragging, setIsDragging] = useState(false)
    const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([])
    const [isUploading, setIsUploading] = useState(false)

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        const droppedFiles = Array.from(e.dataTransfer.files)
        const newFiles: UploadingFile[] = droppedFiles.map(file => ({
            file,
            progress: 0,
            status: 'pending'
        }))
        setUploadingFiles(prev => [...prev, ...newFiles])
    }, [])

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files)
            const newFiles: UploadingFile[] = selectedFiles.map(file => ({
                file,
                progress: 0,
                status: 'pending'
            }))
            setUploadingFiles(prev => [...prev, ...newFiles])
        }
    }

    const removeFile = (index: number) => {
        setUploadingFiles(prev => prev.filter((_, i) => i !== index))
    }

    // Simulated Upload Progress
    useEffect(() => {
        if (!isUploading) return

        const interval = setInterval(() => {
            setUploadingFiles(prev => {
                const allComplete = prev.every(f => f.status === 'complete')
                if (allComplete) {
                    clearInterval(interval)
                    return prev
                }

                return prev.map(f => {
                    if (f.status === 'complete') return f
                    if (f.status === 'pending') return { ...f, status: 'uploading' as const, progress: 10 }

                    const newProgress = Math.min(f.progress + Math.random() * 30, 100)
                    return {
                        ...f,
                        progress: newProgress,
                        status: newProgress >= 100 ? 'complete' as const : 'uploading' as const
                    }
                })
            })
        }, 300)

        return () => clearInterval(interval)
    }, [isUploading])

    const handleUpload = () => {
        if (uploadingFiles.length === 0) return
        setIsUploading(true)
    }

    const allComplete = uploadingFiles.length > 0 && uploadingFiles.every(f => f.status === 'complete')

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="bg-zinc-950 border border-zinc-800/50 rounded-2xl w-full max-w-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-zinc-800/50">
                        <h2 className="text-lg font-medium text-white">Upload Files</h2>
                        <button
                            onClick={onClose}
                            className="p-1 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Drop Zone */}
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`
                                border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200
                                ${isDragging
                                    ? 'border-emerald-500 bg-emerald-500/5 scale-[1.02]'
                                    : 'border-zinc-800 hover:border-zinc-700'
                                }
                            `}
                        >
                            <motion.div
                                animate={{ y: isDragging ? -5 : 0 }}
                                className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4"
                            >
                                <Upload className={`w-7 h-7 transition-colors ${isDragging ? 'text-emerald-400' : 'text-zinc-500'}`} />
                            </motion.div>
                            <p className="text-sm text-zinc-400 mb-3">
                                {isDragging ? 'Release to upload' : 'Drag and drop files here, or'}
                            </p>
                            {!isDragging && (
                                <label className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm font-medium text-white hover:bg-zinc-800 transition-colors cursor-pointer">
                                    <input
                                        type="file"
                                        multiple
                                        className="hidden"
                                        onChange={handleFileSelect}
                                    />
                                    Browse Files
                                </label>
                            )}
                        </div>

                        {/* File List with Progress */}
                        {uploadingFiles.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4 space-y-2 max-h-52 overflow-y-auto custom-scrollbar"
                            >
                                {uploadingFiles.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="relative p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden"
                                    >
                                        {/* Progress Background */}
                                        <motion.div
                                            className="absolute inset-0 bg-emerald-500/10"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.progress}%` }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <div className="relative flex items-center gap-3">
                                            <div className="p-1.5 rounded-lg bg-zinc-800/50">
                                                {getFileIcon(item.file.type)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-white truncate">{item.file.name}</p>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-xs text-zinc-500">
                                                        {formatFileSize(item.file.size)}
                                                    </p>
                                                    {item.status === 'uploading' && (
                                                        <span className="text-xs text-emerald-400">{Math.round(item.progress)}%</span>
                                                    )}
                                                </div>
                                            </div>

                                            {item.status === 'complete' ? (
                                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                            ) : (
                                                <button
                                                    onClick={() => removeFile(index)}
                                                    className="p-1 text-zinc-500 hover:text-white hover:bg-zinc-700 rounded transition-colors"
                                                    disabled={isUploading}
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 p-5 border-t border-zinc-800/50">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {allComplete ? 'Done' : 'Cancel'}
                        </button>
                        {!allComplete && (
                            <button
                                onClick={handleUpload}
                                disabled={uploadingFiles.length === 0 || isUploading}
                                className="px-5 py-2 bg-emerald-500 text-black rounded-lg text-sm font-semibold hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isUploading ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                                        />
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="w-4 h-4" />
                                        Upload {uploadingFiles.length > 0 && `(${uploadingFiles.length})`}
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default UploadModal
