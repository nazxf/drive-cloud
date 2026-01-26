import { X, Upload, File } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'

interface UploadModalProps {
    onClose: () => void
}

const UploadModal = ({ onClose }: UploadModalProps) => {
    const [isDragging, setIsDragging] = useState(false)
    const [files, setFiles] = useState<File[]>([])

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
        setFiles(prev => [...prev, ...droppedFiles])
    }, [])

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files)
            setFiles(prev => [...prev, ...selectedFiles])
        }
    }

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index))
    }

    const handleUpload = () => {
        // Mock upload
        console.log('Uploading files:', files)
        onClose()
    }

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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl w-full max-w-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                        <h2 className="text-lg font-semibold text-white">Upload Files</h2>
                        <button
                            onClick={onClose}
                            className="text-zinc-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Drop Zone */}
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`
                                border-2 border-dashed rounded-lg p-8 text-center transition-all
                                ${isDragging
                                    ? 'border-white bg-zinc-900'
                                    : 'border-zinc-800 hover:border-zinc-700'
                                }
                            `}
                        >
                            <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
                                <Upload className="w-6 h-6 text-zinc-500" />
                            </div>
                            <p className="text-sm text-zinc-400 mb-2">
                                Drag and drop files here, or
                            </p>
                            <label className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm font-medium text-white hover:bg-zinc-800 transition-colors cursor-pointer">
                                <input
                                    type="file"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileSelect}
                                />
                                Browse Files
                            </label>
                        </div>

                        {/* File List */}
                        {files.length > 0 && (
                            <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg"
                                    >
                                        <File className="w-4 h-4 text-zinc-500" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white truncate">{file.name}</p>
                                            <p className="text-xs text-zinc-500">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeFile(index)}
                                            className="text-zinc-500 hover:text-white transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 p-4 border-t border-zinc-800">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleUpload}
                            disabled={files.length === 0}
                            className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Upload {files.length > 0 && `(${files.length})`}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default UploadModal
